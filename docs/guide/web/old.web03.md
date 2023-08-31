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

```js
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

var props = [];
for (let prop in document) {
    props.push(prop);
}
console.log(props.sort());

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

var props = [];
for (let prop in anchor) {
    props.push(prop);
}
console.log(props.sort());
      
</script>
</body>
</html>
```

本章的上下文值得注意的属性和方法（也是继承的）。

- Document.createElement()
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

### 5.7 使用 scrollHeight 和 scrollWidth 获取正在滚动的元素的大小

scrollheight 和 scrollwidth 属性提供滚动节点的高度和宽度。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
*{margin:0;padding:0;}
div{height:100px;width:100px; overflow:auto;}
p{height:1000px;width:1000px;background-color:red;}
</style>
</head>
<body>

<div><p></p></div>
    
<script>

var div = document.querySelector('div');

console.log(div.scrollHeight, div.scrollWidth);

</script>
</body>
</html>
```

如果要滚动的节点小于滚动区域，使用 clientheight 和 clientwidth 确定可滚动区域中包含的节点的大小。

### 5.8 使用 scrolltop 和 scrollleft 获取和设置滚动像素

- Element.scrollTop 属性获取或设置元素内容垂直滚动的像素数。scrollTop 值是从元素顶部到其最顶部可见内容的距离的度量。
- Element.scrollLeft 属性获取或设置元素内容从其左边缘滚动的像素数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
*{margin:0;padding:0;}
div{height:100px;width:100px; overflow:auto;}
p{height:1000px;width:1000px;background-color:red;}
</style>
</head>
<body>

<div><p></p></div>
    
<script>

var div = document.querySelector('div');

div.scrollTop = 750;
div.scrollLeft = 750;
console.log(div.scrollTop, div.scrollLeft);

</script>
</body>
</html>
```

750 报告了像素滚动的数量，并指示左侧的 750PX 在视口中不可查看。

只需将这些属性视为在左侧或顶部的视口中未显示的内容的像素测量值。

### 5.9 使用 scrollintoview() 将元素滚动到视图中

通过选择可滚动的节点中包含的节点，可以使用 ScrollIntoview() 方法告诉所选的节点滚动到视图中。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{height:30px;width:30px; overflow:auto;}
p{background-color:red;}
</style>
</head>
<body>

<div>
<content>
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
<p>8</p>
<p>9</p>
<p>10</p>            
</content>        
</div>
    
<script>

document.querySelector('content').children[4].scrollIntoView(true);

</script>
</body>
</html>
```

参数 true 指示滚动到元素顶部，false 指示滚动到元素底部。

## 6 元素节点内联样式

### 6.1 样式属性（又称元素内联 CSS 属性）概述

每个HTML元素都有一个样式属性，可用于内联CSS属性。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div style="background-color:red;border:1px solid black;height:100px;width:100px;"></div>
    
<script>

var divStyle = document.querySelector('div').style;

console.log(divStyle);

</script>
</body>
</html>
```

- 从样式属性返回的内容是 CSSStyleDeclaration 对象，而不是字符串。  
- 只有元素内联样式（即，不包括计算的样式）包含在 CSSStyleDeclartion 对象中。

### 6.2 获取，设置和删除单个内联 CSS 属性

内联 CSS 样式单独表示为元素节点对象上的样式对象属性（即对象属性）

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>
    
<script>

var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';

console.log(divStyle.backgroundColor);
console.log(divStyle.border);
console.log(divStyle.width);
console.log(divStyle.height);

/* remove
divStyle.border = '';
*/

</script>
</body>
</html>
```

样式对象是 CSSStyleDeclaration 对象，它不仅提供对单个CSS属性的访问，还提供:
- setPropertyValue(propertyName)
- getPropertyValue(propertyName,value)
- removeProperty()

用于操作元素节点上的各个 CSS 属性的方法。 

在下面的代码中，我们使用这些方法设置、获取和删除 `<div>` 上的各个 CSS 属性。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div style="background-color:green;border:1px solid purple;"></div>
    
<script>

var divStyle = document.querySelector('div').style;

divStyle.setProperty('background-color', 'red');
divStyle.setProperty('border', '1px solid black');
divStyle.setProperty('width', '100px');
divStyle.setProperty('height', '100px');

console.log(divStyle.getPropertyValue('background-color'));
console.log(divStyle.getPropertyValue('border'));
console.log(divStyle.getPropertyValue('width'));
console.log(divStyle.getPropertyValue('height'));

/* remove
divStyle.removeProperty('background-color');
*/

</script>
</body>
</html>
```

### 6.3 获取、设置和删除所有内联 CSS 属性

可以使用 CSSStyleDeclaration 对象的 cssText 属性以及 getAttribute() 和 setAttribute() 方法来使用 JavaScript 字符串获取、设置和删除 style 属性的整个（即所有内联 CSS 属性）值。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>
    
<script>

var div = document.querySelector('div');
var divStyle = div.style;

divStyle.cssText = 'background-color: red; border: 1px solid black; height: 100px; width: 100px';
console.log(divStyle.cssText);

divStyle.cssText = '';

div.setAttribute('style', 'background-color: red; border: 1px solid black; height: 100px; width: 100px');
console.log(div.getAttribute('style'));

div.removeAttribute('style');

</script>
</body>
</html>
```

### 6.4 使用 getComputedStyle() 获取元素计算样式（即实际样式，包括级联中的任何样式）

style 属性仅包含通过 style 属性定义的 css。 要从级联（即从内联样式表、外部样式表、浏览器样式表级联）及其内联样式中获取元素 css，可以使用 getComputedStyle()。  
该方法提供了一个类似于 style 的只读 CSSStyleDeclaration 对象。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
div{
    background-color:red;
    border:1px solid black;
    height:100px;
    width:100px;
}
</style>
</head>
<body>

<div style="background-color:green;border:1px solid purple;"></div>
    
<script>

var div = document.querySelector('div');

console.log(window.getComputedStyle(div).backgroundColor);
console.log(window.getComputedStyle(div).border);
console.log(window.getComputedStyle(div).height);
console.log(window.getComputedStyle(div).width);

</script>
</body>
</html>
``` 

NOTE:
- 不能在从 getCompulatedStyles() 返回的只读 CSSStyleDeclaration 对象上设置任何值。
- getComputedStyles() 方法返回 rgb(#,#,#) 格式的颜色值，无论它们最初是如何创作的。

### 6.5 使用 class 和 id 属性在元素上应用和删除 css 属性

可以使用 class 和 id 属性在元素中添加或删除在内联样式表或外部样式表中定义的样式规则。 这是操作元素样式的最常见模式。   
在下面的代码中，利用 setAttribute() 和 classList.add()，通过设置 class 和 id 属性值将内联样式规则应用于 `<div>`。 使用 removeAttribute() 和 classList.remove() 也可以删除这些CSS规则。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.foo{
  background-color:red;
  padding:10px;
}
#bar{
  border:10px solid #000;
  margin:10px;
}
</style>
</head>
<body>

