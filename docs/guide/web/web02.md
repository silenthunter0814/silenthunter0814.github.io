---
description: javascript 开发教程。jaascript 课程课件，学习笔记。  
keywords: JavaScript, js，HTML，初学者，教程  
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


## 6 `DOM` 文档对象模型

文档对象模型（`DOM`）是 `web` 上构成文档结构和内容的对象的数据表示。

`DOM` 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (`node`)，每个节点都包含着对象 (`objects`)。  
`DOM` 的方法 (methods) 以特定方式操作 `DOM` 树，这些方法可以改变文档的结构、样式或者内容。  
节点(`node`)可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。

### 6.1 访问 `DOM`

在使用 `DOM` 时，不需要做任何其他特殊的操作，都可以立即开始使用 `document` 或 `window` 对象的 API 来操作文档本身，或网页中的任何元素（文档的子元素）。

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

2. `DOM` 和 `HTML` 源代码区别

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

切换到 `Elements` 选项卡，或者再次在控制台中输入 `document.body`，将看到 `DOM` 已更改:

```html
<body style="background-color: red;">
    <h1>Document Object Model</h1>
</body>
```

注意：为了更改 `CSS` 背景颜色属性，我们必须在 `JavaScript` 中输入 `backgroundColor`。 任何带连字符的 `CSS` 属性都将在 `JavaScript` 中以驼峰命名法编写。

我们输入的 `JavaScript` 代码将红色分配给 `body` 的背景颜色，现在是 `DOM` 的一部分。

但是，网站的源代码不会改变，也不会受到客户端 `JavaScript` 的影响。 如果刷新页面，我们在控制台中添加的新代码将会消失。

`DOM` 可能具有与 `HTML` 源代码不同的输出的另一种情况是源代码中存在错误。 一个常见的例子是表格标签 - 表格内需要 `tbody` 标签，但开发人员经常无法将其包含在 `HTML` 中。 浏览器会自动纠正错误并添加 `tbody`。 `DOM` 还会修复尚未关闭的标签。

### 6.2 了解 `DOM` 树和 `Node` 节点

#### 6.2.1 `HTML` 术语和元素访问

了解 `HTML` 和 `JavaScript` 术语对于理解如何使用 `DOM` 至关重要。 

这里我们有一个锚元素，它是指向 `index.html` 的链接:

`<a href="index.html">Home</a>`

- `a`: 标签 `tag`
- `href`: 属性 `attribute`
- `index.html`: 属性值
- `home` 文本 `text`。

开始标签和结束标签之间的所有内容组合起来构成了整个 `HTML` 元素。

使用 `JavaScript` 访问元素的最简单方法是通过 `id` 属性。

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

#### 6.2.2 `DOM` 树和 `Node` 节点

`DOM` 中的所有项目都定义为节点(`Node`)。 节点有很多种类型，最常使用的主要有以下三种：
- `Element` 节点
- `Text` 节点
- `Comment` 节点

当 `HTML` 元素是 `DOM` 中的项目时，它被称为元素节点。 元素之外的任何单独文本都是文本节点，`HTML` 注释是注释节点。  
除了这三种节点类型外，`document` 本身就是一个文档节点，它是所有其他节点的根。

`DOM` 由嵌套节点的树结构组成，通常称为 `DOM` 树。  
`DOM` 中的节点也称为父节点、子节点和兄弟节点，具体取决于它们与其他节点的关系。

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

注意：`HTML` 生成 `DOM` 时，`HTML` 源代码的缩进将创建许多空文本节点，这些节点在 `DevTools Elements` 选项卡中不可见。


#### 6.2.3 识别节点类型

文档中的每个节点都有一个节点类型，可通过 `nodeType` 属性访问。


|  Node Type   | Value |         Example          |
|--------------|-------|--------------------------|
| ELEMENT_NODE |     1 | `<body>,<p>`               |
| TEXT_NODE    |     3 | 不属于元素的文本                 |
| COMMENT_NODE |     8 | `<!-- an HTML comment -->` |

在开发人员工具的“元素”选项卡中，每当单击并突出显示 `DOM` 中的任何行时，`== $0` 的值就会出现在它的旁边。 这是通过键入 `$0` 来访问开发人员工具中当前活动元素的非常方便的方法。

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

`JavaScript` 中的事件是用户采取的操作。 当用户将鼠标悬停在某个元素上、单击某个元素或按下键盘上的特定键时，这些都是事件类型。 

```js
// scripts.js
var button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});
```

使用 addEventListener() 方法，我们将告诉按钮监听单击，并在单击后将背景颜色更改为红色。

### 6.3 访问 `DOM` 中的元素

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

在此 `HTML` 文件中，有许多元素，我们将使用不同的文档方法访问这些元素。

1. 通过 ID 访问元素

访问 `DOM` 中单个元素的最简单方法是通过其唯一 `ID`。 您可以使用文档对象的 `getElementById()` 方法按 `ID` 获取元素。

```js
const id = document.getElementById('demo');
console.log(id);
// <div id="demo">Access me by ID</div>

id.style.border = '1px solid purple;';
```

通过将边框属性更改为紫色，可以确保访问正确的元素。

