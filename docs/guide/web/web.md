# web 入门

## 从哪里开始

**完全初学者**  
如果完全是 Web 开发的初学者，建议先学习 Web 入门课程，对 HTML CSS JavaScript 形成一个整体概念的了解。这也是本课程的主要内容。

**超越基础**  
如果已经有了一些知识，下一步就是详细学习 HTML 和 CSS。

**转向脚本**  
如果已经熟悉 HTML 和 CSS，或者主要对编码感兴趣，希望继续进行 JavaScript 或服务器端开发。

**框架和工具**  
在掌握了 vanilla HTML、CSS 和 JavaScript 的基础知识之后，应该学习客户端 Web 开发工具，然后考虑深入研究客户端 JavaScript 框架和服务器端网站编程。

## 搭建环境

- 软件： google chrome 浏览器
- 网站目录结构  
![](https://silenthunter0814.github.io/pub/web/site.png)
  - `site` 网站目录
  - `index.html` 网站主页，新建一个 `index.html` 空文件，位于 `site` 目录下面。
  - `images` 目录，存放图像文件，位于 `site` 目录下面。
  - `styles` 目录，存放设置网页样式的 CSS 代码文件，位于 `site` 目录下面。
  - `scripts` 目录，存放 javascript 脚本文件，位于 `site` 目录下面。
- 下载 firefox logo 图像文件 `firefox.png`，保存到 `images` 目录。

## 1 HTML 基础

HTML 是一种用于定义内容结构的超文本标记语言 `HyperText Markup Language`。HTML 由一系列的元素 `element` 组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签 `tag` 可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。

### 1.1 html 文档框架

- 打开 google chrome，启动 devtools
- 点击 `sources`, 将`site` 文件夹添加到工作区
- 新建文件 template.html

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />    
    <title>welcome MDN</title>
  </head>
  <body>
    
  </body>
</html>
```

- `<!DOCTYPE html>`: 文档类型。
- `<html></html>`: `<html>` 元素。该元素包含整个页面的内容，也称作根元素。  
  `lang="en-US"` 指定页面语言为英文，如果为中文 `lang="zh-CN"`
- `<head></head>`: `<head>` 元素。该元素的内容对用户不可见，其中包含例如面向搜索引擎的搜索关键字（keywords）、页面描述、CSS 样式表和字符编码声明等。
- `<meta charset="utf-8">`: 指定文档使用 `UTF-8` 字符编码，`UTF-8` 包括绝大多数人类已知语言的字符。
- `<title></title>`: `<title>` 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
- `<body></body>`: `<body>` 元素。该元素包含期望让用户在访问页面时看到的内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。

### 1.2 html 元素

---
#### 1.2.1 `<p>` Paragraphs 段落

一段文字由 `<p></p>` 标签封装形成段落 

```html
<body>
    <p>My cat is very grumpy</p>
</body>
```

![](https://silenthunter0814.github.io/pub/web/tag.png)  

这个元素的主要部分有：
- 开始标签（Opening tag）：包含元素的名称（本例为 p），被大于号、小于号所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。
- 结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 —— 在本例中即段落在此结束。
- 内容（Content）：元素的内容，本例中就是所输入的文本本身。
- 元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

元素也可以有属性 (Attribute)：  
![](https://silenthunter0814.github.io/pub/web/attribute.png)  

属性包含了关于元素的一些额外信息，这些信息本身不应显现在内容中。本例中，class 是属性名称，editor-note 是属性的值。class 属性可为元素提供一个标识名称，以便进一步为元素指定样式或进行其他操作时使用。

属性应该包含：
- 在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符。
- 属性的名称，并接上一个等号。
- 由引号所包围的属性值。

::: info 嵌套元素
将一个元素置于其他元素之中称作嵌套。

`<p>My cat is <strong>very</strong> grumpy.</p>`

元素必须正确地开始和结束，才能清楚地显示出正确的嵌套层次。
:::

---
#### 1.2.2 `<img>` image 图像

`<img>` 元素通过包含图像文件路径的地址属性 src，可在所在位置嵌入图像。  

`<img src="images/firefox.png" alt="firefox logo" />`

替换文字属性 `alt` 是图像的文字描述，用于当图像不能被用户看见时显示。

::: info 空元素 Void elements
`<img>` 元素包含两个属性，但是并没有 `</img>` 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一个图像。

换行或硬回车 `<brk />` 也是空元素。
:::

---
#### 1.2.3 `<h1>` Headings 标题

标题元素用于指定内容的标题和子标题。HTML 包括六个级别的标题，`<h1> - <h6>`，一般最多用到 3-4 级标题。

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

HTML 中 `<!-- and -->` 之间的任何内容都是 HTML 注释。 浏览器在呈现代码时会忽略注释。

::: info 备注
你可以看到第一级标题是有隐式的主题样式。不要使用标题元素来加大、加粗字体，因为标题对于 无障碍访问 和 搜索引擎优化 等问题非常有意义。要保持页面结构清晰，标题整洁，不要发生标题级别跳跃。
:::

---
#### 1.2.4 `<ul>` `<ol>` List 列表

最常用的列表类型为：
- `<ul>`: 无序列表 (Unordered List)，项目中的顺序并不重要，就像购物列表。
- `<ol>`: 有序列表 (Ordered List)，项目中的顺序很重要，就像烹调指南。

列表的每个项目用一个列表项目 (List Item) 元素 `<li>` 包围。

比如，要将下面的段落片段改成一个列表：

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

可以这样更改标记：

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

---
#### 1.2.5 `<a>` Links 链接

a 是 "anchor" (锚)的缩写，要将一些文本添加到链接中，只需如下几步：
- 选择一些文本。比如 `Mozilla Manifesto`。
- 将文本包含在 `<a>` 元素内：  
  `<a>Mozilla Manifesto</a>`
- 为此 `<a>` 元素添加一个 `href` (hypertext reference)属性：  
  `<a href="">Mozilla Manifesto</a>`
- 把属性的值设置为所需网址：  
`<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>`

### 1.3 小结

跟随前面章节的指导，我们应该能完成并完全理解一个像下面这样的 index.html 文档：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>WWEB 初学者指南</title>
  </head>
  <body>
    <h1>Mozilla is cool</h1>
    <img src="images/firefox.png" alt="The Firefox logo: a flaming fox surrounding the Earth.">

    <p>在 Mozilla，我们是一个全球社区</p>

    <ul> <!-- changed to list in the tutorial -->
      <li>技术人员</li>
      <li>思想家</li>
      <li>建设者</li>
    </ul>

    <p>共同努力保持 Internet 的活力和可访问性，以便全世界的人们都可以成为 Web 的知情贡献者和创建者。我们相信这种跨开放平台的人类协作行为对于个人成长和我们共同的未来至关重要。</p>

    <p>阅读 <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla 宣言 </a> 
      ，进一步了解指导我们追求使命的价值观和原则。</p>
  </body>
</html>
```

## 2 CSS 基础
CSS (Cascading Style Sheets) 层叠样式表是为网页添加样式的代码。

### 2.1 选择器和规则集
和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。

- 新建文件 `styles/style.css`  
  ```css
  p {
    color: red;
  }
  ```
- 打开 index.html 文件，在 `<head>` 和 `</head>` 标签之间插入：  
  `<link href="styles/style.css" rel="stylesheet" />`

可以看到段落文字变红，说明我们已经成功地迈出了 CSS 学习的第一步。

---
#### 2.1.1 规则集详解
让我们来仔细看一看上述 CSS：  
![](https://silenthunter0814.github.io/pub/web/css.png)

整个结构称为 **规则集**（通常简称“规则”），各部分释义如下：

- Selector 选择器  
  HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素(在这个例子中就是 `p` 元素)。
- Declaration 声明  
  一个单独的规则，如 `color: red;` 用来指定添加样式元素的属性。
- Properties 属性  
  改变 HTML 元素样式的途径。(本例中 `color` 就是 `<p>` 元素的属性。) CSS 中，由编写人员决定修改哪个属性以改变规则。
- Property value 属性的值  
  在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值 (除了 red 之外还有很多属性值可以用于 `color`)。


注意其他重要的语法：
- 每个规则集(除了选择器的部分)都应该包含在成对的大括号里(`{}`)。
- 在每个声明里要用冒号(`:`)将属性与属性值分隔开。
- 在每个规则集里要用分号(`;`)将各个声明分隔开。

---
#### 2.1.2 多属性
如果要同时修改多个属性，只需要将它们用分号隔开：

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

---
#### 2.1.3 多元素选择
可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。

```css
p, li, h1 {
  color: red;
}
```

--- 
#### 2.1.4 不同类型的选择器
选择器有许多不同的类型。上面只介绍了**元素选择器**，用来选择 HTML 文档中给定的元素。但是选择操作可以更加具体。下面是一些常用的选择器类型：

- 元素选择器：指定类型的所有 HTML 元素  
  `p` --> `<p>`
- ID 选择器：具有特定 ID 的元素  
  `#my-id` --> `<a id="my-id">`
- 类选择器：具有特定类的元素  
  `.my-class` --> `<p class="my-class">` 和 `<a class="my-class">`
- 属性选择器：拥有特定属性的元素  
  `img[src]` --> `<img src="myimage.png">`
- 伪（Pseudo）类选择器：特定状态下的特定元素(比如鼠标指针悬停)  
  `a:hover` 仅在鼠标指针悬停在链接上时选择 `<a>`

### 2.2 字体和文本

- 访问 [Google Fonts](https://www.google.com/fonts) 选择一种喜欢的字体。以 `<link>` 元素的形式添加进 `<head></head>`:

  `<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />`  
  以上代码为当前网页下载 Open Sans 字体，从而使自定义 CSS 中可以对 HTML 元素应用这个字体

- 将下列代码添加到相应的位置，用在 Google Fonts 找到的字体替代 font-family 中的占位行。这条规则首先为整个页面设定了一个全局字体和字号。

  ```css
  html {
    font-size: 10px; /* 10 pixels high */
    font-family: "Open Sans", sans-serif; 
  }
  ```

  ::: info CSS 注释
  CSS 文档中所有位于 `/*` 和 `*/` 之间的内容都是 CSS 注释，它会被浏览器在渲染代码时忽略。
  :::

- 为 `<body></body>` 内的元素设置字号。将标题居中显示，并为正文设置行高和字间距，从而提高页面的可读性。

  ```css
  h1 {
    font-size: 60px;
    text-align: center;
  }

  p, li { 
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
  }
  ```

### 2.3 CSS: all about boxes

CSS 布局主要基于 `box` 模型。每个占据页面空间的块都有这样的属性：

- `padding`：即内边距，围绕着内容(比如段落)的空间
- `border`：即边框，紧接着内边距的线
- `margin`：即外边距，围绕元素外部的空间

  ![](https://silenthunter0814.github.io/pub/web/box.png)


本节我们还将学习应用以下属性：
- `width` ：元素的宽度
- `background-color` ：元素内容和内边距底下的颜色
- `color` ：元素内容（通常是文本）的颜色
- `text-shadow` ：为元素内的文本设置阴影
- `display` ：设置元素的显示模式 （后续学习介绍）

---
#### 2.3.1 更改页面颜色
设置整个页面的背景颜色:

```css
html {
  background-color: #00539f;
}
```

---
#### 2.3.2 `body` 样式设置

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```
`<body>` 元素有多个属性声明：
- `width: 600px;` : 强制页面永远保持 600 像素宽。
- `margin: 0 auto;` : 为 margin 或 padding 等属性设置两个值时，第一个值代表元素的上方和下方（在这个例子中设置为 0），而第二个值代表左边和右边（在这里，auto 是一个特殊的值，意思是水平方向上左右对称）。
- `background-color: #FF9500;` : 指定元素的背景颜色。
- `padding: 0 20px 20px 20px;` : 给内边距设置了四个值来让内容四周产生一点空间。值以 **上,右,下,左** 的顺序排列。
- `border: 5px solid black;` : 为 body 设置 5 像素的黑色实线边框。

--- 
#### 2.3.3 页面主标题

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```
- 浏览器在没有任何 CSS 的情况下会给 `<h1>` 等元素设置一些默认样式。通过设置 `margin: 0;` 来覆盖默认样式。
- 把标题的上下内边距设置为 20 像素，并且将标题文本与 HTML 的背景颜色设为一致。
- `text-shadow` 属性，它可以为元素中的文本提供阴影：
  - 水平偏移值: 即阴影右移的像素数（负值左移）。
  - 垂直偏移值: 即阴影下移的像素数（负值上移）。
  - 阴影的模糊半径: 值越大产生的阴影越模糊。
  - 阴影的基色。

---
#### 2.3.4 图像居中

```css
img {
  display: block;
  margin: 0 auto;
}
```

`<body>` 元素是块级元素，意味着它占据了页面的空间并且能够赋予外边距和其他改变间距的值。而 `<img>` 是内联元素，不具备块级元素的一些功能。所以为了使图像有外边距，我们必须使用 `display: block` 给予其块级行为。

### 2.4 小结
有了前面这些知识，最终实现 `style.css`:

```css
html {
  font-size: 10px;
  font-family: 'Noto Sans SC', sans-serif;
  background-color: #00539F;
}

body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}

h1 {
  font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
}

p, li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}

img {
  display: block;
  margin: 0 auto;
}
```
## 3 JavaScript 基础

JavaScript（缩写：JS）是一门完备的动态编程语言。当应用于 HTML 文档时，可为网站提供动态交互特性。由布兰登·艾克（Brendan Eich，Mozilla 项目、Mozilla 基金会和 Mozilla 公司的联合创始人）发明。

JavaScript 相当简洁，却非常灵活。开发者们基于 JavaScript 核心编写了大量实用工具，可以使 开发工作事半功倍。其中包括：

- 浏览器应用程序接口（API）：浏览器内置的 API 提供了丰富的功能，比如：动态创建 HTML 和设置 CSS 样式、从用户的摄像头采集处理视频流、生成 3D 图像与音频样本等等。
- 第三方 API ：让开发者可以在自己的站点中整合其他内容提供者（Twitter、Facebook 等）提供的功能。
- 第三方框架和库：用来快速构建网站和应用。

### 3.1 Hello World

在页面中添加一些基本的 JavaScript 脚本来建造一个“Hello world!”示例：

- 在 `scripts` 文件夹创建一个名为 `main.js` 的文件
- 在 `index.html` 文件 `</body>` 标签前插入以下代码：  
  `<script src="scripts/main.js"></script>`
- 与 CSS 的 <link> 元素类似，它将 JavaScript 引入页面以作用于 HTML（以及 CSS 等页面上所有内容）
- 将以下代码添加到 main.js 文件中：  

  ```js
  const myHeading = document.querySelector("h1");
  myHeading.textContent = "Hello world!";
  ```
- 保存 HTML 和 JavaScript 文件，用浏览器打开 index.html。JavaScript 把页面的标题改成了 “Hello world!” 。
  - `querySelector()` 函数获取标题的引用，并把它储存在 `myHeading` 变量中。
  - 把 `myHeading` 变量的属性 `textContent` （标题内容）修改为 “Hello world!” 。

### 3.2 JavaScript 快速入门

JavaScript 是最流行的现代网络技术之一。然而，熟悉 JavaScript 比熟悉 HTML 和 CSS 更具挑战性。我们必须从小处着手，逐渐进步。

---
#### 3.2.1 variable 变量

变量 是存储值的容器。要声明一个变量，先输入关键字 `let`，然后输入合适的名称：  
  `let myVariable;`
- 行末的分号表示当前语句结束
- 变量声明后可以进行赋值：  
  `myVariable = "Bob";`
- 变量声明和赋值可以同时进行：  
  `let myVariable = "Bob";`
- 变量在赋值后可以更改：  

  ```js
  let myVariable = "Bob";
  myVariable = "Steve";
  ```

注意变量可以有不同的 数据类型 ：
- `String` : `let myVar = 'Bob'`; 或 `let myVar = "Bob";`
- `Number` : `let myVar = 10;`
- `Boolean` : `let myVar = true;` `/* or false */`
- `Array` : `let myVar = [1,'Bob','Steve',10];`, 元素引用： `myVar[0], myVar[1]`
- `Object` : `let myVar = document.querySelector('h1');`

---
#### 3.2.2 comment 注释
- 单行注释 `// 这是一条注释。`
- 多行注释
  ```js
  /*
  这里的所有内容
  都是注释。
  */
  ```

---
#### 3.2.3 operator 运算符

比较常用的运算符：
- `+` : 将两个数字相加，或连接两个字符串。  
  `6 + 9;`, `'Hello ' + 'world!';`
- `-`, `*`, `/` : 算术运算符  
  `9 - 3;`, `8 * 2;` , `9 / 3;`
- `=` : 赋值运算符  
  `myVariable = 'Bob';`
- `===` : 相等运算符，返回一个 `true`/`false` （布尔）值。  
  `myVariable === 4;`
- `!==` : 不相等运算符，返回一个 `true`/`false` （布尔）值。  
  `myVariable !== 3;`
- `!` : 逻辑非运算符，返回一个 `true`/`false` （布尔）值。  

---
#### 3.2.4 condition 条件语句
测试表达式的真假，并根据测试结果运行不同的代码。一个常用的条件语句是 `if ... else`。

```js
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
```

`if ( ... )` 中的表达式进行测试，如果返回 `true`，则运行第一个代码块；如果返回 `false`，则跳过第一块直接运行 `else` 之后的第二个代码块。

---
#### 3.2.5 function 函数

函数用来封装可复用的功能。  

`let myVariable = document.querySelector("h1");`  
`alert("hello!");`  

`document.querySelector` 和 `alert` 是浏览器内置的函数，随时可用。

函数一般形式：

```js
function name(arguments) {
  ...
}
```

函数通常包括参数，它们位于小括号内部，多个参数之间用逗号分开。  

定义一个包含两个参数进行乘法运算的函数：

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```
函数调用：

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

---
#### 3.2.6 event 事件

事件能为网页添加真实的交互能力。它可以捕捉浏览器操作并运行一些代码做为响应。  

鼠标点击操作会触发事件：

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
```

 `<html>` 元素调用它的 `addEventListener(...)` 方法，将事件名称（`'click'`）以及其回调函数（当事件发生时，调用该函数）传入该函数中作为调用参数。  
刚刚传递给 `addEventListener()` 的函数被称为匿名函数，因为它没有名字。匿名函数还有另一种称之为箭头函数的写法，箭头函数使用 `() =>` 代替 `function ()`：

```js
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
```

### 3.3 完善示例网页

现在我们已经具备了一些 JavaScript 基础，可以为示例网页添加一些更酷的特性。

---
#### 3.3.1 添加一个图像切换器

使用 JavaScript 和 DOM API 功能来交替显示两个图像之一。当用户单击显示的图像时，将发生这种变化。
- 选择另一张图片 `firefox2.png`，保存在 `images` 目录
- 将以下 JavaScript 代码添加到 `main.js`文件中：

  ```js
  const myImage = document.querySelector("img");

  myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
      myImage.setAttribute("src", "images/firefox2.png");
    } else {
      myImage.setAttribute("src", "images/firefox.png");
    }
  };
  ```
- 保存所有文件并用浏览器打开 index.html，当单击图像时，它应该会更改为另一幅图像。

这里首先把 `<img>` 元素的引用存放在 `myImage` 变量里。然后将这个变量的 `onclick` 事件与一个匿名函数绑定。每次点击图片时：

- 获取这张图片的 `src` 属性值。
- 用一个条件句来判断 `src` 的值是否等于原始图像的路径：  

  i. 如果是，则将 `src` 的值改为第二张图片的路径，并在 `<img>` 内加载该图片。  
  ii. 如果不是（意味着它已经修改过）, 则把 `src` 的值重新设置为原始图片的路径，回到原始状态。

---
#### 3.3.2 添加个性化欢迎信息

添加另一段代码，在用户初次进入站点时将网页的标题改成一段个性化欢迎信息（即在标题中添加用户的名字）。名字信息会由 Web Storage API 保存下来，即使用户关闭页面之后再重新打开，仍可得到之前的信息。还会添加一个选项，可以根据需要改变用户名字以更新欢迎信息。

- 打开 index.html，在 `<script>` 元素之前添加以下行：  
  `<button>Change user</button>`
- 在 main.js 中，将以下代码放在文件的底部。  

  ```js
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  ```

- 添加以下函数来设置个性化问候语。  

  ```js
  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool' + myName;
  }
  ```
  - `prompt(...)` 函数: 显示一个对话框，要求用户输入数据，并在用户单击“确定”后将其存储在一个变量中。
  - `localStorage`: 本地存储对象，它允许我们在浏览器中存储数据并稍后检索。
  - `setItem(...)`: `localStorage` 方法，创建和存储一个名为 `name` 的数据项，将其值设置为 `myName` 变量。

- 添加以下的 `if ... else` 块。我们可以称之为初始化代码，因为它会在首次加载时构建应用程序。

  ```js
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla is cool' + storedName;
  }
  ```
  - `!`: logical NOT, 检查 `name` 数据是否存在。
  - 如果不存在，`setUserName()` 函数将运行以创建它。
  - 如果存在（用户在上次访问期间设置了用户名），`getItem()` 检索 `name` 并获取键值 `myName` 的引用。

- 最后，为按钮设置 `onclick` 事件处理器。单击按钮时，`setUserName()` 运行。

  ```js
  myButton.onclick = ()=> {
    setUserName();
  };
  ```

---
#### 3.3.3 空用户名
运行示例代码，弹出输入用户名的对话框，试着按下 **取消** 按钮。此时标题会显示为 “Mozilla is cool, null”。这是因为取消提示对话框后值将设置为 `null`，这是 JavaScript 中的一个特殊值，表示引用不存在。

为避免这些问题，需要检查用户是否输入了空白名称：

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Mozilla is cool' + myName;
  }
}
```
如果 `myName` 没有值，则 `setUserName()` 从头开始重新运行。如果它确实有一个值，则将值存储在 `localStorage` 中并将其设置为标题的文本。

### 3.4 小结

有了前面这些知识，最终实现 index.html, style.css, main.js:

<details>
<summary>index.html</summary>

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link href="styles/style.css" rel="stylesheet" />
        <title>WEB 初学者指南</title>
    </head>
    <body>
        <h1>Mozilla 酷毙了</h1>
        <img src="images/firefox.png" alt="The Firefox logo: a flaming fox surrounding the Earth.">
        <p>在 Mozilla，我们是一个全球社区</p>
        <ul>
            <!-- changed to list in the tutorial -->
            <li>技术人员</li>
            <li>思想家</li>
            <li>建设者</li>
        </ul>
        <p>共同努力保持 Internet 的活力和可访问性，以便全世界的人们都可以成为 Web 的知情贡献者和创建者。我们相信这种跨开放平台的人类协作行为对于个人成长和我们共同的未来至关重要。</p>
        <p>共同努力保持 Internet 的活力和可访问性，以便全世界的人们都可以成为 Web 的知情贡献者和创建者。我们相信这种跨开放平台的人类协作行为对于个人成长和我们共同的未来至关重要。</p>
        <p>
            阅读 <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla 宣言 </a>
            ，进一步了解指导我们追求使命的价值观和原则。
        </p>
        <button>Change user</button>
        <script src= "scripts/main.js"></script>
    </body>
</html>
```
</details>

