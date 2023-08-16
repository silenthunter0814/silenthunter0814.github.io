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

JavaScript 提供了两大类数据类型：原始类型和对象类型。

原始类型：
- Numbers 8 字节浮点数
- String 只读字符串
- Boolean 值为 `true` 或 `false`
- null 值为 空 的对象类型
- undefined 

#### Numbers

在内部，JavaScript 只有一种数字类型：每个数字都是浮点数。

数字文字是源代码中表示的数字，根据其编写方式，它可以是整数文字或浮点文字。

- 整数： `8`, `353535`, `0x2a`
- 浮点数: `3.14`, `0.8`, `1.2e3`

算术运算符： `+`, `-`, `*`, `/`, `%`, `()`

算术表达式： `3 + 4`, `2 - 5 * 6`, `5 * (1 + 2) / 3`

#### String

字符串类型是字符序列。 它在源代码中定义为字符串文字，用引号或双引号括起来:
- `'a string'`
- `"another string"`

使用反斜杠字符串可以跨越多行

```
"a long line \
string"
```
 
字符串可以包含可以在打印字符串时解释的转义序列，例如 \n 创建新行。 当需要在引号括起来的字符串中输入引号时，反斜杠也很有用，以防止字符被解释为结束引号：
- `'hello\n'`
- `'I\'m a coder'` 等同于 `"I'm a coder"`

可以使用 + 运算符连接字符串：

`"hello " + "world"` -> `"hello world"`

#### Boolean

JavaScript 为布尔值定义了两个保留字：`true` 和 `false`。 多个比较操作运算符返回其中之一。如 `>, <, >=, <=, ===, !===`。
if 、 while 语句和其他控制结构使用布尔值来确定程序的流程。

假值，解释值为 `false`，包括:

```
0
-0
undefined
null
""    // empty string
```

其余的都被认为是 `true`。


### 1.3 变量，表达式和简单语句

### 1.4 if else 语句

### 1.5 while for 循环语句

### 1.6 switch 多路选择语句

## 2 Function 函数

## 3 Object 对象

## 4 Array 数组