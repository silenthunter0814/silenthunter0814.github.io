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