<details>
<summary>style.css</summary>

```css
html {
    font-size: 10px;
    /* 10 pixels high */
    font-family: "Open Sans", sans-serif;
    background-color: #2196F3;
}
body {
    width: 600px;
    margin: 0 auto;
    background-color: #ff9500;
    padding: 0 20px 20px 20px;
    border: 5px solid black;
}
h1 {
    font-size: 60px;
    text-align: center;
    margin: 0;
    padding: 20px 0;
    color: #00539f;
    text-shadow: 3px 3px 1px black;
}
img {
    display: block;
    margin: 0 auto;
}
p, li {
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
}
```
</details>

---
main.js:

```js
const myImage = document.querySelector("img");

myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool " + storedName;
}

myButton.onclick = ()=>{
    setUserName();
}
```

## 4 通过 GitHub 发布网站

通过 GitHub Pages 发布站点。

- 注册 GitHub并验证电子邮件地址
- 创建一个存储库名称为 web 来存储文件。
- 将网站文件夹 (site) 的内容上传到存储库中。然后单击提交更改。
- 在 web 存储库页面，点击 "Settings"
- 在左侧边栏 Code and automation 项，点击 "pages"
- 在 GitHub Pages 页，Build and deployment -> Branch 项，选择 `main` 分支，`save`。
- 浏览器访问 `https://silenthunter0814.github.io/web/`，在弹出小窗口输入一个名字。