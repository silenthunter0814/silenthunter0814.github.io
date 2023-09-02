---
description: JavaScript 语言精粹。javascript 课程课件，学习笔记。  
author: silenthunter0814, Silent Hunter
---

# Javascript 语言精粹

book: JavaScript: The Good Parts  
authors: Douglas Crorkford

课程视频：
- 油管: https://youtube.com/@silenthunter0814
- B 站：https://space.bilibili.com/1551957972


---  
<details>
<summary>章节目录</summary>

[[toc]]

</details>

## 1 语言精粹

### 1.1 为什么选择 JavaScript？

JavaScript 是网络浏览器的语言。 它与浏览器的联系使其成为世界上最流行的编程语言之一。

JavaScript 的神奇之处在于，即使不了解该语言，甚至不了解编程，也可以使用它完成工作。 它是一种具有巨大表达能力的语言。

### 1.2 分析 JavaScript

JavaScript 是一种松散类型语言，因此 JavaScript 编译器无法检测类型错误。 对于从强类型语言转向 JavaScript 的人来说，这可能会令人震惊。 但事实证明，强类型并不能消除仔细测试的需要。

JavaScript 有一个非常强大的对象字面量表示法。

JavaScript 中一个有争议的特性是原型继承。

尽管 JavaScript 有缺陷，但它确实很好。 它重量轻且富有表现力。 一旦掌握了函数式编程的窍门，它就会变得非常有趣。

### 1.3 一个简单的测试场

创建一个名为 program.html 的 HTML 文件：

```html
<html>
    <body>
        <pre>
            <script src="program.js"></script>
        </pre>
    </body>
</html>
```

`<pre>` 元素表示预格式化文本，该文本将完全按照 HTML 文件中的写入方式呈现。 文本通常使用非比例或等宽字体呈现。 该元素内的空白按书写方式显示。

然后，在同一目录中创建一个名为 program.js 的文件：

```js
document.writeln('Hello, world!');
```

接下来，在浏览器中打开 HTML 文件以查看结果。 

在整本书中，方法 `method` 用于定义新方法。 这是它的定义：

```js
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
```

将在第 4 章中进行解释。

## 2 语法

本章介绍了 JavaScript 优秀部分的语法，快速概述了该语言的结构。 我们将用铁路图来表示语法。

解释这些图的规则很简单：
- 从左侧边缘开始，沿着轨道到达右侧边缘。
- 在进行过程中，您将遇到椭圆形中的文字以及矩形中的规则或描述。
- 任何可以通过跟踪轨道进行的序列都是合法的。
- 任何不能按照轨迹完成的序列都是不合法的。
- 两端各有一个条的铁路图允许在任意一对标记之间插入空格。 两端有两个条的铁路图则不然。

本章中介绍的优秀部分的语法比整个语言的语法要简单得多。

### 2.1 Whitespace 空白字符

空白可以采用格式化字符或注释的形式。 空格通常无关紧要，但有时需要使用空格来分隔字符序列，否则这些字符序列将组合成单个标记。 例如，在：

`var that = this;`

`var` 和 `that` 之间的空格不能去掉，但其他空格可以去掉。

![](https://silenthunter0814.github.io/pub/web03/2.1.png)

JavaScript 提供两种形式的注释，以 `/* */` 形成的块注释和以 `//` 开头的行结束注释。

块注释对于注释代码块并不安全。 例如：

```js
/*
    var rm_a = /a*/.match(s);
*/
```

将导致语法错误。

### 2.2 Names 名称

名称是一个字母，可选后跟一个或多个字母、数字或下划线。

![](https://silenthunter0814.github.io/pub/web03/2.2.png)

`$` 应被视作字符，可位于名称的任何位置。

名称用于语句、变量、参数、属性名称、运算符和标签。

### 2.3 Numbers 数字

![](https://silenthunter0814.github.io/pub/web03/2.3.png)

JavaScript 有单一数字类型。 在内部，它表示为 64 位浮点数。  
它没有单独的整数类型，因此 1 和 1.0 是相同的值。  
`console.log(1.0 === 1);  // true`

![](https://silenthunter0814.github.io/pub/web03/2.4.png)

如果数字文字具有指数部分，则文字的值是通过将 `e` 之前的部分乘以 10 的 `e` 后面部分的幂来计算的。 所以 100 和 `1e2` 是相同的数字。

负数可以通过使用 `-` 前缀运算符形成。

`NaN` 值是一个数字值，它是无法产生正常结果的运算的结果。 `NaN` 不等于任何值，包括其本身。 可以使用 `isNaN(number)` 函数检测 NaN。

值 `Infinity` 表示大于 1.79769313486231570e+308 的所有值。

数字有方法（参见第 8 章）。 JavaScript 有一个 `Math` 对象，其中包含一组作用于数字的方法。 例如，`Math.floor(number)` 方法可用于将数字转换为整数。

### 2.4 Strings 字符串

字符串文字可以用单引号或双引号引起来。 它可以包含零个或多个字符。 `\`（反斜杠）是转义字符。 JavaScript 是在 Unicode 是 16 位字符集的时候构建的，因此 JavaScript 中的所有字符都是 16 位宽。

现代浏览器大多设置为变长字符集：`charset="utf-8"`。这意味着字符可以是 8 位， 16 位或 32 位。

JavaScript 没有字符类型。 要表示一个字符，请创建一个仅包含一个字符的字符串。

![](https://silenthunter0814.github.io/pub/web03/2.5.png)

![](https://silenthunter0814.github.io/pub/web03/2.6.png)

转义序列允许将通常不允许的字符插入到字符串中，例如反斜杠、引号和控制字符。 `\u` 约定允许以数字方式指定字符代码点。  
`console.log("A" === "\u0041");  // true`

字符串具有长度属性。 例如：  
`console.log("seven".length === 5);  // true`

字符串是不可变的。 一旦制作完成，字符串就永远无法更改。 但是通过使用 `+` 运算符将其他字符串连接在一起可以很容易地创建一个新字符串。

包含完全相同且顺序相同的字符的两个字符串被认为是同一个字符串。 所以：  
`console.log('c' + 'a' + 't' === 'cat');`

是真。

字符串有方法（参见第 8 章）：  
`console.log('cat'.toUpperCase() === 'CAT');  // true`

### 2.5 Statements 语句

![](https://silenthunter0814.github.io/pub/web03/2.7.png)

编译单元包含一组可执行语句。 在 Web 浏览器中，每个 `<script>` 标签都会提供一个编译单元，该编译单元会被编译并立即执行。 

当在函数内部使用时，`var` 语句定义函数的局部变量。  
`let` 定义块级作用域变量。块是一组用花括号括起来的语句。

语句往往按从上到下的顺序执行。 执行顺序可以通过条件语句（`if` 和 `switch`）、循环语句（`while`、`for` 和 `do`）、中断语句（`break`、`return` 和 `throw`）以及函数调用来更改。

![](https://silenthunter0814.github.io/pub/web03/2.8.png)

![](https://silenthunter0814.github.io/pub/web03/2.9.png)

![](https://silenthunter0814.github.io/pub/web03/2.10.png)

![](https://silenthunter0814.github.io/pub/web03/2.11.png)

