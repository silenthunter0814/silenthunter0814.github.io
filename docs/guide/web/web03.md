---
description: DOM 文档对象模型。javascript 课程课件，学习笔记。  
author: silenthunter0814, Silent Hunter
---

# web03 DOM 启示录

参考书: [DOM Enlightenment](http://domenlightenment.com/)
作者：Cody Lindley

---  
<details>
<summary>章节目录</summary>

[[toc]]

</details>

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

### 1.18 How to determine if two nodes are identical

当且仅当满足以下条件时，两个节点相等：
- 两个节点属于同一类型。
- 字符串属性相等：nodeName、localName、namespaceURI、prefix、nodeValue。
- NamedNodeMaps 属性相等。对于一个映射中存在的每个节点，另一个映射中存在一个节点并且相等，尽管不一定位于相同的索引处。
- 子节点 NodeList 相等。

在 DOM 中的节点上调用 isEqualNode() 方法将询问该节点是否等于作为参数传递的节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<input type="text">
<input type="text">

<textarea>foo</textarea>
<textarea>bar</textarea>

<script>

var input = document.querySelectorAll('input');
console.log(input[0].isEqualNode(input[1]));

var textarea = document.querySelectorAll('textarea');
console.log(textarea[0].isEqualNode(textarea[1]));

</script>
</body>
</html>
```

NOTE：
- 如果只是想知道两个节点是否引用同一个节点，可以使用 === 运算符进行检查（即 document.body === document.body）。 

## 2 文档节点

### 2.1 文档节点概述

HTMLDocument 构造函数在实例化时具体表示 DOM 中的 DOCUMENT_NODE（即 window.document）。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>

console.log(document.constructor === HTMLDocument);
console.log(document.constructor);
console.log(document.nodeType === Node.DOCUMENT_NODE); // 9

</script>
</body>
</html>
```

HTMLDocument 构造函数构造了 window.document 节点对象，并且该节点是一个 DOCUMENT_NODE 类型对象。

NOTES:
- Document 和 HTMLDocument 构造函数通常在加载 HTML 文档时由浏览器实例化。
- 使用 document.implementation.createHTMLDocument() 可以在当前加载到浏览器中的文档之外创建自己的 HTML 文档。 
- 使用 createDocument() 创建尚未设置为 HTML 文档的文档对象。 
- 通常，这些方法的使用与以编程方式向 iframe 提供 HTML 文档相关。

### 2.2 HTMLDocument 属性和方法（包括继承的）
要获得有关 HTMLDocument 节点上可用属性和方法的准确信息，最好忽略规范并询问浏览器可用的内容。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>

console.log(Object.keys(document).sort());

var props = [];
for (let prop in document) {
    props.push(prop);
}
console.log(props.sort());

var inherits = [];
for (let prop in document) {
    if (!document.hasOwnProperty(prop)) {
        inherits.push(prop);
    }
}
console.log(inherits.sort());

</script>
</body>
</html>
```

本章的上下文值得注意的属性和方法。
- doctype
- documentElement
- implementation.*
- activeElement
- body
- head
- title
- lastModified
- referrer
- URL
- defaultview
- compatMode
- ownerDocument
- hasFocus()

### 2.3 获取 HTML 文档信息 (title, URL, referrer, lastModified, compatMode)
document 对象提供对有关正在加载的 HTML 文档/DOM 的一些常规信息的访问。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>DOM Enlightenment</title>
</head>
<body>

<script>

var doc = document;

console.log('title = ' + doc.title);
console.log('url = ' + doc.URL);
console.log('referrer = ' + doc.referrer);
console.log('lastModified = ' + doc.lastModified);

console.log('compatibility mode = ' + doc.compatMode);

</script>
</body>
</html>
```

### 2.4 文档子节点

文档节点可以包含1个 DocumentType 节点对象和1个 Element 节点对象。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script src= "./main.js">
// Node.DOCUMENT_TYPE_NODE
console.log(document.childNodes[0].nodeType);
// Node.ELEMENT_NODE
console.log(document.childNodes[1].nodeType);

</script>
</body>
</html>
```

### 2.5 document 提供了 `<!DOCTYPE>, <html lang="en">, <head>, <body>` 的快捷方式

使用 document 的属性，可以获得以下节点的快捷方式引用：
- document.doctype : `<!DOCTYPE>`
- document.documentElement : `<html lang="en">`
- document.head : `<head>`
- document.body : `<body>`

```html
<!DOCTYPE html>
<html lang="en-US">
<body> 

<script>

console.log(document.doctype);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
      
</script>
</body>
</html>
```

NOTE:  
- document.doctype 不会出现在 document.childNodes 列表中。

### 2.6 使用 document.implementation.hasFeature() 检测 DOM 规范/特性

在下面的代码中，询问浏览器是否实现了 Core 2.0 和 3.0 规范。

```html
<!DOCTYPE html>
<html lang="en-US">
<body> 

<script>

console.log(document.implementation.hasFeature('Core', '2.0'));
console.log(document.implementation.hasFeature('Core', '3.0'));
      
</script>
</body>
</html>
```

NOTE  
- 不再被使用，但继续存在（并且只是返回 true），以便旧页面不会停止工作。

### 2.7 获取文档中焦点/活动节点的引用

使用 document.activeElement 可以快速获取文档中焦点/活动节点的引用。

HTMLElement.focus()方法将焦点设置在指定元素上（如果可以聚焦）。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<textarea></textarea>

<script>

document.querySelector('textarea').focus();

console.log(document.activeElement);
      
</script>
</body>
</html>
```

NOTE:  
- 不要将节点的选择（使用鼠标突出显示 HTML 页面的部分）与通过击键、空格键或鼠标输入内容而获得焦点的元素混淆。

### 2.8 确定文档或文档内的任何节点是否具有焦点

使用 document.hasFocus() 方法可以知道用户当前是否聚焦在已加载 HTML 文档的窗口上。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<script>

setTimeout(function() {
    console.log(document.hasFocus());
}, 5000);
      
</script>
</body>
</html>
```

### 2.9 document.defaultview 是 head/global 对象的快捷方式

Web 浏览器中的 head 对象是 window 对象，defaultView 在 JavaScript 浏览器环境中将指向该对象

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<script>

console.log(document.defaultView);  // window object
      
</script>
</body>
</html>
```

### 2.10 使用 ownerDocument 从元素获取对 Document 的引用

在节点上调用时，ownerDocument 属性返回对包含该节点的文档的引用

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<script>

console.log(document.body.ownerDocument);
      
</script>
</body>
</html>
```

如果在 Document 节点上调用ownerDocument，则返回值为 null。


## 3 元素节点

### 3.1 HTML*Element 对象概述

html 文档中的元素都具有独特的性质，因此它们都有一个独特的 JavaScript 构造函数，该构造函数将元素实例化为 DOM 树中的节点对象。  
例如，通过 HTMLAnchorElement() 构造函数将 `<a>` 元素创建为 DOM 节点。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a></a>

<script>

console.log(document.querySelector('a').constructor);
      
</script>
</body>
</html>
```

DOM 中的每个元素都是由唯一的 JavaScript 接口/构造函数构造的。  
下面的列表（不是完整的列表）用于创建 HTML*Element 元素的接口/构造函数。

|   |    A    |      B       |     C     |      D       |     E     |     F     |
|---|---------|--------------|-----------|--------------|-----------|-----------|
| 1 | Html    | Head         | Link      | Title        | Meta      | Base      |
| 2 | IsIndex | Style        | Body      | Form         | Select    | OptGroup  |
| 3 | Option  | Input        | TextArea  | Button       | Label     | FieldSet  |
| 4 | Legend  | UList        | OList     | DList        | Directory | Menu      |
| 5 | LI      | Div          | Paragraph | Heading      | Quote     | Pre       |
| 6 | BR      | BaseFont     | Font      | HR           | Mod       | Anchor    |
| 7 | Image   | Object       | Param     | Applet       | Map       | Area      |
| 8 | Table   | TableCaption | TableCol  | TableSection | TableRow  | TableCell |
| 9 | Script  | FrameSet     | Frame     | IFrame       |           |           |

                     
上面的每个 HTML*Element 都继承了 HTMLElement、Element、Node 和 Object 的属性和方法。

### 3.2 HTML*Element对象属性和方法（包括继承）

检查下面的代码中创建的数组，详细说明 HTML 元素节点可用的属性和方法。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a href="#">Hi</a>

<script>

var anchor = document.querySelector('a');
console.log(Object.keys(anchor));

var inherits = [];
for (let prop in anchor) {
    inherits.push(prop);
}
console.log(inherits.sort());
      
</script>
</body>
</html>
```

本章的上下文值得注意的属性和方法（也是继承的）。

- createElement()
- tagName
- children
- getAttribute()
- setAttribute()
- hasAttribute()
- removeAttribute()
- classList()
- dataset
- attributes

### 3.3 创建元素 document.createElement()

当浏览器输入 HTML 文档时，元素节点就会为我们实例化，并根据文档的内容构建相应的 DOM。  
在此之后，还可以使用 createElement() 以编程方式创建 Element 节点。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<script>

var elem = document.createElement('textarea');
document.body.appendChild(elem);

console.log(document.querySelector('textarea'));
      
</script>
</body>
</html>
```

传递给 createElement() 方法的值是一个字符串，它指定要创建的元素（也称为 tagName）的类型。

NOTE:
- 在创建元素之前，传递给 createElement 的值将更改为小写字符串。

### 3.4 获取元素的标签名

使用 tagName 属性访问元素的名称。  
tagName 属性返回的值与使用 nodeName 返回的值相同。  
无论源 HTML 文档中的大小写如何，两者都返回大写的值。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a href="#">Hi</a>

<script>

console.log(document.querySelector('a').tagName);
console.log(document.querySelector('a').nodeName);
      
</script>
</body>
</html>
```

### 3.5 获取元素属性和值的列表/集合

使用 attributes 属性（元素节点从Node继承）可以获得元素当前定义的 Attr 节点的集合。  
返回的列表是一个 NameNodeMap。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a href='#' title="title" data-foo="dataFoo" class="yes" style="margin:0;" foo="boo"></a>

<script>

var atts = document.querySelector('a').attributes;

for (let i = 0; i < atts.length; i++) {
    console.log(atts[i].nodeName + ' = ' + atts[i].nodeValue);
}
      
</script>
</body>
</html>
```

NOTE:
- 访问 attribute 属性返回的数组应被视为活动数组。 这意味着它的内容可以随时更改。
- attributes 属性是一个类似数组的集合，并且具有只读 length 属性。
- 布尔属性（例如 `<option selected>foo</option>`）显示在属性列表中，但没有任何值。

### 3.6 获取、设置和删除元素的属性值

获取、设置或删除元素属性值的最一致的方法是使用 getAttribute()、setAttribute() 和 removeAttribute() 方法。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a href='#' title="title" data-foo="dataFoo" 
  style="margin:0;" class="yes" foo="boo" 
  hidden="hidden">#link</a>

<script>

var anchor = document.querySelector('a');

anchor.removeAttribute('href');
anchor.removeAttribute('title');
anchor.removeAttribute('style');
anchor.removeAttribute('data-foo');
anchor.removeAttribute('class');
anchor.removeAttribute('foo');
anchor.removeAttribute('hidden');

anchor.setAttribute('href', '#');
anchor.setAttribute('title', 'title');
anchor.setAttribute('style', 'margin: 0;');
anchor.setAttribute('data-foo', 'dataFoo');
anchor.setAttribute('class', 'yes');
anchor.setAttribute('foo', 'boo');
anchor.setAttribute('hidden', 'hidden');

console.log(anchor.getAttribute('href'));
console.log(anchor.getAttribute('title'));
console.log(anchor.getAttribute('style'));
console.log(anchor.getAttribute('data-foo'));
console.log(anchor.getAttribute('class'));
console.log(anchor.getAttribute('foo'));
console.log(anchor.getAttribute('hidden'));

console.log(document.body.innerHTML);
      
</script>
</body>
</html>
```

### 3.7 验证元素是否具有特定属性

确定（即布尔值）元素是否具有属性的最佳方法是使用 hasAttribute() 方法。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<a href='#' title="title" data-foo="dataFoo" 
    style="margin:0;" class="yes" foo="boo" 
    hidden="hidden">#link</a>

<script>

var anchor = document.querySelector('a');

console.log(
    anchor.hasAttribute('href'),
    anchor.hasAttribute('title'),
    anchor.hasAttribute('style'),
    anchor.hasAttribute('data-foo'),
    anchor.hasAttribute('class'),
    anchor.hasAttribute('goo')    // false
);
      
</script>
</body>
</html>
```

如果元素包含该属性，即使该属性没有值，此方法也会返回 true。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<input type="checkbox" checked></input>

<script>

var input = document.querySelector('input');

console.log(input.hasAttribute('checked'));
      
</script>
</body>
</html>
```

### 3.8 获取 class 类属性值列表

使用元素节点上可用的 classList 属性，我们可以访问类属性值的列表（即 DOMTokenList），该列表比从 className 属性返回的空格分隔的字符串值更容易使用。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<div class="big brown bear"></div>

<script>

var div = document.querySelector('div');

console.log(div.classList);
console.log(div.className);
      
</script>
</body>
</html>
```

NOTE:
- classList 是一个类似数组的集合，它具有只读长度属性。
- classList 是只读的，但可以使用 add()、remove()、contains() 和toggle() 方法进行修改

### 3.9 添加和删除 class 类属性的子值

使用 classList.add() 和 classList.remove() 方法编辑 class 类属性的值非常简单。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<div class="dog"></div>

<script>

var div = document.querySelector('div');

div.classList.add('cat');
div.classList.remove('dog');
console.log(div.className);
      
</script>
</body>
</html>
```

### 3.10 切换 class 类属性值

使用 classList.toggle() 方法切换 class 类属性的子值。  
这允许我们在缺少值时添加值，或者在已添加值时删除值。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<div class="visible"></div>

<script>

var div = document.querySelector('div');

div.classList.toggle('visible');
div.classList.toggle('grow');
console.log(div.className);
      
</script>
</body>
</html>
```

### 3.11 判断 class 类属性值是否包含特定值

使用 classList.contains() 方法可以确定（布尔值）类属性值是否包含特定子值。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<div class="big brown bear"></div>

<script>

var div = document.querySelector('div');

console.log(div.classList.contains('brown'));  // true
console.log(div.classList.contains('red'));  // false
      
</script>
</body>
</html>
```

### 3.12 获取和设置 data-* 属性

元素节点的 dataset 属性提供了一个对象，其中包含以 data-* 开头的元素的所有属性。 因为它只是一个 JavaScript 对象，所以我们可以操作数据集并让 DOM 中的元素反映这些更改。

```html
<!DOCTYPE html>
<html lang="en-US">
<body>

<div data-foo-foo="foo" data-bar-bar="bar"></div>

<script>

var div = document.querySelector('div');

console.log(div.dataset.fooFoo);
console.log(div.dataset.barBar);

div.dataset.gooGoo = 'goo';
console.log(div.dataset);

console.log(div);
      
</script>
</body>
</html>
```

NOTE:
- 数据集包含数据属性的驼峰式版本。 意味着 data-foo-foo 将被列为数据集 DOMStringMap 对象中的属性 fooFoo。 - 被驼峰肠衣取代。
- 从 DOM 中删除 data-* 属性就像在数据集的属性上使用删除运算符一样简单（例如删除 dataset.fooFoo）

## 4 元素节点选择

### 4.1 选择特定元素节点

获取对单个元素节点的引用的最常见方法是：
- querySelector()
- getElementById()

```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul>
<li>Hello</li>
<li>big</li>
<li>bad</li>
<li id="last">world</li>
</ul>

<script>

console.log(document.querySelector('li').textContent);
console.log(document.getElementById('last').textContent);

</script>
</body>
</html>
```

NOTE:
- querySelector() 方法允许使用 CSS 选择器语法形式的参数。
- querySelector() 将根据选择器返回在文档中找到的第一个节点元素。
- querySelector() 也在元素节点上定义。 这允许方法将其结果限制（允许上下文查询）到 DOM 树的特定脉络。


### 4.2 选择/创建元素节点列表（NodeList）

选择/创建节点列表的最常见方法是：
- querySelectorAll() NodeList
- getElementByTagName() HTMLCollection
- getElementByClassName() HTMLCollection

```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul>
<li class="liClass">Hello</li>
<li class="liClass">big</li>
<li class="liClass">bad</li>
<li class="liClass">world</li>
</ul>

<script>

console.log(document.querySelectorAll('li'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('liClass'));

</script>
</body>
</html>
```

NOTE:
- 从 getElementsByTagName() 和 getElementsByClassName() 创建的 NodeList 被视为活动的。
- querySelectorAll() 方法是文档创建时的快照。
- 在元素节点上定义。 这允许该方法将其结果限制为 DOM 树的特定脉络。
- 字符串“*”（通常表示全部）将返回文档中所有元素的列表。

### 4.3 选择所有直接子元素节点

使用元素节点的 Children 属性，可以获得所有作为元素节点的直接子节点的列表（也称为 HTMLCollection）。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul>
<li><strong>Hi</strong></li>
<li>there</li>
</ul>
    
<script>

var ul = document.querySelector('ul');

console.log(ul.children);

</script>
</body>
</html>
```

请注意，使用 children 只为我们提供直接元素节点，不包括任何不是元素的节点（例如文本节点）。 如果该元素没有子元素，则子元素将返回一个空的类似数组的列表。

NOTE:
- HTMLCollection 按文档顺序包含元素，即它们按照元素在 DOM 中出现的顺序放置在数组中
- HTMLCollection 是实时的，这意味着对文档的任何更改都将动态反映在集合中

### 4.4 上下文元素选择

通常从文档对象访问的方法:
- querySelector()
- querySelectorAll()
- getElementsByTagName()
- getElementsByClassName

也在元素节点上定义。  
这允许这些方法将其结果限制为 DOM 树的特定脉络上。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>
<ul>
<li class="liClass">Hello</li>
<li class="liClass">big</li>
<li class="liClass">bad</li>
<li class="liClass">world</li>
</ul>
</div>

<ul>
<li class="liClass">Hello</li>
</ul>
    
<script>

var div = document.querySelector('div');

console.log(div.querySelector('ul'));
console.log(div.querySelectorAll('li'));
console.log(div.getElementsByTagName('li'));
console.log(div.getElementsByClassName('liClass'));

</script>
</body>
</html>
```

这些方法不仅可以在实时 DOM 上运行，还可以在代码中创建的编程 DOM 结构上运行。

```html
<!DOCTYPE html>
<html lang="en">
<body>
    
<script>

var div = document.createElement('div');
var ul = document.createElement('ul');
var li = document.createElement('li');
li.setAttribute('class', 'liClass');
ul.appendChild(li);
div.appendChild(ul);
console.log(div.outerHTML);

console.log(div.querySelector('ul'));
console.log(div.querySelectorAll('li'));
console.log(div.getElementsByTagName('li'));
console.log(div.getElementsByClassName('liClass'));

</script>
</body>
</html>
```

### 4.5 元素节点的预配置选择/列表

预配置的类似数组的列表，包含 HTML 文档中的元素节点。

- document.all HTML 文档中的所有元素
- document.forms HTML 文档中的所有 `<form>` 元素
- document.images HTML 文档中的所有 `<img>` 元素
- document.links HTML 文档中的所有 `<a>` 元素
- document.scripts HTML 文档中的所有 `<script>` 元素
- document.styleSheets HTML 文档中的所有 `<link>` 或 `<style>` 对象

这些预先配置的数组是从 HTMLCollection 接口/对象构造的，除了 document.styleSheets 它使用 StyleSheetList。

### 4.6 使用 matches() 测试一个元素与 CSS 选择器匹配

使用 matches() 方法可以确定元素是否与选择器字符串匹配。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul>
<li class="first">Hello</li>
<li class="second">world</li>
</ul>
    
<script>

var lis = document.querySelectorAll('li');

for (let li of lis) {
    if (li.matches(".second")) {
        console.log(li.outerHTML);
    }
}

</script>
</body>
</html>
```


## 5 元素节点几何和滚动几何

### 5.1 元素节点大小、偏移量和滚动概述

在 Web 浏览器中查看 html 文档时，DOM 节点会被解析并绘制为可视形状。 
为了以编程方式检查并在某些情况下操纵节点的视觉表示和几何测量，存在一组 API 来确定元素节点的几何形状（即使用偏移量的大小和位置），以及用于操作可滚动节点和获取滚动节点值的挂钩。

### 5.2 获取元素相对于 offsetParent 的 offsetTop 和 offsetLeft 值

使用 offsetTop 和 offsetLeft 属性，我们可以从 offsetParent 获取元素节点的偏移像素值。

下面代码中的属性 offsetLeft 和 offsetTop 告诉我们 id 为 red 的 `<div>` 距 offsetParent 的顶部和左侧 60px（即本例中的 `<body>` 元素）。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
body{margin:0;}
#blue{height:100px;width:100px;background-color:blue;border:10px solid gray; padding:25px;margin:25px;}
#red{height:50px;width:50px;background-color:red;border:10px solid gray;}
</style>
</head>
<body>

<div id="blue"><div id="red"></div></div>
    
<script>

var div = document.querySelector('#red');

console.log(div.offsetLeft);   // 60
console.log(div.offsetTop);   // 60
console.log(div.offsetParent);   // <body>

</script>
</body>
</html>
```

检查下图，显示代码在浏览器中直观显示的内容，以帮助您了解 offsetLeft 和 offsetTop 值是如何确定的。 图像中显示的红色 `<div>` 距 offsetParent 正好 60 像素。

![](https://silenthunter0814.github.io/pub/web03/5.1.png)

请注意，测量的是从红色 `<div>` 元素的外边框到 offsetParent（即 `<body>`）的内边框。

如前所述，如果将上面代码中的蓝色 `<div>` 更改为绝对位置，这将改变 offsetParent 的值。  
在下面的代码中，绝对定位蓝色 `<div>` 将导致从 offsetLeft 和 offsetTop 返回的值报告偏移量（即 25px）。 这是因为偏移父级现在是蓝色的 `<div>` 而不是 `<body>` 。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
#blue{height:100px;width:100px;background-color:blue;border:10px solid gray; padding:25px;margin:25px;position:absolute;}
#red{height:50px;width:50px;background-color:red;border:10px solid gray;}
</style>
</head>
<body>

<div id="blue"><div id="red"></div></div>
    
<script>

var div = document.querySelector('#red');

console.log(div.offsetLeft);   // 25
console.log(div.offsetTop);   // 25
console.log(div.offsetParent);   // <div id="blue">

</script>
</body>
</html>
```

下面显示的浏览器视图的图像阐明了当 offsetParent 为蓝色 `<div>` 时从 offsetLeft 和 offsetTop 返回的新测量值。

![](https://silenthunter0814.github.io/pub/web03/5.2.png)

### 5.3 使用 getBoundingClientRect() 获取元素的上、右、下、左边框边缘相对于视口的偏移量

使用 getBoundingClientRect() 方法，我们可以获得在浏览器视口中绘制的元素在边框边缘之外相对于视口的上边缘和左边缘的位置。  
这意味着左边缘和右边缘是从元素的外边框边缘到视口的左边缘进行测量的。 顶部和底部边缘是从元素的外边框边缘到视口的顶部边缘进行测量的。

在下面的代码中，创建一个 50px X 50px `<div>`，边框为 10px，边距为 100px。 为了获取 `<div>` 每个边框边缘的像素距离，在 `<div>` 上调用 getBoundingClientRect() 方法，该方法返回一个包含 top、right、bottom 和 left 属性的对象。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
body{margin:0;}
div{height:50px;width:50px;background-color:red;border:10px solid gray;margin:100px;}
</style>
</head>
<body>

<div></div>
    
<script>

var rect = document.querySelector('div').getBoundingClientRect();

console.log(rect.top, rect.right, rect.bottom, rect.left);

</script>
</body>
</html>
```

下图显示了上述代码的浏览器渲染视图，并添加了一些测量指示器，以准确显示 getBoudingClientRect() 的计算方式。

![](https://silenthunter0814.github.io/pub/web03/5.3.png)

`<div>` 元素的顶部外边框边缘距视口顶部边缘 100 像素。 元素 `<div>` 的右外边框边缘距视口左边缘 170 像素。 元素 `<div>` 的底部外边框边缘距视口顶部边缘 170 像素。 元素 `<div>` 的左外边框边缘距视口左边缘 100px。

### 5.4 获取视口中的元素大小 (border + padding + content)

getBoundingClientRect() 返回一个具有顶部、右侧、底部和左侧属性/值的对象，还具有高度和宽度属性/值。 height 和 width 属性指示元素的大小，其中总大小是通过将 div 的内容、其内边距和边框添加在一起而得出的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{height: 25px;width:25px;background-color:red;border:25px solid gray;padding:25px;}
</style>
</head>
<body>

<div></div>
    
<script>

var rect = document.querySelector('div').getBoundingClientRect();

console.log(rect.height, rect.width);  // 125 125

// 25px border + 25px padding + 25 content + 25 padding + 25 border = 125

</script>
</body>
</html>
```

还可以使用 offsetHeight 和 offsetWidth 属性找到完全相同的大小值。 在下面的代码中，我利用这些属性来获取 getBoundingClientRect() 提供的相同的精确高度和宽度值。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{height: 25px;width:25px;background-color:red;border:25px solid gray;padding:25px;}
</style>
</head>
<body>

<div></div>
    
<script>

var div = document.querySelector('div');

console.log(div.offsetHeight, div.offsetWidth);  // 125 125

</script>
</body>
</html>
```

### 5.5 获取视口中不包括边框的元素大小 (padding + content)

clientWidth 和 clientHeight 属性通过将元素的内容及其填充（不包括边框大小）相加来返回元素的总大小。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{height: 25px;width:25px;background-color:red;border:25px solid gray;padding:25px;}
</style>
</head>
<body>

<div></div>
    
<script>

var div = document.querySelector('div');

console.log(div.clientHeight, div.clientWidth);  // 75 75

// 2 x 25px padding + 25 content

</script>
</body>
</html>
```

### 5.6 使用 elementFromPoint() 获取视口中特定点的最顶层元素

使用 elementFromPoint() 可以在文档中的特定点获取对 html 文档中最顶层元素的引用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{height:50px;width:50px;background-color:red;position:absolute;top:50px;left:50px;}
</style>
</head>
<body>

<div id="bottom"></div><div id="top"></div>
    
<script>

console.log(document.elementFromPoint(50, 50));

</script>
</body>
</html>
```

### 5.7 使用scrollHeight和scrollWidth获取正在滚动的元素的大小



## 6 元素节点内联样式


## 7 文本节点


## 8 DocumentFragment 节点


## 9 CSS 样式表和 CSS 规则


## 10  DOM 中的 JavaScript



## 11 DOM 事件


## 12 创建 dom.js - 一个受 jQuery 启发的现代浏览器 DOM 库



## END
