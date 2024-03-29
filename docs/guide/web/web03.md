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
`console.log('c' + 'a' + 't' === 'cat');  // true`

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

以下是虚假值：
- `false`
- `null`
- `undefined`
- The empty string `""`
- The number `0`
- The number `NaN`

所有其他值都是 `true`，包括 `true`、字符串 `“false”` 和所有对象。

![](https://silenthunter0814.github.io/pub/web03/2.12.png)

`switch` 语句执行多路分支。 它将表达式与所有指定的情况进行比较以确定是否相等。 该表达式可以生成数字或字符串。 当找到完全匹配时，执行匹配的 `case` 子句的语句。 如果没有匹配，则执行可选的 `default` 语句。

![](https://silenthunter0814.github.io/pub/web03/2.13.png)

`case` 子句包含一个或多个 `case` 表达式。 `case` 表达式不必是常量。 子句后面的语句应该是破坏性语句，以防止陷入下一种情况。 `Break` 语句可用于退出 `switch`。

![](https://silenthunter0814.github.io/pub/web03/2.14.png)

`while` 语句执行一个简单的循环。 如果表达式为假，则循环将中断。 当表达式为真时，该块将被执行。

`for` 语句是一个比较复杂的循环语句。 它有两种形式：  
常规形式由三个可选子句控制：初始化、条件和增量。 首先，完成初始化，这通常会初始化循环变量。 然后，评估条件。 通常，这会根据完成标准测试循环变量。 如果省略条件，则假定条件为 true。 如果条件为假，则循环中断。 否则，执行该块，然后执行增量，然后根据条件重复循环。

![](https://silenthunter0814.github.io/pub/web03/2.15.png)

另一种形式 `for in`（在 in 中调用）枚举对象的属性名称（或键）。 在每次迭代中，对象中的另一个属性名称字符串会被分配给该变量。

通常需要测试 `object.hasOwnProperty(variable` 来确定属性名称是否真正是对象的成员，还是在原型链上找到的。

```js
for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        ...
    }
}
```

对于实现了 `Symbol.iterator` 接口的对象，可以使用 `for of` 循环，例如数组:

```js
for (let prop of props) {
    ...
}
```

![](https://silenthunter0814.github.io/pub/web03/2.16.png)

`do` 语句与 `while` 语句类似，只不过表达式是在块执行之后而不是之前进行测试。 这意味着该块将始终至少执行一次。

![](https://silenthunter0814.github.io/pub/web03/2.17.png)

`try` 语句执行一个块并捕获该块引发的任何异常。 `catch` 子句定义了一个将接收异常对象的新变量。

![](https://silenthunter0814.github.io/pub/web03/2.18.png)

`throw` 语句引发异常。 如果 `throw` 语句位于 `try` 块中，则控制权将转到 `catch` 子句。 否则，函数调用将被放弃，控制权将转到调用函数中 `try` 的 `catch` 子句。  
该表达式通常是包含名称属性和消息属性的对象文字。 异常捕获器可以使用该信息来确定要做什么。

```js
function fn() {
    /* normal statements */
    if (true) {
        throw new Error("abort");
        cosole.log("can not goes here");
    }
}

try {
    fn();
} catch(error) {
    console.log(error);
}
```

![](https://silenthunter0814.github.io/pub/web03/2.19.png)

`return` 语句导致函数提前返回。 它还可以指定要返回的值。 如果未指定返回表达式，则返回值将是未定义的。

![](https://silenthunter0814.github.io/pub/web03/2.20.png)

`break` 语句导致循环语句或 `switch` 语句退出。

```js
var n = 0;
while (true) {
    if (n === 5) break;

    console.log(n++);
}
```

![](https://silenthunter0814.github.io/pub/web03/2.21.png)

表达式语句可以为一个或多个变量或成员赋值、调用方法、从对象中删除属性。 `=` 运算符用于赋值。 不要将它与 `===` 相等运算符混淆。 `+=` 运算符可以进行字符串连接。

```js
var x = 2,
    y = 3;

y += "" + x;
console.log(y);
```

### 2.6 Expressions 表达式

![](https://silenthunter0814.github.io/pub/web03/2.22.png)

最简单的表达式是文字值（例如字符串或数字）、变量、内置值（`true`、`false`、`null`、`undefined`、`NaN` 或 `Infinity`）、前面带有 `new` 的调用表达式、前面带有细化表达式，通过删除、括在括号中的表达式、前面带有前缀运算符的表达式或后面跟着以下内容的表达式：
- 一个中缀运算符和另一个表达式
-  `？` 三元运算符后跟另一个表达式，然后是 `:`，然后是另一个表达式
- An invocation 
- A refinement

`？` 三元运算符需要三个表达式。 如果第一个表达式为真，则生成第二个表达式的值。 但如果第一个表达式为假，则生成第三个表达式的值。

表2-1中运算符优先级列表顶部的运算符具有更高的优先级。 他们捆绑得最紧。 底部的运算符的优先级最低。 括号可用于更改正常优先级，因此：  
`2 + 3 * 5 === 17`  
`(2 + 3) * 5 === 25`

Table 2-1. Operator precedence


|        operator         | description |
|-------------------------|-------------|
| . [] ( )                | 细化和调用       |
| delete new typeof + - ! | 一元运算符       |
| * / %                   | 乘法、除法、余数    |
| + -                     | 加法/连接，减法    |
| >= <= > <               | 关系          |
| === !==                 | 相等于         |
| &&                      | 逻辑与         |
| \|\|                      | 逻辑或         |
| ?:                      | 三元          |

---  
![](https://silenthunter0814.github.io/pub/web03/2.23.png)

`typeof` 生成的值有 `“number”`、`“string”`、`“boolean”`、`“undefined”`、`“function”`和 `“object”`。 如果判断数组，需要使用 `Array.isArray(arr)` 进行判断。

如果 `!` 的操作数是 `true`，它会产生 `false`。 否则，它产生 `true`。

`+` 运算符进行算术加法或连接。 如果您希望它相加，请确保两个操作数都是数字。

即使两个操作数都是整数，`/` 运算符也可以产生非整数结果。

如果第一个操作数为假，&& 运算符将生成其第一个操作数的值。 否则，它生成第二个操作数的值。

![](https://silenthunter0814.github.io/pub/web03/2.24.png)

`||` 如果第一个操作数为真，则运算符生成其第一个操作数的值。 否则，它生成第二个操作数的值。

![](https://silenthunter0814.github.io/pub/web03/2.25.png)

调用会导致函数值的执行。 调用运算符是函数值后面的一对括号。 括号可以包含将传递给函数的参数。 第 4 章将详细介绍函数。

![](https://silenthunter0814.github.io/pub/web03/2.26.png)

细化用于指定对象或数组的属性或元素。 这将在下一章中详细描述。

### 2.7 Literals 文字/字面量

对象字面量是指定新对象的一种方便的表示法。 属性的名称可以指定为名称或字符串。 下一章将详细介绍对象字面量。

![](https://silenthunter0814.github.io/pub/web03/2.27.png)

![](https://silenthunter0814.github.io/pub/web03/2.28.png)

![](https://silenthunter0814.github.io/pub/web03/2.29.png)

数组文字是指定新数组的便捷表示法。 第 6 章将详细介绍数组文字。

![](https://silenthunter0814.github.io/pub/web03/2.30.png)

第 7 章将详细介绍正则表达式。

### 2.8 Functions 函数

![](https://silenthunter0814.github.io/pub/web03/2.31.png)

![](https://silenthunter0814.github.io/pub/web03/2.32.png)

![](https://silenthunter0814.github.io/pub/web03/2.33.png)

函数字面量定义函数值。 它可以有一个可选名称，可以用来递归地调用自身。 它可以指定一个参数列表，这些参数将充当由调用参数初始化的变量。 函数体包括变量定义和语句。 第 4 章将详细介绍函数。

## 3 Object 对象

JavaScript 的简单类型有数字、字符串、布尔值（`true` 和 `false`）、`null` 和 `undefined`。 所有其他值都是对象。 数字、字符串和布尔值与对象类似，因为它们具有方法，但它们是不可变的。 JavaScript 中的对象是可变键控集合。 在 JavaScript 中，数组是对象，函数是对象，正则表达式是对象，当然，对象也是对象。

对象是属性的容器，其中属性具有名称和值。 属性名称可以是任何字符串，包括空字符串。 属性值可以是除未定义之外的任何 JavaScript 值。

JavaScript 中的对象是无类的。 新属性的名称或属性的值没有限制。 对象对于收集和组织数据很有用。 对象可以包含其他对象，因此它们可以轻松表示树或图结构。

JavaScript 包含原型链接功能，允许一个对象继承另一个对象的属性。 如果使用得当，这可以减少对象初始化时间和内存消耗。

### 3.1 对象字面量

对象字面量为创建新对象值提供了非常方便的表示法。 对象字面量是一对围绕零个或多个名称/值对的大括号。 对象字面量可以出现在表达式可以出现的任何地方：

```js
var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
```

属性的名称可以是任何字符串，包括空字符串。 如果属性名称是合法的 JavaScript 名称而不是保留字，则对象字面量中属性名称周围的引号是可选的。 因此“first-name”周围需要引号，但first_name 周围的引号是可选的。 逗号用于分隔键值对属性。

属性的值可以从任何表达式获取，包括另一个对象文字。 对象可以嵌套：

```js
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
```

### 3.2 Retrieval 对象访问

通过将字符串表达式包装在 `[ ]` 后缀中，可以从对象中检索值。 如果字符串表达式是字符串文字，并且它是合法的 JavaScript 名称而不是保留字，则可以使用 `.` 记号代替。 `.` 运算符是首选表示法，因为它更紧凑并且读起来更好：

```js
stooge["first-name"]    //"Jerome"
flist.departure.IATA    // "SYD"
```

如果尝试检索不存在的成员，则会生成未定义的值：

```js
stooge["middle-name"]    // undefined
flight.status            // undefined
stooge["FIRST-NAME"]     // undefined
```

`||` 运算符可用于填充默认值：

```js
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
```

尝试从未定义中检索值将引发 TypeError 异常。 可以使用 `&&` 运算符来防止这种情况：

```js
flight.equipment    // undefined
flight.equipment.model    // throw "TypeError"
flight.equipment && flight.equipment.model     // undefined
```

### 3.3 Update 属性更新

对象中的值可以通过赋值来更新。 如果属性名称已存在于对象中，则替换属性值：  
`stooge['first-name'] = 'Jerome';`

如果该对象尚不具有该属性名称，则该对象将被增加新属性：

```js
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
```

### 3.4 Reference 引用

对象通过引用传递。 它们永远不会被复制：

```js
var stooge = {};
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
console.assert(nick === x.nickname);

var a = {}, b = {}, c = {};
console.assert(a !== b);

a = b = c = {};
console.assert(a === b);
```

### 3.5 Prototype 原型

每个对象都链接到一个原型对象，它可以从中继承属性。 所有从对象字面量创建的对象都链接到 `Object.prototype`，这是 JavaScript 的标准对象。

当创建一个新对象时，可以选择应该作为其原型的对象。 JavaScript 提供的执行此操作的机制混乱而复杂，但可以显着简化。 我们将向 Object 函数添加一个 `create` 方法。 `create` 方法创建一个使用旧对象作为其原型的新对象。 下一章将详细介绍函数。

```js
/* JavaScript 已提供此静态方法： Object.create() */

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
```

原型链接对更新没有影响。 当我们对一个对象进行更改时，该对象的原型不会被触及：

```js
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
```

原型链接仅用于检索。 如果我们尝试从对象中检索属性值，并且该对象缺少属性名称，则 JavaScript 会尝试从原型对象中检索属性值。 如果该对象缺少该属性，则它将转到其原型，依此类推，直到该过程最终以 `Object.prototype` 触底。 如果所需的属性在原型链中不存在，则结果是未定义的值。 这称为委托 (delegation)。

原型关系是一种动态关系。 如果我们向原型添加一个新属性，该属性将立即在基于该原型的所有对象中可见：

```js
stooge.profession = 'actor';
another_stooge.profession    // 'actor'
```

我们将在第 6 章中看到更多关于原型链的内容。

### 3.6 Reflection 反射

通过尝试检索属性并检查获得的值，可以轻松检查对象以确定其具有哪些属性。 `typeof` 运算符对于确定属性的类型非常有帮助：

```js
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
flight.status = 'overdue';

console.log(typeof flight.number === 'number');
console.log(typeof flight.status === 'string');
console.log(typeof flight.arrival === 'object');
console.log(typeof flight.manifest === 'undefined');
```

必须小心，因为原型链上的任何属性都可以产生一个值：

```js
console.log(typeof flight.toString === 'function');
console.log(typeof flight.constructor === 'function');
```

有两种方法可以处理这些不需要的属性。 第一个是让您的程序查找并拒绝函数值。 一般来说，当您反思时，您对数据感兴趣，因此您应该意识到某些值可能是函数。

另一种方法是使用 `hasOwnProperty` 方法，如果对象具有特定属性，该方法将返回 `true`。 `hasOwnProperty` 方法不查看原型链：

```js
console.log(flight.hasOwnProperty('number'));
console.log(!flight.hasOwnProperty('constructor'));
```

### 3.7 Enumeration 枚举

`for in` 语句可以循环遍历对象中的所有属性名称。 枚举将包括所有属性 - 包括您可能不感兴趣的函数和原型属性 - 因此有必要过滤掉您不想要的值。 最常见的过滤器是 `hasOwnProperty` 方法并使用 `typeof` 来排除函数：

```js
for (let name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(name + ': ' + another_stooge[name]);
    }
}
```

无法保证名称的顺序，因此请做好名称以任何顺序出现的准备。 如果要确保属性按特定顺序出现，最好完全避免使用 `for in` 语句，而是创建一个包含正确顺序的属性名称的数组：

```js
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (let i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' +
                    another_stooge[properties[i]]);
}
```

通过使用 `for` 而不是 `for in`，我们能够获得我们想要的属性，而不必担心可能会从原型链中挖掘出什么，并且我们以正确的顺序获得了它们。

### 3.8 Delete

删除运算符可用于从对象中删除属性。 如果对象有属性，它将从该对象中删除该属性。 它不会触及原型链接中的任何对象。

从对象中删除属性可能会让原型链接中的属性显现出来：

```js
stooge.nickname = 'Curly';
another_stooge.nickname = 'Moe';

delete another_stooge.nickname;
another_stooge.nickname    // 'Curly'
```

### 3.9 Global Abatement 减少全局变量

JavaScript 可以轻松定义可以保存应用程序所有资源的全局变量。 不幸的是，全局变量削弱了程序的弹性，应该避免。

最小化全局变量的使用的一种方法是为您的应用程序创建一个全局变量：

`var MYAPP = {};`

然后该变量将成为您的应用程序的容器：

```js
var MYAPP = {};

MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
```

通过将全局变量减少到一个名称，可以显着减少与其他应用程序、小部件或库发生不良交互的可能性。 程序也变得更易于阅读，因为很明显 MYAPP.stooge 指的是顶级结构。 在下一章中，我们将看到使用闭包进行信息隐藏的方法，这是另一种有效的全局消除技术。

## 4 Functions 

函数包含一组语句。 函数是 JavaScript 的基本模块化单元。 它们用于代码重用、信息隐藏和组合。 函数用于指定对象的行为。 一般来说，编程技巧是将一组需求分解为一组函数和数据结构。

### 4.1 Function Objects 函数对象

JavaScript 中的函数是对象。 对象是具有到原型对象的隐藏链接的名称/值对的集合。 从对象字面量生成的对象链接到 Object.prototype。 函数对象链接到 Function.prototype （它本身链接到 Object.prototype）。 每个函数还创建了两个附加的隐藏属性：函数的上下文和实现函数行为的代码。

每个函数对象也是使用原型属性创建的。 它的值是一个具有构造函数属性的对象，其值为函数。 这与 Function.prototype 的隐藏链接不同。 这种复杂结构的含义将在下一章中揭示。

由于函数是对象，因此可以像任何其他值一样使用它们。 函数可以存储在变量、对象和数组中。 函数可以作为参数传递给函数，并且函数可以从函数返回。 此外，由于函数是对象，因此函数可以具有方法。

函数的特殊之处在于它们可以被调用。

### 4.2 Function Literal 函数字面量

函数对象是用函数文字创建的：

```js
var add = function (a, b) {
    return a + b;
};
```

函数文字有四个部分。 第一部分是保留字 `function`。

可选的第二部分是函数的名称。 该函数可以使用其名称来递归调用自身。 调试器和开发工具也可以使用该名称来识别该函数。 如果函数没有给出名称，如前面的示例所示，则称该函数是匿名的。

第三部分是函数的参数集，用括号括起来。 括号内是一组零个或多个参数名称，以逗号分隔。 这些名称将在函数中定义为变量。 与普通变量不同，它们不会被初始化为未定义，而是被初始化为调用函数时提供的实参。

第四部分是一组用花括号括起来的语句。 这些语句是函数的主体。 它们在调用函数时执行。

函数文字可以出现在表达式可以出现的任何地方。 函数可以在其他函数内部定义。 内部函数当然可以访问其参数和变量。 内部函数还可以访问其嵌套函数的参数和变量。 由函数文字创建的函数对象包含到该外部上下文的链接。 这称为闭包。 这是巨大表现力的源泉。

### 4.3 Invocation 调用

调用函数会暂停当前函数的执行，并将控制权和参数传递给新函数。 除了声明的参数之外，每个函数还接收两个附加参数：this 和arguments。 this参数在面向对象编程中非常重要，它的值由调用模式决定。 JavaScript中有四种调用模式：方法调用模式、函数调用模式、构造函数调用模式和 `apply` 调用模式。 这些模式的不同之处在于额外参数的初始化方式。

调用运算符是一对括号，位于生成函数值的任何表达式之后。 括号可以包含零个或多个表达式，以逗号分隔。 每个表达式产生一个参数值。 每个参数值都将分配给函数的参数名称。 当实参数量和形参数量不匹配时，不会出现运行时错误。 如果参数值太多，多余的参数值将被忽略。 如果参数值太少，未定义的值将替换缺失的值。 对参数值没有类型检查：任何类型的值都可以传递给任何参数。

#### 4.3.1 方法调用模式

当函数存储为对象的属性时，我们将其称为方法。 当调用方法时， `this` 会绑定到该对象。 如果调用表达式包含细化（即 .dot 表达式或 [下标] 表达式），则将其作为方法调用：

```js
/*
创建 myObject. 它有一个值和一个增量方法。 增量方法采用可选参数。 
如果参数不是数字，则使用 1 作为默认值。
*/

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value);    // 1

myObject.increment(2);
document.writeln(myObject.value);    // 3
```

方法可以使用 `this` 来访问对象，以便它可以从对象中检索值或修改对象。 `this` 到对象的绑定发生在调用时。 这种非常晚的绑定使得使用这种方法的函数具有高度的可重用性。 从 `this` 中获取对象上下文的方法称为公共方法。

#### 4.3.2 函数调用模式

当函数不是对象的属性时，则将其作为函数调用：

```js
var add = function (a, b) {
    return a + b;
};

var sum = add(3, 4);    // 7
```

当使用此模式调用函数时， `this` 会绑定到全局对象。 这是语言设计中的一个错误。 如果语言设计正确，当调用内部函数时，`this` 仍然会绑定到外部函数的 `this` 变量。 此错误的结果是方法无法使用内部函数来帮助其完成工作，因为内部函数不共享该方法对对象的访问权限，因为它的 this 绑定到了错误的值。 幸运的是，有一个简单的解决方法。 如果该方法定义了一个变量并为其分配了 `this` 的值，则内部函数将可以通过该变量访问 `this`。 按照惯例，该变量的名称是 `that`：

```js
var add = function (a, b) {
    return a + b;
};

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
/* ------------------------------------------- */
// Augment myObject with a double method.

myObject.double = function () {
    var that = this;    // workaround.

    var helper = function() {
        that.value = add(that.value, that.value);
    };

    helper();    // Invoke helper as a function.
};
myObject.increment();
document.writeln(myObject.value);    // 1
myObject.increment(2);
document.writeln(myObject.value);    // 3

// Invoke double as a method.
myObject.double();
document.writeln(myObject.value);    // 6
```

#### 4.3.3 构造函数调用模式

JavaScript 是一种原型继承语言。 这意味着对象可以直接从其他对象继承属性。

如果使用 `new` 前缀调用函数，则会创建一个新对象，其中包含指向函数原型成员值 (prototype) 的隐藏链接，并且 `this` 将绑定到该新对象。

`new` 前缀还改变了 `return` 语句的行为。 接下来我们将看到更多相关内容。

```js
/*
创建一个名为 Quo 的构造函数。它创建一个具有 status 属性的对象。
*/

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method called get_status
Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo.
var myQuo = new Quo("confused");

document.writeln(myQuo.get_status());    // confused
```

旨在与 `new` 前缀一起使用的函数称为构造函数。 按照惯例，它们保存在名称大写的变量中。 如果在没有 `new` 前缀的情况下调用构造函数，则可能会在没有编译时或运行时警告的情况下发生非常糟糕的事情，因此大小写约定非常重要。

不建议使用这种风格的构造函数。 我们将在下一章中看到更好的替代方案。

#### 4.3.4 Apply 调用模式

因为 JavaScript 是一种函数式面向对象语言，所以函数可以有方法。

`apply` 方法让我们可以构造一个参数数组来调用函数。 它还可以让我们选择 `this` 的值。 `apply` 方法有两个参数。 第一个是应该绑定的 `this` 值。 第二个是参数数组。

```js{6,23}
var add = function (a, b) {
    return a + b;
};

var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7
document.writeln(sum);

/*
statusObject 不是继承自 Quo.prototype，但是即使 statusObject 没有 get_status 方法，
我们也可以调用 statusObject 上的 get_status 方法。
*/
var Quo = function (string) {
    this.status = string;
};
Quo.prototype.get_status = function () {
    return this.status;
};

var statusObject = {
    status: 'A-OK'
};
var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(status);
```

### 4.4 Arguments 参数数组

调用函数时可以使用的一个额外参数是参数数组。 它使函数可以访问调用时提供的所有参数，包括未分配给参数的多余参数。 这使得编写带有未指定数量的参数的函数成为可能：

```js
/*
创建一个添加很多东西的函数。
请注意，在函数内部定义变量 sum 不会干扰函数外部定义的 sum。 
该函数只能看到内部变量 sum。
*/

var sum = function () {
    var i, sum = 0;
    
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42));    // 108
```

这不是一个特别有用的模式。 在第 6 章中，我们将看到如何向数组添加类似的方法。

由于设计错误，`arguments` 并不是真正的数组。 它是一个类似数组的对象。 `arguments` 有一个 `length` 属性，但它缺少所有数组方法。 我们将在本章末尾看到该设计错误的后果。

### 4.5 Return 返回语句

当调用函数时，它从第一个语句开始执行，并在遇到关闭函数体的 `}` 时结束。 这会导致函数将控制权返回给调用该函数的程序部分。

`return` 语句可用于使函数提前返回。 当执行 `return` 时，函数立即返回，而不执行剩余的语句。

函数总是返回一个值。 如果未指定返回值，则返回 `undefined`。

如果使用 `new` 前缀调用该函数并且返回值不是对象，则返回 `this` （新对象）。

### 4.6 Exceptions 异常

JavaScript 提供了异常处理机制。 异常是不寻常的（但并非完全意外的）事故，会干扰程序的正常流程。 当检测到此类事故时，您的程序应该抛出异常：

```js
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}
```

`throw` 语句中断函数的执行。 应该给它一个异常对象，其中包含标识异常类型的名称属性和描述性消息属性。 您还可以添加其他属性。

异常对象将被传递到 `try` 语句的 `catch` 子句：

```js
// Make a try_it function that calls the new add function incorrectly.
var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it();
```

如果在 `try` 块内引发异常，控制权将转到其 `catch` 子句。

`try` 语句有一个 `catch` 块，可以捕获所有异常。 如果您的处理取决于异常的类型，则异常处理程序将必须检查名称以确定异常的类型。

### 4.7 Augmenting Types 扩充类型

JavaScript 允许增强该语言的基本类型。 在第 3 章中，我们看到向 `Object.prototype` 添加一个方法使得该方法可用于所有对象。 这也适用于函数、数组、字符串、数字、正则表达式和布尔值。

例如，通过扩充 Function.prototype，我们可以使一个方法可用于所有函数：

```js
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
```

通过使用 `method` 方法扩充 `Function.prototype`，我们不再需要键入原型属性的名称。 现在可以隐藏那一点丑陋了。

JavaScript 没有单独的整数类型，因此有时需要仅提取数字的整数部分。 JavaScript 提供的方法很丑陋。 我们可以通过向 `Number.prototype` 添加整数方法来修复它。 它使用 `Math.ceil` 或 `Math.floor`，具体取决于数字的符号：

```js
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10 / 3).integer());    // -3
```

JavaScript 缺少删除字符串末尾空格的方法。 这是一个很容易修复的疏忽：

```js
// Now, JavaScript has String.prototype.trim() method

String.method('myTrim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

var s = "    neat    ";
document.writeln('"' + s.trim() + '"');
document.writeln('"' + s.myTrim() + '"');
```

我们的修剪方法使用正则表达式。 我们将在第 7 章中看到更多有关正则表达式的内容。

通过扩充基本类型，我们可以显着提高语言的表达能力。 由于 JavaScript 原型继承的动态特性，所有值都会立即赋予新方法，甚至是在创建方法之前创建的值。

基本类型的原型是公共结构，因此混合库时必须小心。 一种防御技术是仅在已知方法缺失时才添加该方法：

```js
// Add a method conditionally.

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
```

另一个问题是 `for in` 语句与原型的交互很差。 我们在第 3 章中看到了几种缓解这种情况的方法：我们可以使用 `hasOwnProperty` 方法来筛选继承的属性，并且我们可以查找特定类型。

### 4.8 Recursion 递归

递归函数是直接或间接调用自身的函数。 递归是一种强大的编程技术，其中一个问题被分为一组相似的子问题，每个子问题都用一个简单的解决方案来解决。 通常，递归函数调用自身来解决其子问题。

河内塔是一个著名的谜题。 该设备包括三个立柱和一组不同直径的圆盘，圆盘的中心有孔。 该设置将所有圆盘堆叠在源柱子上，较小的圆盘放在较大的圆盘之上。 目标是通过一次将一个圆盘移动到另一个柱子来将堆叠移动到目标柱子，而不是将较大的圆盘放在较小的圆盘上。 这个谜题有一个简单的递归解决方案：

```js
var hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc +
                        ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};
hanoi(3, 'Src', 'Aux', 'Dst');
```
它为三张圆盘生成此解决方案：

```js
Move disc 1 from Src to Dst
Move disc 2 from Src to Aux
Move disc 1 from Dst to Aux
Move disc 3 from Src to Dst
Move disc 1 from Aux to Src
Move disc 2 from Aux to Dst
Move disc 1 from Src to Dst
```

`hanoi` 函数将一堆圆盘从一个柱子移动到另一个柱子，必要时使用辅助柱子。 它将问题分解为三个子问题。 首先，它通过将底部圆盘上方的子堆栈移动到辅助柱来揭开底部圆盘。 然后它可以将底部的圆盘移动到目标柱。 最后，它可以将子堆栈从辅助柱移动到目标柱。 子堆栈的移动是通过递归调用自身来解决这些子问题来处理的。

`hanoi` 函数传递了要移动的圆盘的编号以及要使用的三个柱子。 当它调用自身时，它是要处理它当前正在处理的圆盘之上的圆盘。 最终，它将用一个不存在的圆盘号来调用。 在这种情况下，它什么也不做。 这种虚无的行为让我们相信该函数不会永远递归。

递归函数在操作树结构（例如浏览器的文档对象模型（DOM））方面非常有效。 每个递归调用都会得到树的一小部分来处理：

```js
/*
定义一个 walk_the_DOM 函数，该函数从某个给定节点开始按 HTML 源代码顺序访问树的每个节点。
它调用一个函数，依次将每个节点传递给它。 walk_the_DOM 调用自身来处理每个子节点。
*/
var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

/*
定义 getElementsByAttribute 函数。 它采用属性名称字符串和可选的匹配值。 
它调用 walk_the_DOM，向其传递一个在节点中查找属性名称的函数。 匹配的节点累积在结果数组中。
*/
var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
           (actual === value || typeof value !== 'string')) {
            results.push(node);
           }
    });
    return results;
};

console.log(getElementsByAttribute("src"));
```

某些语言提供尾递归优化。 这意味着，如果一个函数返回递归调用自身的结果，则该调用将被替换为循环，这可以显着加快速度。 不幸的是，JavaScript 目前不提供尾递归优化。 深度递归的函数可能会因耗尽返回堆栈而失败：

```js
/*
使用尾递归创建阶乘函数。 它是尾递归的，因为它返回调用自身的结果。
*/
// JavaScript does not currently optimize this form.

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};
document.writeln(factorial(4));    // 24
```

### 4.9 Scope 作用域

编程语言中的作用域控制变量和参数的可见性和生命周期。 这对程序员来说是一项重要的服务，因为它减少了命名冲突并提供自动内存管理：

```js
var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;

        // a == 3, b == 7, c == 11
        a += b + c;

        // a == 21, b == 7, c == 11
    };
    // a == 3, b == 5, c is undefined
    bar();

    // a == 21, b == 5
};
```

大多数使用 C 语法的语言都有块作用域。 块（用大括号括起来的语句列表）中定义的所有变量从块外部都是不可见的。 当块执行完成时，可以释放块中定义的变量。 这是一件好事。

现代 JavaScript 提供了块作用域，使用 `let` 关键字进行声明：

```js
for (let i ...) {
    let a;
    ...
}
```

### 4.10 Closure 闭包

关于作用域的好消息是，内部函数可以访问定义它们的函数的参数和变量（除了 `this` 和 `arguments`）。 这是一件非常好的事情。

我们的 `getElementsByAttribute` 函数之所以有效，是因为它声明了一个 `results` 变量，并且它传递给 `walk_the_DOM` 的内部函数也可以访问 `results` 变量。

一个更有趣的情况是内部函数的生命周期比外部函数长。

之前，我们创建了一个具有值和增量方法的 `myObject`。 假设我们想要保护该值免遭未经授权的更改。

我们将通过调用返回对象字面量的函数来初始化 `myObject`，而不是使用对象字面量来初始化 `myObject`。 该函数定义了一个值变量。 该变量始终可用于 `increment` 和 `getValue` 方法，但函数的作用域使其对程序的其余部分隐藏：

```js{12}
var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
})();

myObject.increment();
document.writeln(myObject.getValue());    // 1
```

我们没有为 `myObject` 分配函数。 我们正在分配调用该函数的结果。 注意高亮行的 `( )`。 该函数返回一个包含两个方法的对象，并且这些方法继续享有访问 `value` 变量的特权。

本章前面的 `Quo` 构造函数生成了一个带有 `status` 属性和 `get_status` 方法的对象。 但这似乎不太有趣。 为什么要对可以直接访问的属性调用 `getter` 方法？ 如果状态属性是私有的，那就更有用了。 因此，让我们定义一种不同类型的 `quo` 函数来做到这一点：

```js
/*
创建一个名为 quo 的函数。 它使用 get_status 方法和私有状态属性创建一个对象。
*/

var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

// Make an instance of quo.
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());
```

`quo` 函数被设计为在没有 `new` 前缀的情况下使用，因此名称不大写。 当我们调用 `quo` 时，它返回一个包含 `get_status` 方法的新对象。 对该对象的引用存储在 `myQuo` 中。 即使 `quo` 已经返回， `get_status` 方法仍然具有对 `quo` 的 `status` 属性的特权访问。 `get_status` 并没有访问参数的副本； 而是访问参数本身。 这是可能的，因为该函数可以访问创建它的上下文。 这称为闭包。

让我们看一个更有用的例子：

```js
// 定义一个函数，将 DOM 节点的颜色设置为黄色，然后淡化为白色。

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }        
    };
    setTimeout(step, 100);
};

fade(document.body);
```

我们调用 `fade`，并为其传递 `document.body`（由 HTML 标签创建的节点）。 `fade` 将 `level` 设置为 1。它定义了一个 `step` 函数。 它调用 `setTimeout`，向其传递 `step` 函数和时间（100 毫秒）。 然后它返回——`fade` 函数结束。

突然，大约十分之一秒后，`step` 函数被调用。 它从 `fade` 的 `level` 中生成一个 16 进制字符。 然后它修改淡入淡出节点的背景颜色。 然后它会查看淡入淡出的级别。 如果尚未变为白色，则会增加淡入淡出级别并使用 setTimeout 安排自身再次运行。

突然，`step` 函数再次被调用。 但这一次，`fade` 的 `level` 是 2。`fade` 刚刚返回，但只要一个或多个 `fade` 内部函数需要它们，它的变量就会继续存在。

重要的是要理解内部函数可以访问外部函数的实际变量而不是副本，以避免出现以下问题。

BAD EXAMPLE  
```js
/*
创建一个函数，以错误的方式将事件处理函数分配给节点数组。
当您单击节点时，警报框应该显示该节点的序号。 但它始终显示节点数。
*/
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};
```

`add_the_handlers` 函数旨在为每个处理程序提供一个唯一的编号 `i`。 它失败是因为处理函数绑定到变量 `i`，而不是函数创建时变量 `i` 的值。

BETTER EXAMPLE  
```js
/*
创建一个将事件处理函数分配给节点数组的函数。 当您单击某个节点时，警报框将显示该节点的序号。
*/
var add_the_handlers = function (nodes) {
    var helper = function (i) {
        return function (e) {
            alert(i);
        };
    };
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = helper(i);
    }
};
```

避免在循环内创建函数。 正如我们在坏例子中看到的那样，这可能会造成计算上的浪费，并且可能会导致混乱。 我们通过在循环外部创建一个辅助函数来避免混淆，该函数将提供一个绑定到 `i` 的当前值的函数。

### 4.11 Callbacks 回调

函数可以更轻松地处理不连续事件。 例如，假设有一个序列，从用户交互开始，向服务器发出请求，最后显示服务器的响应。 简单的写法是：

```js
request = prepare_the_request();
response = send_request_synchronously(request);
display(response);
```

这种方法的问题是网络上的同步请求将使客户端处于冻结状态。 如果网络或服务器速度缓慢，响应能力的下降将是不可接受的。

更好的方法是发出异步请求，提供一个回调函数，当收到服务器的响应时将调用该回调函数。 异步函数会立即返回，因此客户端不会被阻塞：

```js
request = prepare_the_request();
send_request_asynchronously(request, function (response) {
    display(response);
});
```

我们将一个函数参数传递给 `send_request_asynchronously` 函数，该函数将在响应可用时被调用。

### 4.12 Module 模块

我们可以使用函数和闭包来制作模块。 模块是呈现接口但隐藏其状态和实现的函数或对象。 通过使用函数来生成模块，我们几乎可以完全消除对全局变量的使用，从而减轻 JavaScript 最糟糕的功能之一。

例如，假设我们想使用 `deentityify` 方法来扩充 String。 它的工作是在字符串中查找 HTML 实体并用其等效项替换它们。 将实体的名称及其等效项保留在对象中是有意义的。 但是我们应该把对象放在哪里呢？ 我们可以把它放在一个全局变量中，但是全局变量是邪恶的。 我们可以在函数本身中定义它，但这会产生运行时成本，因为每次调用函数时都必须对文字进行求值。 理想的方法是将其放入闭包中，并且也许提供一个可以添加其他实体的额外方法：

```js{23}
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

String.method('deentityify', function () {
    // The entity table. It maps entity names to characters.
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    // Return the deentityify method.
    return function () {
        return this.replace(/&([^&;]+);/g, function (a ,b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        });
    };
}());

document.writeln('&lt;&quot;&gt;'.deentityify());    // <">
```

注意最后高亮行。 我们立即使用 `( )` 运算符调用刚刚创建的函数。 该调用创建并返回成为 `deentityify` 方法的函数。

模块模式利用函数作用域和闭包来创建绑定和私有的关系。 在此示例中，只有 `deentityify` 方法可以访问实体数据结构。

模块的一般模式是定义私有变量和函数的函数； 创建特权函数，通过闭包，该函数将有权访问私有变量和函数； 返回特权函数或将它们存储在可访问的位置。

使用模块模式可以消除全局变量的使用。 它促进信息隐藏和其他良好的设计实践。 它在封装应用程序和其他单例方面非常有效。

它还可用于生产安全的对象。 假设我们想要创建一个生成序列号的对象：

```js
/*
生成一个生成唯一字符串的对象。 唯一的字符串由两部分组成：前缀和序列号。
该对象附带了用于设置前缀和序列号的方法，以及生成唯一字符串的 gensym 方法。
*/
var serial_maker = function () {
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();    // "Q1000"
```

这些方法不使用 `this` 或 `that`。 因此，无法破坏 `seqer`。 除非方法允许，否则无法获取或更改前缀或序列。 `seqer` 对象是可变的，因此可以替换方法，但这仍然无法访问其秘密。 `seqer` 只是函数的集合，这些函数是授予使用或修改秘密状态的特定权力的功能。

如果我们将 `seqer.gensym` 传递给第三方函数，该函数将能够生成唯一的字符串，但无法更改前缀或 `seq`。

### 4.13 Cascade 级联

有些方法没有返回值。 例如，设置或更改对象状态的方法通常不返回任何内容。 如果我们让这些方法返回 `this` 而不是 `undefined`，我们就可以启用级联。 在级联中，我们可以在一条语句中按顺序调用同一对象上的许多方法。 

```js
var hero = {
    name: "Bard",
    age: 20,
    displayName: function() {
        console.log(this.name);
        return this;
    },
    updateAge: function(age) {
        this.age = age;
        return this;
    },
    displayAge: function() {
        console.log(this.age);
        return this;
    }
};

hero
    .displayName()
    .displayAge();

hero
    .updateAge(30)
    .displayAge();
```

启用级联的 Ajax 库允许我们以如下方式编写：

```js
getElement('myBoxDiv')
    .move(350, 150)
    .width(100)
    .height(100)
    .color('red')
    .border('10px outset')
    .padding('4px')
    .appendText("Please stand by")
    .on('mousedown', function (m) {
         this.startDrag(m, this.getNinth(m));
     })
     .on('mousemove', 'drag')
     .on('mouseup', 'stopDrag')
     .later(2000, function ( ) {
         this
             .color('yellow')
             .setHTML("What hath God wraught?")
             .slide(400, 40, 200, 200);
     });

tip('This box is resizeable');
```

在此示例中，`getElement` 函数生成一个对象，该对象为 `id="myBoxDiv"` 的 DOM 元素提供功能。 这些方法允许我们移动元素、更改其尺寸和样式以及添加行为。 这些方法中的每一个都会返回对象，因此调用的结果可用于下一次调用。

级联可以产生非常具有表现力的接口。 它可以帮助控制接口的倾向，即试图同时执行太多操作。

### 4.14 Curry 柯里化

函数就是值，我们可以用有趣的方式操纵函数值。 柯里化允许我们通过组合函数和参数来生成新函数：

```js
var add = function (a, b) {
    return a + b;
};

var add1 = add.curry(1);
document.writeln(add1(6));    // 7
```

`add1` 是通过将 1 传递给 `add` 的 `curry` 方法而创建的函数。 `add1` 函数将 1 添加到其参数中。 JavaScript 没有 `curry` 方法，但我们可以通过增强 `Function.prototype` 来解决这个问题：

```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Function.method('curry', function () {
    var args = arguments, that = this;
    return function () {
        return that.apply(null, args.concat(arguments));
    };
});    // Something isn't right...
```

`curry` 方法的工作原理是创建一个包含原始函数和 `curry` 参数的闭包。 它返回一个函数，该函数在被调用时返回调用该原始函数的结果，并向其传递来自 `curry` 调用和当前调用的所有参数。 它使用 Array concat 方法将两个参数数组连接在一起。

不幸的是，正如我们之前看到的，参数数组不是数组，因此它没有 `concat` 方法。 为了解决这个问题，我们将对两个参数数组应用数组切片方法。 这会生成使用 `concat` 方法正确运行的数组：

```js
Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});
```

### 4.15 Memoization 记忆化

函数可以使用对象来记住先前操作的结果，从而可以避免不必要的工作。 这种优化称为记忆化。 JavaScript 的对象和数组对此非常方便。

假设我们想要一个递归函数来计算斐波那契数。 斐波那契数是前两个斐波那契数之和。 前两个是 0 和 1：

```js
var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i <= 10; i += 1) {
    document.writeln('//' + i + ': ' + fibonacci(i));
}
```

这可行，但它做了很多不必要的工作。 斐波那契函数被调用 453 次。 我们调用它 11 次，而它在计算可能最近已经计算过的值时调用自身 442 次。 如果我们记住这个函数，我们可以显着减少它的工作量。

我们将把记忆结果保存在一个备忘录数组中，我们可以将其隐藏在闭包中。 当我们的函数被调用时，它首先查看它是否已经知道结果。 如果是，它可以立即返回：

```js
var fibonacci = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
})();
```

该函数返回相同的结果，但仅调用了 29 次。 我们调用了 11 次。 它调用自己18次来获得之前记忆的结果。

我们可以通过创建一个帮助我们创建记忆函数的函数来概括这一点。 `memoizer` 函数将采用初始备忘录数组和公式函数。 它返回一个管理备忘录存储并根据需要调用公式函数的递归函数。 我们将 `recur` 函数和函数的参数传递给 `formula` 函数：

```js
var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};
```

我们现在可以使用 `memoizer` 定义斐波那契，提供初始 `memo` 数组和公式函数：

```js
var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

fibonacci(10);  // 55
```

通过设计产生其他函数的函数，我们可以显着减少我们必须做的工作量。 例如，要生成一个记忆阶乘函数，我们只需要提供基本阶乘公式：

```js
var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});

factorial(5);  // 120
```

## 5 Inheritance 继承

继承是大多数编程语言中的一个重要主题。

JavaScript 提供了一组丰富的代码重用模式。 它可以模仿经典模式，但它也支持其他更具表现力的模式。 JavaScript 中可能的继承模式集非常多。 在本章中，我们将讨论一些最简单的模式。 更复杂的结构是可能的，但通常最好保持简单。

在经典语言中，对象是类的实例，并且一个类可以从另一个类继承。 JavaScript 是一种原型语言，这意味着对象直接从其他对象继承。

### 5.1 Pseudoclassical 伪伪经典模式

JavaScript 的原型性质是矛盾的。 它的原型机制被一些看起来有点古典的复杂句法业务所掩盖。 不是让对象直接从其他对象继承，而是插入不必要的间接层，以便由构造函数生成对象。

创建函数对象时，生成函数对象的 Function 构造函数会运行如下代码：

`this.prototype = {constructor: this};`

新函数对象被赋予一个原型属性，其值是一个包含构造函数属性的对象，该构造函数属性的值是新函数对象。 原型对象是继承的特征被存放的地方。 每个函数都有一个原型对象，因为该语言没有提供确定哪些函数用作构造函数的方法。 构造函数属性没有用。 重要的是原型对象。

当使用 `new` 前缀通过构造函数调用模式调用函数时，这会修改函数的执行方式。 如果 `new` 运算符是一个方法而不是一个运算符，它可以这样实现：


```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Function.method('new', function() {
    // Create a new object that inherits from the constructor's prototype.
    var that = Object.create(this.prototype);

    // Invoke the constructor, binding -this- to the new object.
    var other = this.apply(that, arguments);

    // If its return value isn't an object, substitute the new object.
    return (typeof other === 'object' && other) || that;
});
```

我们可以定义一个构造函数并扩充它的原型：

```js
var Mammal = function(name) {
    this.name = name;
};

Mammal.prototype.get_name = function() {
    return this.name;
};

Mammal.prototype.says = function() {
    return this.saying || "";
};
```

现在，我们可以制作一个实例：

```js
var myMammal = new Mammal("Herb the Mammal");
var name = myMammal.get_name();

var myMammal1 = Mammal.new("Herb the Mammal");
var name1 = myMammal1.get_name();

console.log(myMammal, name);
console.log(myMammal1, name1);
```

我们可以通过定义其构造函数并用 Mammal 的实例替换其原型来创建另一个继承自 Mammal 的伪类：

```js
var Cat = function (name) {
     this.name = name;
     this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal( );

// Augment the new prototype with purr and get_name methods.

Cat.prototype.purr = function (n) {
     var i, s = '';
     for (i = 0; i < n; i += 1) {
         if (s) {
             s += '-';
         }
         s += 'r';
     }
     return s;
};

Cat.prototype.get_name = function ( ) {
     return this.says( ) + ' ' + this.name + ' ' + this.says( );
};

var myCat = new Cat('Henrietta');
var says = myCat.says( ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name( );
// 'meow Henrietta meow'
```

伪经典模式的目的是看起来有点面向对象，但它看起来很陌生。 我们可以通过使用 `method` 方法并定义一个继承方法来隐藏一些丑陋的地方：

```js
Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});
```
我们的继承和方法方法返回此值，允许我们以级联风格进行编程。 现在我们可以用一个语句来创建我们的 Cat。

```js
var Cat = function(name) {
    this.name = name;
    this.saying = 'meow';
};

Cat.inherits(Mammal).method('purr', function(n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}).method('get_name', function() {
    return this.says() + ' ' + this.name + ' ' + this.says();
});

var cat = new Cat('mu');
console.log(cat);
```

通过隐藏原型爵士乐，它现在看起来不那么陌生了。 但我们真的改善了什么吗？ 我们现在有了类似于类的构造函数，但在边缘，可能会出现令人惊讶的行为。 没有隐私； 所有属性都是公共的。 无法访问超级方法。

更糟糕的是，使用构造函数存在严重的危险。 如果在调用构造函数时忘记包含 new 前缀，那么 this 将不会绑定到新对象。 遗憾的是，这将绑定到全局对象，因此您将破坏全局变量，而不是增强新对象。 那真是太糟糕了。 没有编译警告，也没有运行时警告。

这是语言中的一个严重的设计错误。 为了缓解这个问题，有一个约定，即所有构造函数都以首字母大写命名，并且没有其他任何内容都以首字母大写拼写。 这让我们祈祷目视检查可以找到丢失的新东西。 更好的选择是根本不使用 new。

伪经典形式可以为不熟悉 JavaScript 的程序员提供安慰，但它也隐藏了该语言的真实本质。 受经典启发的符号可能会导致程序员构建不必要的深度和复杂的层次结构。 类层次结构的大部分复杂性是由静态类型检查的约束引起的。 JavaScript 完全不受这些限制。 在经典语言中，类继承是代码重用的唯一形式。 JavaScript 有更多更好的选择。

### 5.2 Object Specifiers 对象说明符

有时会发生构造函数被赋予大量参数的情况。 这可能很麻烦，因为很难记住参数的顺序。 在这种情况下，如果我们编写构造函数来接受单个对象说明符，可能会更友好。 该对象包含要构造的对象的规范。 所以，而不是：

`var myObject = maker(f, l, m, c, s);`

我们可以写：

```js
var myObject = maker({
    first: f,
    last: l,
    middle: m,
    state: s,
    city: c
});
```

现在可以以任意顺序列出参数，如果构造函数对默认值很聪明，则可以省略参数，并且代码更容易阅读。

使用 JSON 时，这可以带来第二个好处。 JSON 文本只能描述数据，但有时数据代表一个对象，将数据与其方法关联起来会很有用。 如果构造函数采用对象说明符，则可以轻松完成此操作，因为我们可以简单地将 JSON 对象传递给构造函数，它将返回一个完全构成的对象。

### 5.3 Prototype

原型继承在概念上比经典继承更简单：新对象可以继承旧对象的属性。可以完全避免将应用程序分解为一组嵌套抽象类的分类过程。

让我们从使用对象字面量来创建一个有用的对象开始：

```js
var myMammal = {
    name: 'Herb the Mammal',
    get_name: function () {
        return this.name;
    },
    says: function () {
        return this.saying || '';
    }
};
```

一旦我们有了一个对象，我们就可以使用 `Object.create` 方法创建更多实例。然后我们可以自定义新实例：

```js
var myCat = Object.create(myMammal);

myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
};
```

这就是差异继承。 通过定制一个新对象，我们可以指定与其所基于的对象的差异。

有时，数据结构从其他数据结构继承是有用的。 下面是一个例子：假设我们正在解析一种语言，例如 JavaScript 或 TEX，其中一对大括号表示作用域。 作用域内定义的项目在作用域外不可见。 从某种意义上说，内部作用域继承自外部作用域。 JavaScript 对象非常擅长表示这种关系。 当遇到左大括号时，将调用块函数。 解析函数将从作用域中查找符号，并在定义新符号时扩大作用域：

```js
var block = function () {
    // Remember the current scope. Make a new scope that
    // includes everything from the current one.

    var oldScope = scope;
    scope = Object.create(scope);

    // advance past the left curly brace.

    advance('{');

    // Parse using the new scope.

    parse(scope);

    // Advance past the right curly brace and discard the
    // new scope, restoring the old one.

    advance('}');
    scope = oldScope;
};
```

### 5.4 Functional 函数化

继承模式的一个弱点是没有隐私。对象的所有属性都是可见的。使用模块模式可以解决此问题。

首先创建一个将生成对象的函数。该函数包含四个步骤：
- 创建一个新对象。 可以创建对象字面量，或者可以使用 `new` 前缀调用构造函数，或者可以使用 `Object.create` 方法从现有对象创建新实例，或者可以调用任何返回对象的函数。
- 定义私有实例变量和方法。 这些只是函数的普通变量。
- 用方法扩充新对象。 这些方法将有权访问第二步中定义的参数和变量。
- 返回新对象。

这是函数式构造函数的伪代码模板：

```js
var constructor = function (spec, my) {
    var that, other private instance variables;
    my = my || {};

    Add shared variables and functions to my

    that = a new object;

    Add privileged methods to that

    return that;
};
```

`spec` 对象包含构造函数创建实例所需的所有信息。 `spec` 的内容可以复制到私有变量中或由其他函数转换。 或者这些方法可以根据需要从 `spec` 中访问信息。

`my` 对象是由继承链中的构造函数共享的秘密容器。 `my` 对象的使用是可选的。 如果未传入 `my` 对象，则创建 `my` 对象。

接下来，声明对象的私有实例变量和私有方法。 这是通过简单地声明变量来完成的。 构造函数的变量和内部函数成为实例的私有成员。 内部函数可以访问 `spec`、`my`、`that` 和私有变量。

接下来，将共享机密添加到 `my` 对象中。 这是通过赋值完成的：

`my.member = value;`

接下来，我们对 `that` 进行扩充，添加构成对象接口的特权方法。 我们可以为 `that` 中的成员分配新的函数：

```js
var methodical = function ( ) {
    ...
};
that.methodical = methodical;
```

最后，我们返回 `that`。

让我们将这种模式应用到我们的哺乳动物示例中。 我们这里不需要 `my`，所以我们将其省略，但我们将使用一个 `spec` 对象。  
`name` 和 `saying` 属性现在完全私有。 它们只能通过特权 `get_name` 和 `says` 方法访问：

```js
var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };
    that.says = function () {
        return spec.saying || '';
    };
    return that;
};

var myMammal = mammal({name: 'Herb'});
```

在伪经典模式中，`Cat` 构造函数必须重复由 `Mammal` 构造函数完成的工作。 在函数模式中这不是必需的，因为 `Cat` 构造函数将调用 `Mammal` 构造函数，让 `Mammal` 完成对象创建的大部分工作，因此 `Cat` 只需要关心差异：

```js
var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var myCat = cat({name: 'Henrietta'});
```

函数式模式还为我们提供了一种处理 `super` 方法的方法。 我们将创建一个 `superior` 方法，它接受方法名称并返回调用该方法的函数。 即使属性发生更改，该函数也会调用原始方法：

```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Object.method('superior', function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
});
```

让我们在一个很像 `cat` 的 `Coolcat` 上尝试一下，除了它有一个更酷的 `get_name` 方法来调用 `super` 方法。 它只需要一点准备。 我们将声明一个 `super_get_name` 变量并将调用上级方法的结果分配给它：

```js
var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();
//    'like meow Bix meow baby'
```

函数模式具有很大的灵活性。 它比伪经典模式需要更少的工作，并且为我们提供了更好的封装和信息隐藏以及对超级方法的访问。

如果对象的所有状态都是私有的，则该对象是防篡改的。 对象的属性可以被替换或删除，但对象的完整性不会受到损害。 如果我们以函数式风格创建一个对象，并且该对象的所有方法都不使用 this 或 that，那么该对象是持久的。 持久对象只是充当功能的函数的集合。

持久对象不能受到损害。 除非方法允许，否则对持久对象的访问不会使攻击者能够访问对象的内部状态。

最后是完整的示例代码：

```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Object.method('superior', function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    };
});

var mammal = function (spec) {
    var that = {};

    that.get_name = function () {
        return spec.name;
    };
    that.says = function () {
        return spec.saying || '';
    };
    return that;
};

var cat = function (spec) {
    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i += 1) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };
    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;
};

var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');
    that.get_name = function (n) {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();
//    'like meow Bix meow baby'

console.log(myCoolCat);
```

### 5.5 Parts 部件

我们可以用几组部件来组合对象。 例如，我们可以创建一个函数，可以为任何对象添加简单的事件处理功能。 它添加了一个 `on` 方法、一个 `fire` 方法和一个私有事件注册表：

```js
/*
在对象上触发事件。 该事件可以是包含事件名称的字符串，也可以是包含事件名称的类型属性的对象。 将调用由“on”方法注册的与事件名称匹配的处理程序。

如果此事件存在处理程序数组，则循环遍历它并按顺序执行处理程序。

处理程序记录包含一个方法和一个可选的参数数组。 如果方法是名称，则查找函数。

调用处理程序。 如果记录包含参数，则传递它们。 否则，传递事件对象。

注册事件。 制作处理程序记录。 将其放入处理程序数组中，如果该类型尚不存在则创建一个。
*/

var eventuality = function (that) {
    var registry = {};

    that.fire = function (event) {
        var array,
            func,
            handler,
            i,
            type = typeof event === 'string' ? event : event.type;

        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i < array.length; i += 1) {
                handler = array[i]
                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func];
                }
                func.apply(this, handler.parameters || [event]);
            }
        }
        return this;
    };

    that.on = function (type, method, parameters) {
        var handler = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler);
        } else {
            registry[type] = [handler];
        }
        return this;
    };
    return that;
};
```

我们可以在任何单独的对象上调用 eventuality，赋予它事件处理方法。 

通过这种方式，构造函数可以从一组部件组装对象。 JavaScript 的松散类型在这里是一个很大的好处，因为我们不必承受关心类沿袭的类型系统的负担。 相反，我们可以关注其内容的特征。

```js
var hero = {
    name: "Bard",
    age: 20,
    getName: function() {
        console.log(this.name);
    }
};

eventuality(hero)
    .on("getname", "getName")
    .on("shout", function(p1, p2) {
        console.log(this.name + ': ' + p1 + p2);
    }, ["Hello ", "World!"]);

hero.fire("getname")
    .fire("shout");
```

## 6 Arrays 数组

数组是内存的线性分配，其中的元素通过用于计算偏移量的整数进行访问。 数组可以是非常快的数据结构。 不幸的是，JavaScript 没有类似这种数组的东西。

相反，JavaScript 提供了一个具有一些类似数组特征的对象。 它将数组下标转换为用于创建属性的字符串。 它比真正的数组慢得多，但使用起来更方便。 属性的检索和更新与对象的操作相同，只是整数属性名称有一个特殊的技巧。 数组有自己的文字格式。 数组还有一组更有用的内置方法，如第 8 章所述。

### 6.1 Array Literals 数组字面量

数组文字为创建新数组值提供了非常方便的表示法。 数组文字是一对方括号，将零个或多个值括起来，并用逗号分隔。 数组文字可以出现在表达式可以出现的任何地方。 第一个值将获取属性名称 `“0”`，第二个值将获取属性名称 `“1”`，依此类推：

```js
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

empty[1];        // undefined
numbers[1];      // 'one'

empty.length;    // 0
numbers.length;  // 10
```

对象字面量：

```js
var numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
};
```

产生类似的结果。 `numbers` 和 `numbers_object` 都是包含10 个属性的对象，并且这些属性具有完全相同的名称和值。 但也存在显着差异。 `numbers` 继承自 `Array.prototype`，而 `numbers_object` 继承自 `Object.prototype`，因此 `numbers` 继承了更多有用的方法。 此外，`numbers` 具有神秘的 `length` 属性，而 numbers_object 则没有。

在大多数语言中，数组的元素都必须具有相同的类型。 JavaScript 允许数组包含任意值的混合：

```js
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN, Infinity
];
misc.length    // 10
```

### 6.2 Length 长度属性

每个数组都有一个长度属性。 与大多数其他语言不同，JavaScript 的数组长度没有上限。 如果存储下标大于或等于当前长度的元素，则长度将增加以包含新元素。 不存在数组边界错误。

`length` 属性是数组中最大的整数属性名称加一。 这不一定是数组中属性的数量：

```js
var myArray = [];
myArray.length    // 0

myArray[1000] = true;
myArray.length    // 1001
// myArray contains one property.
```

`[]` 后缀下标运算符使用表达式的 `toString` 方法（如果有）将其表达式转换为字符串。 该字符串将用作属性名称。 如果字符串看起来像一个大于或等于数组当前长度且小于 4,294,967,295 的正整数，则数组的长度将设置为新下标加一。

长度可以明确设置。 增大长度并不会为数组分配更多空间。 减小长度将导致所有下标大于或等于新长度的属性被删除：

```js
numbers.length = 3;
// numbers is ['zero', 'one', 'two']
```

可以通过分配数组的当前长度来将新元素附加到数组的末尾：

```js
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']
```

有时使用 `push` 方法来完成同样的事情会更方便：

```js
numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']
```

### 6.3 Delete 删除

由于 JavaScript 的数组实际上是对象，因此可以使用删除运算符从数组中删除元素：

```js
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']
```

不幸的是，这在阵列中留下了一个洞。 这是因为被删除元素右侧的元素保留其原始名称。 您通常想要的是向右递减每个元素的名称。

幸运的是，JavaScript 数组有一个 `splice` 方法。 它可以对数组进行手术，删除一些元素并用其他元素替换它们。 第一个参数是数组中的序数。 第二个参数是要删除的元素数量。 此时任何其他参数都会插入到数组中：

```js
numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']

numbers.splice(2, 1, "x", "y");
```

值为 “shi” 的属性的键从 “3” 更改为 “2”。 由于必须删除已删除属性后的每个属性并使用新键重新插入，因此对于大型数组来说，这可能不会很快。

### 6.4 Enumeration 枚举

由于 JavaScript 的数组实际上是对象，因此 `for in` 语句可用于迭代数组的所有属性。 不幸的是， `for in` 不能保证属性的顺序，并且大多数数组应用程序都希望元素按数字顺序生成。 此外，仍然存在从原型链中挖掘出意外属性的问题。

幸运的是，传统的 `for` 语句避免了这些问题。 它由三个子句控制 - 第一个子句初始化循环，第二个子句是 `while` 条件，第三个子句执行增量：

```js
for (let i = 0; i < numbers.length; i += 1) {
    document.writeln(numbers[i]);
}
```

最新的 JavaScript 提供了 `for of` 循环：

```js
for (let number of numbers) {
    document.writeln(number);
}
```

`for of` 循环需要提供了 `Symbol.iterator` 接口的对象，包括数组。

### 6.5 Confusion 困惑

JavaScript 程序中的一个常见错误是需要数组时使用对象，或者需要对象时使用数组。 规则很简单：当属性名称是小的连续整数时，应该使用数组。 否则，使用一个对象。

JavaScript 本身对数组和对象之间的区别感到困惑。 `typeof` 运算符报告数组的类型是 `“object”`，这并不是很有帮助。

最新的 JavaScript 提供了 `Array.isArray()` 方法确定传递的值是否为 `Array`。

们可以通过定义自己的 is_array 函数来区分数组和对象：

```js
var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};
```

它无法识别在不同窗口或框架中构造的数组，我们还得加倍努力：

```js
var is_array = function(value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
};
```

### 6.5 Methods 方法

JavaScript 提供了一组作用于数组的方法。 这些方法是存储在 Array.prototype 中的函数。 Array.prototype 可以被扩展。

例如，假设我们要添加一个数组方法，该方法将允许我们对数组进行计算：

```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

Array.method('reduce1', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});
```

通过向 `Array.prototype` 添加函数，每个数组都会继承该方法。 在本例中，我们定义了一个带有函数和起始值的 `reduce1` 方法。 对于数组的每个元素，它使用元素和值调用函数，并计算一个新值。 当它完成时，它返回值。 如果我们传入一个将两个数字相加的函数，它就会计算总和。 如果我们传入一个将两个数字相乘的函数，它会计算乘积：

```js
var data = [4, 8, 15, 16, 23, 42];
var add = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};

var sum = data.reduce1(add, 0);    // 108
var product = data.reduce1(mult, 1);    // 7418880
```

因为数组实际上是一个对象，所以我们可以直接向单个数组添加方法：

```js
data.total = function () {
    return this.reduce1(add, 0);
};

var total = data.total();    // 108
```

由于字符串 `“total”` 不是整数，因此向数组添加 `total` 属性不会更改其长度 `length`。 当属性名称是整数时，数组最有用，但它们仍然是对象，并且对象可以接受任何字符串作为属性名称。

在数组上使用 `Object.create` 方法没有用，因为它生成一个对象，而不是数组。 生成的对象将继承数组的值和方法，但它不会具有特殊的 `length` 属性。

```js
var a = ["zero", "one", "two"];

var b = Object.create(a);

console.log(Array.isArray(b));  // false
```

### 6.6 Dimensions 维度

JavaScript 数组通常不会被初始化。 如果你用 `[]` 请求一个新数组，它将是空的。 JavaScript 应该提供某种形式的 `Array.dim` 方法来执行此操作，但我们可以轻松纠正这种疏忽：

```js
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

var myArray = Array.dim(10, 0);
```

JavaScript 不具有多维数组，但与大多数 C 语言一样，它可以具有数组的数组：

```js
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
matrix[2][1];    // 7
```

要创建二维数组或数组的数组，您必须自己构建数组：

```js
/*
注意：Array.dim(n, []) 在这里不起作用。 每个元素都会获得对同一个数组的引用，这将是非常糟糕的。
*/
for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}
```

空矩阵的单元格最初的值未定义。 如果您希望它们具有不同的初始值，则必须显式设置它们：

```js
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

var myMatrix = Array.matrix(4, 4, 0);
console.log(myMatrix);

// Method to make an identity matrix.
Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);
console.log(myMatrix);
```

## 7 Regular Expressions 

正则表达式是简单语言语法的规范。 正则表达式与从字符串中搜索、替换和提取信息的方法一起使用。 使用正则表达式的方法有:  
- `regexp.exec`
- `regexp.test`
- `string.match`
- `string.replace`
- `string.search`
- `string.split` 

这些都将在第 8 章中进行描述。正则表达式通常比 JavaScript 中的等效字符串操作具有显着的性能优势。

### 7.1 An Example

这是一个例子。 它是一个匹配 URL 的正则表达式。 这本书的页数不是无限宽的，所以我把它分成了两行。 在 JavaScript 程序中，正则表达式必须位于一行中。 空白很重要：

```js
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
    (?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = 'http://www.ora.com:80/goodparts?q#fragment';
```

让我们调用 `parse_url` 的 `exec` 方法。 如果它成功匹配我们传递给它的字符串，它将返回一个包含从 `url` 中提取的片段的数组：

```js
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = 'http://www.ora.com:80/goodparts?q#fragment';

var result = parse_url.exec(url);
var names = [
    'url', 'scheme', 'slash', 'host',
    'port', 'path', 'query', 'hash'
];
var blanks = '        ';

for (let i = 0; i < names.length; i += 1) {
    document.writeln(names[i] + ':' +
                    blanks.substring(names[i].length), result[i]);
}
```

这会产生：

```text
url:     http://www.ora.com:80/goodparts?q#fragment
scheme:  http
slash:   //
host:    www.ora.com
port:    80
path:    goodparts
query:   q
hash:    fragment
```

我们可以使用铁路图来描述正则表达式定义的语言。 这可能会让您更容易了解正则表达式的作用。 这是 `parse_url` 的铁路图。

![](https://silenthunter0814.github.io/pub/web03/7.1.png)

正则表达式不能像函数那样被分解成更小的部分，因此表示 `parse_url` 的轨道很长。

让我们将 `parse_url` 分解为各个部分，看看它是如何工作的。

- `^` :  
表示字符串的开头。 它是一个锚点，可防止 `exec` 跳过非类似 URL 的前缀。

- `(?:([A-Za-z]+):)?` :  
与 scheme 名称匹配，但前提是其后跟有 `:`（冒号）。 `(?:...)` 表示非捕获组。 后缀 `？` 表示该组是可选的。这意味着重复零次或一次。  
`(...)` 表示捕获组。 捕获组复制它匹配的文本并将其放入结果数组中。 每个捕获组都有一个编号。 第一个捕获组是 `1`，因此与该捕获组匹配的文本的副本将出现在 `result[1]` 中。  
`[...]` 表示字符类。 此字符类 `A-Za-z` 包含 26 个大写字母和 26 个小写字母。 连字符表示从 A 到 Z 的范围。后缀 `+` 表示字符类将匹配一次或多次。 该组后面跟着 `:` 字符，它将按字面匹配。

- `(\/{0,3})` :  
捕获组 `2`。`\/` 表示应匹配 `/`（斜杠）字符。 它用 `\`（反斜杠）转义，这样就不会被误解为正则表达式文字的结尾。 后缀 `{0,3}` 表示 `/` 将匹配 0 或 1 或 2 或 3 次。

- `([0-9.\-A-Za-z]+)` :  
捕获组 `3`。它将匹配由一个或多个数字、字母或 `.` 或 `-` 组成的主机名。 `-` 被转义为 `\-` 以防止与范围连字符混淆。

- `(?::(\d+))?` :  
可选的匹配端口号，该端口号是前面带有 `:` 的一个或多个数字的序列。 `\d` 代表数字字符。 一系列的一个或多个数字将捕获组 `4`。

- `(?:\/([^?#]*))?` :  
另一个可选组。 这个以 `\/` 开头。 字符类 `[^?#]` 以 `^` 开头，表示该类包含除 `?` 和 `＃` 之外的所有字符。 `*` 表示字符类匹配零次或多次。  
请注意，除了 `?` 和 `#` 之外的所有字符的类别包括行结束字符、控制字符和许多其他不应该在此处匹配的字符。草率的正则表达式是安全漏洞的一个常见来源。 编写草率的正则表达式比编写严格的正则表达式容易得多。

- `(?:\?([^#]*))?` :  
以 `\?` 开头的可选组。 它包含捕获组 `6`，其中包含零个或多个非 `#` 字符。

- `(?:#(.*))?` :  
以 `#` 开头的最后一个可选组。 这 `.` 将匹配除行结束字符之外的任何字符。  

- `$` :  
代表字符串的结尾。 它向我们保证 URL 末尾后没有多余的内容。

这些是正则表达式 parse_url 的因子。  
可以制作比 `parse_url` 更复杂的正则表达式，但不推荐它。 正则表达式在简短时效果最好。 只有这样，我们才能确信它们正常工作，并且在必要时可以成功修改它们。

让我们看另一个例子：匹配数字的正则表达式。 数字可以有一个带有可选减号的整数部分、一个可选的小数部分和一个可选的指数部分。

```js
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function (num) {
    document.writeln(parse_number.test(num));
};

test('1');   // true
test('number');    // false
test('98.6');    // true
test('132.21.86.100');   // false
test('123.45E-67');    // true
test('123.45D-67');    // false
```

`parse_number` 成功识别了符合我们规范的字符串和不符合我们规范的字符串，但对于那些不符合我们规范的字符串，它没有向我们提供有关它们为何或在何处未通过数字测试的信息。

![](https://silenthunter0814.github.io/pub/web03/7.2.png)

让我们分解一下 `parse_number`。

- `/^`, `$/i` :  
使用 `^` 和 `$` 来锚定正则表达式。 这会导致文本中的所有字符都与正则表达式匹配。 如果省略了锚点，则正则表达式会告诉我们字符串是否包含数字。 如果只包含 `^`，它将匹配以数字开头的字符串。 如果只包含 `$`，它将匹配以数字结尾的字符串。  
`i` 标志导致匹配字母时忽略大小写。 我们的模式中唯一的字母是 `e`。 我们希望 `e` 也匹配 `E`。我们可以将 `e` 因子写为 `[Ee]` 或 `(?:E|e)`，但我们不必这样做，因为我们使用了 `i` 标志。

- `-?` :  
减号上的 `？` 后缀表示减号是可选的。

- `\d+` :  
`\d` 与 `[0-9]` 含义相同。 它匹配一个数字。 `+` 后缀使其匹配一位或多位数字。

- `(?:\.\d*)?` :  
可选的非捕获组。 该组将匹配小数点后跟零个或多个数字。

- `(?:e[+\-]?\d+)?` :  
另一个可选的非捕获组。 它匹配 `e` 或 `E`、可选正负符号和一个或多个数字。

### 7.2 Construction 构造

有两种方法可以创建 RegExp 对象。 首选方法是使用正则表达式文字。

![](https://silenthunter0814.github.io/pub/web03/7.3.png)

正则表达式文字包含在斜杠内。

可以在正则表达式上设置三个标志。 它们用字母 `g`、`i` 和 `m` 表示，这些标志直接附加到 RegExp 文字的末尾：

Table 7-1. Flags for regular expressions
| Flag  |          Meaning           |
|-------|----------------------------|
| g     | Global (匹配多次； 其确切含义因方法而异)  |
| i     | Insensitive (忽略字符大小写)      |
| m     | Multiline (^ 和 $ 可以匹配行结束符) |

创建一个与 JavaScript 字符串匹配的正则表达式对象：

```js
var my_regexp = /"(?:\\.|[^\\\"])*"/g;

document.writeln(my_regexp.test('"\n"'));    // true
document.writeln(my_regexp.test('"\\"'));    // false
```

制作正则表达式的另一种方法是使用 `RegExp` 构造函数。 构造函数接受一个字符串并将其编译为 `RegExp` 对象。  
构建字符串时必须小心，因为反斜杠在正则表达式中的含义与在字符串文字中的含义有些不同。 通常需要加倍反斜杠并转义引号。

创建一个与 JavaScript 字符串匹配的正则表达式对象：  
`var my_regexp = new RegExp("'(?:\\\\.|[^\\\\\\'])*'", 'g'));`

第二个参数是指定标志的字符串。 当必须在运行时使用程序员无法获得的材料生成正则表达式时，`RegExp` 构造函数非常有用。

RegExp 对象包含表 7-2 中列出的属性：

|  Property   |         Use          |
|-------------|----------------------|
| global      | 如果使用 g 标志则为 true。    |
| ignoreCase  | 如果使用了 i 标志则为 true。   |
| lastIndex   | 开始下一次执行匹配的索引。 最初它为零。 |
| multiline   | 如果使用 m 标志则为 true。    |
| source      | 正则表达式的源文本。           |

由正则表达式文字创建的 RegExp 对象不共享单个实例：

```js
function make_a_matcher() {
    return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();
var z = x;

// Beware: x and y are NOT the same object!
x.lastIndex = 10;
document.writeln(y.lastIndex);    // 0
console.assert(x !== y);
console.assert(x === z);
```

### 7.3 Elements 元素

让我们更仔细地看看组成正则表达式的元素。

#### 7.3.1 选择序列

正则表达式选项包含一个或多个正则表达式序列。 序列由 `|` 分隔。 如果任何序列匹配，则选择匹配。 它尝试按顺序匹配每个序列。 所以：

`"into".match(/in|int/);`

匹配 `into` 中的 `in`。 它不会匹配 `int`，因为 `in` 匹配成功。

![](https://silenthunter0814.github.io/pub/web03/7.4.png)

![](https://silenthunter0814.github.io/pub/web03/7.5.png)

#### 7.3.2 因子

正则表达式序列包含一个或多个正则表达式因子。 每个因子都可以选择跟随一个量词，用于确定允许该因子出现的次数。 如果没有量词，则该因子将匹配一次。

![](https://silenthunter0814.github.io/pub/web03/7.6.png)

正则表达式因子可以是字符、括号组、字符类或转义序列。  
除控制字符和特殊字符外，所有字符均按字面处理：  

`\ / [ ] ( ) { } ? + * | . ^ $`

如果要按字面匹配，则必须使用 `\` 前缀进行转义。

一个未转义的 `.` 匹配除行结束符之外的任何字符。

当 `lastIndex` 属性为零时，未转义的 `^` 与文本的开头匹配。 当指定 `m` 标志时，它还可以匹配行结束字符。

未转义的 `$` 与文本结尾匹配。 当指定 `m` 标志时，它还可以匹配行结束字符。

#### 7.3.3 转义

反斜杠字符 `\` 在正则表达式因子和字符串中表示转义，但在正则表达式因子中，它的工作方式略有不同。

与字符串中一样，`\f` 是换页符，`\n` 是换行符，`\r` 是回车符，`\t` 是制表符，`\u` 允许将 Unicode 字符指定为 16 位十六进制常量。 在正则表达式因子中，`\b` 不是退格字符。

`\d` 与 `[0-9]` 相同。 它匹配一个数字。 `\D` 是相反的：`[^0-9]`。

`\s` 空白字符。 `\S` 则相反。

`\w` 与 `[0-9A-Z_a-z]` 相同，匹配单词。 `\W` 则相反：`[^0-9A-Z_a-z]`。 

`\b` 单词边界。

`()` 捕获组, `\1`,`\digit` 是对前面捕获组的引用。类似 `/()()\1\2/`。

![](https://silenthunter0814.github.io/pub/web03/7.7.png)

#### 7.3.4 分组

有四种组：
- Capturing  
捕获组是括在括号中的正则表达式选择。 与该组匹配的字符将被捕获。 每个捕获组都有一个编号。 正则表达式中的第一个捕获 `(` 是组 1。正则表达式中的第二个捕获 `(` 是组 2。

- Noncapturing  
非捕获组有一个 `(?:` 前缀。非捕获组只是匹配；它不捕获匹配的文本。这样做的优点是性能稍快一些。非捕获组不会干扰捕获组的编号。

- Positive lookahead  
正向先行组有一个 `(?=` 前缀。它就像一个非捕获组，只不过在组匹配后，文本将回退到组开始的位置，实际上不匹配任何内容。这不是一个好部分。

- Negative lookahead  
负向先行组有一个 `(?!` 前缀。它类似于正向先行组，只不过仅在匹配失败时才匹配。这不是一个好部分。


![](https://silenthunter0814.github.io/pub/web03/7.8.png)

#### 7.3.5 集合类

指定一组字符中的一个字符的便捷方法。 

例如，如果我们想匹配元音，我们可以写成 `(?:a|e|i|o|u)`，但写成类 `[aeiou]` 更方便。

类还提供了另外两个便利。 第一个是可以指定字符范围。 另一个便利是类的补， 如果 `[` 之后的第一个字符是 `^`，则该类排除指定的字符。

因此，32 个 ASCII 特殊字符的集合： 

```text
! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~

(?:!|"|#|\$|%|&|'|\(|\)|\*|\+|,|-|\.|\/|:|;|<|=|>|@|\[|\\|]|\^|_|` |\{|\||\}|~)

可以简写为

[!-\/:-@\[-`{-~]

[^!-\/:-@\[-`{-~] 匹配任何不是 ASCII 特殊字符之一的字符。
```

![](https://silenthunter0814.github.io/pub/web03/7.9.png)

字符类中的转义规则与正则表达式因子的转义规则略有不同。 [\b] 是退格字符。 以下是字符类中应转义的特殊字符：

`- / [ \ ] ^`

![](https://silenthunter0814.github.io/pub/web03/7.10.png)

#### 7.3.6 量词

正则表达式因子可能具有量词后缀，用于确定该因子应匹配的次数。 用大括号括起来的数字意味着该因子应该匹配多次。  
因此，`/www/` 与 `/w{3}/` 匹配相同。 `{3,6}` 将匹配 3、4、5 或 6 次。 `{3,}` 将匹配 3 次或以上。

`？` 与 `{0,1}` 相同。 `*` 与 `{0,}` 相同。 `+` 与 `{1,}` 相同。

匹配往往是贪婪的，匹配尽可能多的重复，直到达到极限（如果有）。 如果量词有一个额外的 `?` 后缀，那么匹配往往是懒惰的，试图匹配尽可能少的重复。 通常最好坚持贪婪匹配。

![](https://silenthunter0814.github.io/pub/web03/7.11.png)

## 8 Methods 方法

JavaScript 包含一小组可用于标准类型的标准方法。

### 8.1 Array 数组

#### 8.1.1 Array.prototype.concat()

`concat(item...)` 方法用于合并两个或多个数组。 此方法不会更改现有数组，而是返回一个新数组。

```js
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]
```

#### 8.1.2 Array.prototype.join()

`join(sep)` 方法从数组创建一个字符串。 它通过将数组的每个元素创建一个字符串，然后将它们全部连接在一起并在它们之间使用分隔符来实现此目的。  
默认分隔符是 `“,”`。 要连接而不分隔，使用空字符串作为分隔符。

```js
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');    // c is 'abcd'
```

#### 8.1.3 Array.prototype.pop()

`pop` 和 `push` 方法使数组像堆栈一样工作。 `pop` 方法删除并返回该数组中的最后一个元素。 如果数组为空，则返回未定义。

```js
var a = ['a', 'b', 'c'];
var c = a.pop();   // a is ['a', 'b'] & c is 'c'
```

`pop` 可以这样实现：

```js
Array.method('pop', function () {
    return this.splice(this.length - 1, 1)[0];
});
```

#### 8.1.4 Array.prototype.push()

`push` 方法将项目追加到数组的末尾。 与 `concat` 方法不同，它修改数组并附加整个数组项。 它返回数组的新长度：

```js
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is  ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;
```

`push` 可以这样实现：

```js
Array.method('push', function () {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
});
```

#### 8.1.5 Array.prototype.reverse()

`reverse` 方法通过反转元素的顺序来修改数组。 它返回数组：

```js
var a = ['a', 'b', 'c'];
var b = a.reverse();
// both a and b are ['c', 'b', 'a']
console.log(a);
console.assert(a === b);
```

#### 8.1.6 Array.prototype.shift()

`shift` 方法从数组中删除第一个元素并返回该删除的元素。 该方法改变数组的长度。

```js
var a = ['a', 'b', 'c'];
var c = a.shift();    // a is ['b', 'c'] & c is 'a'
```

`shift` 可以这样实现：

```js
Array.method('shift', function () {
    return this.splice(0, 1)[0];
});
```

#### 8.1.7 Array.prototype.unshift()

`unshift` 方法类似于 `push` 方法，只不过它将项目推到数组的前面而不是末尾。 它返回数组的新长度：

```js
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
console.log(a, r);
```

`unshift` 可以这样实现：

```js
Array.method('unshift', function () {
    this.splice.apply(this, [0, 0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
});
```


#### 8.1.8 Array.prototype.slice()

`slice(start, end)` 方法对数组的一部分进行浅表复制。 复制的第一个元素将是 `array[start]`。 它会在复制 `array[end]` 之前停止。 `end` 参数是可选的，默认为 array.length。  
不要将切片 `slice` 与 `splice` 混淆。

```js
var a = ['a', 'b', 'c'];

var b = a.slice();   // ['a', 'b', 'c']
var c = a.slice(0, 1);    // b is ['a']
var d = a.slice(1);    //c is ['b', 'c']
var e = a.slice(1, 2);    // d is ['b']

console.log(a, b, c, d, e);
```

#### 8.1.9 Array.prototype.sort()

`sort` 方法对数组的内容进行就地排序。 它对数字数组的排序不正确：

```js
var n = [4, 8, 15, 16, 23, 42];
n.sort();
// n is [15, 16, 23, 4, 42, 8]
console.log(n);
```

JavaScript 的默认比较函数假设要排序的元素是字符串。因此它在比较时将数字转换为字符串。

可以提供自己的比较函数：

```js
var n = [4, 8, 15, 16, 23, 42];

n.sort((a, b) => {
    return a - b;
});
console.log(n);
// [4, 8, 15, 16, 23, 42]
```

该函数将对数字进行排序，但不会对字符串进行排序。 如果我们希望能够对任何简单值数组进行排序：

```js
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']
console.log(m);
```

如果大小写不重要，则比较函数应在比较操作数之前将它们转换为小写。

通过更智能的比较函数，我们可以对对象数组进行排序。 为了使一般情况变得更容易，我们编写一个函数来生成比较函数：

```js
/*
函数 by 接受成员名称字符串并返回一个比较函数，该函数可用于对包含该成员的对象数组进行排序。
*/

var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
s.sort(by('first'));
console.log(s);
```

排序方法不稳定，所以：

`s.sort(by('first')).sort(by('last'));`

不保证产生正确的序列。  
如果想对多个键进行排序，我们可以修改 `by` 以获取第二个参数，这是另一个比较方法，当主键产生匹配时将调用该方法来打破平局：

```js
/*
函数 by 接受成员名称字符串和可选的次要比较函数，并返回一个可用于对包含该成员的对象数组进行排序的比较函数。 当 o[name] 和 p[name] 相等时，使用次比较函数来打破平局。
*/

var by = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            };
        }
    };
};

var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
s.sort(by('last', by('first')));
console.log(s);
```

#### 8.1.10 Array.prototype.splice()

`splice(start, deleteCount, item…)` 方法从数组中删除元素，并用新项目替换它们。  
`start` 参数是数组中位置的编号。 `deleteCount` 参数是从该位置开始删除的元素数。 如果有其他参数，这些项目将被插入到该位置。 它返回一个包含已删除元素的数组。

拼接 `splice` 最流行的用途是从数组中删除元素。 不要混淆拼接和切片：

```js
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']
```

`splice` 可以这样实现：

```js
var a = ['a', 'b', 'c'];

a.splice = function (start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0),
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;

    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = max(min(typeof deleteCount === 'number' ? 
                          deleteCount : len, len - start), 0);
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while (k < deleteCount) {
        element = this[start + k];
        if (element !== undefined) {
            result[k] = element;
        }
        k += 1;
    }
    shift_count = len - start - deleteCount;
    if (delta < 0) {
        k = start + insertCount;
        while (shift_count) {
            this[k] = this[k - delta];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    } else if (delta > 0) {
        k = 1;
        while (shift_count) {
            this[new_len -k] = this[len - k];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    }
    for (k = 0; k < insertCount; k += 1) {
        this[start + k] = arguments[k + 2];
    }
    return result;
}

var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']
console.log(a, r);
```

### 8.2 Function 函数

#### 8.2.1 Function.prototype.apply()

`apply(thisArg, argArray)` 方法调用一个函数，传入将绑定到 `this` 的对象和一个可选的参数数组。 `apply` 方法用于 `apply` 调用模式（第 4 章）。

`bind` 参考实现：

```js
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
Function.method('bind', function (that) {
    var method = this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
    return function () {
        return method.apply(that,
                           args.concat(slice.apply(arguments, [0])));
    };
});

var x = function (n) {
    return this.value + n;
}.bind({value: 666});

console.log(x(2));    // 668
```

### 8.3 Number 数字

#### 8.3.1 number.toExponential

`toExponential(fractionDigits)` 方法将此数字转换为指数形式的字符串。 可选的 `fractionDigits` 参数控制小数位数。 它应该在 0 到 20 之间：

```js
document.writeln(Math.PI.toExponential(0));
document.writeln(Math.PI.toExponential(2));
document.writeln(Math.PI.toExponential(7));
document.writeln(Math.PI.toExponential(16));
document.writeln(Math.PI.toExponential());

/* Produces
3e+0
3.14e+0
3.1415927e+0
3.1415926535897931e+0
3.141592653589793e+0
*/
```

#### 8.3.2 number.toFixed

`toFixed(fractionDigits)` 方法将此数字转换为十进制形式的字符串。 可选的 `fractionDigits` 参数控制小数位数。 它应该在 0 到 20 之间。默认值为 0：

```js
document.writeln(Math.PI.toFixed(0));
document.writeln(Math.PI.toFixed(2));
document.writeln(Math.PI.toFixed(7));
document.writeln(Math.PI.toFixed(16));
document.writeln(Math.PI.toFixed());

/* Produces
3
3.14
3.1415927
3.1415926535897931
3
*/
```

#### 8.3.3 number.toString

`toString(radix)` 方法将此数字转换为字符串。 可选的基数参数控制基数。 它应该在 2 到 36 之间。默认基数是以 10 为底。基数参数最常与整数一起使用，但它可以用于任何数字。

最常见的情况 `number.toString( )` 可以更简单地写为 `String(number)`：

```js
document.writeln(Math.PI.toString(2));
document.writeln(Math.PI.toString(8));
document.writeln(Math.PI.toString(16));
document.writeln(Math.PI.toString());

/* Produces
11.001001000011111101101010100010001000010110100011
3.1103755242102643
3.243f6a8885a3
3.141592653589793
*/
```

### 8.4 Object 对象

#### 8.4.1 Object.prototype.hasOwnProperty()

如果对象包含具有 `name` 的属性，则 `hasOwnProperty(name)` 方法返回 `true`。不检查原型链。

```js
var a = {member: true};
var b = Object.create(a); // from Chapter 3
var t = a.hasOwnProperty('member'); // t is true
var u = b.hasOwnProperty('member'); // u is false
var v = b.member; // v is true
```

#### 8.4.2 Object.method 静态方法

- `create(proto)`  
方法创建一个新对象，使用现有对象作为新创建对象的原型。

- `entries(obj)`  
返回给定对象自己的可枚举字符串键控属性键值对的数组。

- `keys(obj)`  
返回给定对象自己的可枚举字符串键控属性名称的数组。

- `getPrototypeOf(obj)`  
返回指定对象的原型（即内部 `[[Prototype]]` 属性的值）。

打印给定对象的原型链：

```js
var prototypeChains = function(obj) {
    if (obj === null || obj === undefined) return;
    
    var chains = "[[Prototype]] :";
    var proto = Object.getPrototypeOf(obj);

    while (proto) {
        chains += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto);
    }
    chains += ' -> ' + 'null';
    console.log(chains);
};

function Hero(name, age) {
    this.name = name;
    this.age = age;
}
var bard = new Hero("Bard", 20);

prototypeChains(bard);
prototypeChains(Hero);
prototypeChains({});
prototypeChains([]);
prototypeChains("");
prototypeChains(0);
```

### 8.5 RegExp 正则表达式

#### 8.5.1 regexp.exec(string)

如果成功匹配则返回一个数组。 数组的 0 元素将包含与正则表达式匹配的子字符串。 1 元素是组 `1` 捕获的文本，2 元素是组 `2` 捕获的文本，依此类推。 如果匹配失败，则返回null。

如果有 `g` 标志，搜索从位置 `regexp.lastIndex`（最初为零）开始。 如果匹配成功，则 `regexp.lastIndex` 将设置为匹配后第一个字符的位置。 不成功的匹配会将 `regexp.lastIndex` 重置为 0。

这允许您通过在循环中调用 `exec` 来搜索字符串中某个模式的多次出现。  
有几件事需要注意：  
- 如果提前退出循环，则必须在再次进入循环之前自行将 `regexp.lastIndex` 重置为 0。 m
- `^` 因子仅在 `regexp.lastIndex` 为 0 时匹配：

```js
/*
将简单的 html 文本分解为标签和文本。 （有关实体化方法，请参阅 string.replace。）
对于每个标签或文本，生成一个包含以下内容的数组
[0] 完全匹配的标签或文本
[1] /，如果有的话
[2]标签名称
[3] 属性（如果有）
*/

var text = '<html><body bgcolor=linen><p>' +
        'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

while ((a = tags.exec(text))) {
    for ( i = 0; i < a.length; i += 1) {
        let s = '// [' + i + '] ' + a[i];
        document.writeln(s);
    }
    document.writeln();
}
```

#### 8.5.2 regexp.test(string)

如果正则表达式与字符串匹配，则返回 `true`； 否则，返回 `false`。 不要在此方法中使用 `g` 标志：

`var b = /&.+;/.test('frank &amp; beans');`

`test` 可以这样实现：

```js
RegExp.method('test', function (string) {
    return this.exec(string) !== null;
});
```

### 8.6 String 字符串

#### 8.6.1 String.charAt(pos)

返回该字符串中位置 `pos` 处的字符。 如果 `pos` 小于零或大于或等于 `string.length`，则返回空字符串。 JavaScript 没有字符类型。 该方法的结果是一个字符串：

```js
var name = 'Curly';
var initial = name.charAt(0);    // initial is 'C'
```

`charAt` 可以实现为：

```js
String.method('charAt', function (pos) {
    return this.slice(pos, pos + 1);
});
```

#### 8.6.2 String.charCodeAt(pos)

与 `charAt` 相同，只是它不返回字符串，而是返回该字符串中位置 `pos` 处的字符的代码点值的整数表示形式。 如果 `pos` 小于零或大于或等于 `string.length`，则返回 `NaN`：

```js
var name = 'Curly';
var initial = name.charCodeAt(0);    // initial is 67
```

#### 8.6.3 String.concat(string…)

通过将其他字符串连接在一起来创建一个新字符串。 它很少使用，因为 `+` 运算符更方便：

`var s = 'C'.concat('a', 't'); // s is 'Cat'`

#### 8.6.4 String.indexOf(searchString, position)

`indexOf` 方法在字符串中搜索 `searchString`。 如果找到，则返回第一个匹配字符的位置； 否则，返回  -1。 可选的位置参数使搜索从字符串中的某个指定位置开始：

```js
var text = 'Mississippi';
var p = text.indexOf('ss');  // p is 2
p = text.indexOf('ss', 3);   // p is 5
p = text.indexOf('ss', 6);   // p is -1
```

#### 8.6.5 string.lastIndexOf(searchString, position)

`lastIndexOf` 方法与 `indexOf` 方法类似，不同之处在于它从字符串的末尾而不是前面进行搜索：

```js
var text = 'Mississipi';
var p = text.lastIndexOf('ss');    // p is 5
p = text.lastIndexOf('ss', 3);     // p is 2
p = text.lastIndexOf('ss', 6);     // p is 5
```

#### 8.6.6 String.match(regexp)

`match` 方法匹配一个字符串和一个正则表达式。 它如何做到这一点取决于 `g` 标志。  
如果没有 `g` 标志，则调用 `string.match(regexp)` 的结果与调用 `regexp.exec(string)` 的结果相同。  
如果正则表达式具有 `g` 标志，那么它会生成所有匹配项的数组，但不包括捕获组：

```js
var entityify = function () {
    var character = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
    };
    return function () {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
}();

var text = '<html><body bgcolor=linen><p>' +
         'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

a = text.match(tags);
for (i = 0; i < a.length; i += 1) {
    document.writeln('// [' + i + '] ' + entityify.apply(a[i]));
}
```

#### 8.6.7 String.replace(searchValue, replaceValue)

`Replace` 方法对字符串执行搜索和替换操作，生成一个新字符串。 `searchValue` 参数可以是字符串或正则表达式对象。 如果是字符串，则仅替换第一次出现的 `searchValue`，因此：

`var result = "mother_in_law".replace('_', '-');`

会产生 `"mother-in_law"`，这可能会让人失望。

如果 `searchValue` 是正则表达式并且具有 `g` 标志，则它将替换所有出现的情况。 如果它没有 `g` 标志，那么它将仅替换第一次出现的位置。 `replaceValue` 可以是字符串或函数。 如果`replaceValue` 是一个字符串，则字符 $ 有特殊含义：

```js
// Capture 3 digits within parens
var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');
// p is 555-666-1212
```


|  $ 序列   | replace |
|---------|---------|
| $$      | $       |
| $&      | 匹配的文本   |
| $number | 捕获组文本   |
| $`      | 匹配之前的文字 |
| $'      | 匹配后的文本  |


如果 `replaceValue` 是一个函数，则每次匹配都会调用它，并且函数返回的字符串将用作替换文本。 传递给函数的第一个参数是匹配的文本。 第二个参数是捕获组 `1` 的文本，下一个参数是捕获组 `2` 的文本，依此类推：

```js
/*
返回 string.entityify 方法，该方法返回调用 replace 方法的结果。 
它的 replaceValue 函数返回在对象中查找字符的结果。 对象的这种使用通常优于 switch 语句。
*/
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};
String.method('entityify', function () {
    var character = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
    };
    return function () {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
}());
alert("<&>".entityify());    // &lt;&amp;&gt;
```

#### 8.6.8 String.search(regexp)

`search` 方法类似于 `indexOf` 方法，只不过它采用正则表达式对象而不是字符串。 如果有，则返回第一个匹配项的第一个字符的位置；如果搜索失败，则返回 -1。 `g` 标志被忽略。 没有位置参数：

```js
var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/);   // pos is 18
```

#### 8.6.9 String.slice(start,end)

`slice` 方法通过复制字符串的一部分来创建一个新字符串。 `end` 参数是可选的，其默认值为 `string.length`。  
`end` 参数比最后一个字符的位置大 1。 要获取从位置 `p` 开始的 `n` 个字符，使用 `string.slice(p,p + n)`。

```js
var text = 'and in it he says "Any damn fool could';
var a = text.slice(18);
// a is '"Any damn fool could'
var b = text.slice(0, 3);
// b is 'and'
var c = text.slice(-5);
// c is 'could'
var d = text.slice(19, 32);
// d is 'Any damn fool'
```

#### 8.6.10 String.split(separator, limit)

`split` 方法通过将字符串拆分为多个片段来创建字符串数组。 可选的 `limit` 参数可以限制将被分割的块的数量。 分隔符参数可以是字符串或正则表达式。

如果分隔符是空字符串，则会生成单个字符的数组：

```js
var digits = '0123456789';
var a = digits.split('', 5);
// a is ['0', '1', '2', '3', '4']
```

否则，将在字符串中搜索所有出现的分隔符。 分隔符之间的每个文本单元都会复制到数组中。 `g` 标志被忽略：

```js
var ip = '192.168.1.0';
var b = ip.split('.');
// b is ['192', '168', '1', '0']

var c = '|a|b|c|'.split('|');
// c is ['', 'a', 'b', 'c', '']

var text = 'last, first ,middle';
var d = text.split(/\s*,\s*/);
// d is ['last', 'first', 'middle']
```

有一些特殊情况需要注意。 来自捕获组的文本将包含在拆分中：

```js
var text = 'last, first ,middle';
var e = text.split(/\s*(,)\s*/);
// e is ['last', ',', 'first', ',', 'middle']
```

当分隔符是正则表达式时，某些实现会抑制输出数组中的空字符串：

```js
var f = '|a|b|c|'.split(/\|/);
// f is ['', 'a', 'b', 'c', '']
// f is ['a', 'b', 'c'] on some systems
```

#### 8.6.11 String.substring(start,end)

`substring` 方法与 `slice` 方法相同，只是它不处理负参数的调整。 没有理由使用子字符串方法。 使用切片代替。

#### 8.6.12 String.toLowerCase( ) 

`toLowerCase` 方法通过将该字符串转换为小写来生成一个新字符串。

#### 8.6.13 String.toUpperCase( ) 

`toUpperCase` 方法通过将该字符串转换为大写来生成一个新字符串。


#### 8.6.14 String.fromCharCode(char…) 

`String.fromCharCode` 函数从一系列数字生成字符串。

```js
var a = String.fromCharCode(67, 97, 116);
// a is 'Cat'
```

