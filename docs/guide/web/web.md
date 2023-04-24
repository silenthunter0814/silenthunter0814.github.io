# web 入门

## 1 初识 html

### 1.1 搭建环境

- 软件： google chrome 浏览器
- 网站目录结构
  - `site` 网站目录
  - `index.html` 网站主页，新建一个 `index.html` 空文件，位于 `site` 目录下面。
  - `images` 目录，存放图像文件，位于 `site` 目录下面。
  - `styles` 目录，存放设置网页样式的 CSS 代码文件，位于 `site` 目录下面。
  - `scripts` 目录，存放 javascript 脚本文件，位于 `site` 目录下面。
- 下载 firefox logo 图像文件，保存到 `images` 目录。

### 1.2 第一个 html 文件

- 打开 google chrome，启动 devtools
- 点击 `sources`, 将`site` 添加到工作区
- 新建文件 test.html

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox1.png" alt="My test image" />
  </body>
</html>
```

