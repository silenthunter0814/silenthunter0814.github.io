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

    <script src="./main.js"></script>
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

```javascript
// <a href="#">Hi</a>
var anchor = document.querySelector('a');
var props = [];

for(var key in anchor){
    props.push(key);   
}
console.log(props.sort());
console.dir(anchor);
```

Document 方法 querySelector() 返回文档中与指定选择器或选择器组匹配的第一个元素。 如果未找到匹配项，则返回 null。  
NOTE: 匹配是使用文档节点的深度优先前序遍历来完成的。  

锚节点(a)继承自 HTMLAnchorElement、HTMLElement、Element、Node、EventTarget 和 Object。  
该继承链为所有节点类型提供了大量共享方法和属性。

### 1.4 工作节点的属性和方法

常见的节点属性和方法
- childNodes
- firstChild
- lastChild
- nextSibling 当前节点的下一个同级节点，如果没有则为 null。
- nodeName
- nodeType
- nodeValue 包含当前节点值（如果有）的字符串。 对于 document 本身，nodeValue 返回 null。
- parentNode
- previousSibling 当前节点的前一个兄弟节点，如果没有则为 null。




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