<div></div>
    
<script>

var div = document.querySelector('div');

div.setAttribute('id', 'bar');
div.classList.add('foo');

/*
div.removeAttribute('id');
div.classList.remove('foo');
*/

</script>
</body>
</html>
```

## 7 文本节点

### 7.1 Text object overview

HTML 文档中的文本由 Text() 构造函数的实例表示，该函数生成文本节点。  
当解析 HTML 文档时，混合在 HTML 页面元素中的文本将转换为文本节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>hi</p>
    
<script>

var text = document.querySelector('p').firstChild;

console.log(text.constructor);
console.log(text);

</script>
</body>
</html>
```

Text() 构造函数构造了文本节点:
- Text > CharactorData > Node > EventTarget > Object

### 7.2 文本对象和属性

检查下面的代码中创建的数组，详细说明文本节点可用的属性和方法。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>hi</p>
    
<script>

var text = document.querySelector('p').firstChild;

var props = [];
for (let prop in text) {
    props.push(prop);
}
console.log(props.sort());

</script>
</body>
</html>
```

本章的上下文值得注意的属性和方法。
- textContent
- splitText()
- appendData()
- deleteData()
- insertData()
- replaceData()
- subStringData()
- Node.normalize()
- data
- Document.createTextNode()

### 7.3 空白创建文本节点

当通过浏览器或通过编程方式构造 DOM 时，文本节点是从空白和文本字符创建的

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p id="p1"></p>
<p id="p2"> </p>
    
<script>

var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');

console.log(p1.firstChild);   // null
console.log(p2.firstChild.nodeName);  // #text

</script>
</body>
</html>
```

不要忘记 DOM 中的空白和文本字符通常由文本节点表示。 这当然意味着回车符被视为文本节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p id="p1"></p>
<p id="p2"></p>
    
<script>

var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');

var sibling = p1.nextSibling;
console.log(sibling);
console.log(sibling.nextSibling === p2);

</script>
</body>
</html>
```

- 如果可以使用键盘将字符或空格输入到 html 文档中，那么它就有可能被输入为文本节点。 
- 除非最小化/压缩 html 文档，否则平均 html 页面包含大量空格和回车文本节点。

### 7.4 创建和注入文本节点

当浏览器输入 HTML 文档时，文本节点会自动为我们创建，并根据文档内容构建相应的 DOM。  
之后，还可以使用 createTextNode() 以编程方式创建文本节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>
    
<script>

var textNode = document.createTextNode('Hi');
var div = document.querySelector('div');

div.appendChild(textNode);
console.log(div.outerHTML);

</script>
</body>
</html>
```

也可以将文本节点注入到以编程方式创建的 DOM 结构中。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>
    
<script>

var p = document.createElement('p'),
    text = document.createTextNode('Hi'),
    div = document.querySelector('div');

p.appendChild(text);
div.appendChild(p);

console.log(div.innerHTML);

</script>
</body>
</html>
```

### 7.5 使用 .data 或 nodeValue 获取文本节点值

可以使用 .data 或 nodeValue 属性从节点中提取文本节点表示的文本值/数据。  
这两者都返回文本节点中包含的文本。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>Hi, <strong>cody</strong></p>
    
<script>

var p = document.querySelector('p');

console.log(p.firstChild.data);
console.log(p.firstChild.nodeValue);

</script>
</body>
</html>
```

NOTE:
- `<p>` 包含两个文本节点和元素（即 `<strong>`）节点。 
- 我们仅获取 `<p>` 中包含的第一个子节点的值。

### 7.6 使用 *Data() 操作文本节点

文本节点继承方法的 CharacterData 对象提供了用于操作和提取子值的方法:
- appendData()
- deleteData()
- insertData()
- replaceData()
- subStringData()

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>Go big Blue Blue</p>
    
<script>

var text = document.querySelector('p').firstChild;

text.appendData('!');
console.log(text.data);

text.deleteData(7, 5);
console.log(text.data);

text.insertData(7, 'Blue ');
console.log(text.data);

text.replaceData(7, 5, 'Bunny ');
console.log(text.data);

console.log(text.substringData(7, 10));

</script>
</body>
</html>
```

NOTE:
- 注释节点可以利用这些相同的操作和子值提取方法。

### 7.7 当出现多个兄弟 Text 节点时

- 如果文本节点包含元素节点（例如 `<p>Hi, <strong>cody</strong>welcome!</p>`），则文本将被拆分为适当的节点分组。

在下面的代码中，`<p>` 元素的内容不是单个 Text 节点，它实际上是 3 个节点：一个 Text 节点，Element 节点和另一个 Text 节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>Hi, <strong>cody</strong> welcome!</p>
    
<script>

var p = document.querySelector('p');

console.log(p.childNodes.length);

console.log(p.firstChild.data);
console.log(p.firstChild.nextSibling);
console.log(p.lastChild.data);

</script>
</body>
</html>
```

- 当以编程方式将多个文本节点添加到元素时，会产生同级文本节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>

<script>

var div = document.querySelector('div');
var p = document.createElement('p'),
    text1 = document.createTextNode('Hi '),
    text2 = document.createTextNode('Cody');

p.appendChild(text1);
p.appendChild(text2);
div.appendChild(p);

console.log(document.querySelector('div p').childNodes.length);

</script>
</body>
</html>
```

### 7.8 删除标记并使用 textContent 返回所有子 Text 节点

textContent 属性可用于获取所有子文本节点，以及将节点的内容设置为特定的文本节点。  
当它在节点上使用以获取该节点的文本内容时，它将返回节点中包含的所有文本节点的串联字符串。   
此功能可以非常轻松地从 HTML 文档中提取所有文本节点。  
textContent 不仅收集直接子文本节点，而且收集所有子文本节点，无论调用该方法的节点内部的封装深度如何。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1> Dude</h1>
<p>you <strong>rock!</strong></p>

<script>

console.log(document.body.textContent);

</script>
</body>
</html>
```

当使用 textContent 设置节点中包含的文本时，它将首先删除所有子节点，并用单个 Text 节点替换它们。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>
<h1> Dude</h1>
<p>you <strong>rock!</strong></p>
</div>

<script>

var div = document.querySelector('div');

div.textContent = "You don't rock!";
console.log(div.textContent);

