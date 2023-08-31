---
description: javascript 开发教程。jaascript 课程课件，学习笔记。  
keywords: JavaScript, js，HTML，初学者，教程  
author: silenthunter0814, Silent Hunter
---

# web02 JavaScript 教程

作者： silenthunter0814

课程视频：
- 油管: https://youtube.com/@silenthunter0814
- B 站：https://space.bilibili.com/1551957972

---  
<details>
<summary>章节目录</summary>

[[toc]]

</details>

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

#### 1.2.1 Numbers

在内部，JavaScript 只有一种数字类型：每个数字都是浮点数。

数字文字是源代码中表示的数字，根据其编写方式，它可以是整数文字或浮点文字。

- 整数： `8`, `353535`, `0x2a`
- 浮点数: `3.14`, `0.8`, `1.2e3`

算术运算符： `+`, `-`, `*`, `/`, `%`, `()`

算术表达式： `3 + 4`, `2 - 5 * 6`, `5 * (1 + 2) / 3`



#### 1.2.2 String

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

#### 1.2.3 Boolean

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

#### 1.2.4 null

null 是一个特殊值，表示不存在值。  
这在其他语言中也是一个常见的概念，例如在 Python 中可以称为 nil 或 None。

`console.log(typeof null);   // 'object'`

#### 1.2.5 undefined

undefined 表示变量尚未初始化且值不存在。

它通常由没有返回值的函数返回。 当函数接受参数但调用者未设置该参数时，该参数是未定义的。

要检测值是否未定义，请使用以下构造：

`typeof variable === 'undefined'`

#### 1.2.6 Object 类型

任何不是基本类型的都是对象类型。

函数、数组以及我们所说的对象都是对象类型。 它们本身很特殊，但它们继承了对象的许多属性，例如拥有属性以及可以作用于这些属性的方法。


### 1.3 变量，表达式和简单语句

变量是对值的命名引用。 这样就可以通过预定的名称访问不可预测的值。

JavaScript 中的变量没有附加任何类型。 将特定文字类型分配给变量后，可以稍后重新分配该变量以承载任何其他类型，而不会出现类型错误或任何问题。

必须先声明变量，然后才能使用它。 

有 3 种方法可以做到这一点，使用 var 、 let 或 const ，这 3 种方法的不同之处在于稍后与变量交互的方式。

#### 1.3.1 变量的声明和定义

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

```js{6,7}
let x = 3, y = "hi";

x = 4;
x = y;

const pi = 3.14;
pi = 3.1415;   // error
```

#### 1.3.2 变量命名规则

JavaScript 的变量命名有两个限制：
- 变量名称必须仅包含字母、数字、符号 `$` 和 `_`。
- 首字符必须非数字。

```js
let $ = 3;
let _ = 2;

let 2a;   // 不能以数字开始
let my-name;    // 算术运算符 '-' 不允许用于变量命名
```

#### 1.3.3 Expression 表达式和语句

表达式是可以计算并解析为值的代码单元。  
表达式后跟一个 `;` 形成一条语句。  

JS 中的表达式可以分为几类。

1. 赋值表达式: `variable =  expression` 

```js
var x, y;

x = 3;
y = x;

y = x = 4;
```

2. 算术表达式  
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

3. 字符串表达式 `+`

```js
var s1 = 'hello';
var s2 = 'world';

var s = s1 + ' ' + s2;
console.log(s);

s1 += ' ' + "world";
console.log(s1);
```

当字符串和数值连接时，数值类型被自动转换为字符串，然后执行字符串连接：

`cosole.log('age = ' + 18);  // 'age = 18'`

4. 关系表达式

`>`, `>=`, `<`, `<=`, `===`, `!==`

关系表达式运算结果为 Boolean 类型。

```js
console.log(3 < 2);
console.log("hello" === "hello");
console.log(typeof true === 'boolean');
```

5. 逻辑表达式

`&&`, `||`, `!`

- 逻辑与表达式： `expr1 && expr2`
  - 如果 `expr1` 值为真，`(expr1 && expr2) === expr2`
  - 如果 `expr1` 值为假，`(expr1 && expr2) === expr1`

```js
var a, b;

a = 1
console.log((a && b) === undefined);

a = null;
console.log((a && b) === null);
```

- 逻辑或表达式： `expr1 || expr2`
  - 如果 `expr1` 值为真，`(expr1 || expr2) === expr1`
  - 如果 `expr2` 值为假，`(expr1 | expr2) === expr2`

```js
var a, b;

a = "hello";
console.log((a || b) === 'hello');

a = '';
console.log((a || b) === undefined);
```

- 逻辑非表达式： `!(expr)`
  - 如果 `expr` 值为真，`!(expr) === false`
  - 如果 `expr` 值为假，`!(expr) === true`

```js
console.log(!3, !'hi', !'0', ![], !{});

console.log(!0, !'', !null, !undefined);
```

6. 模板字符串

又称为模板字面量或模板文字，是用反引号 (`) 字符分隔的文字，允许多行字符串、带有嵌入表达式的字符串插值。

```js
console.log(`hello world`);

console.log(`line1
line2`);

console.log(`the value is: ${2/5}`);

console.log(`\${2/5}` === '${2/5}');
```


### 1.4 if else 语句

JavaScript 条件选择语句。有三种主要形式。

- `if` 语句

语法格式：

```js
if (condition) {
    statements
}
```

如果 `condition` 为真，执行大括号内语句。无论如何，代码继续向下执行。

```js
var hero;

// hero = "Bard"; 

if (hero) {
    console.log("My name is: " + hero);
}

console.log("anyway, code goes here!");
```

- `if ... else` 语句

语法格式：

```js
if (condition) {
    statements1
} else {
    statememts2
}
```

如果 `condition` 为真，执行`statements1`；否则，执行 `else` 子句的 `statements2`。无论如何，代码继续向下执行。

```js
var age = 18;

// age = 25;

if (age > 20) {
    console.log("I have to get a job");
} else {
    console.log('i should study hard');
}

console.log("anyway, code goes here!");
```

- `if ... else if ... else` 语句

语法格式：

```js
if (cond1) {
    stmts1
} else if (cond2) {
    stmts2;
} else if (condN) {
    stmtsN
} else {
    stmts
}
```

多路选择语句，最后的 `else` 子句是可选的。

```js
var age = 8;

if (age <= 12) {
    console.log("child");
} else if (age <= 18) {
    console.log('young');
} else {    /* optional */
    console.log('adult');
}

console.log("anyway, code goes here!");
```

- `?:` 三元运算符

语法格式：

`condition ? exprIfTrue : exprIfFalse`

  - `condition`: Boolean 值用作条件的表达式。
  - `exprIfTrue`: 如果条件计算结果为真值（等于或可以转换为真值），则执行的表达式。
  - `exprIfFalse`: 如果条件为假（即具有可以转换为假的值），则执行的表达式。
  
```js

var a, b, max;

a = 3;
b = 10;
max = a > b ? a : b;
console.log('max = ' + max);
```

### 1.5 while for 循环语句

循环是重复执行直到满足特定条件的指令序列。

#### 1.5.1 while 循环

while 语句创建一个循环，只要测试条件计算结果为 true，该循环就会执行指定的语句。 在执行语句之前评估条件。

语法格式：

```js
while (condition) {
    statements
}
```

```js
var n, x;

x = 0;
n = 0;  // must be initialized
while (n < 3) {
    n++;
    x += n;
}
console.log('x = ' + x);
```

计算 `1, 2, ... n` n个自然数值和：

```js
var n, sum;

n = 10;
sum = 0;
while (n > 0) {
    sum += n;
    n--;
}
console.log('sum = ' + sum);
```

#### 1.5.2 for 循环

for 语句创建一个循环，该循环由三个可选表达式组成，用括号括起来并用分号分隔，后跟要在循环中执行的语句。

语法格式：

```js
for (init; test; update) {
    statements
}
```
```js
var s = '';

for (let cnt = 0; cnt < 10; cnt++) {
    s += cnt;
}
console.log(s);

console.log(typeof cnt === 'undefined');
```

`for` 语句和 `while` 语句通常可以进行等价转换:

```js
var n, sum;

n = 10;
sum = 0;
for (let i = n; i > 0; i--) {
    sum += i;
}
console.log('sum = ' + sum);
```

#### 1.5.3 `continue` 和 `break` 语句

- `continue` 终止执行当前循环中的语句，并继续执行下一次迭代循环。
- `break` 终止当前循环，并将程序控制转移到终止语句后面的语句。

打印连续自然数中的偶数：

```js{5,9}
var n = 1;

while (true) {
    if (n > 10) {
        break;
    }
    if (n % 2 === 1) {
        n++;
        continue;
    }
    console.log(n);
    n += 1;
}

console.log("anyway, code goes here");
```

### 1.6 switch 多路选择语句

## 2 Function 函数

函数是一组接受输入、执行某些特定计算并产生输出的语句。   
将一些常见或重复完成的任务放在一起并创建一个函数，这样我们就可以调用该函数，而不是为不同的输入一次又一次地编写相同的代码。

### 2.1 函数定义  

函数定义（也称为函数声明或函数语句）由 function 关键字和后跟：
- 函数的名称。
- 函数的参数列表，用括号括起来并用逗号分隔。
- 用大括号 { /* … */ } 括起来的 JavaScript 语句。

在 JavaScript 中编写函数有三种方法：

1. 函数声明：用 function 关键字声明一个函数。函数声明必须有函数名。

```js
function name(para1, para2, ...) {
    // Function body
}
```

定义一个名为 square 的简单函数：

```js
function square(num) {
    var result;

    result = num * num;
    return num;
}
```

`return` 语句结束函数执行并指定要返回给函数调用者的值。

函数调用  
定义函数并不执行它。 定义它时会命名该函数并指定调用该函数时要执行的操作。  
调用函数实际上使用指示的参数执行指定的操作。 例如，前面定义函数 square，则可以按如下方式调用它：

`square(5);`

`square` 函数中的 `num` 称作形参，函数调用时传递的 `5` 称作实参。

函数名后跟小括号形成函数调用表达式。

2. 函数表达式： 类似于没有函数名的函数声明。函数表达式可以存储在变量赋值中。 

```js
var name = function(para1, para2) {
    //function body
};
```

定义一个名为 add 的表达式函数：

```js
var add = function(num1, num2) {
    var sum = num1 + num2;
    return sum;
};

var num = add(2, 3);
console.log(num);
```

我们调用 `add(2, 3)`，并将函数的运行结果 `sum` 通过 `return` 语句返回，并赋值给 `num` 变量。

3. 箭头函数表达式

```js
() => expression

param => expression

(para) => expression

(para1, paraN) => expression

() => {
    statements
}

para => {
    statements
}

(para1, paraN) => {
    statements
}
```

前面的 `add()` 函数可以简写为箭头函数形式：

```js
var add = (num1, num2) => num1 + num2;
console.log(add(2, 3));

// or
var add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(2, 3));
```

箭头函数表达式是传统函数表达式的紧凑替代品，具有一些语义差异和使用方面的故意限制：
- 箭头函数没有自己的 this、arguments 或 super 绑定，因此不应该用作方法。
- 箭头函数不能用作构造函数。 使用 new 调用它们会引发类型错误。 他们也无权访问 new.target 关键字。
- 箭头函数不能在其函数体内使用yield，也不能创建为生成器函数。

### 2.2 递归函数

递归是一个调用自身的过程。调用自身的函数称为递归函数。  
递归函数必须有一个停止调用自身的条件。否则，该函数将被无限期地调用。

```js
function recursion() {
    // function code

    recursion();

    // function code
}

