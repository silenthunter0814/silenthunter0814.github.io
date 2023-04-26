# web 入门

**搭建环境**

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
    <meta name="viewport" content="width=device-width" />
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

#### 1.2.1 `<p>` Paragraphs 段落

一段文字由 `<p></p>` 标签封装形成段落  
`<p>My cat is very grumpy</p>`  
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

#### 1.2.2 `<img>` image 图像

`<img>` 元素通过包含图像文件路径的地址属性 src，可在所在位置嵌入图像。  

`<img src="images/firefox.png" alt="firefox logo" />`

替换文字属性 `alt` 是图像的文字描述，用于当图像不能被用户看见时显示。

::: info 空元素 Void elements
`<img>` 元素包含两个属性，但是并没有 `</img>` 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一个图像。

换行或硬回车 `<brk />` 也是空元素。
:::

#### 1.2.3 Headings 标题

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

#### 1.2.4 List 列表

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