</script>
</body>
</html>
```

NOTE:
- 如果在文档或文档类型节点上使用，textContent 将返回 null。
- textContent 返回 `<script>` 和 `<style>` 元素的内容

### 7.9 textContent 和 innerText 的区别

- innerText 能够识别 CSS。 因此，如果您有隐藏文本，innerText 会忽略此文本，而 textContent 不会
- 因为 innerText 关心 CSS，所以它会触发回流，而 textContent 不会
- innerText 忽略 `<script>` 和 `<style>` 元素中包含的文本节点
- 与 textContent 不同，innerText 会标准化返回的文本。 只需将 textContent 视为准确返回文档中删除标记的内容即可。 这将包括空格、换行符和回车符
- innerText 被认为是非标准且特定于浏览器的，而 textContent 是根据 DOM 规范实现的

### 7.10 使用 normalize() 将同级文本节点合并为一个文本节点

Node 接口的 normalize() 方法将指定节点及其所有子树放入规范化形式。  
在规范化的子树中，子树中没有空的文本节点，也没有相邻的文本节点。  
通常仅在以编程方式将文本添加到 DOM 时才会遇到同级文本节点。  
为了消除不包含 Element 节点的同级 Text 节点，可以使用 normalize()。 这会将 DOM 中的同级文本节点连接成单个文本节点。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>

<script>

var div = document.querySelector('div');

var p = document.createElement('p'),
    text1 = document.createTextNode('Hi'),
    text2 = document.createTextNode('Cody');

p.appendChild(text1);
p.appendChild(text2);
div.appendChild(p);

console.log(p.childNodes.length);
div.normalize();
console.log(document.querySelector('p').childNodes.length);

</script>
</body>
</html>
```

### 7.11 使用 splitText() 分割文本节点

Text 接口的 splitText() 方法将 Text 节点按指定的偏移量分成两个节点，使树中的两个节点保持为同级节点。  
返回一个新的 Text 节点，其中包含根据偏移量从原始文本中拆分出来的文本。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>Hey Yo!</p>

<script>

var p = document.querySelector('p');

console.log(p.firstChild.splitText(4).data);
console.log(p.firstChild.textContent);

</script>
</body>
</html>
```

## 8 DocumentFragment 节点

### 8.1 DocumentFragment 对象概述

DocumentFragment 接口表示没有父级的最小文档对象。

- Document 的轻量级版本，存储由节点组成的文档结构的片段，就像标准文档一样。 
- 文档片段不是活动文档树结构的一部分。 对片段所做的更改不会影响文档。

### 8.2 使用 createDocumentFragment() 创建 DocumentFragment

创建一个新的空 DocumentFragment，可以向其中添加 DOM 节点以构建离屏 DOM 树。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>

var frag = document.createDocumentFragment();

["blue", "green", "red", "blue", "pink"].forEach(function(e) {
    var li = document.createElement('li');
    li.textContent = e;
    frag.appendChild(li);
});

console.log(frag.textContent);

</script>
</body>
</html>
```

当将 documentFragment 注入活动节点结构时，使用 documentFragment 在内存中创建节点结构非常有效。
- 文档片段可以包含任何类型的节点（`<body>` 或 `<html>` 除外）。
- 当文档片段附加到 DOM 时，它会从文档片段传输到其附加的位置。 它不再存在于创建它的位置的内存中。
- 追加片段时，文档片段本身不会添加到 DOM 中。

### 8.3 将 DocumentFragment 添加到实时DOM树

通过向 appendChild() 和 insertBefore() 节点方法传递一个 documentFragment 参数，documentFragment 的子节点将作为子节点传输到调用方法的 DOM 节点。


```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul></ul>

<script>

var ul = document.querySelector('ul');
var frag = document.createDocumentFragment();

["blue", "green", "red", "blue", "pink"].forEach(function(e) {
    var li = document.createElement('li');
    li.textContent = e;
    frag.appendChild(li);
});

ul.appendChild(frag);
console.log(ul.outerHTML);
console.assert(frag.childNodes.length === 0);

</script>
</body>
</html>
```

- 作为参数传递给插入节点方法的文档片段将插入整个子节点结构，忽略 documentFragment 节点本身。


### 8.4 在 documentFragment 上使用 innerHTML

使用节点方法在内存中创建 DOM 结构可能会很冗长且费力。  
解决这个问题的一种方法是创建一个 documentFragment，将 `<div>` 附加到该片段，然后使用innerHTML 属性用 HTML 字符串更新该片段。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>

var div = document.createElement('div');
var frag = document.createDocumentFragment();

div.innerHTML = '<ul><li>foo</li><li>bar</li></ul>';
frag.appendChild(div);

console.log(frag.querySelectorAll('li').length);

</script>
</body>
</html>
```

当需要附加使用 documentFragment 和 `<div>` 创建的 DOM 结构时，需要附加该结构以跳过 `<div>` 的注入。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div></div>

<script>

var div = document.createElement('div');
var frag = document.createDocumentFragment();

div.innerHTML = '<ul><li>foo</li></ul><ul><li>bar</li></ul>';
frag.appendChild(div);

div = frag.querySelector('div');
const DIV = document.querySelector('div');
while (div.firstChild) {
    DIV.appendChild(div.firstChild);
}

console.log(DIV.outerHTML);

</script>
</body>
</html>
```

### 8.5 通过克隆在内存中留下包含节点的片段

Node 接口的cloneNode(bool) 方法返回调用该方法的节点的副本。 它的参数控制节点中包含的子树是否也被克隆。

追加文档片段时，片段中包含的节点也会从片段移动到要追加的结构。 要将片段的内容保留在内存中，以便在附加后保留节点，只需在附加时使用 cloneNode() 克隆 documentFragment 即可。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<ul></ul>

<script>

var ul = document.querySelector('ul');
var frag = document.createDocumentFragment();

["blue", "green", "red", "blue", "pink"].forEach((e) => {
    var li = document.createElement('li');
    li.textContent = e;
    frag.appendChild(li);
});

ul.appendChild(frag.cloneNode(true));

console.log(ul.outerHTML);
console.log(frag.childNodes);

</script>
</body>
</html>
```



## 9 CSS 样式表和 CSS 规则

### 9.1 CSS 样式表概述

将样式表添加到 HTML 文档中:
- 使用 HTMLLinkElement 节点（即 `<link href="stylesheet.css" rel="stylesheet" type="text/css">`）
- 使用 HTMLStyleElement 节点 （即 `<style></style>`）

```html
<!DOCTYPE html>
<html lang="en">
<head>

<link id="linkElement" href="http://yui.yahooapis.com/3.3.0/build/cssreset/reset-min.css" rel="stylesheet" type="text/css">

