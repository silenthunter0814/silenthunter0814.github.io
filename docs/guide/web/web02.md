---
description: javascript 开发教程。jaascript 课程课件，学习笔记。  
author: silenthunter0814, Silent Hunter
---

# web02 JavaScript 教程

环境需求
  - google chrome 浏览器
  - google chrome devtools 开发者工具


## 1 JavaScript 基础

### 1.1 Hello world

编写如下 index.html 文件:

```html{5,6,7,9}
<!DOCTYPE html>
<html>
<body>

<script>
    console.log("Hello world");    
</script>
    
<script src="./main.js"></script>
    
</body>
</html>
```

在 chrome 中打开 index.html 文件；打开开发者控制台，可以看到 `Hellow world` 输出。

- 使用 `<script>` 标签将 JavaScript 程序插入到 HTML 文档中，通常位于 `<body>` 底部位置。
- 内联脚本直接插入 HTML 文档中。
- 外联脚本使用 `<script src="pathname"></script>` 格式，脚本位于外部单独文件中。

```js
// main.js file

console.log("It's my first JavaScript file.");
```

JavaScript 注释：
- `//` 用于单行注释
- `/* ... */` 用于多行注释，也称为块注释

### 1.2 数据类型

### 1.3 变量，表达式和简单语句

### 1.4 if else 语句

### 1.5 while for 循环语句

### 1.6 switch 多路选择语句

## 2 Function 函数

## 3 Object 对象

## 4 Array 数组