recursion();
```

为了防止无限递归，通常使用 `if...else` 语句（或类似方法），其中一个分支进行递归调用，而另一个分支不进行递归调用。

```js
function recursion() {
    if (cond) {
        recursion();
    } else {
        // stop calling recursion()
    }
}

recursion();
```

求阶乘:

```js
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    var y = factorial(x - 1);
    return x * y;
}

console.log(factorial(3));

```

### 2.3 回调函数

回调函数是作为参数传递到另一个函数的函数，然后在外部函数内部调用该函数以完成某种例程或操作。

```js
function hero(name, callback) {
    var desc = callback(name);
    console.log(desc);
}

function desc(name) {
    var heroDesc = 'Hero ' + name + ' not defined';

    if (name === 'Bard') {
        heroDesc = name + ' mage';
    } else if (name === 'Jax') {
        heroDesc = name + ' archer';
    }
    return heroDesc;
}

hero("Jax", desc);
hero('Annie', desc);
```

setTimeout() 全局函数和匿名回调  
设置一个计时器，一旦计时器到期，该计时器就会执行函数或指定的代码段。

```js
function callback() {
    console.log('After 1 sec, I say "hello world"');
}
setTimeout(callback, 1000);

setTimeout(function() {
    console.log('After 0.5 sec, I say "hello world"');
}, 500);
```

## 3 Object 对象

Object 是 JavaScript 的一种数据类型。它用于存储各种键值集合和更复杂的实体。  
可以使用对象字面量的方式创建对象。

### 3.1 对象创建和属性访问

创建一个空对象：

```js
var hero = {};
var person = {};

console.log(typeof hero === 'object');
console.log(hero && hero !== person);
```

创建新对象并进行初始化：

```js
var hero = {
    name: "Bard",
    age: 1
};
console.log(hero);
console.log(hero.name, hero.age);

hero.name = "Jax";
console.log(hero.name);
```

使用 `.` 运算符访问对象成员，使用规则等同于变量。

声明一个对象后，稍后可以任意添加新的对象成员：

```js
var hero = {};

hero.name = "Bard";
hero.age = 20;

