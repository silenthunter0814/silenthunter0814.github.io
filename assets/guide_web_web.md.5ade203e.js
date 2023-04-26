import{_ as s,c as l,o as a,O as e}from"./chunks/framework.1ff2b322.js";const h=JSON.parse('{"title":"web 入门","description":"","frontmatter":{},"headers":[],"relativePath":"guide/web/web.md","lastUpdated":1682486386000}'),n={name:"guide/web/web.md"},o=e(`<h1 id="web-入门" tabindex="-1">web 入门 <a class="header-anchor" href="#web-入门" aria-label="Permalink to &quot;web 入门&quot;">​</a></h1><p><strong>搭建环境</strong></p><ul><li>软件： google chrome 浏览器</li><li>网站目录结构<br><img src="https://silenthunter0814.github.io/pub/web/site.png" alt=""><ul><li><code>site</code> 网站目录</li><li><code>index.html</code> 网站主页，新建一个 <code>index.html</code> 空文件，位于 <code>site</code> 目录下面。</li><li><code>images</code> 目录，存放图像文件，位于 <code>site</code> 目录下面。</li><li><code>styles</code> 目录，存放设置网页样式的 CSS 代码文件，位于 <code>site</code> 目录下面。</li><li><code>scripts</code> 目录，存放 javascript 脚本文件，位于 <code>site</code> 目录下面。</li></ul></li><li>下载 firefox logo 图像文件 <code>firefox.png</code>，保存到 <code>images</code> 目录。</li></ul><h2 id="_1-html-基础" tabindex="-1">1 HTML 基础 <a class="header-anchor" href="#_1-html-基础" aria-label="Permalink to &quot;1 HTML 基础&quot;">​</a></h2><p>HTML 是一种用于定义内容结构的超文本标记语言 <code>HyperText Markup Language</code>。HTML 由一系列的元素 <code>element</code> 组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签 <code>tag</code> 可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。</p><h3 id="_1-1-html-文档框架" tabindex="-1">1.1 html 文档框架 <a class="header-anchor" href="#_1-1-html-文档框架" aria-label="Permalink to &quot;1.1 html 文档框架&quot;">​</a></h3><ul><li>打开 google chrome，启动 devtools</li><li>点击 <code>sources</code>, 将<code>site</code> 文件夹添加到工作区</li><li>新建文件 template.html</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">welcome MDN</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><code>&lt;!DOCTYPE html&gt;</code>: 文档类型。</li><li><code>&lt;html&gt;&lt;/html&gt;</code>: <code>&lt;html&gt;</code> 元素。该元素包含整个页面的内容，也称作根元素。<br><code>lang=&quot;en-US&quot;</code> 指定页面语言为英文，如果为中文 <code>lang=&quot;zh-CN&quot;</code></li><li><code>&lt;head&gt;&lt;/head&gt;</code>: <code>&lt;head&gt;</code> 元素。该元素的内容对用户不可见，其中包含例如面向搜索引擎的搜索关键字（keywords）、页面描述、CSS 样式表和字符编码声明等。</li><li><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code>: 指定文档使用 <code>UTF-8</code> 字符编码，<code>UTF-8</code> 包括绝大多数人类已知语言的字符。</li><li><code>&lt;title&gt;&lt;/title&gt;</code>: <code>&lt;title&gt;</code> 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。</li><li><code>&lt;body&gt;&lt;/body&gt;</code>: <code>&lt;body&gt;</code> 元素。该元素包含期望让用户在访问页面时看到的内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。</li></ul><h3 id="_1-2-html-元素" tabindex="-1">1.2 html 元素 <a class="header-anchor" href="#_1-2-html-元素" aria-label="Permalink to &quot;1.2 html 元素&quot;">​</a></h3>`,10),t=[o];function p(c,r,i,d,D,F){return a(),l("div",null,t)}const m=s(n,[["render",p]]);export{h as __pageData,m as default};