<style id="styleElement">
body{background-color:#fff;}
</style>

</head>
<body>

<script>

// ƒ HTMLLinkElement() { [native code] }
console.log(document.querySelector('#linkElement').constructor);

// ƒ HTMLStyleElement() { [native code] }
console.log(document.querySelector('#styleElement').constructor);

</script>
</body>
</html>
```

一旦样式表被添加到 HTML 文档中，它就由 CSSStylesheet 对象表示。  
样式表内的每个 CSS 规则（例如 body{background-color:red;}）都由 CSSStyleRule 对象表示。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
body{background-color:#fff;}
</style>

</head>
<body>

<script>

var style = document.querySelector('#styleElement');

// ƒ CSSStyleSheet() { [native code] }
console.log(style.sheet.constructor);

// ƒ CSSStyleRule() { [native code] }
console.log(style.sheet.cssRules[0].constructor);

</script>
</body>
</html>
```

- 选择包含样式表的元素（即 `<link>` 或 `<style>`）与访问表示样式表本身的实际对象 (CSSStyleSheet) 不同。

### 9.2 访问 DOM 中的所有样式表（即 CSSStyleSheet 对象）

Document 接口的 styleSheets 只读属性返回 CSSStyleSheet 对象的 StyleSheetList，用于显式链接 (`<link>`) 到或嵌入 (`<style>`) 到文档中的样式表。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<link href="http://yui.yahooapis.com/3.3.0/build/cssreset/reset-min.css" rel="stylesheet" type="text/css">

<style>
body{background-color:red;}
</style>

</head>
<body>

<script>

console.log(document.styleSheets.length);
console.log(document.styleSheets[0]);
console.log(document.styleSheets[1]);

</script>
</body>
</html>
```

NOTE:
- styleSheet 就像其他节点列表一样是实时的。
- length 属性返回列表中包含的样式表数量，从 0 索引开始（即 document.styleSheets.length）。
- 通过 querySelector 来访问指定的样式表 CSSStyleSheet 对象。

### 9.3 CSSStyleSheet 属性和方法

检查下面的代码中创建的数组，详细说明 CSSStyleSheet 节点可用的属性和方法。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
body{background-color:#fff;}
</style>

</head>
<body>

<script>

var sheet = document.querySelector('#styleElement').sheet;

var props = [];
for (let prop in sheet) {
    props.push(prop);   
}

console.log(props.sort());

</script>
</body>
</html>
```

### 9.4 CSSStyleRule 概述

CSSStylerule 接口代表单个 CSS 样式规则。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
body{background-color:#fff;margin:20px;} /*this is a css rule*/
p{line-height:1.4em; color:blue;} /*this is a css rule*/
</style>

</head>
<body>

<script>

var sheet = document.querySelector('#styleElement').sheet;

console.log(sheet.cssRules[0].cssText);
console.log(sheet.cssRules[1].cssText);

</script>
</body>
</html>
```

### 9.5 CSSStylerule 属性和方法

检查下面代码中创建的数组，详细介绍了 CSSStylerululenode 可用的属性和方法。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
body{background-color:#fff;}
</style>

</head>
<body>

<script>

var rule = document.querySelector('#styleElement').sheet.cssRules[0];

var props = [];
for (let prop in rule) {
    props.push(prop);
}
console.log(props.sort());

</script>
</body>
</html>
```

cssRule 对象使样式表中包含的规则（例如Body {Background-Color：Red;}）脚本（例如主体{Background-Color：red;}）。 该对象提供以下属性：
- cssText
- parentRule
- parentStylesSheet
- selectorText
- style
- type

### 9.6使用 cssRules 在样式表中获取 CSS 规则列表

cssRules 列表提供了特定样式表中所有 CSS 规则（即 CSSStylerule 对象）的列表（CSSRulesList）。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
body{background-color:#fff;margin:20px;}
p{line-height:1.4em; color:blue;}
</style>

</head>
<body>

<script>

var sheet = document.querySelector('#styleElement').sheet;

console.log(sheet.cssRules);  // CSSRuleList
console.log(sheet.cssRules.length);

console.log(sheet.cssRules[0]);  // CSSStyleRule
console.log(sheet.cssRules[1]);

</script>
</body>
</html>
```

### 9.7 使用 .insertRule() 和 .deleteRule() 插入和删除 CSS 规则

CSSStyleSheet: insertRule（）和deleteRule（）方法提供了在样式表中处理CSS规则的能力。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
p{line-height:1.4em; color:blue;} /*index 0*/
p{font-size:50px;} /*index 1*/
</style>

</head>
<body>

<p>Hi</p>

<script>

var sheet = document.querySelector('#styleElement').sheet;

sheet.insertRule('p {color: red}', 1);
console.log(sheet.cssRules[1].cssText);

sheet.deleteRule(1);
console.log(sheet.cssRules[1].cssText);

</script>
</body>
</html>
```

NOTE:
- 插入和删除规则并不是一种常见的做法。

### 9.8 使用 .style 属性编辑 CSSStyleRule 的值

就像元素节点上的内联样式 .style 属性一样，CSSStyleRule 对象也有一个 .style 属性，可以对样式进行相同的操作。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<style id="styleElement">
p{color:blue;}
strong{color:green;}
</style>

</head>
<body>

<p>Hey <strong>Dude!</strong></p>

<script>

var sheet = document.querySelector('#styleElement').sheet;

sheet.cssRules[0].style.color = 'red';
sheet.cssRules[1].style.color = 'purple';

console.log(sheet.cssRules[0].style.color);
console.log(sheet.cssRules[1].style.color);

</script>
</body>
</html>
```

### 9.9 创建新的内联 CSS 样式表

为了在加载 HTML 页面之后即时制作新样式表，只需创建一个新的 `<style>` 节点，使用 innerHTML添加 CSS 规则，然后将 `<style>` 节点附加到 HTML 文档。

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

<p>Hey <strong>Dude!</strong></p>

<script>

var style = document.createElement('style');

style.innerHTML = 'body {color: red;} \
    strong {color: blue;}';
document.head.appendChild(style);

</script>
</body>
</html>
```

### 9.10 编程方式将外部样式表添加到 HTML 文档

要将 CSS 文件添加到 HTML 文档中，从编程中创建 `<link>` 元素节点，设置适当的属性，然后将 `<link>` 元素节点附加到 DOM 上。

```html
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

<script>

var link = document.createElement('link');

link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('id', 'linkElement');
link.setAttribute('href', 'http://yui.yahooapis.com/3.3.0/build/cssreset/reset-min.css');

document.head.appendChild(link);
console.log(document.querySelector('#linkElement'));

</script>
</body>
</html>
```

### 9.11 使用 disabled 属性禁用/启用样式表

使用 CSSStyleSheet.disabled 属性可以启用或禁用样式表。

```html
<!DOCTYPE html>
<html lang="en">
<head>

<link id="linkElement" href="http://yui.yahooapis.com/3.3.0/build/cssreset/reset-min.css" rel="stylesheet" type="text/css">

<style id="styleElement">
body{color:red;}
</style>

</head>
<body>

<script>

var linkSheet = document.querySelector('#linkElement').sheet,
    styleSheet = document.querySelector('#styleElement').sheet;

console.log(linkSheet.disabled);
console.log(styleSheet.disabled);

linkSheet.disabled = true;
styleSheet.disabled = true;

</script>
</body>
</html>
```

## 10  DOM 中的 JavaScript

### 10.1 插入和执行 JavaScript 概述

JavaScript 可以通过包含外部 JavaScript 文件或编写页面级内联方式插入到 HTML 文档中，这基本上是将外部 JavaScript 文件的内容作为文本节点逐字嵌入到 HTML 页面中。  
不要将属性事件处理程序中包含的元素内联 JavaScript (`<div onclick="alert('yo')"></div>`) 与页面内联 JavaScript (`<script>alert('hi')</script>`) 混淆。  
两种方法都需要使用 `<script>` 元素节点。 `<script>` 元素可以包含 JavaScript 代码，也可以使用 src 属性链接到外部 JavaScript 文件。

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>

<script>
console.log('hi');
</script>
</body>
</html>
```

### 10.2 JavaScript 默认同步解析

默认情况下，当解析 DOM 时遇到 `<script>` 元素，它将停止解析文档，阻止任何进一步的渲染和下载，并执行 JavaScript。 因为此行为是阻塞的，并且不允许并行解析 DOM 或执行 JavaScriopt，所以它被认为是同步的。 如果 JavaScript 位于 html 文档外部，则阻塞会加剧，因为必须首先下载 JavaScript，然后才能对其进行解析。

### 10.3 使用 defer 推迟外部 JavaScript 的下载和执行

`<script>` 元素有一个名为 defer 的属性，该属性将推迟外部 JavaScript 文件的阻止、下载和执行，直到浏览器解析结束 `<html>` 节点。

`<script defer src=".../app.js"></scriipt>`

### 10.4 使用 async 异步下载和执行外部 JavaScript 文件

`<script>` 元素有一个名为 async 的属性，当 Web 浏览器构建 DOM 时，该属性将覆盖 `<script>` 元素的顺序阻塞性质。 通过使用此属性，我们告诉浏览器不要阻止 html 页面的构建（即 DOM 解析，包括下载其他资源，例如图像、样式表等...）并放弃顺序加载。

`<script async src=".../app.js"></scriipt>`

### 10.5 使用动态 `<script>` 强制异步下载和解析外部 JavaScript

在不使用 async 属性的情况下强制 Web 浏览器进行异步 JavaScript 下载和解析的一种已知方法是以编程方式创建包含外部 JavaScript 文件的 `<script>` 元素并将其插入 DOM 中。

```html
<body>
<script>

var underscoreScript = document.createElement("script"); 
underscoreScript.src = "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"; 
document.body.appendChild(underscoreScript);

</script>
</body>
```

### 10.6 对异步 `<script>` 使用 onload 回调，以便我们知道它何时加载

```html
<!DOCTYPE html>
<html lang="en">
<body>

<!-- Don't block, just start downloading and then parse the file when it's done downloading -->
<script>
var underscoreScript = document.createElement("script"); 
underscoreScript.src = "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js";
underscoreScript.onload = function(){console.log('underscsore is loaded and exectuted');};
document.body.appendChild(underscoreScript);
</script>

<!-- Don't block, just start downloading and then parse the file when it's done downloading -->
<script async src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js" onload="console.log('jQuery is loaded and exectuted');"></script>

</body>
</html>
```

### 10.7 注意 `<script>` 在 HTML 中用于 DOM 操作的位置

考虑到 `<script>` 元素的同步性质，如果 JavaScript 执行依赖于执行 `<script>` 的任何 DOM，则将其放置在 HTML 文档的 `<head>` 元素中会出现计时问题。 

简而言之，如果 JavaScript 在操作 DOM 的文档开头执行，那么您将收到 JavaScript 错误。 通过以下代码示例证明：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<script>

//Uncaught TypeError: Cannot read property 'innerHTML' of null
console.log(document.body.innerHTML);  

</script>
</head>
<body>
<strong>Hi</strong>
</body>
</html>
```

许多开发人员因此会尝试将所有 `<script>` 元素放在结束 `</body>` 元素之前。 通过这样做，`<script>` 前面的 DOM 已被解析并准备好执行脚本。

### 10.8 获取 DOM 中 `<script>` 的列表

文档对象中的 document.scripts 属性提供了 DOM 中当前所有脚本的列表（即 HTMLCollection）。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"></script>

<script>

Array.prototype.slice.call(document.scripts).forEach(function(script){
	console.log(script); 
});  //will log each script element in the document

</script>
</body>
</html>
```

## 11 DOM 事件

### 11.1 DOM 事件概述

Event 接口表示 DOM 中发生的事件。

事件可以由用户操作触发，例如 单击鼠标按钮或敲击键盘，或由 API 生成来表示异步任务的进度。 它还可以通过编程方式触发，例如通过调用元素的 HTMLElement.click() 方法，或者定义事件，然后使用 EventTarget.dispatchEvent() 将其发送到指定目标。

可以使用内联属性事件处理程序、属性事件处理程序或 addEventListener() 方法来完成事件设置。 

在下面的代码中，演示了这三种设置事件的模式。 所有三种模式都添加了一个单击事件，每当鼠标单击 html 文档中的 `<div>` 时就会调用该事件。

```html
<!DOCTYPE html>
<html lang="en">

<body onclick="console.log('fire/trigger attribure event handler')">

<h1>Event Handler</h1>
<div>click me</div>

<script>

var div = document.querySelector('div');

div.onclick = function(){
    console.log('fire/trigger property event handler');
};

div.addEventListener('click',function(){
    console.log('fire/trigger addEventListener');
});

</script> 
</body>
</html>
```

虽然将事件附加到 DOM 的所有这三种模式都以编程方式安排事件，但只有 addEventListener() 提供了健壮且有组织的解决方案。 内联属性事件处理程序将 JavaScript 和 HTML 混合在一起，最佳实践建议将这些内容分开。

使用属性事件处理程序的缺点是一次只能将一个值分配给事件属性。 这意味着，在将事件分配为属性值时，您不能向 DOM 节点添加多个属性事件处理程序。 

下面的代码显示了一个示例，它为 onclick 属性分配了两次值，调用事件时使用最后设置的值。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>

<script>

var div = document.querySelector('div');

div.onclick = function(){
    console.log('I\'m first, but I get overidden/replace');
};
div.onclick = function(){
    console.log('I win');
};

</script> 
</body>
</html>
```

### 11.2 DOM 事件类型

元素节点、文档对象和窗口对象的最常见的预定义事件。

- 用户界面事件


|      事件类型      |            事件描述            |
|----------------|----------------------------|
| Window: load   | 当整个页面加载完毕后，包括所有依赖的资源       |
| Window: unload | 当用户代理删除资源时                 |
| Window: error  | 当资源无法加载或无法使用时（例如，脚本出现执行错误） |
| Window: resize | 当文档视图（窗口）调整大小时             |
| scroll         | 当用户滚动文档或元素时                |
| contextmenu    | 当尝试打开上下文菜单时                |


### 11.3 事件流

当事件被调用时，事件通过 DOM 流动或传播，在其他节点和 JavaScript 对象上触发相同的事件。  
事件流可以编程为捕获阶段（即 DOM 树主干到分支）或冒泡阶段（即 DOM 树分支到主干）或两者兼而有之。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me to start event flow</div>

<script>

window.addEventListener('click', () => console.log(1), true);
document.addEventListener('click', () => console.log(2), true);
document.documentElement.addEventListener('click', () => console.log(3), true);
document.body.addEventListener('click', () => console.log(4), true);
document.querySelector('div').addEventListener('click', () => console.log(5), true);
document.querySelector('div').addEventListener('click', () => console.log(6));
document.body.addEventListener('click', ()=> console.log(7));
document.documentElement.addEventListener('click', () => console.log(8));
document.addEventListener('click', () => console.log(9));
window.addEventListener('click', () => console.log(10));

</script> 
</body>
</html>
```

通常，假设事件是在冒泡阶段调用的。

### 11.4 为 Element 节点、window 对象和 Document 对象添加事件监听器

EventTarget 接口的 addEventListener() 方法设置一个函数，每当指定的事件传递到目标时就会调用该函数。

常见目标是 Element 或其子项、Document 和 Window，但目标可以是支持事件的任何对象。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>mouse over me</div>

<script>

window.addEventListener('mousemove', () => {
    console.log('moving over window');
}, false);

document.addEventListener('mousemove', () => {
    console.log('moving over document');
});

document.querySelector('div').addEventListener('mousemove', () => {
    console.log('moving over div');
});

</script> 
</body>
</html>
```

addEventListener() 方法采用三个参数:
- 侦听的事件类型。 事件类型字符串不包含事件处理程序所需的“on”前缀（即 onmousemove）。 
- 事件发生时要调用的函数。 
- 一个布尔值，指示是否应在事件流的捕获阶段或冒泡阶段触发事件。

### 11.5 删除事件监听器

EventTarget 接口的 removeEventListener() 方法从目标中删除先前使用EventTarget.addEventListener() 注册的事件侦听器。  
使用事件类型、事件监听器函数本身以及可能影响匹配过程的各种可选选项的组合来识别要删除的事件监听器。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click to say hi</div>

<script>

var saying = function() { console.log('hi'); };

document.body.addEventListener('click', function() {
    console.log('dude');
});
document.querySelector('div').addEventListener('click', saying);

document.querySelector('div').removeEventListener('click', saying);
document.body.removeEventListener('click', function() {
    console.log('dude');
});

</script> 
</body>
</html>
```

使用 addEventListener() 方法添加的匿名函数无法删除。

### 11.6 从事件对象获取事件属性

默认情况下，为事件调用的处理程序或回调函数会发送一个参数，其中包含有关事件本身的所有相关信息。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>

<script>

// PointerEvent > MouseEvent > UIEvent > Event > Object
document.querySelector('div').addEventListener('click', function(event) {
    console.log(event);
});

// Event > Object
this.addEventListener('load', function(event) {
    console.log(event);
});

</script> 
</body>
</html>
```

每个事件都会根据事件类型包含略有不同的属性（例如 MouseEvent，KeyboardEvent，WheelEvent）。

### 11.7 使用 AddEventListener() 时 this 的值

事件侦听器函数内部的 this 值传递给 AddeventListener() 方法将是对附加了事件的节点或对象的引用。  
在下面的代码中，我将事件附加到 `<div>` ，然后在事件侦听器的内部使用 this 访问附加了事件的 `<div>` 元素。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>

<script>

var div = document.querySelector('div');

div.addEventListener('click', function() {
    console.log(this);    // div
});

</script> 
</body>
</html>
```

当事件作为事件流的一部分调用时，该值将保留为侦听器附加的节点或对象的值。

```html
<!DOCTYPE html>
<html lang="en">

<body>

<div>click me</div>

<script>

var div = document.querySelector('div');

div.addEventListener('click', function() {
    console.log(this);    // div
});

document.body.addEventListener('click', function() {
    console.log(this);    // body
})

</script> 
</body>
</html>
```

使用 Event.currenttarget 属性获取相同的引用，以调用事件侦听器的节点或对象。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>

<script>

document.addEventListener('click', (event) => {
    console.log('document', event.currentTarget);
})

document.body.addEventListener('click', function(event) {
    console.log('body', event.currentTarget);
})

document.querySelector('div').addEventListener('click', function(event) {
    console.log('div', event.currentTarget);
});

</script> 
</body>
</html>
```

### 11.8 引用事件的目标 target，而不是调用事件的节点或对象

由于事件流，因此可能会单击 `<div>`，其包含在 `<body>` 元素的内部，并在 `<body>` 元素上附加了单击事件侦听器被调用。发生这种情况时，事件对象传递给附加到 `<body>` 的事件侦听器函数，向事件发起的节点或对象（即目标）提供了引用（即 Event.target）。

```html
<!DOCTYPE html>
<html lang="en">

<body>

<div>click me</div>

<script>

document.body.addEventListener('click', function(event) {
    console.log(event.currentTarget, event.target);
});

</script> 
</body>
</html>
```

### 11.9 使用 preventDefault() 取消默认浏览器事件

Event:preventDefault() 方法告诉用户代理，如果事件未明确处理，则不应按照通常的方式采取其默认操作。

在下面的代码中，使用 preventDefault() 可以防止在 `<a>`，`<aput>` 和 `<textarea>` 上发生的默认事件。

```html
<!DOCTYPE html>
<html lang="en">

<body>

<a href="http://google.com">no go</a>

<input type="checkbox" />

<textarea></textarea>
    

<script>

document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
});

document.querySelector('input').addEventListener('click', (event) => {
    event.preventDefault();
});

document.querySelector('textarea').addEventListener('keypress', (event) => {
    event.preventDefault();
});

document.body.addEventListener('click', () => {
    console.log('thie event flow still flows!');
});

</script> 
</body>
</html>
```

- preventDefault() 方法不会阻止事件传播（即冒泡或捕获阶段）。

### 11.10 使用 stopPropagation() 停止事件流

事件接口的 stopPropagation() 方法阻止了捕获和冒泡阶段中当前事件的进一步传播。  

在下面的代码中，连接到 `<body>` 的 ONCLICK 事件永远不会被调用，因为在单击 `<div>` 时，我们阻止了该事件在 DOM 冒泡。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>    

<script>

const div = document.querySelector('div');

div.addEventListener('click', () => {
    console.log('me too, but nothing from the event flow!');
});

div.addEventListener('click', (event) => {
    console.log('invoked all click events attached, but cancel capture and bubble event phases');
    event.stopPropagation();
});

div.addEventListener('click', () => {
    console.log('me too, but nothing from the event flow!');
});

document.body.addEventListener('click', () => {
    console.log('What, denied from being invoked!');
});

</script> 
</body>
</html>
```

NOTE:
- 附加到 `<div>` 的其他点击事件仍然被调用。
- 它不能阻止任何默认行为发生。 例如，单击链接仍在处理。

### 11.11 使用 stopImmediatePropagation() 阻止同一事件的其他听众被调用

如果将几个侦听器连接到同一事件类型的同一元素上，则按添加的顺序调用它们。 如果在一个这样的调用中调用 stopImmediatePropagation()，则不会在该元素或任何其他元素上调用其余的侦听器。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>    

<script>

const div = document.querySelector('div');

div.addEventListener('click', () => {
    console.log('I get invoked because I was attached first');
})

div.addEventListener('click', (event) => {
    console.log('I get invoked, but stop any other click events on this target');
    event.stopImmediatePropagation();
});

div.addEventListener('click', () => {
    console.log('I get stopped from the previous click event listener');
});

document.body.addEventListener('click', () => {
    console.log('What, denied from being invoked!');
})

</script> 
</body>
</html>
```

### 11.12 自定义事件

使用 CustomEvent 接口自定义事件。该接口从其父级 Event 继承了方法。  
CustomEvent.detail: 返回初始化事件时传递的任何数据。  
EventTarget 的 dispatchEvent() 方法将事件发送到对象，以适当的顺序（同步）调用受影响的事件侦听器。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>click me</div>    

<script>

const div = document.querySelector('div');

const customEvent = new CustomEvent("awesome", {
    bubbles: true,
    detail: { text: "It's awesome!" }
});

document.body.addEventListener("awesome", (e) => {
    console.log(e.detail.text);
});

div.addEventListener('click', function() {
    this.dispatchEvent(customEvent);
});

</script> 
</body>
</html>
```

### 11.13 模拟/触发鼠标事件

在模拟鼠标事件的情况下，我们使用 CustomEvent 创建一个“MouseEvent”。 然后，鼠标事件被调度到我们想要模拟事件的元素上（即 html 文档中的 `<div>`）。 在下面的代码中，单击事件附加到页面中的 `<div>`。 不是单击 `<div>` 来调用单击事件，而是通过以编程方式设置鼠标事件并将该事件分派到 `<div>` 来触发或模拟该事件。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<div>no need to click, we programatically trigger it</div>    

<script>

const div = document.querySelector('div');

const customClick = new CustomEvent("click", {
    detail: { text: () => div.textContent }
});

div.addEventListener('click', (e) => {
    console.log(e.detail.text());
});

div.dispatchEvent(customClick);

</script> 
</body>
</html>
```

### 11.14 事件委托

事件委托是利用事件流和单个事件侦听器来处理多个事件目标的编程行为。  
想象一下，有一个行数和列数不受限制的表。 使用事件委托，我们可以将单个事件侦听器添加到 `<table>` 节点，该节点充当作为事件初始目标的节点或对象的委托。 

在下面的代码示例中，单击任何 `<td>`（即事件的目标）会将其事件委托给 `<table>` 上的单击侦听器。 这一切都是由于事件流以及在这种特定情况下的冒泡阶段而成为可能的。

```html
<!DOCTYPE html>
<html lang="en">
<body>

<p>Click a table cell</p>

<table border="1">
    <tbody>
        <tr><td>row 1 column 1</td><td>row 1 column 2</td></tr>
        <tr><td>row 2 column 1</td><td>row 2 column 2</td></tr>
        <tr><td>row 3 column 1</td><td>row 3 column 2</td></tr>
        <tr><td>row 4 column 1</td><td>row 4 column 2</td></tr>
        <tr><td>row 5 column 1</td><td>row 5 column 2</td></tr>
        <tr><td>row 6 column 1</td><td>row 6 column 2</td></tr>
    </tbody>
</table>   

<script>

document.querySelector('table').addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'td') {
        console.log(e.target.textContent);
    }
});

</script> 
</body>
</html>
```


## 12 创建 dom.js - 一个受 jQuery 启发的现代浏览器 DOM 库

### 12.1 dom.js 概述

将 dom.js 视为库的基础，用于选择 DOM 节点并使用它们执行某些操作。 dom.js 代码将提供一个函数，用于从 DOM 中选择（或创建）某些内容，然后用它执行某些操作。 

下面展示了 dom() 函数的一些示例。

选择文档中第一个 ul 中的所有 li 并获取第一个 li 的 innerHTML:  
`dom('li', 'ul').html();`  

使用文档片段创建 html 结构并获取 ul 的 innerHTML:  
`dom('<ul><li>hi</li></ul>').html();`

对于大多数读者来说，本章只是一个练习，将本书中的信息应用到 JavaScript DOM 库中。 对于其他人来说，这可能只是对 jQuery 本身以及当今 JavaScript 框架中使用的任何 DOM 操作逻辑有所了解。 理想情况下，最后，我希望这个练习能够激励读者在情况合适时根据需要制作自己的微 DOM 抽象。 话虽如此，让我们开始吧。

### 12.2 创建唯一的作用域

为了保护 dom.js 代码免受全局作用域的影响，首先创建一个独特的作用域，它可以在其中生存和运行，而不必担心全局作用域中的冲突。 

在下面的代码中，设置一个非常标准的立即调用函数表达式来创建这个私有作用域。 当调用 IIFE 时，global 的值将被设置为当前全局作用域（即 window）。

```js
(function(win) {
    var global = win;
    var doc = this.document;
})(window);
```

在 IIFE 内部，我们设置了对窗口和文档对象（即 doc）的引用，以加快对 IIFE 内部这些对象的访问。

### 12.3 创建 dom() 和 GetOrMakeDom() 函数，将 dom() 和 GetOrMakeDom.prototype 公开到全局作用域

将创建一个函数，该函数将根据参数返回 DOM 节点（例如 `{0:ELEMENT_NODE,1:ELEMENT_NODE,length:2}`）的可链式包装集（即自定义数组类对象） 发送到函数中。 

在下面的代码中，我设置了 dom() 函数和参数，这些函数和参数传递给 GetOrMakeDOM 构造函数，调用该函数时将返回包含 DOM 节点的对象，然后从 dom() 返回该对象。

```js{5-11}
(function(win) {
    var global = win;
    var doc = this.document;

    var dom = function(params, context) {
        return new GetOrMakeDom(params, context);
    };

    var GetOrMakeDom = function(params, context) {
        
    };
})(window);
```

为了从 IIFE 设置的私有作用域之外访问/调用 dom() 函数，我们必须将 dom 函数（即创建引用）公开到全局作用域。 

这是通过在全局作用域中创建一个名为 dom 的属性并将该属性指向本地 dom() 函数来完成的。当从全局作用域访问 dom 时，它将指向本地作用域 dom() 函数。 

在下面的代码中，global.dom = dom; 就可以了。

```js{14}
(function(win) {
    var global = win;
    var doc = this.document;

    var dom = function(params, context) {
        return new GetOrMakeDom(params, context);
    };

    var GetOrMakeDom = function(params, context) {
        
    };

    // expose dom to global scope
    global.dom = dom;
})(window);
```

需要做的最后一件事是将 GetOrMakeDom.prototype 属性公开到全局范围。

```js{17}
(function(win) {
    var global = win;
    var doc = this.document;

    var dom = function(params, context) {
        return new GetOrMakeDom(params, context);
    };

    var GetOrMakeDom = function(params, context) {
        
    };

    // expose dom to global scope
    global.dom = dom;

    // short cut to prototype
    dom.fn = GetOrMakeDom.prototype;
})(window);
```

现在，附加到 dom.fn 的任何内容实际上都是 GetOrMakeDOM.prototype 对象的属性，并且在从 GetOrMakeDOM 构造函数创建的任何对象实例的属性查找期间继承。

### 12.4 创建传递给 dom() 的可选上下文参数

当调用 dom() 时，它还会调用 GetOrMakeDom 函数，并将发送到 dom() 的参数传递给它。 当调用 GetOrMakeDOM 构造函数时，我们需要做的第一件事是确定上下文。 可以通过传递用于选择节点或节点引用本身的选择器字符串来设置使用 DOM 的上下文。 如果将上下文传递给 dom() 函数的目的并不明显，则可以将元素节点的搜索限制到 DOM 树的特定分支。 

在下面的代码中，我将上下文默认为在全局范围内找到的当前文档。 如果上下文参数可用，我确定它是什么（即字符串或节点），然后使节点在上下文中传递或通过 querySelectorAll() 选择一个节点。

```js{10-17}
(function(win) {
    var global = win;
    var doc = this.document;

    var dom = function(params, context) {
        return new GetOrMakeDom(params, context);
    };

    var GetOrMakeDom = function(params, context) {
        var currentContext = doc;
        if (context) {
            if (context.nodeType) {
                currentContext = context;
            } else {
                currentContext = doc.querySelector(context);
            }
        }
    };

    // expose dom to global scope
    global.dom = dom;

    // short cut to prototype
    dom.fn = GetOrMakeDom.prototype;
})(window);
```

通过上下文参数逻辑设置，接下来可以添加处理用于实际选择或创建节点的 params 参数所需的逻辑。

### 12.5 根据参数使用 DOM 节点引用填充对象并返回对象

传递给 dom() 和 getOrMakeDom() 的 params 参数类型有所不同。 

传递的值类型可以是以下任意一种：
- css 选择器字符串（例如 `dom('body')`）
- html 字符串（例如 `dom('<p>Hellow</p><p> World!</p>')`）
- 元素节点（例如 `dom(document.body)`）
- 元素节点数组（例如 `dom([document.body])`）
- NodeList（例如 `dom(document.body.children)`）
- HTML 集合（例如 `dom(document.all)`）
- dom() 对象本身。 （例如 `dom(dom())`）

传递参数的结果是构造一个可链式对象，其中包含对 DOM 或文档片段中的节点（例如 `{0:ELEMENT_NODE,1:ELEMENT_NODE,length:2}`）的引用。 让我们检查一下如何使用上述每个参数来生成包含节点引用的对象。

下面的代码显示了允许如此多种参数类型的逻辑，并从一个简单的检查开始，以验证 params 是否未定义、空字符串或带有空格的字符串。 如果是这种情况，我们将值为 0 的 length 属性添加到通过调用 GetOrMakeDOM 构造的对象并返回该对象，以便函数的执行结束。 如果 params 不是 false（或类似 false）值，则函数继续执行。

接下来，检查参数值（如果是字符串）是否包含 HTML。 如果字符串包含 HTML，则创建一个文档片段，并将该字符串用作文档片段中包含的 `<div>` 的 innerHTML 值，以便将该字符串转换为 DOM 结构。 将 html 字符串转换为节点树后，该结构将循环访问顶级节点，并且对这些节点的引用将传递给 GetOrMakeDom 创建的对象。 如果字符串不包含 HTML，则函数继续执行。

下一个检查只是验证 params 是否是对单个节点的引用，如果是，我们将对它的引用包装在一个对象中并返回它。否则，我们非常确定 params 值是 html 集合、节点列表、数组、字符串选择器或从 dom() 创建的对象。 如果它是字符串选择器，则通过在 currentContext 上调用 queryselectorAll() 方法来创建节点列表。 如果它不是字符串选择器，我们将循环遍历 html 集合、节点列表、数组或对象，提取节点引用并将这些引用用作从调用 GetOrMakeDom 发送回的对象中包含的值。

GetOrMakeDom() 函数内部的所有逻辑可能有点让人不知所措，只需意识到构造函数的要点是构造一个包含对节点的引用的对象（例如 `{0:ELEMENT_NODE,1:ELEMENT_NODE,length:2}`）并且 返回该对象给 dom()。

```js{9,21-59}
(function(win) {
    var global = win;
    var doc = this.document;

    var dom = function(params, context) {
        return new GetOrMakeDom(params, context);
    };

    var tag = /^\s*<(\w+|!)[^>]*>/;

    var GetOrMakeDom = function(params, context) {
        var currentContext = doc;
        if (context) {
            if (context.nodeType) {
                currentContext = context;
            } else {
                currentContext = doc.querySelector(context);
            }
        }

        // if no params, return empty dom() object
        if (!params || params === '' || typeof params === 'string' && params.trim() === '') {
            this.length = 0;
            return this;
        }

        if (typeof params === 'string' && tag.test(params)) {
            var div = currentContext.createElement('div');
            div.className = 'hippo-doc-frag-wrapper';
            var frag = currentContext.createDocumentFragment();
            frag.appendChild(div);
            console.assert(div === frag.querySelector('div'));
            div.innerHTML = params;
            var nChild = div.children.length;
            for (let i = 0; i < nChild; i++) {
                this[i] = div.children[i];
            }
            this.length = nChild;
            return this;
        }

        if (typeof params === 'object' && params.nodeName) {
            this.length = 1;
            this[0] = params;
            return this;
        }

        var nodes;
        if (typeof params !== 'string') {
            nodes = params;
        } else {
            nodes = currentContext.querySelectorAll(params.trim());
        }
        var length = nodes.length;
        for (let i = 0; i < length; i++) {
            this[i] = nodes[i];
        }
        this.length = length;
        return this;
    };

    // expose dom to global scope
    global.dom = dom;

    // short cut to prototype
    dom.fn = GetOrMakeDom.prototype;
})(window);
```

### 12.6 创建 each() 方法并使其成为可链接的方法




## END