console.log(hero["name"], hero['age']);
```
对象成员也可以通过 `[]` 运算符访问，但是要注意使用的是成员名称字符串:

`object.propertyName === object["propertyName']`
 
### 3.2 对象方法和 `this` 关键字

对象中还可以包含函数，为了同对象属性进行区别，通常称作对象方法。

```js
var hero = {
    "name": "Bard",
    "age": 20
};

hero.says = function() {
    console.log("hello world!");
}
hero.says();
```

在定义对象时直接定义内部方法：

```js
var hero = {
    "name": "Bard",
    says() {    /* or: says: function() { */
        console.log("hello");
    },
    "age": 20
};

hero.says();
```

方法中的 “this”  
当函数作为对象里的方法被调用时，this 被设置为调用该函数的对象。

```js{4}
var hero = {
    "name": "Bard",
    says: function() {
        console.log(this.name);
    }
};

hero.says();
```

在本例中, `this` 被设置为 `hero` 对象。

### 3.3 `getter` 和 `setter` 属性访问器

getter 和 setter 提供对对象属性的访问的特殊方法。getter 用于读取属性值，而 setter 用于将值写入属性。
- 允许控制如何访问和修改对象属性。
- 可用于在将数据设置为对象之前验证数据。
- 可用于创建动态计算的属性。

1. `get`

用于访问对象属性的函数。  
使用 `get` 关键字定义，后跟一个函数。该函数不带参数并返回一个值。

```js{3-5,8}
var hero = {
    name: "Bard",
    get heroName() {
        return this.name;
    }
};

console.log(hero.heroName);
```

2. `set`

用于设置对象中属性的值。`set` 方法接受一个参数。

```js{6-8,12}
var hero = {
    name: "Bard",
    get heroName() {
        return this.name;
    },
    set heroName(value) {
        this.name = value;
    }
};
console.log(hero.heroName);

hero.heroName = 'Jax';
console.log(hero.heroName);
```

### 3.4 `in` 运算符 和 `for ... in` 遍历对象属性

1. `in` 运算符  
如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true。

```js
var hero = {
    name: "Bard",
    age: 20
};

console.log('name' in hero);
console.log('interest' in hero);    // false
```

2. `for ... in` 遍历对象属性

`for...in` 语句以任意顺序迭代一个对象的除 `Symbol` 以外的可枚举属性，包括继承的可枚举属性。

```js
var hero = {
    name: "Bard",
    age: 20
};

for (let prop in hero) {
    console.log(prop + ': ' + hero[prop]);
}
```

## 4 Array 数组

### 4.1 数组定义

创建一个数组：

```js
var heros = [];
console.log(heros !== null && heros.length === 0);

heros[0] = "Bard";
heros[1] = "Jax";
console.log(heros.length);
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

heros[0] = 'Pyke';
console.log(heros[0]);

// initializae
var animals = ['cat', 'dog'];
```

在 JavaScript 中，数组不是基本类型，而是具有以下核心特征的 Array 对象：
  - 通过中括号运算符对元素进行直接的读写操作。
  - 数组是可调整大小的，并且可以包含不同的数据类型。
  - 不能使用任意字符串作为索引访问数组元素，但必须使用非负整数（或它们各自的字符串形式）作为索引访问。
  - 数组的索引从 0 开始：数组的第一个元素在索引 0 处，第二个在索引 1 处，以此类推，最后一个元素是数组的 length 属性减去 1 的值。
  - 数组具有 `length` 属性，并根据数组的大小动态改变。

### 4.2 数组方法

1. `for ... of` 遍历数组

```js{8-10}
var heros = ['Jax', 'Bard', 'Pyke'];

for (let i = 0; i < heros.length; i++) {
    console.log(i + ': ' + heros[i]);
}

// Using for ... of loop
for (let hero of heros) {
    console.log(hero);
}
```

2. `push(), pop()` 方法

- `push()` 方法将指定元素添加到数组末尾并返回数组的新长度。
- `pop()` 方法从数组中删除最后一个元素并返回该元素。 该方法改变数组的长度。

```js
var arr = [];

for (let i = 1; i < 5; i++) {
    arr.push(i);
}
for (let e of arr) {
    console.log(e);
}

while (arr.length) {
    console.log(arr.pop());
}
```

3. `unshift(), shift()` 方法

- `unshift()` 方法将指定元素添加到数组的开头并返回数组的新长度。
- `shift()` 方法从数组中删除第一个元素并返回该删除的元素。 该方法改变数组的长度。

```js
var arr = [];

for (let i = 1; i < 5; i++) {
    arr.unshift(i);
}
for (let e of arr) {
    console.log(e);
}

while (arr.length) {
    console.log(arr.shift());
}
```

4. `sort()` 排序  

- `sort()` 方法对数组的元素进行就地排序，并返回对同一数组（现已排序）的引用。
- 默认排序将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列。

```js
var arr = [3, 12, 10, 9, 6];

arr.sort();
for (let e of arr) {
    console.log(e);
}

// [10, 12, 3, 6, 9] not expected
```

通过提供比较函数，以确保正确的排序。
以下代码按照英雄的年龄进行排序：

```js
var heros = [
    {name: "Bard", age: 20},
    {name: "Jax", age: 18},
    {name: "Annie", age: 19}
];

heros.sort((a, b) => {
    return a.age - b.age;
});

for (let hero of heros) {
    console.log(hero.age, hero.name);
}
```
5. `forEach()` 方法

为每个数组元素执行一次提供的函数。

```js
var heros = [
    {name: "Bard", age: 20},
    {name: "Jax", age: 18},
    {name: "Annie", age: 19}
];

heros.forEach(e => {
    console.log('forEach(): ', e.name, e.age);
});

heros.each = function(callback) {
    for (let hero of this) {
        callback(hero);
    }
};
heros.each((e) => {
    console.log('each(): ', e.name, e.age);
});
```

6. `map()` 方法

创建一个新数组，其中填充了对调用数组中每个元素调用所提供函数的结果。

```js
var heros = [
    {name: "Bard", age: 20},
    {name: "Jax", age: 18},
    {name: "Annie", age: 19}
];

var names = heros.map(e => e.name);
console.log(names);
```

下面的代码是 `map()` 的简单实现：

```js
var heros = [
    {name: "Bard", age: 20},
    {name: "Jax", age: 18},
    {name: "Annie", age: 19}
];

heros.map = function(callback) {
    console.log("map() implementation");
    var map = [];
    for (let e of this) {
        map.push(callback(e));
    }
    return map;
};

var ages = heros.map(e => {
    return e.age;
});
console.log(ages);
```

7. `reduce()` 方法

按顺序对数组的每个元素执行用户提供的“reducer”回调函数，并传入前一个元素计算的返回值。  
对数组的所有元素运行缩减程序的最终结果是单个值。

```js
var numbers = [5, 6, 8, 2, 1];

var sum = numbers.reduce((sum, element) => {
    return sum + element;
}, 0);

console.log(typeof sum, sum);
```

下面的代码是 `redue()` 的简化实现：

```js
var numbers = [5, 6, 8, 2, 1];

numbers.reduce = function(reducer, init) {
    console.log("reduce() implemention");
    var result;

    result = init === undefined ? 0 : init;
    for (let e of this) {
        result = reducer(result, e);
    }
    return result;
};

var sum = numbers.reduce((sum, e) => sum + e);
console.log(sum);
```

### 4.3 `iterator` 迭代器

#### 4.3.1 迭代器

迭代器是一个满足四个条件的对象：
- 有一个名为next()的方法
- 每次调用next()时按顺序返回值
- 返回的对象为 `{value: nextVal, done: false}`
- 如果没有值返回（完成），则返回对象 `{done: true, value: undefined}`

基于这个条件，我们在类数组上创建一个简单的迭代器:

```js
var iterator = {
    count: 0,
    next: function() {
        this.count++;
        return this.count <= 5 ? {
            value: this.count * 2,
            done: false
        } : {done: true};
    }
};
```

每次调用 next() 时都会依次返回 2 到 10 之间的偶数的对象。

使用迭代器：

```js
var it;
while (!(it = iterator.next()).done) {
    console.log(it.value);
}
/*
var it = iterator.next();
while (!it.done) {
    console.log(it.value);
    it = iterator.next();
}
*/
```

```js
class Iterator {
    constructor(arrayLike) {
        this.i = 0;
        this.array = arrayLike;
    }
    next() {
        if (this.i < this.array.length) {
            return {
                value: this.array[this.i++],
                done: false
            };
        }
        return {done: true};        
    }
}

var obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    length: 3,
}
obj[Symbol.iterator] = function() {
    return new Iterator(this);
};

var it = obj[Symbol.iterator]();
var resul = it.next();
while (!resul.done) {
    console.log(resul.value);
    result = it.next();
}

for (let elem of obj) {
    console.log(elem);
}

```

#### 4.3.2 可迭代对象

可迭代对象是具有创建并返回迭代器 `[Symbol.iterator]()` 方法的对象。  
Array 和 String 是可迭代对象。

修改上节的例子变成可迭代对象：

```js
var iterator = {
    count: 0,
    next: function() {
        this.count++;
        return this.count <= 5 ? {
            value: this.count * 2,
            done: false
        } : {done: true};
    }
};

var iteratorObj = {
    [Symbol.iterator]: function() {
        return iterator;
    }
};
```

`for of` 语句从可迭代对象中一一提取值：

```js
for (let val of iteratorObj) {
    console.log(val);
}
```


## 5 对象和继承

JavaScript 中几乎所有对象都是 `Object` 的实例； 典型的对象从 `Object.prototype` 继承属性（包括方法），尽管这些属性可能被隐藏（也称为覆盖）。

### 5.1 构造函数和 `new` 操作符

常规的 `{...}` 对象字面量语法允许创建一个对象。  
当需要创建很多类似的对象，并存在许多共同的方法时，使用构造函数是更好的选择。

1. 构造函数
  - 函数命名以大写字母开头。
  - 只能由 `new` 操作符来执行。

```js
function Hero(name, age) {
    this.name = name;
    this.age = age;
}
```

2. `new` 操作符  
当使用 `new` 关键字调用函数时，该函数将被用作构造函数。 `new` 将执行以下操作：
  - 创建一个空对象，称为新的实例 `newInstance`。
  - 将 `newInstance` 的 `[[Prototype]]` 隐藏属性指向构造函数的原型属性 `constructor.prototype`。
  - 使用给定参数执行构造函数，将 `newInstance` 绑定为 `this` 上下文。
  - 如果构造函数返回一个对象，则该返回值将成为整个 `new` 表达式的结果。 否则返回 `newInstance`。

```js{6,7}
function Hero(name, age) {
    this.name = name;
    this.age = age;
}

var bard = new Hero("Bard", 20);  // {name: "Bard", age: 20}
var jax = new Hero("Jax", 18);

console.log(bard, jax);
```

3. `prototype` 原型方法  
可以在任何时候向构造函数的原型属性添加方法，并在其实例中立即可用。

```js{5-7}
function Hero(name, age) {
    this.name = name;
    this.age = age;
}
Hero.prototype.says = function() {
    console.log(this.name + ": hello world!");
}

var bard = new Hero("Bard", 20);
var jax = new Hero("Jax", 18);

bard.says();
jax.says();
```

### 5.2 `class` 类语法

类只是构造函数的语法糖。一切仍然以同样的方式进行。

```js{1-9}
class Hero{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    says() {
        console.log(this.name + ": hello world!");
    }
}
var bard = new Hero("Bard", 20);
var jax = new Hero("Jax", 18);

bard.says();
jax.says();
```

### 5.3 继承和原型链

当谈到继承时，JavaScript 只有一种结构：对象。  
每个对象都有一个私有属性，该属性保存到另一个对象（称为其原型）的链接。  
该原型对象有自己的原型，依此类推，直到到达原型为 null 的对象。

JavaScript 对象有一个到原型对象的链接。  
当尝试访问对象的属性时，不仅会在该对象上查找该属性，还会在该对象的原型、原型的原型等上查找，直到找到具有匹配名称的属性或已到达原型链的末端。

符号 `someObject.[[Prototype]]` 用于指定 `someObject` 的原型。  
可以分别使用 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 函数访问和修改 `[[Prototype]]` 内部槽。

#### 5.3.1 打印对象的原型链

使用 `Object.getPrototypeOf()` 静态方法获取对象的原型，通过迭代获取原型的原型，直到 `null`结束。


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
#### 5.3.2 获取对象原型的所有属性和方法

`Object.getOwnPropertyNames()` 静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbol 值作为名称的属性）。

```js
var props = Object.getOwnPropertyNames(Object.prototype);
console.log("Object property length: " + props.length);
for (let prop of props) {
    console.log(prop);
}

props = Object.getOwnPropertyNames(Array.prototype);
console.log("Arry property length: " + props.length);
for (let prop of props) {
    document.write(prop + '</br>');
    console.log(prop);
}
```

如果只想获取可枚举属性，使用 Object.keys() 或 for...in 循环。  
Object.keys() 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

```js
var hero = {
    name: "Bard",
    age: 20,
    says: function() {
        console.log(this.name + ": hello world");
    }
};

var keys = Object.keys(hero);
console.log(keys);
for (let key of keys) {
    console.log(key);
}
```

`Object.entries()` 静态方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对。  
`Object.values()` 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。


## 6 DOM 文档对象模型

文档对象模型（DOM）是 `web` 上构成文档结构和内容的对象的数据表示。

DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (`Node`)，每个节点都包含着对象 (`objects`)。  
DOM 的方法 (methods) 以特定方式操作 DOM 树，这些方法可以改变文档的结构、样式或者内容。  
节点(`node`)可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。

### 6.1 访问 DOM

在使用 DOM 时，不需要做任何其他特殊的操作，都可以立即开始使用 `document` 或 `window` 对象的 API 来操作文档本身，或网页中的任何元素（文档的子元素）。

当文档加载时，创建一个新的 h1 元素，向该元素添加文本，然后将其添加到文档的树中：

```js
window.onload = () => {
    const h1 = document.createElement('h1');
    const text = document.createTextNode("Welcome MDN");
    h1.appendChild(text);
    document.body.appendChild(h1);
}
```

1. `document` 文档对象

创建一个index.html文件，在浏览器中打开，同时打开开发者控制台。

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1>
  </body>

</html>
```

在开发者控制台输入：

`document;` 

并回车，可以看到与元素选项卡相同的内容。

文档对象 `document` 对象是一个内置对象，具有许多属性和方法，我们可以使用它们来访问和修改网站。

2. DOM 和 HTML 源代码区别

- DOM 由客户端 JavaScript 修改
- 浏览器自动修复源代码中的错误

在控制台输入：

`document.body;`

可以看到如下输出：

```html
<body>
    <h1>Document Object Model</h1>
</body>
```

`document` 是一个对象，`body` 是用点表示法访问的该对象的属性。 将 `document.body` 提交到控制台会输出 `body` 元素及其内部的所有内容。

在控制台中，我们可以更改页面上对象的一些实时属性。 我们将编辑样式属性，将背景颜色更改为红色。 在控制台中输入：

`document.body.style.backgroundColor = 'red';`

输入并提交上述代码后，将能看到网站的实时更新，背景颜色发生变化。

切换到 `Elements` 选项卡，或者再次在控制台中输入 `document.body`，将看到 DOM 已更改:

```html
<body style="background-color: red;">
    <h1>Document Object Model</h1>
</body>
```

注意：为了更改 CSS 背景颜色属性，我们必须在 JavaScript 中输入 `backgroundColor`。 任何带连字符的 CSS 属性都将在 JavaScript 中以驼峰命名法编写。

我们输入的 JavaScript 代码将红色分配给 `body` 的背景颜色，现在是 DOM 的一部分。

但是，网站的源代码不会改变，也不会受到客户端 JavaScript 的影响。 如果刷新页面，我们在控制台中添加的新代码将会消失。

DOM 可能具有与 HTML 源代码不同的输出的另一种情况是源代码中存在错误。 一个常见的例子是表格标签 - 表格内需要 `tbody` 标签，但开发人员经常无法将其包含在 HTML 中。 浏览器会自动纠正错误并添加 `tbody`。 DOM 还会修复尚未关闭的标签。

### 6.2 了解 DOM 树和 `Node` 节点

#### 6.2.1 HTML 术语和元素访问

了解 HTML 和 JavaScript 术语对于理解如何使用 DOM 至关重要。 

这里我们有一个锚元素，它是指向 `index.html` 的链接:

`<a href="index.html">Home</a>`

- `a`: 标签 `tag`
- `href`: 属性 `attribute`
- `index.html`: 属性值
- `home` 文本 `text`。

开始标签和结束标签之间的所有内容组合起来构成了整个 HTML 元素。

使用 JavaScript 访问元素的最简单方法是通过 `id` 属性。

```html{10}
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1>
    <a id="nav" href="index.html">Home</a>
  </body>

</html>
```

使用 `getElementById()` 方法来访问整个元素。 在控制台中，输入以下内容：

```js
document.getElementById('nav');

/* output:
<a id="nav" href="index.html">Home</a>
*/
```

我们可以将元素输出存入变量中，而不是每次想要访问导航链接时都键入该对象和方法：

`var nav = document.getElementById('nav');`

`nav` 变量包含我们的锚元素。 从这里，我们可以轻松修改属性和值。  
例如，我们可以通过更改 `href` 属性来更改链接的位置，textContent 属性来更改文本内容：：

```js
nav = document.getElementById('nav');
nav.href = 'https://developer.mozilla.org';
nav.textContent = 'welcome MDN';
nav;

// <a id="nav" href="https://developer.mozilla.org">welcome MDN</a>
```

#### 6.2.2 DOM 树和 `Node` 节点

DOM 中的所有项目都定义为节点(`Node`)。 节点有很多种类型，最常使用的主要有以下三种：
- `Element` 节点
- `Text` 节点
- `Comment` 节点

当 HTML 元素是 DOM 中的项目时，它被称为元素节点。 元素之外的任何单独文本都是文本节点，HTML 注释是注释节点。  
除了这三种节点类型外，`document` 本身就是一个文档节点，它是所有其他节点的根。

DOM 由嵌套节点的树结构组成，通常称为 DOM 树。  
DOM 中的节点也称为父节点、子节点和兄弟节点，具体取决于它们与其他节点的关系。

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Learning About Nodes</title>
  </head>

  <body>
    <h1>An element node</h1>
    <!-- a comment node -->
    A text node.
  </body>

</html>
```

`html` 元素节点是父节点。 `head` 和 `body` 是兄弟节点，是 `html` 的子级。 `body` 包含三个子节点，它们都是兄弟节点——节点的类型不会改变它的嵌套级别。

注意：HTML 生成 DOM 时，HTML 源代码的缩进将创建许多空文本节点，这些节点在 `DevTools Elements` 选项卡中不可见。


#### 6.2.3 识别节点类型

文档中的每个节点都有一个节点类型，可通过 `nodeType` 属性访问。


|  Node Type   | Value |         Example          |
|--------------|-------|--------------------------|
| ELEMENT_NODE |     1 | `<body>,<p>`               |
| TEXT_NODE    |     3 | 不属于元素的文本                 |
| COMMENT_NODE |     8 | `<!-- an HTML comment -->` |

在开发人员工具的“元素”选项卡中，每当单击并突出显示 DOM 中的任何行时，`== $0` 的值就会出现在它的旁边。 这是通过键入 `$0` 来访问开发人员工具中当前活动元素的非常方便的方法。

在“元素”选项卡中，单击 `h1` 元素；在控制台中，使用 `nodeType`` 属性获取当前选定节点的节点类型。

```js
$0.nodeType;
// output: 1

$0.nodeName
// 'H1'
```

除了 `nodeType` 之外，还可以使用 `nodeValue` 属性来获取文本或注释节点的值，并使用 `nodeName` 来获取元素的标签名称。

#### 6.2.4 使用事件修改 DOM

创建一个交互式按钮，单击该钮即可执行背景颜色改变：

```js
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1> 
    <button id="changeBackground">Change Background Color</button>
    
    <script src="./scripts.js"></script>
  </body>

</html>
```

JavaScript 中的事件是用户采取的操作。 当用户将鼠标悬停在某个元素上、单击某个元素或按下键盘上的特定键时，这些都是事件类型。 

```js
// scripts.js
var button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});
```

使用 addEventListener() 方法，我们将告诉按钮监听单击，并在单击后将背景颜色更改为红色。

### 6.3 访问 DOM 中的元素

可以通过多种方法访问 DOM 中的元素：ID、类、标签和查询选择器。

这是五种元素访问方法的表格概述：


|       Gets       | Selector Syntax |          Method          |
|------------------|-----------------|--------------------------|
| ID               | #demo           | getElementById()         |
| Class            | .demo           | getElementsByClassName() |
| Tag              | demo            | getElementsByTagName()   |
| Selector(single) |                 | querySelector()          |
| Selector(all)    |                 | querySelectorAll()       |

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Accessing Elements in the DOM</title>

  <style>
    html { font-family: sans-serif; color: #333; }
    body { max-width: 500px; margin: 0 auto; padding: 0 15px; }
    div, article { padding: 10px; margin: 5px; border: 1px solid #dedede; }
  </style>

</head>

<body>

  <h1>Accessing Elements in the DOM</h1>

  <h2>ID (#demo)</h2>
  <div id="demo">Access me by ID</div>

  <h2>Class (.demo)</h2>
  <div class="demo">Access me by class (1)</div>
  <div class="demo">Access me by class (2)</div>

  <h2>Tag (article)</h2>
  <article>Access me by tag (1)</article>
  <article>Access me by tag (2)</article>

  <h2>Query Selector</h2>
  <div id="demo-query">Access me by query</div>

  <h2>Query Selector All</h2>
  <div class="demo-query-all">Access me by query all (1)</div>
  <div class="demo-query-all">Access me by query all (2)</div>

</body>

</html>
```

