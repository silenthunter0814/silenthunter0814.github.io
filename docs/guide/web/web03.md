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
const prefix = '<p style=color:green;>';
const suffix = '</p>';
for (let key in Node) {
    document.writeln(prefix + key + ' = ' + Node[key] + suffix);
}
```

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