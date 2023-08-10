---
description: DOM 文档对象模型。jaascript 课程课件，学习笔记。  
author: silenthunter0814, Silent Hunter
---

# web03 DOM 启示录

参考书: [DOM Enlightenment](http://domenlightenment.com/)
作者：Cody Lindley


## 1 节点概述

### 1.1 DOM 文档对象模型

Document Object Model, 浏览器加载 HTML 文件并解析创建一个树形内存数据结构，这被称作文档对象模型。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>  
    <title>DOM Enlightenment</title>
  </head>
  <body>

    <script>

    </script>
  </body>
</html>
```
DOM:

- document
  - html
    - head
      - title
    - body
      - script

DOM 的目的是提供一个编程接口，用于使用 JavaScript 编写此实时文档的脚本（删除、添加、替换、事件处理、修改）。

### 1.2 节点对象类型

最常见节点类型:

- DOCUMENT_NODE (`window.document`)
- ELEMENT_NODE  (`<body>, <a>, <p>, <script>, <style>, <html>, <h1>...`)
- ATTRIBUTE_NODE  (`class="funEgges"`)
- TEXT_NODE (html 文档中的文本字符，包括回车符和空格)
- DOCUMENT_FRAGMENT_NODE  (`document.createDocumentFragment()`)
- DOCUMENT_TYPE_NODE  (`<!DOCTYPE html>`)

这些节点属性是常量值，用于存储映射到特定类型的节点对象的数字代码值。

```javascript
for (let key in Node) {
    console.log(key + ' = ' + Node[key]);
}
```

### 1.3 子节点对象继承自Node对象

典型 DOM 树中的每个节点对象都继承 Node 的属性和方法。

- HTML*Element > HTMLElement > Element > Node > EventTarget > Object
- Text > CharacterData > Node > EventTarget > Object
- HTMLDocument > Document > Node > EventTarget > Object
- DocumentFragment > Node > EventTarget > Object

例如，所有 HTMLAnchorElement 节点都从 HTMLElement、Element、Node、EventTarget 和 Object 对象继承属性和方法。

NOTE: Node只是一个 JavaScript 构造函数。因此逻辑上Node继承自Object.prototype就像 JavaScript 中的所有对象一样。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<a href="#">Hi</a> <!-- this is a HTMLAnchorElement which inherits from... -->

<script>

var anchor = document.querySelector('a');
var props = [];

for (var key in anchor){
    props.push(key);   
}
console.log(props.sort());

</script>
</body>
</html>
```

Document 方法 querySelector() 返回文档中与指定选择器或选择器组匹配的第一个元素。 如果未找到匹配项，则返回 null。  
NOTE: 匹配是使用文档节点的深度优先前序遍历来完成的。  

锚节点(a)继承自 HTMLAnchorElement、HTMLElement、Element、Node、EventTarget 和 Object。  
该继承链为所有节点类型提供了大量共享方法和属性。

### 1.4 工作节点的属性和方法

常见的节点属性和方法  

Node 属性：
- childNodes
- firstChild
- lastChild
- nextSibling 当前节点的下一个同级节点，如果没有则为 null。
- nodeName
- nodeType
- nodeValue 包含当前节点值（如果有）的字符串。 对于 document 本身，nodeValue 返回 null。
- parentNode
- previousSibling 当前节点的前一个兄弟节点，如果没有则为 null。

Node 方法：
- appendchild(aChild) 返回新追加的节点。
- cloneNode(bool) 返回调用该方法的节点的副本。true: 克隆子节点树。
- contains(otherNode) 如果节点中包含 otherNode，则为 true；如果不包含，则为 false。
- hasChildNodes() 如果节点有子节点，则为 true，否则为 false。
- insertBefore(new, ref)
- isEqualNode(other)
- removeChild(child)
- replaceChild(new, old) 如果 new 在 DOM 中已经存在，则首先将其从原位置删除。

Document 方法：
- document.createElement(tagname) 返回一个新的 HTMLElement
- document.createTextNode(string) 返回一个Text节点。

HTML*Element 属性：
- innerHTML 获取或设置元素中包含的 HTML 或 XML 标记。
- outerHTML 获取描述元素（包括其后代）的序列化HTML 片段。或设置为用从给定字符串解析的节点替换元素。
- textContent 节点及其后代的文本内容。返回字符串或 null。
- innerText 表示元素的呈现文本内容的字符串。
- outerText 表示元素及其后代的呈现文本内容的字符串。
- firstElementChild 获取第一个子元素 Element 对象，或者 null。
- lastElementChild 
- nextElementSibling
- previiousElementSibling
- children 返回一个实时 HTMLCollection，其中包含调用它的元素的所有子元素。for...of 遍历。

HTML element 方法：
- insertAdjacentHTML(pos, text) 将指定的文本解析为 HTML 或 XML，并将结果节点插入到 DOM 树中的指定位置。

### 1.5 识别节点的类型和名称
每个节点都有一个继承自 Node 的 nodeType 和 nodeName 属性。 例如，文本节点的 nodeType 代码为 3 (Node.TEXT_NODE === 3)，nodeName 值为“#text”。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<a href="#">Hi</a> 

<script>
  
console.log(
    document.doctype.nodeName,
    document.doctype.nodeType
);

console.log(
    document.nodeName,
    document.nodeType
);

console.log(
    document.createDocumentFragment().nodeName,
    document.createDocumentFragment().nodeType
);

console.log(
    document.querySelector('a').nodeName,
    document.querySelector('a').nodeType
);
    
console.log(
    document.querySelector('a').firstChild.nodeName,
    document.querySelector('a').firstChild.nodeType
);

</script>
</body>
</html>
```
确定节点是否属于某种类型的最快方法就是简单地检查其 nodeType 属性。

检查一个节点类型是否为元素节点：

```javascript
console.log(
    document.querySelector('a').nodeType === 1,
    document.querySelector('a').nodeType === Node.ELEMENT_NODE
);
```

### 1.6 获取节点值
对于大多数节点类型（Text和Comment除外）， nodeValue属性都会返回null。它的用途主要是从文本和注释节点中提取实际的文本字符串。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<a href="#">Hi</a> 

<script>

console.log(document.doctype.nodeValue);
console.log(document.nodeValue);
console.log(document.createDocumentFragment().nodeValue);
console.log(document.querySelector('a').nodeValue);

var child = document.querySelector('a').firstChild;
console.log(child.nodeValue);
child.nodeValue = "hello";
console.log(child.nodeValue);

</script>
</body>
</html>
```

### 1.7 使用 JavaScript 方法创建元素和文本节点

当浏览器解析 HTML 文档时，它会根据 HTML 文件的内容构造节点并形成 DOM 树。  
然后，可以使用 JavaScript 在 DOM 树中动态创建新的节点。

- createElement(tagName) 创建一个由标签名称 tagName 指定的 HTML 元素。
- createTextNode(string) 创建一个新的文本节点。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>    
<script>

var elem = document.createElement('div');
console.log(elem, elem.nodeType);

var textNode = document.createTextNode('Hi');
console.log(textNode, textNode.nodeType);

</script>
</body>
</html>
```

### 1.8 使用 JavaScript 字符串创建元素和文本节点并将其添加到 DOM
innerHTML，outerHTML，textContent 属性和 insertAdjacentHTML() 方法提供了使用 JavaScript 字符串创建节点并将其添加到 DOM 的功能。  
- document.getElementById(id) 返回一个匹配特定 ID 的元素。

```html
<!DOCTYPE html>
<html lang="en-US">
<body> 

<div id="A"></div> 
<span id="B"></span> 
<div id="C"></div> 
<div id="D"></div> 
<div id="E"></div> 

<script>

document.getElementById('A').innerHTML = '<strong>Hi</strong>';

document.getElementById('B').outerHTML = '<div id="B" class="new">Whats shaking</div>';

document.getElementById('C').textContent = 'dude';

document.getElementById('D').innerText = 'Keep it';

document.getElementById('E').outerText = 'real!';

console.log(document.body.innerHTML);
      
</script>
</body>
</html>

```

element.insertAdjacentHTML(position, text) 方法仅适用于Element节点，比前面提到的方法更精确。  
将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。

- position 插入内容相对于元素的位置:
  - 'beforebegin' 元素自身的前面
  - 'afterbegin' 插入元素内部的第一个子节点之前
  - 'beforeend' 插入元素内部的最后一个子节点之后
  - 'afterend' 元素自身的后面
- text 要被解析为 HTML 或 XML 元素，并插入到 DOM 树中的 DOMString。


```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<i id="elm">how</i>

<script>

var elm = document.getElementById('elm');

elm.insertAdjacentHTML('beforebegin', '<span>Hey-</span>');
elm.insertAdjacentHTML('afterbegin', '<span>dude-</span>');
elm.insertAdjacentHTML('beforeend', '<span>-are</span>');
elm.insertAdjacentHTML('afterend', '<span>-you?</span>');

console.log(document.body.innerHTML);

</script>
</body>
</html>
```

- NOTE
  - innerHTML 属性会将字符串中找到的 html 元素转换为实际的 DOM 节点，而 textContent 只能用于构造文本节点。
  - insertAdjacentHTML 选项“beforebegin”和“afterend”仅在节点位于 DOM 树中并且具有父元素时才起作用。
  - innerHTML 调用一个笨重且昂贵的 HTML 解析器。
  - textContent 获取所有元素的内容，包括 `<script>` 和 `<style>` 元素，innerText 不获取
  - innerText 能够识别样式，并且不会返回隐藏元素的文本，而 textContent 会

### 1.9 将 DOM 树的一部分提取为 JavaScript 字符串
innerHTML、outerHTML、textContent 也可用于将 DOM 的一部分（或者实际上是整个 DOM）提取为 JavaScript 字符串。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<div id="A"><i>Hi</i></div>
<div id="B">Dude<strong> !</strong></div>

<script>

console.log(document.getElementById('A').innerHTML);
console.log(document.getElementById('A').outerHTML);

console.log(document.getElementById('B').textContent);
console.log(document.getElementById('B').innerText);
console.log(document.getElementById('B').outerText);

</script>
</body>
</html>
```
- NOTE  
  - 读取 textContent、innerText、outerText 属性时，将返回所选节点中包含的所有文本节点。

### 1.10 使用 appendChild() & insertBefore()将 节点对象添加到DOM

appendChild() 方法会将一个节点附加到调用该方法的节点的子节点的末尾。 如果没有子节点，则附加的节点将作为第一个子节点附加。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<p>Hi</p>

<script>

var eNode = document.createElement('strong');
var tNode = document.createTextNode(' Dude');

document.querySelector('p').appendChild(eNode);
document.querySelector('strong').appendChild(tNode);

console.log(document.body.innerHTML);

</script>
</body>
</html>
```

当需要控制插入位置而不是将节点附加到子节点列表的末尾时，我们可以使用 insertBefore()。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
    <li>2</li>
    <li>3</li>
</ul>

<script>

var text1 = document.createTextNode('1');
var li = document.createElement('li');
li.appendChild(text1);

var ul = document.querySelector('ul');
ul.insertBefore(li, ul.firstChild);

console.log(document.body.innerHTML);

</script>
</body>
</html>
```

insertBefore() 需要两个参数，即要插入的节点和文档中您希望之前插入的节点的引用节点。  
如果您没有向 insertBefore() 方法传递第二个参数，那么它的功能就像 appendChild() 一样。


### 1.11 使用 removeChild() 和 replaceChild()删除和替换节点
从 DOM 中删除节点是一个多步骤的过程:
- 选择要删除的节点。
- 使用 parentNode 属性来访问其父元素。
- 在父节点上调用 removeChild() 方法，并向其传递对要删除的节点的引用。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<div id="A">Hi</div>
<div id="B">Dude</div>

<script>

var divA = document.getElementById('A');
divA.parentNode.removeChild(divA);

var text = document.getElementById('B').firstChild;
text.parentNode.removeChild(text);

console.log(document.body.innerHTML);

</script>
</body>
</html>
```

replaceChild(new, old) 替换节点，如果 new 在 DOM 中已经存在，则首先将其从原位置删除。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<div id="A">Hi</div>
<div id="B">Dude</div>

<script>

var divA = document.getElementById('A');
var span = document.createElement('span');
span.textContent = 'Howdy';
divA.parentNode.replaceChild(span, divA);

var text = document.getElementById('B').firstChild;
var newText = document.createTextNode('buddy');
text.parentNode.replaceChild(newText, text);

console.log(document.body.innerHTML);nerHTML);

</script>
</body>
</html>
```

ReplaceChild() 和removeChild() 都返回被替换或删除的节点。

### 1.12 使用 cloneNode() 克隆节点
使用cloneNode()方法可以复制单个节点或节点及其所有子节点。

在下面的代码中，仅克隆 `<ul>` （即 HTMLUListElement），一旦克隆，就可以像任何节点引用一样对待。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
  <li>Hi</li>
  <li>there</li>
</ul>

<script>

var cloneUL = document.querySelector('ul').cloneNode();

console.log(cloneUL.constructor);
console.log(cloneUL.innerHTML);

</script>
</body>
</html>
```

要克隆一个节点及其所有子节点，需要向 cloneNode(bool) 方法传递 true 参数。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
  <li>Hi</li>
  <li>there</li>
</ul>

<script>

var cloneUL = document.querySelector('ul').cloneNode(true);

console.log(cloneUL.constructor);
console.log(cloneUL.innerHTML);

</script>
</body>
</html>
```

克隆 Element 节点时，所有属性和值也会被克隆。 节点的所有其他内容（例如事件处理程序）都会丢失。

cloneNode() 可能会导致文档中出现重复的元素 ID。

### 1.13 Nodelist & HTMLcollection 节点集合
当从树中选择节点组（第 3 章中介绍）或访问预定义的节点集时，节点要么放置在 NodeList（例如 document.querySelectorAll('*')）中，要么放置在 HTMLCollection（例如 document.scripts）中 。 这些类似数组（即不是真正的数组）的对象集合具有以下特征。

- 集合可以是实时的也可以是静态的。 这意味着集合中包含的节点要么是实时文档的字面意思，要么是实时文档的快照。
- 默认情况下，节点在集合内部按树顺序排序。 这意味着该顺序与从树干到树枝的线性路径相匹配。
- 集合有一个 length 属性，反映列表中元素的数量

### 1.14 获取所有直接子节点的列表/集合

使用 childNodes 属性会生成一个类似数组的直接子节点列表（即 NodeList）。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
  <li>Hi</li>
  <li>there</li>
</ul>

<script>

var children = document.querySelector('ul').childNodes;

console.log(children);

Array.prototype.forEach.call(children, function(item) {
    console.log(item);
});

</script>
</body>
</html>
```

NOTES:
- childNodes 返回的 NodeList 仅包含直接子节点
- childNodes 不仅包含 Element 节点，还包含所有其他节点类型（例如 Text 和 Comment 节点）

### 1.15 将 NodeList 或 HTMLCollection 转换为 JavaScript 数组
节点列表和 html 集合类似于数组，但不是继承数组方法的真正的 JavaScript 数组。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<a href="#"></a>

<script>

console.log(Array.isArray(document.liinks));  // HTMLCollection
console.log(Array.isArray(document.querySelectorAll('a'))); // NodeList

</script>
</body>
</html>
```

将节点列表和 html 集合列表转换为真正的 JavaScript 数组可以提供很多优势:
- 创建不与实时 DOM 绑定的列表快照。 
- 可以访问 Array 对象提供的方法（例如 forEach、pop、map、reduce 等）。

构造节点数组：
- 使用数组方法 Array.from(nodeList) 构造一个节点数组
- 调用数组原型方法 Array.prototype.slice.call(nodeList) 提取一个未切片的数组

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<a href="#"></a>

<script>

var nodeArray;

nodeArray = Array.from(document.links);
console.log(Array.isArray(nodeArray));
console.log(nodeArray);

nodeArray = Array.prototype.slice.call(document.links);
console.log(Array.isArray(nodeArray));
console.log(nodeArray);

nodeArray = Array.prototype.slice.call(document.querySelectorAll('a'));
console.log(Array.isArray(nodeArray));
console.log(nodeArray);

</script>
</body>
</html>
```

### 1.16 遍历 DOM 中的节点
通过使用以下属性遍历 DOM 来获取不同的节点引用：
- parentNode
- firstChild
- lastChild
- nextSibling
- previousSibling

遍历 DOM 不仅包括遍历元素节点，还包括遍历文本和注释节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
    <!-- comment -->
    <li id="A"></li>
    <li id="B"></li>
    <!-- comment -->
</ul>

<script>

var ul = document.querySelector('ul');
console.log(ul.parentNode.nodeName);

console.log(ul.firstChild.nodeName);
console.log(ul.firstChild.nextSibling.nodeName);

console.log(ul.lastChild.nodeName);
console.log(ul.lastChild.previousSibling.nodeName);

console.log(ul.querySelector('#A').nextSibling.nodeName);
console.log(ul.querySelector('#B').previousSibling.nodeName);

</script>
</body>
</html>
```
使用以下属性，我们可以遍历 DOM，忽略文本和注释节点。
- firstElementChild
- lastElementChild
- nextElementChild
- previousElementChild
- children
- childElementCount

仅使用元素遍历方法再次检查我们的代码示例。

```html
<!DOCTYPE html>
<html lang="en">
<body>
  
<ul>
    <!-- comment -->
    <li id="A"></li>
    <li id="B"></li>
    <!-- comment -->
</ul>

<script>

var ul = document.querySelector('ul');

console.log(ul.firstElementChild.nodeName);
console.log(ul.lastElementChild.nodeName);


console.log(ul.querySelector('#A').nextElementSibling.nodeName);
console.log(ul.querySelector('#B').previousElementSibling.nodeName);

console.log(ul.children);

</script>
</body>
</html>
```

### 1.17 使用 contains() 和compareDocumentPosition() 验证 DOM 树中的节点位置

使用 Node contains() 方法可以知道一个节点是否包含在另一个节点内。  
如果选择的节点和传入的节点相同，则 contains() 将返回 true。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>

var html = document.querySelector('html');
var body = document.querySelector('body');

console.log(html.contains(body));

</script>
</body>
</html>
```

compareDocumentPosition(otherNode) 报告其参数节点相对于调用它的节点的位置。

返回值
一个整数值，表示 otherNode 相对于 Node 的位置，作为位掩码，结合了 Node 的以下常量属性：

- Node.DOCUMENT_POSITION_DISCONNECTED (1)  
  两个节点位于不同的文档中或同一文档中的不同树中。

- Node.DOCUMENT_POSITION_PRECEDING (2)  
  otherNode 在包含两者的树的前序深度优先遍历中位于该节点之前任意但一致的排序。

- Node.DOCUMENT_POSITION_FOLLOWING (4)
  otherNode 在包含两者的树的前序深度优先遍历中跟随该节点任意但一致的排序。

- Node.DOCUMENT_POSITION_CONTAINS (8)
  otherNode 是该节点的祖先。

- Node.DOCUMENT_POSITION_CONTAINED_BY (16)
  otherNode 是该节点的后代。

- Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC (32)
  结果依赖于任意和/或特定于实现的行为，并且不保证可移植。


NOTE:
- 由于返回的结果是位掩码，因此必须使用按位 AND 运算符才能获得有意义的结果。
- 当节点既 contains (8) 又 preceding (2) 时，返回的值将为 10 (0x0A)。

## 2 文档节点






## 3 元素节点



## 4 元素节点选择


## 5 元素节点几何和滚动几何


## 6 元素节点内联样式


## 7 文本节点


## 8 DocumentFragment 节点


## 9 CSS 样式表和 CSS 规则


## 10  DOM 中的 JavaScript



## 11 DOM 事件


## 12 创建 dom.js - 一个受 jQuery 启发的现代浏览器 DOM 库



## END