在此 HTML 文件中，有许多元素，我们将使用不同的文档方法访问这些元素。

1. 通过 `ID` 访问元素

访问 DOM 中单个元素的最简单方法是通过其唯一 `ID`。 您可以使用文档对象的 `getElementById()` 方法按 `ID` 获取元素。

```js
const id = document.getElementById('demo');
console.log(id);
// <div id="demo">Access me by ID</div>

id.style.border = '1px solid purple';
```

通过将边框属性更改为紫色，可以确保访问正确的元素。

2. 按类访问元素

`class` 属性用于访问 DOM 中的一个或多个特定元素。 可以使用 `getElementsByClassName()` 方法获取具有给定类名的所有元素。

```js
const byClass = document.getElementsByClassName('demo');
for (let i = 0; i < byClass.length; i++) {
    byClass[i].style.border = '1px solid orange';
}
```

3. 通过标签访问元素

访问页面上多个元素的一种不太具体的方法是通过其 HTML 标签名称。 使用 `getElementsByTagName()` 方法按标签访问元素。

```js
const byTag = document.getElementsByTagName('article');

for (let tag of byTag) {
    tag.style.border = '1px solid blue';
}
```

4. 查询选择器

要访问单个元素，使用 `querySelector()` 方法。

`const query = document.querySelector('#demo-query');`

`id` 属性的选择器是井号 (`#`)。

对于具有多个元素（例如类或标签）的选择器，`querySelector()` 将返回与查询匹配的第一个元素。 

可以使用 `querySelectorAll()` 方法来收集与特定查询匹配的所有元素。
类属性的选择器是句点 (`.`):

```js
var queryAll = document.querySelectorAll('.demo-query-all');

queryAll.forEach(query => {
    query.style.border = '1px solid green';
});
```

使用 `forEach()`` 方法，可以将绿色应用于所有匹配元素的边框属性。

使用 `querySelector()`，逗号分隔值充当 `OR` 运算符。  
使用 `querySelectorAll()`，逗号分隔值充当 `AND` 运算符。

```js
var byOr = document.querySelector('div, article');
byOr;
// <div id="demo">Access me by ID</div>

var byAnd = document.querySelectorAll('div, article');
byAnd;    // NodeList(8)
```

使用查询选择器方法非常强大，因为可以像在 CSS 文件中一样访问 DOM 中的任何元素或元素组(`NodeList`)。

### 6.4 遍历 DOM

学习如何在 DOM 树中上下导航以及从一个分支移动到另一个分支对于理解如何使用 JavaScript 和 HTML 至关重要。

```html
<!DOCTYPE html>
<html>

