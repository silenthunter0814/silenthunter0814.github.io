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

`typeof` 运算符  
typeof 运算符返回一个字符串，表示操作数的类型。

`console.log(tyepof 23)    // 'number'`   
`console.log(typeof "hello")    // 'string'`

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

#### null

null 是一个特殊值，表示不存在值。  
这在其他语言中也是一个常见的概念，例如在 Python 中可以称为 nil 或 None。

`console.log(typeof null);   // 'object'`

#### undefined

undefined 表示变量尚未初始化且值不存在。

它通常由没有返回值的函数返回。 当函数接受参数但调用者未设置该参数时，该参数是未定义的。

要检测值是否未定义，请使用以下构造：

`typeof variable === 'undefined'`

#### Object 类型

任何不是基本类型的都是对象类型。

函数、数组以及我们所说的对象都是对象类型。 它们本身很特殊，但它们继承了对象的许多属性，例如拥有属性以及可以作用于这些属性的方法。


### 1.3 变量，表达式和简单语句

变量是分配给标识符的文字，因此稍后可以在程序中引用和使用它。

JavaScript 中的变量没有附加任何类型。 将特定文字类型分配给变量后，可以稍后重新分配该变量以承载任何其他类型，而不会出现类型错误或任何问题。

必须先声明变量，然后才能使用它。 

有 3 种方法可以做到这一点，使用 var 、 let 或 const ，这 3 种方法的不同之处在于稍后与变量交互的方式。

#### 变量的声明和定义

声明一个变量：

```js
var a;
console.log("The type of a is: " + typeof a);
```

变量定义：通过赋值运算符 `=` 为声明的变量进行初始化。

```js
var a = 3;
var msg = "hello";
```

还可以在同一条语句中一次声明多个变量：

```js
var a = 1, b = 2;

// 或者
var x = 3,
    y = "hi",
    z = false;

// 或者
var x = 3
    , y = "hi"
    , z = false;
```

let 可以声明具有块及作用域的变量，let 可以完全替换 var 关键字来声明变量。

const 用来声明常量，作用域同 let 相同。

使用 var 或 let 声明的变量可以稍后在程序中更改并重新分配。 一旦 const 声明被初始化，它的值就再也不能改变，也不能被重新分配给不同的值。

```js
let x = 3, y = "hi";

x = 4;
x = y;

const pi = 3.14;
pi = 3.1415;   // error
```

#### 变量命名规则

JavaScript 的变量命名有两个限制：
- 变量名称必须仅包含字母、数字、符号 `$` 和 `_`。
- 首字符必须非数字。

```js
let $ = 3;
let _ = 2;

let 2a;   // 不能以数字开始
let my-name;    // 算术运算符 '-' 不允许用于变量命名
```

#### Expression 表达式和语句

表达式是可以计算并解析为值的代码单元。

表达式后跟一个 `;` 形成一条语句。

JS 中的表达式可以分为几类。

- 赋值表达式: `variable =  expression` 

```js
  var x, y;

  x = 3;
  y = x;
  y = x = 4;
  ```

- 算术表达式  
  在此类别下包含所有计算结果为数字的表达式：

```js
var i;

1 + 2;

i = i + 1;
i += 1;
i++;

i = i * 2;
i *= 2;
```

- 字符串表达式

### 1.4 if else 语句

### 1.5 while for 循环语句

### 1.6 switch 多路选择语句

## 2 Function 函数

## 3 Object 对象

## 4 Array 数组