<head>
  <title>Learning About Nodes</title>

  <style>
    * { border: 2px solid #dedede; padding: 15px; margin: 15px; }
    html { margin: 0; padding: 0; }
    body { max-width: 600px; font-family: sans-serif; color: #333; }
  </style>
</head>

<body>
  <h1>Shark World</h1>
  <p>The world's leading source on <strong>shark</strong> related information.</p>
  <h2>Types of Sharks</h2>
  <ul>
    <li>Hammerhead</li>
    <li>Tiger</li>
    <li>Great White</li>
  </ul>
</body>

<script>
  const h1 = document.getElementsByTagName('h1')[0];
  const p = document.getElementsByTagName('p')[0];
  const ul = document.getElementsByTagName('ul')[0];
</script>

</html>
```

在此示例网站中，在样式标签中添加了一些基本的 CSS，以使每个元素明显可见，并且在脚本中创建了一些变量，以便于访问一些元素。 由于 `h1`、`p` 和 `ul` 中只有一个，因此我们可以访问每个 getElementsByTagName 属性上的第一个索引。

#### 6.4.1 根节点

`document` 对象是 DOM 中每个节点的根。 该对象实际上是 `window` 对象的一个属性，`window` 对象是代表浏览器中选项卡的全局顶级对象。 窗口对象可以访问工具栏、窗口的高度和宽度、提示和警报等信息。 文档由内窗口内部的内容组成。

下面是一个由每个文档将包含的根元素组成的图表。 即使将空白 HTML 文件加载到浏览器中，这三个节点也会被添加并解析到 DOM 中。


|         Property         |   Node    |   Node Type   |
|--------------------------|-----------|---------------|
| document                 | #document | DOCUMENT_NODE |
| document.documentElement | html      | ELEMENT_NODE  |
| document.head            | head      | ELEMENT_NODE  |
| document.body            | body      | ELEMENT_NODE  |

由于 `html`、`head` 和 `body` 元素非常常见，因此它们在文档中具有自己的属性。

#### 6.4.2 父节点

DOM 中的节点被称为父节点、子节点和兄弟节点，具体取决于它们与其他节点的关系。 任何节点的父节点都是其上一级的节点，或者在 DOM 层次结构中更接近文档的节点。  
有两个属性可以获取父级：
- `parentNode` : Parent Node
- `parentElement` : Parent Element Node

在我们的例子中：
- `html` 是 `head`、`body` 和 `script` 的父级。
- `body` 是 `h1`、`h2`、`p` 和 `ul` 的父级，但不是 `li`，因为 `li` 比 `body` 低两级。

```js
p.parentNode;
// Output: <body>...</body>

p.parentNode.parentNode;
// Output: <html>...</html>
```

使用 `parentNode` 两次，我们检索了 `p` 的祖父节点。

```js
const html = document.documentElement;

console.log(html.parentNode);  // #document
console.log(html.parentElementNode);  // undefined
```

几乎所有节点的父节点都是元素节点，因为文本和注释不能成为其他节点的父节点。 但是，`html` 的父级是文档节点，因此 `parentElement` 返回 `undefined`。  
一般来说，在遍历 DOM 的时候，`parentNode` 比较常用。

#### 6.4.3 子节点

节点的 `children` 节点是其下一级的节点。 超出一层嵌套的任何节点通常称为后代。


|     Property      |           Gets           |
|-------------------|--------------------------|
| childNodes        | Child Nodes              |
| firstChild        | First Child Node         |
| lastChild         | Last Child Node          |
| children          | Element Child Nodes      |
| firstElementChild | First Child Element Node |
| lastElementChild  | Last Child Element Node  |

`childNodes` 属性将返回节点的每个子节点的实时列表。  
您可能期望 `ul` 元素获得三个 `li` 元素。 让我们测试一下它检索到了什么:

```js
ul.childNodes;
// Output: NodeList(7) [text, li, text, li, text, li, text]
```

除了三个 `li` 元素之外，它还获得四个文本节点。 这是因为我们编写了自己的 HTML（它不是由 JavaScript 生成的），并且元素之间的缩进在 DOM 中被计为文本节点。 这并不直观，因为 DevTools 的 Elements 选项卡会删除空白节点。

如果我们尝试使用 `firstChild` 属性更改第一个子节点的背景颜色，则会失败，因为第一个节点是文本。

```js
ul.firstChild.style.background = 'yellow';
// Output: Uncaught TypeError...
```

在这些类型的情况下，存在 `children`、`firstElementChild` 和 `lastElementChild` 属性，以仅检索元素节点。 `ul.children` 将仅返回三个 `li` 元素。

使用 `firstElementChild`，我们可以改变 `ul` 中第一个 `li` 的背景颜色。

`ul.firstElementChild.style.background = 'yellow';`

当进行基本的 DOM 操作时，特定于元素的属性非常有用。 在 JavaScript 生成的 Web 应用程序中，更有可能使用选择所有节点的属性，因为在这种情况下不会存在空白换行符和缩进。

`for...of` 循环可用于迭代所有子元素:

```js
for (let child of ul.children) {
    child.style.background = 'yellow';
}
```

由于我们的 `p` 元素内部同时包含文本和元素，因此使用 `childNodes`` 属性访问该信息:

```js
for (let node of p.childNodes) {
    console.log(node);
}

/* Output:
"The world's leading source on "
<strong>shark</strong>
" related information."
*/
```

`childNode` 和 `Children` 不会返回具有所有 Array 属性和方法的数组，但它们的外观和行为与 JavaScript 数组类似。  
可以通过索引号访问节点，或查找它们的长度属性。

`document.body.children[3].lastElementChild.style.background = 'fuchsia';`

使用父属性和子属性，可以检索 DOM 中的任何节点。

#### 6.4.4 兄弟节点

节点的兄弟节点是 DOM 中同一树级别上的任何类型节点。 文本、元素和注释节点都可以是同级节点。


|        Property        |             Gets              |
|------------------------|-------------------------------|
| previousSibling        | Previous Sibling Node         |
| nextSibling            | Next Sibling Node             |
| previousElementSibling | Previous Sibling Element Node |
| nextElementSibling     | Next Sibling Element Node     |

有一组属性用于遍历所有节点，还有一组属性仅用于元素节点。 
- `previousSibling` 和 `nextSibling` 将获取紧邻指定节点之前或之后的下一个节点
- `previousElementSibling` 和 `nextElementSibling` 将仅获取元素节点。

```js
const tiger = ul.children[1];

tiger.nextElementSibling.style.background = 'coral';
tiger.previousElementSibling.style.background = 'aquamarine';
```

### 6.5 更改 DOM

创建新节点并将其插入到 DOM 中，替换现有节点以及删除节点。

#### 6.5.1 创建新节点

`createElement()` 和 `createTextNode()` 方法用于在 DOM 中创建新节点。


| Property/Method  |    Description     |
|------------------|--------------------|
| createElement()  | 创建一个新的元素节点         |
| createTextNode() | 创建一个新的文本节点         |
| node.textContent | 获取或设置元素节点的文本内容     |
| node.innerHTML   | 获取或设置元素节点的 HTML 内容 |

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1>
  </body>

</html>
```

创建一个新的 `p` 元素：

```js
const p = document.createElement('p');
console.log(p);
// <p></p>

p.textContent = "new paragraph.";
console.log(p);
// <p>new paragraph.</p>

p.innerHTML = "paragraph with <strong>bold</strong> text.";
console.log(p);
// <p>paragraph with <strong>bold</strong> text.</p>
```

`createElement()` 和 `textContent` 的组合创建一个完整的元素节点。

设置元素内容的另一种方法是使用 `innerHTML` 属性，它允许向元素添加 HTML 和文本。

还可以使用 `createTextNode()` 方法创建文本节点:

`const text = document.createTextNode("new text");`

通过这些方法，我们创建了新的元素和文本节点，但它们在插入文档之前在网站的前端不可见。

#### 6.5.2 将节点插入 DOM

为了在前端查看创建的新文本节点和元素，需要将它们插入到文档中。


|   Property/Method   |     Description     |
|---------------------|---------------------|
| node.appendChild()  | 添加一个节点作为父元素的最后一个子节点 |
| node.insertBefore() | 将节点插入到父元素中指定兄弟节点之前  |
| node.replaceChild() | 用新节点替换现有节点          |

创建一个待办事项列表：

```html
<!DOCTYPE html>
<html>
    <body>
        <ul>
            <li>购买杂货</li>
            <li>喂养宠物</li>
            <li>洗衣</li>
        </ul>
    </body>
</html>
```

追加待办事项：

```js
const todoList = document.querySelector('ul');

var todo = document.createElement('li');
todo.textContent = "Do homework";
todoList.appendChild(todo);
```

新节点插入到列表的开头：

```js
todo = document.createElement('li');
todo.textContent = "Pay bills";
todoList.insertBefore(todo, todoList.firstElementChild);
```

修改现有的待办事项：

```js
const todoList = document.querySelector('ul');

var modify = document.createElement('li');
modify.textContent = 'Feed cat';

todoList.replaceChild(modify, todoList.children[1]);
```

通过组合 `appendChild()`、`insertBefore()` 和 `replaceChild()`，可以在 DOM 中的任何位置插入节点和元素。

#### 6.5.3 从 DOM 中删除节点

可以使用 `removeChild()` 从父节点中删除子节点，也可以使用 `remove()` 删除节点本身。


|       Method       |    Description    |
|--------------------|-------------------|
| node.removeChild() | Remove child node |
| node.remove()      | Remove node       |

使用上面的待办事项示例：

```js
const todoList = document.querySelector('ul');

todoList.removeChild(todoList.lastElementChild);
```

另一种方法是直接在节点上使用 `remove()` 方法来删除节点本身：

```js
const todoList = document.querySelector('ul');

todoList.children[1].remove();
todoList.lastElementChild.remove();
```

从 DOM 中删除子元素的另一种方法是将父元素的 `innerHTML` 属性设置为空字符串（“”）。 这不是首选方法，因为它不太明确，但可能会在现有代码中看到它。

### 6.6 修改 DOM 中的属性、类和样式

#### 6.6.1 修改属性

属性是包含有关 HTML 元素的附加信息的值。 它们通常以名称/值对的形式出现，并且根据元素的不同可能是必需的。

一些最常见的 HTML 属性是 `class`，`id` 和 `style` 属性以及 `img` 标签的 `src`，`a` 标签的 `href` 属性。

在 JavaScript 中，我们有四种修改元素属性的方法：


|      Method       |   Description   |                   Example                   |
|-------------------|-----------------|---------------------------------------------|
| hasAttribute()    | 返回 true 或 false | element.hasAttribute('href');               |
| getAttribute()    | 返回指定属性的值或 null  | element.getAttribute('href');               |
| setAttribute()    | 添加或更新指定属性的值     | element.setAttribute('href', 'index.html'); |
| removeAttribute() | 从元素中删除属性        | element.removeAttribute('href');            |

创建一个包含 `img` 标签的 HTML 文件：

```html
<!DOCTYPE html>
<html lang="en">
<body>

	<img src="https://silenthunter0814.github.io/pub/assets/youtube.png">

</body>
</html>
```

现在可以即时测试所有属性方法：

```js
const img = document.querySelector('img');

img.hasAttribute('src');  // true 

img.getAttribute('src');
// 'https://silenthunter0814.github.io/pub/assets/youtube.png'

img.removeAttribute('src');  
// remove the 'src' attribute and value

img.setAttribute('src','https://silenthunter0814.github.io/pub/assets/bilibili.png');
// new attribute value
```

最后，可以直接修改属性，通过为属性分配新值作为元素的属性：

`img.src = 'https://silenthunter0814.github.io/pub/assets/youtube.png';`

`hasAttribute()` 和 `getAttribute()` 方法通常与条件语句一起使用，`setAttribute()` 和 `removeAttribute()` 方法用于直接修改 DOM。

#### 6.6.2 修改类

CSS 类用于将样式应用于多个元素，这与每个页面只能存在唯一的 ID 不同。  
在 JavaScript 中，有 `className` 和 `classList` 属性来处理 `class` 属性。


|   Method/Property    |  Description  |                 Example                  |
|----------------------|---------------|------------------------------------------|
| className            | 获取或设置类值       | element.className;                       |
| classList.add()      | 添加一个或多个类值     | element.classList.add('active');         |
| classList.toggle()   | 打开或关闭类        | element.classList.toggle('active');      |
| classList.contains() | 检查类值是否存在      | element.classList.contains('active');    |
| classList.replace()  | 将现有的类值替换为新的类值 | element.classList.replace('old', 'new'); |
| classList.remove()   | 删除一个类值        | element.classList.remove('active');      |

创建一个 HTML 文件来查看这些属性和方法的工作结果：

```html
<!DOCTYPE html>
<html lang="en">
    <style>
        body {
            max-width: 600px;
            margin: 0 auto;
            font-family: sans-serif;
        }

        .active {
            border: 2px solid blue;
        }

        .warning {
            border: 2px solid red;
        }

        .hidden {
            display: none;
        }

        div {
            border: 2px dashed lightgray;
            padding: 15px;
            margin: 5px;
        }
    </style>
    <body>
        <div>Div 1</div>
        <div class="active">Div 2</div>
    </body>
</html>

```

可以使用 className 直接为类分配值：

```js
const div = document.querySelector('div');   // first div

div.className = "warning";
// <div class="warning">Div 1</div>
```

注意：如果元素上已经存在任何类，这将覆盖它们。 可以使用 `className` 属性添加多个以空格分隔的类，或者使用它而不使用赋值运算符来获取元素上类的当前值。

修改类的另一种方法是通过 `classList` 属性，它附带了一些有用的方法：

```js
const activeDiv = document.querySelector('.active');

activeDiv.classList.add('hidden');  // add hidden class
activeDiv.classList.toggle('hidden');  // Switch between hidden true and false
activeDiv.classList.remove('hidden');
activeDiv.classList.replace('active', 'warning');
```

与 `className` 示例不同，使用 `classList.add()` 会将新类添加到现有类列表中。 还可以添加多个类作为逗号分隔的字符串。 还可以使用 `setAttribute` 来修改元素的类。

#### 6.6.3 修改样式

`style` 属性表示 HTML 元素上的内联样式。 通常，样式将通过样式表应用于元素，就像本文前面所做的那样，但有时您必须直接添加或编辑内联样式。

创建一个新文件来演示使用 JavaScript 的编辑样式：

```html
<!DOCTYPE html>
<html>
<body>

	<div style="height: 100px;
	            width: 100px;
	            border: 2px solid black;">Div</div>

</body>
</html>
```

编辑样式的一种选择是使用 `setAttribute()`：

```js
var div = document.querySelector('div');

div.setAttribute('style', 'text-align: center');
```

但是，这将从元素中删除所有现有的内联样式。  
由于这可能不是预期的效果，因此最好直接使用 style 属性：

```js
var div = document.querySelector('div');
div.setAttribute('style', 'text-align: center');

div.style.height = '100px';
div.style.width = '100px';
div.style.border = '2px solid black';
```

将 `div` 制作成圆形并垂直居中文本：

```js
var div = document.querySelector('div');

div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
```

如果要对元素应用许多样式更改，最好的做法是将样式应用到样式表中的单独类，然后将该类添加到元素中。 但是，在某些情况下，修改内联样式属性是必要的或更直接的。


### 6.7 元素节点几何和滚动几何

在 Web 浏览器中查看 HTML 文档时，DOM 节点会被解析并绘制为可视形状。 
为了以编程方式检查并在某些情况下操纵节点的视觉表示和几何测量，存在一组 API 来确定元素节点的几何形状（即使用偏移量的大小和位置），以及用于操作可滚动节点和获取滚动节点值的挂钩。

#### 6.7.1 获取元素相对于 offsetParent 的 offsetTop 和 offsetLeft 值

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

![](https://silenthunter0814.github.io/pub/web02/6.1.png)

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

![](https://silenthunter0814.github.io/pub/web02/6.2.png)

#### 6.7.2 使用 getBoundingClientRect() 获取元素的上、右、下、左边框边缘相对于视口的偏移量

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

![](https://silenthunter0814.github.io/pub/web02/6.3.png)

`<div>` 元素的顶部外边框边缘距视口顶部边缘 100 像素。 元素 `<div>` 的右外边框边缘距视口左边缘 170 像素。 元素 `<div>` 的底部外边框边缘距视口顶部边缘 170 像素。 元素 `<div>` 的左外边框边缘距视口左边缘 100px。

#### 6.7.3 获取视口中的元素大小 (border + padding + content)

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

#### 6.7.4 获取视口中不包括边框的元素大小 (padding + content)

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

#### 6.7.5 使用 elementFromPoint() 获取视口中特定点的最顶层元素

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

#### 6.7.6 使用 scrollHeight 和 scrollWidth 获取正在滚动的元素的大小

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

#### 6.7.7 使用 scrolltop 和 scrollleft 获取和设置滚动像素

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

#### 6.7.8 使用 scrollintoview() 将元素滚动到视图中

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

## 7 DOM 事件

### 7.1 DOM 事件概述

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

### 7.2 DOM 事件类型

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


### 7.3 事件流

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

### 7.4 为 Element 节点、window 对象和 Document 对象添加事件监听器

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

### 7.5 删除事件监听器

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

### 7.6 从事件对象获取事件属性

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

### 7.7 使用 AddEventListener() 时 `this` 的值

事件侦听器函数内部的 `this` 值传递给 AddeventListener() 方法将是对附加了事件的节点或对象的引用。  
在下面的代码中，将事件附加到 `<div>` ，然后在事件侦听器的内部使用 `this` 访问附加了事件的 `<div>` 元素。

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

当事件作为事件流的一部分调用时，`this` 值将保留为侦听器附加的节点或对象的值。

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

### 7.8 引用事件的目标 target，而不是调用事件的节点或对象

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

### 7.9 使用 preventDefault() 取消默认浏览器事件

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

### 7.10 使用 stopPropagation() 停止事件流

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

### 7.11 使用 stopImmediatePropagation() 阻止同一事件的其他听众被调用

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

### 7.12 自定义事件

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

### 7.13 模拟/触发鼠标事件

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

### 7.14 事件委托

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

## 8 浏览器动画

使用 JavaScript 制作动画时，其中一种方法是 `setTimeout()` 或 `setInterval()` 来定期处理计时器。
但这些函数在浏览器中效率较低，因此现在首选 `Window.requestAnimationFrame ()`。

### 8.1 使用 setInterval 制作动画

要使用 javascript 将元素设置为向右移动 400 像素的动画，基本要做的就是定期将其一次移动 10 像素。

如果处理一帧的时间为 16 毫秒，那么动画将以 ~60fps 的速度运行，当处理 1 帧需要 33 毫秒时，动画以 30 fps 运行。  
为了以恒定的速度制作动画，我们需要计算自上一帧以来的时间增量并按比例移动元素。

```html
<!DOCTYPE html>
<html lang="en">
    <style>
        #animate {
            position: absolute;
            background: red;
            width: 40px;
            height: 40px;
        }
    </style>
    <body>
        <div id="animate">DIV</div>
        
        <script src="./main.js"></script>
    </body>
</html>
```

```js
function animate(id) {
    var elem = document.getElementById(id);
    var left = elem.offsetLeft,
        lastFrame = +new Date,
        timer;

    timer = setInterval(function() {
        var now = +new Date,
            deltaT = now - lastFrame;
        elem.style.left = (left += 10 * deltaT / 16) + "px";
        lastFrame = now;

        if (left > 400) {
            clearInterval(timer);
        }
    }, 16);
}

animate("animate");
```

### 8.2 使用 `requestAnimationFrame` 进行动画处理

告诉浏览器希望执行动画，并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法采用回调作为参数，在重绘之前调用。

`requestAnimationFrame(callback);`

- `callback`: 当需要更新动画以进行下一次重绘时调用的函数。 回调函数传递一个 `DOMHighResTimeStamp` 参数，指示 `requestAnimationFrame()` 开始执行回调函数的时间点。

```js
function animLoop(id) {
    var elem = document.getElementById(id);
    var left = elem.offsetLeft,
        start = 0;

    function loop(now) {
        if (left <= 400) {            
            var deltaT = now - start;

            if (deltaT < 8 || deltaT > 32) deltaT = 16;
            elem.style.left = (left += 10 * deltaT / 16) + "px"; 
            start = now;
            
            requestAnimationFrame(loop);
        }
    }
    requestAnimationFrame(loop);
}

animLoop("animate");
```



## 9 事件循环和异步操作

JavaScript 是单线程编程语言，具有同步执行模型，可以处理一个又一个操作，但是一次只能处理一条语句。  
从 API 请求数据之类的操作可能需要不确定的时间，具体取决于请求的数据大小、网络连接速度和其他因素。 如果 API 调用以同步方式执行，则浏览器将无法处理任何用户输入，例如滚动或单击按钮，直到该操作完成。 这称为阻塞。

为了防止阻塞行为，浏览器环境有许多 JavaScript 可以访问的异步 Web API，这意味着它们可以与其他操作并行运行，而不是顺序运行。

本章主要内容：
- 事件循环
- 回调处理异步行为
- Promise
- async/await

### 9.1 事件循环

JavaScript 主机环境（浏览器）使用称为事件循环的概念来处理并发或并行事件。  
JavaScript 一次只能执行一条语句，因此它需要通知事件循环何时执行哪条特定语句。 事件循环使用堆栈和队列的概念来处理此问题。

#### 9.1.1 同步执行和异步执行

不使用任何异步 Web API 的 JavaScript 代码将以同步方式执行 - 一次一个、顺序执行：

```js
function first() {
    console.log(1);
}
function second() {
    console.log(2);
}
function third() {
    console.log(3);
}

first();
second();
third();
```

输出将基于函数调用的顺序：  
`first() -> Second() -> Third()`

在第二个函数中添加 `setTimeout` 来模拟异步请求：

```js{4-8}
function first() {
    console.log(1);
}
function second() {
    setTimeout(() => {
        console.log(2);
    }, 0);
}
function third() {
    console.log(3);
}

first();
second();
third();

/* Output:
1
3
2
*/
```

`setTimeout` 设置计时器并在指定时间后执行操作。有两个参数：将异步运行的函数，以及调用该函数之前等待的时间。 

无论将超时设置为 0 秒还是 5 分钟，都没有什么区别——异步代码调用的 `console.log(2)` 将在同步顶级函数之后执行。 

#### 9.1.2 stack 堆栈

堆栈或调用堆栈保存当前正在运行的函数的状态。 JavaScript 将运行堆栈中的当前帧，然后将其删除并移至下一帧。

对于仅包含同步代码的示例，浏览器按以下顺序处理执行：
- 将 `first()` 添加到堆栈中，运行 `first()`，将 `1` 记录到控制台，从堆栈中删除 `first()`。
- 将 `second()` 添加到堆栈中，运行 `second()` 并将 `2` 记录到控制台，然后从堆栈中删除 `second()` 。
- 将 `third()` 添加到堆栈中，运行 `third()`，将 `3` 记录到控制台，从堆栈中删除 `third()`。

使用 `setTimeout` 的第二个示例如下所示：
- 将 `first()` 添加到堆栈中，运行 `first()`，将1记录到控制台，从堆栈中删除 `first()`。
- 将 `second()` 添加到堆栈中，运行 `second()`。
  - 将 `setTimeout()` 添加到堆栈，运行 `setTimeout()` Web API，该 API 启动计时器并将匿名函数添加到队列，从堆栈中删除 `setTimeout()`。
- 从堆栈中删除 `second()`。
- 将 `third()` 添加到堆栈中，运行 `third()`，将 `3` 记录到控制台，从堆栈中删除 `third()`。
- 事件循环检查队列中是否有任何挂起的消息，并从 `setTimeout()` 中找到匿名函数，将该函数添加到堆栈中，该堆栈将 `2` 记录到控制台，然后将其从堆栈中删除。


#### 9.1.3 queue 队列

队列也称为消息队列或任务队列，是函数的等待区域。 每当调用堆栈为空时，事件循环就会从最旧的消息开始检查队列中是否有任何等待消息。 一旦找到，它就会将其添加到堆栈中，堆栈将执行消息中的函数。

在 `setTimeout` 示例中，匿名函数在顶层执行的其余部分之后立即运行，因为计时器设置为 0 秒。 重要的是要记住，计时器并不意味着代码将在 0 秒内执行或无论指定的时间是什么，而是意味着它将在该时间内将匿名函数添加到队列中。 这个队列系统的存在是因为如果计时器在计时器结束时将匿名函数直接添加到堆栈中，它将中断当前正在运行的任何函数，这可能会产生意想不到的和不可预测的影响。

注意：还有另一个队列称为作业队列或微任务队列，用于处理 `Promise`。 像 `Promise` 这样的微任务比像 `setTimeout` 这样的宏任务具有更高的优先级。

### 9.2 回调函数

在 `setTimeout` 示例中，具有超时的函数在主顶级执行上下文中的所有内容之后运行。 但是，如果您想确保其中一个函数（例如第三个函数）在超时后运行，那么您将不得不使用异步编码方法。 这里的超时可以代表包含数据的异步API调用。

处理这个问题的最初解决方案是使用回调函数。 回调函数没有特殊的语法； 它们只是一个作为参数传递给另一个函数的函数。 以另一个函数作为参数的函数称为高阶函数。 根据这个定义，任何函数如果作为参数传递，都可以成为回调函数。 回调本质上不是异步的，但可以用于异步目的。

```js
function fn() {
    console.log("Just a function");
}

function highOrder(callback) {
    callback();
}

highOrder(fn);
```

回到前面的例子：

```js
function first() {
    console.log(1);
}

function second() {
    setTimeout(()=>{
        console.log(2);
    }, 0);
}

function third() {
    console.log(3);
}
```

任务是让第三个函数始终延迟执行，直到第二个函数中的异步操作完成之后。 这就是回调发挥作用的地方:

```js{5,8,17}
function first() {
    console.log(1);
}

function second(callback) {
    setTimeout(()=>{
        console.log(2);
        callback();
    }, 0);
}

function third() {
    console.log(3);
}

first();
second(third);

// Output: 1 -> 2 => 3
```

这里的关键要点是回调函数不是异步的 —— `setTimeout` 是负责处理异步任务的异步 Web API。 回调仅允许您了解异步任务何时完成并处理任务的成功或失败。

回调函数是确保函数延迟执行直到另一个函数完成并返回数据的有效方法。 但是，由于回调的嵌套性质，如果有大量相互依赖的连续异步请求，代码最终可能会变得混乱。

```js
function hell() {
    setTimeout(()=>{
        console.log(1);
        
        setTimeout(()=>{
            console.log(2);
            
            setTimeout(()=>{
                console.log(3);
            }, 500);
        }, 2000);
    }, 1000);
}

hell();
```

### 9.3 `Promise`

`Promise` 代表异步函数的完成。 它是一个将来可能返回值的对象。 它实现了与回调函数相同的基本目标，但具有许多附加功能和更易读的语法。  
通常是异步 Web API 返回 `Promise` 供开发人员使用。

#### 9.3.1 创建 `Promise``

使用 `Promise(resolveFunc, rejectFunc)` 构造函数进行初始化，传递解析和拒绝参数。 解析和拒绝函数分别处理操作的成功和失败。

编写以下行来声明一个 `promise`：

`var promise = new Promise((resolve, reject) => {});`

具有待处理状态和未定义的值：

```js{4-7}
console.log(promise);

/* Output:
Promise {<pending>}
    [[Prototype]]: Promise
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined
*/
```

到目前为止，还没有为 `Promise` 设置任何内容，因此它将永远处于待处理状态。  
要测试 `Promise`，可以做的第一件事是通过使用值解析来履行 `Promise`：

```js
var promise = new Promise((resolve, reject) => {
    resolve("We did it!");
});
console.log(promise);

/* Output:
promise {<fulfilled>: 'We did it!'}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "We did it!"
*/
```

`promise` 是一个可以返回值的对象。 成功完成后，该值将从未定义变为已填充数据。

一个 `Promise` 可以有三种可能的状态：
- `pending` 解决或拒绝之前的初始状态
- `fulfilled` 操作成功，承诺已兑现
- `rejected` 操作失败，承诺已被拒绝

在履行或拒绝之后，`promise` 就被确定。

#### 9.3.2 使用 `Promise`

`Promise` 有一个名为 `then` 的方法，该方法将在 `Promise` 达到代码中的 `resolve` 后运行。  
`then` 将 `Promise` 返回的值作为参数。

```js{5-7}
var promise = new Promise((resolve, reject) => {
    resolve("We did it!");
});

promise.then((val) => {
    console.log(val);
});
// Output: We did it!
```

`[[PromiseResult]]: "We did it!"` 值作为响应参数传递到匿名函数中。

到目前为止，创建的示例并未涉及异步 Web API，它仅解释了如何创建、解析和使用本机 JavaScript `Promise`。  
使用 `setTimeout`，可以测试异步请求：

```js
var promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolving an async request!"), 2000);
});

promise.then((val) => {
    console.log(val);
});
// Output: resolving an async request!
```

使用 `then` 语法可确保仅当 `setTimeout` 操作在 2000 毫秒后完成时才会记录响应。 所有这一切都是在没有嵌套回调的情况下完成的。

Promise 还可以链接起来，将数据传递给多个异步操作:

```js
var promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolving an async request!"), 2000);
});

promise.then((val) => {
    return val + ' And chaining!';
}).then((val) => {
    console.log(val);
});
```

由于 `then` 可以链接，因此它允许 `Promise` 的使用看起来比回调更加同步，因为它们不需要嵌套。 这将允许更容易维护和验证的可读代码。

#### 9.3.3 错误处理

对于异步请求，通常还必须处理错误 —— 如果 API 关闭，或者发送了格式错误或未经授权的请求。  
承诺应该能够处理这两种情况。

`getUsers` 函数将向 `Promise` 传递一个标志，并返回 `Promise`：

```js
function getUsers(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    {id: 1, name: 'Jerry'},
                    {id: 2, name: 'Elaine'},
                    {id: 3, name: 'George'}
                ]);
            } else {
                reject('Failed to fetch data!');
            }
        }, 1000);
    });
}
```

如果 `success` 为 `true`，则超时将用一些数据来完成。 如果为 `false`，则该函数将拒绝并显示错误。

为了处理错误，使用 `catch` 实例方法。 这将提供一个失败回调，并将错误作为参数。

运行 `getUsers` 命令，并将 `success` 设置为 `false`，对于成功情况使用 `then` 方法，对于错误情况使用 `catch` 方法：

```js
getUsers(false)
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    });
// Output: Failed to fetch data!
```

如果切换标志并解析，则 `catch` 将被忽略，并且数据将返回：

```js
getUsers(true)
    .then((val) => {
        console.log(val);
    })
    .catch((err) => {
        console.log(err);
    });
/*
(3) [{…}, {…}, {…}]
0: {id: 1, name: 'Jerry'}
1: {id: 2, name: 'Elaine'}
2: {id: 3, name: 'George'}
*/
```

下表列出了 `Promise` 对象的处理程序方法：

|  Method   |                   Description                    |
|-----------|--------------------------------------------------|
| then()    | 处理解析。 返回一个 promise，并异步调用 onFulfilled 函数          |
| catch()   | 处理拒绝。 返回一个 promise，并异步调用 onRejected 函数           |
| finally() | 当 Promise 解决时调用。 返回一个 promise，并异步调用 onFinally 函数 |

使用 `Promise` 比创建 `Promise` 更为常见。 通常，浏览器的 Web API 或第三方库将提供 `Promise`，只需使用它即可。

### 9.4 使用带有 `Promise` 的 Fetch API

Fetch API 是最有用且最常用的返回 `Promise` 的 Web API 之一，它允许通过网络发出异步资源请求。  
`fetch` 是一个由两部分组成的过程，因此需要链接。 

使用 GitHub API 来获取用户的数据，同时还处理任何潜在的错误：

```js
fetch('https://api.github.com/users/silenthunter0814')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
```

`fetch` 请求发送到 https://api.github.com/users/silenthunter0814 URL，该 URL 异步等待响应。 第一个 `then` 将响应传递给匿名函数，该匿名函数将响应格式化为 JSON 数据，然后将 JSON 传递给第二个 `then` 将数据记录到控制台。 `catch` 语句将所有错误记录到控制台。

### 9.5 带有 `async/await` 的异步函数

异步函数允许以同步的方式处理异步代码。 异步函数仍然在底层使用 `Promise`，但具有更传统的 JavaScript 语法。

通过在函数前添加 `async` 关键字来创建异步函数：

```js
async function getUser() {
    return {};
}
console.log(getUser()); 

/* a Promise object
Promise {<fulfilled>: {…}}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Object
*/
```

尽管此函数尚未处理任何异步内容，但其行为与传统函数不同。  
如果执行该函数，它会返回一个带有 `[[PromiseState]]` 和 `[[PromiseResult]]` 的 `Promise`，而不是返回值。

这意味着可以使用 `then` 处理异步函数，就像处理 `Promise` 一样：

```js
async function getUser() {
    return {};
}

getUser().then((val) => {
    console.log(val);
});
// Output: object {}
```

对 `getUser` 的调用将返回值传递给匿名函数，该函数将值记录到控制台。

异步函数可以使用 `await` 运算符来处理在其中调用的 `promise`。 `await` 可以在异步函数中使用，并且会等到 `Promise` 解决后再执行指定的代码。  
有了这些知识，可以使用 `async/await` 重写上一节中的 Fetch 请求：

```js
async function getUser() {
    var response = await fetch('https://api.github.com/users/silenthunter0814');
    var data = await response.json();
    console.log(data);
}

getUser();
```

这里的 `await` 运算符确保在 `request` 填充数据之前不会记录数据。  
现在最终的数据可以在 `getUser` 函数内部处理，而不需要使用 `then`。

使用 `try/catch` 模式来处理异常，而不是使用 `then` 的 `catch` 方法：

```js{2,6,7}
async function getUser() {
    try {
        var response = await fetch('https://api.github.com/users/silenthunter0814');
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

如果程序收到错误，现在将跳到 `catch` 块并将该错误记录到控制台。

现代异步 JavaScript 代码通常使用 `async/await` 语法进行处理，但了解 `Promise` 的工作原理非常重要，尤其是 `Promise` 能够提供 `async/await` 无法处理的其他功能，例如组合使用 `Promise` 的 `Promise.all()`。

## 10 WEB 请求

### 10.1 JSON 对象

JavaScript 对象表示法，用于序列化对象、数组、数字、字符串、布尔值和 null 的语法。

JSON 对象有两个有用的方法来处理 JSON 格式的内容： `parse` 和 `stringify`。

#### 10.1.1 `JSON.parse()`

`JSON.parse()` 接受 JSON 字符串并将其转换为 JavaScript 对象。

```js
var user = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

var obj = JSON.parse(user);

console.log(obj);
/* Output:
{name: 'Sammy', email: 'sammy@example.com', plan: 'Pro'}
    email: "sammy@example.com"
    name: "Sammy"
    plan: "Pro"
    [[Prototype]]: Object
*/
```

`JSON.parse()` 可以采用一个函数作为第二个参数，该函数可以在返回对象值之前对其进行转换。

```js
var user = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

var obj = JSON.parse(user, (key, value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
});

console.log(obj);
/* Output:
{name: 'SAMMY', email: 'SAMMY@EXAMPLE.COM', plan: 'PRO'}
email: "SAMMY@EXAMPLE.COM"
name: "SAMMY"
plan: "PRO"
[[Prototype]]: Object
*/
```

#### 10.1.2 `JSON.stringify()`

`JSON.stringify()` 接受一个 JavaScript 对象并将其转换为 JSON 字符串。

```js
var obj = {
    name: 'Sammy',
    emal: 'sammy@example.com',
    plan: 'Pro'
};

var user = JSON.stringify(obj);
console.log(user);
// {"name":"Sammy","emal":"sammy@example.com","plan":"Pro"}
```

`JSON.stringify()` 可以采用两个附加参数。 第一个是替换函数。 第二个是字符串或数字值，用作返回字符串中的空格。

替换函数可用于过滤掉值，因为任何以未定义形式返回的值都将不在返回的字符串中：

```js
var obj = {
    name: 'Sammy',
    emal: 'sammy@example.com',
    plan: 'Pro'
};

function replacer(key, value) {
    if (key === 'emal') {
        return undefined;
    }
    return value;
}

var user = JSON.stringify(obj, replacer);
console.log(user);
// {"name":"Sammy","plan":"Pro"}
```

`email` 键值对已从对象中删除。

传入空格参数的示例：

```js
var obj = {
    name: 'Sammy',
    emal: 'sammy@example.com',
    plan: 'Pro'
};

var user = JSON.stringify(obj, null, '...');
console.log(user);
/* Output:
{
..."name": "Sammy",
..."emal": "sammy@example.com",
..."plan": "Pro"
}
*/
```

缩进已替换为 `...`。

### 10.2 XMLHttpRequest 对象

JavaScript 允许以异步方式获取数据。 最古老、最经典的方式是使用 XMLHttpRequest (XHR)。 
它是一个构造函数，用于向服务器发送 HTTP 请求：

`var req = new XMLHttpRequest();`

现在有了 XHR 对象 `req`。 要发出 HTTP 请求，应该首先 `open` 打开请求：

`req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');`

XHR 方法不区分大小写， 可以将其写成“geT”，最终它将变为大写。 

然后您可以将请求发送到服务器：

`req.send();`

要接收请求的响应，需要将回调函数附加到 XHR 对象:

```js{6-8}
var req = new XMLHttpRequest();

req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
req.send();

req.addEventListener('load', function() {
    console.log(this.responseText);
});

/* Output:
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/
```

应该使用普通函数而不是箭头函数，因为普通函数的 `this` 绑定到 XMLHttpRequest，而箭头函数绑定到 `window`。

### 10.3 Fetch API

Fetch API 提供了用于获取资源（包括通过网络）的接口。 它是 XMLHttpRequest 的更强大、更灵活的替代品。

#### 10.3.1 Fetch API 语法

`fetch()` 方法是 Window 和 Worker 上下文中的全局方法。  
要发出请求并获取资源，使用 `fetch()` 方法：

`var response = fetch(url);`

`fetch()` 方法返回一个 `Promise` 对象。 在 `fetch()` 方法之后，添加 `Promise` 方法 `then()`：

```js{2}
fetch(url)
    .then(function() {
        // handle the response
    });
```

如果返回的 `Promise` 是 `resolve`，则执行 `then()` 方法中的函数。 该函数包含用于处理从 API 接收的数据的代码。

在 `then()` 方法之后，添加 `catch()` 方法：

```js{5}
fetch(url)
    .then(function() {
        // handle the response
    })
    .catch(function() {
        // handle the error
    });
```

`catch()` 方法用于处理 `reject`。 如果调用时发生错误，将执行 `catch()` 中的代码。

#### 10.3.2 使用 Fetch 从 API 获取数据

以下代码示例将基于 JSONPlaceholder API。 从中检索数据并将其显示在作者列表内的列表项中。

```html
<!DOCTYPE html>
<html>
<body>
    <h1>Authors</h1>
    
    <ul id="authors"></ul>
    
    <script src='./main.js'></script>
</body>
</html>
```

使用 DOM 选择器来获取 `ul`，并创建一个文档片段：

```js
var ul = document.querySelector('#authors');
var list = document.createDocumentFragment();
var url = 'https://jsonplaceholder.typicode.com/users';
```

所有附加的列表项都将添加到 `list` 列表中。  
变量 `url` 保存 JSONPlaceholder API URL。

使用 `fetch()` 并以 `url` 作为参数调用 JSONPlaceholder API：

`fetch(url).then((response) => response.json())`

`response` 不是 JSON，而是一个具有一系列方法的对象。 要将返回的对象转换为 JSON，使用 `json()` 方法。

JSON 数据仍需要处理。 添加另一个 `then()` 语句，其中包含一个带有名为 `authors` 参数的函数：

```js
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((authors) => {});
```

`authors` 是包含 10 个作者条目的 JSON 数组。  
对于 `authors` 中的每个作者，创建一个显示他们姓名和邮件地址的列表项。 forEach() 方法适合这种模式：

```js
var ul = document.querySelector('#authors');
var url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((authors) => {
        var list = document.createDocumentFragment();
        
        authors.forEach((author) => {
            var li = document.createElement('li'),
                name = document.createElement('h3'),
                email = document.createElement('span');
            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.appendChild(name);
            li.appendChild(email);
            list.appendChild(li);
        });
        
        ul.appendChild(list);
    })
    .catch(function(error) {
        console.log(error);
    });
```

每个列表项都被附加到 DocumentFragment 列表中。 `authors` 遍历完成后，`list` 列表将附加到 `ul` 无序列表元素。  
两个 `then()` 函数完成后，现在可以添加 `catch()` 函数。 此函数会将潜在的错误记录到控制台。

#### 10.3.3 处理 POST 请求

Fetch 默认为 GET 请求，但可以使用所有其他类型的请求、更改标头并发送数据。 

要处理 POST 请求，需要设置 `Request` 对象并将其作为 `fetch` 函数的参数传递：

`fetch(request).then(function(response) {});`

`then()` 函数将包含处理从 JSONPlaceholder API 接收到的响应的代码。

这是创建的请求的完整代码：

```js
var url = 'https://jsonplaceholder.typicode.com/users';
var author = {
    name: 'Hero',
    email: 'hero@example.com'
};
var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(author),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
});

fetch(request)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
// Output: {name: 'Hero', email: 'hero@example.com', id: 11}
```

通过链式 `then()` 解析，最终得到服务器返回的我们刚刚上传的 `author`。

### 10.4 表单数据作为 JSON 发布到 API

首先创建表单页面：

```html
<!DOCTYPE html>
<html>
<body>

<form action="https://jsonplaceholder.typicode.com/users" id="example-form">
	<label for="first-name">
		<strong>First Name:</strong>
		<input type="text" name="first_name" id="first-name">
	</label>

	<label for="last-name">
		Last Name:
		<input type="text" name="last_name" id="last-name">
	</label>

	<input type="submit" value="Create new user">
</form>    

<script src="./form.js"></script>
</body>
</html>
```

1. 监听用户何时提交表单

当用户单击表单的提交按钮或将焦点放在表单字段上并按键盘上的返回键时，浏览器将调度提交事件。

```js
var form = document.getElementById("example-form");
form.addEventListener('submit',(event) => {
    event.preventDefault();
    ...
}
```
`event.preventDefault()` 阻止表单事件向上冒泡传播。

2. 使用 FormData 读取所有表单字段的值

FormData API 提供了一种访问 HTML 表单中所有字段的值的直接方法：向其传递对表单元素的引用。
- `new FormData(refForm)`：生成表单数据
- `Object.fromEntries()` 静态方法将键值对列表转换为一个对象。

将这些方法调用链接起来，最后转换成 JSON 字符串：
- `var jsonData = JSON.stringify(Object.fromEntries(new FormData(event.target)));`

3. 使用 fetch 将数据 POST 到 URL

新建 `Request` 对象，设置 POST 方法，发送的 `body`，文档标头。

这是完成的代码：

```js
var form = document.getElementById("example-form");

form.addEventListener('submit',(event) => {
    event.preventDefault();
    
    var url = event.target.action,
        user = JSON.stringify(Object.fromEntries(new FormData(event.target)));
    var request = new Request(url, {
        method: "POST",
        body: user,
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        })
    });

    fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new Error("response failed!");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(JSON.stringify(data));
        })
        .catch(error => {
            console.log(error);
        });
});
```

对于多选项，可以进行如下处理：

```js
...

    function getJSON(formData) {
        var obj = Object.create(null);

        formData.forEach((value, key) => {
            if (obj[key] == null) {
                obj[key] = value;
            } else {
                if (typeof obj[key] === 'object') {
                    obj[key] = [obj[key]];
                }
                obj[key].push(value);
            }
        });
        return JSON.stringify(obj);
    }

    var user = getJSON(new FormData(event.target)),    
        url = event.target.action;
...
```

## 11 `this, bind, call, apply`

`this` 关键字是 JavaScript 中一个非常重要的概念，也是一个特别令人困惑的概念。 在 JavaScript 中，`this` 是对对象的引用。 `this` 引用的对象可以根据它是全局的、在对象上还是在构造函数中隐式地变化，也可以根据 `Function` 原型方法 `bind`, `call`, `apply` 的使用而显式地变化。

### 11.1 `this`

隐式上下文
有四种主要上下文可以隐式推断 this 的值：
- `global` 全局上下文
- 作为对象内的方法
- 作为函数或类的构造函数
- 作为 DOM 事件处理程序

#### 11.1.1 全局上下文

在全局上下文中，`this` 指的是全局对象。 当在浏览器中工作时，全局上下文将是 `window`。 当使用 Node.js 时，全局上下文是 `global`。

`console.log(this);    // Output: Window {0: global, ...}`

可以看到 `this` 是 `window`，是浏览器的全局对象。

函数有自己的变量上下文。 顶级函数内 `this` 仍将保留全局对象 `Window` 的引用。

编写一个顶级函数，或者一个不与任何对象关联的函数，如下所示：

```js
function fn() {
    console.log(this);
}
fn();    // Output: Window {0: global, ...}
```

即使在函数内，`this` 仍然引用 `Window` 全局对象。

当使用严格模式时，全局上下文中函数内的 `this` 上下文将是 `undefined`。

```js
'use strict';

function fn() {
    console.log(this);
}
fn();    // Output: undefined
```

一般来说，使用严格模式会更安全，以减少出现意外范围的可能性。 很少有人想使用 `this` 来引用窗口对象。

#### 11.1.2 对象方法中的 `this`

方法是对象上的函数，或者对象可以执行的任务。 方法使用 `this` 来引用对象的属性。

```js
var bard  = {
    name: "Bard",
    age: 20,
    describe() {
        console.log(`${this.name} is a hero, ${this.age} years old.`);
    }
};

bard.describe();
// Output: Bard is a hero, 20 years old.
```

在此示例中，`this` 与 `bard` 相同。

在嵌套对象中，`this` 指的是该方法的当前对象范围。

```js
var bard  = {
    name: "Bard",
    age: 20,
    address: {
        galaxy: "银河系",
        star: "蓝星",
        village: "地球村",
        details() {
            console.log(this.galaxy + " " + this.star + " " + this.village);
        }
    },
    describe() {
        console.log(`${this.name} is a hero, ${this.age} years old.`);
    }
};

bard.address.details();
// Output: 银河系 蓝星 地球村
```

#### 11.1.3 构造函数中的 `this`

当使用 `new` 关键字时，构造函数或类会创建构造原型的实例。

```js
function Hero(name, age) {
    this.name = name;
    this.age = age;
}
Hero.prototype.describe = function() {
    console.log(`${this.name} is a hero, ${this.age} years old.`);
};

var jax = new Hero("Jax", 18);
jax.describe();    // Jax is a hero, 18 years old.
```

在此上下文中，`this` 现在绑定到 `Hero` 的实例，即 `jax` 对象。

类上的构造函数与函数上的构造函数的作用相同:

```js
class Hero {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`${this.name} is a hero, ${this.age} years old.`);
    }
}

var jax = new Hero("Jax", 18);
jax.describe();    // Jax is a hero, 18 years old.
```

#### 11.1.4 DOM 事件处理程序

在浏览器中，事件处理程序有一个特殊的 `this` 上下文。 在 `addEventListener` 调用的事件处理程序中， `this` 将引用 `event.currentTarget`。  
通常，开发人员会根据需要简单地使用 `event.target` 或 `event.currentTarget` 来访问 DOM 中的元素，但由于 `this` 引用在此上下文中发生变化，因此了解这一点很重要。

```js
var btn = document.createElement('button');
btn.textContent = "Click me";
document.body.appendChild(btn);

btn.addEventListener('click', function(event) {
    console.log(this);
});

document.body.addEventListener('click', function(event) {
    console.log(this, event.target);
});
```

`this` 与 `event.target` 的区别：
- `event.target`：引发事件的“目标”元素，它在事件冒泡过程中不会发生变化。
- `this`：是“当前”元素 `event.currentTarget`。

### 11.2 `Function.prototype.call` 和 `Function.prototype.apply`

`call` 和 `apply` 非常相似——它们使用指定的 `this` 上下文和可选参数调用函数。  
- `call`： 将参数一一传递
- `apply`： 将参数作为数组传递

创建一个对象，并创建一个引用 `this` 但没有 `this` 上下文的函数：

```js
var book = {
    title: "Secrets of the JavaScript Ninja",
    author: "John Resig"
};

function summary() {
  console.log(`${this.title} was written by ${this.author}.`);
}

summary();
// Output: undefined was written by undefined.
```

由于 `summary` 和 `book` 没有联系，因此调用 `summary` 本身只会打印 `undefined`，因为它在全局对象上查找这些属性。

在严格模式下尝试此操作将导致未捕获类型错误：无法读取未定义的属性“标题”，因为 `this` 本身是未定义的。

但是，可以使用 `call` 或 `apply` 来调用函数上 `book` 的 `this` 上下文：

```js
summary.call(book);
// or
summary.apply(book);
// Output: Secrets of the JavaScript Ninja was written by John Resig.
```

当应用这些方法时，`book` 和 `summary`` 之间现在存在连接。 让我们确认一下这到底是什么：

```js
var book = {
    title: "Secrets of the JavaScript Ninja",
    author: "John Resig"
};

function fn() {
    console.log(this);
}

fn.call(book);
fn.apply(book);
// book object
```

在这种情况下，`this` 实际上成为作为参数传递的对象。

在需要传递参数的情况：

```js
var book = {
    title: "Ninja",
    author: "Resig"
};

function summary(year, month) {
    var date = year + "-" + month;
    console.log(date + " " + `${this.title} by ${this.author}.`);
}

summary.call(book, 2023, 10);
// or 
summary.apply(book, [2023, 10]);
```

对于 `apply`，将所有参数包装在一个数组中传递。

在类数组上调用 `forEach(callback)` 方法：

```js
var heros = {
    0: 'Bard',
    1: 'Annie',
    2: 'Jax',
    length: 3
};
/* Uncaught TypeError: heros.forEach is not a function
heros.forEach(hero => {
    console.log(hero);
});
*/
Array.prototype.forEach.call(heros, hero => {
    console.log(hero);
});
```

### 11.3 `Function.prototype.bind`

有时，可能需要在另一个对象的 `this` 上下文中反复使用一个方法，在这种情况下，可以使用 `bind` 方法来创建一个带有显式绑定 `this` 的全新函数。

```js
var book = {
    title: "Ninja",
    author: "Resig"
};

function summary(year, month) {
    var date = year + "-" + month;
    console.log(date + " " + `${this.title} by ${this.author}.`);
}

var bookSummary = summary.bind(book);

bookSummary(2023, 10);
// Output: 2023-10 Ninja by Resig.
```

这是另一个 `bind` 例子：

```js
var heros = {
    0: 'Bard',
    1: 'Annie',
    2: 'Jax',
    length: 3
};

var forHeros = Array.prototype.forEach.bind(heros);

forHeros(hero => {
    console.log(hero);
});
```


## 12 END 参考书目

