import{_ as s,c as l,o as a,O as n}from"./chunks/framework.1ff2b322.js";const u=JSON.parse('{"title":"web 入门","description":"","frontmatter":{},"headers":[],"relativePath":"guide/web/web.md","lastUpdated":1682516459000}'),e={name:"guide/web/web.md"},o=n(`<h1 id="web-入门" tabindex="-1">web 入门 <a class="header-anchor" href="#web-入门" aria-label="Permalink to &quot;web 入门&quot;">​</a></h1><p><strong>搭建环境</strong></p><ul><li>软件： google chrome 浏览器</li><li>网站目录结构<br><img src="https://silenthunter0814.github.io/pub/web/site.png" alt=""><ul><li><code>site</code> 网站目录</li><li><code>index.html</code> 网站主页，新建一个 <code>index.html</code> 空文件，位于 <code>site</code> 目录下面。</li><li><code>images</code> 目录，存放图像文件，位于 <code>site</code> 目录下面。</li><li><code>styles</code> 目录，存放设置网页样式的 CSS 代码文件，位于 <code>site</code> 目录下面。</li><li><code>scripts</code> 目录，存放 javascript 脚本文件，位于 <code>site</code> 目录下面。</li></ul></li><li>下载 firefox logo 图像文件 <code>firefox.png</code>，保存到 <code>images</code> 目录。</li></ul><h2 id="_1-html-基础" tabindex="-1">1 HTML 基础 <a class="header-anchor" href="#_1-html-基础" aria-label="Permalink to &quot;1 HTML 基础&quot;">​</a></h2><p>HTML 是一种用于定义内容结构的超文本标记语言 <code>HyperText Markup Language</code>。HTML 由一系列的元素 <code>element</code> 组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签 <code>tag</code> 可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。</p><h3 id="_1-1-html-文档框架" tabindex="-1">1.1 html 文档框架 <a class="header-anchor" href="#_1-1-html-文档框架" aria-label="Permalink to &quot;1.1 html 文档框架&quot;">​</a></h3><ul><li>打开 google chrome，启动 devtools</li><li>点击 <code>sources</code>, 将<code>site</code> 文件夹添加到工作区</li><li>新建文件 template.html</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en-US</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">welcome MDN</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>&lt;!DOCTYPE html&gt;</code>: 文档类型。</li><li><code>&lt;html&gt;&lt;/html&gt;</code>: <code>&lt;html&gt;</code> 元素。该元素包含整个页面的内容，也称作根元素。<br><code>lang=&quot;en-US&quot;</code> 指定页面语言为英文，如果为中文 <code>lang=&quot;zh-CN&quot;</code></li><li><code>&lt;head&gt;&lt;/head&gt;</code>: <code>&lt;head&gt;</code> 元素。该元素的内容对用户不可见，其中包含例如面向搜索引擎的搜索关键字（keywords）、页面描述、CSS 样式表和字符编码声明等。</li><li><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code>: 指定文档使用 <code>UTF-8</code> 字符编码，<code>UTF-8</code> 包括绝大多数人类已知语言的字符。</li><li><code>&lt;title&gt;&lt;/title&gt;</code>: <code>&lt;title&gt;</code> 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。</li><li><code>&lt;body&gt;&lt;/body&gt;</code>: <code>&lt;body&gt;</code> 元素。该元素包含期望让用户在访问页面时看到的内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。</li></ul><h3 id="_1-2-html-元素" tabindex="-1">1.2 html 元素 <a class="header-anchor" href="#_1-2-html-元素" aria-label="Permalink to &quot;1.2 html 元素&quot;">​</a></h3><hr><h4 id="_1-2-1-p-paragraphs-段落" tabindex="-1">1.2.1 <code>&lt;p&gt;</code> Paragraphs 段落 <a class="header-anchor" href="#_1-2-1-p-paragraphs-段落" aria-label="Permalink to &quot;1.2.1 \`&lt;p&gt;\` Paragraphs 段落&quot;">​</a></h4><p>一段文字由 <code>&lt;p&gt;&lt;/p&gt;</code> 标签封装形成段落</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My cat is very grumpy</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://silenthunter0814.github.io/pub/web/tag.png" alt=""></p><p>这个元素的主要部分有：</p><ul><li>开始标签（Opening tag）：包含元素的名称（本例为 p），被大于号、小于号所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。</li><li>结束标签（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 —— 在本例中即段落在此结束。</li><li>内容（Content）：元素的内容，本例中就是所输入的文本本身。</li><li>元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。</li></ul><p>元素也可以有属性 (Attribute)：<br><img src="https://silenthunter0814.github.io/pub/web/attribute.png" alt=""></p><p>属性包含了关于元素的一些额外信息，这些信息本身不应显现在内容中。本例中，class 是属性名称，editor-note 是属性的值。class 属性可为元素提供一个标识名称，以便进一步为元素指定样式或进行其他操作时使用。</p><p>属性应该包含：</p><ul><li>在属性与元素名称（或上一个属性，如果有超过一个属性的话）之间的空格符。</li><li>属性的名称，并接上一个等号。</li><li>由引号所包围的属性值。</li></ul><div class="info custom-block"><p class="custom-block-title">嵌套元素</p><p>将一个元素置于其他元素之中称作嵌套。</p><p><code>&lt;p&gt;My cat is &lt;strong&gt;very&lt;/strong&gt; grumpy.&lt;/p&gt;</code></p><p>元素必须正确地开始和结束，才能清楚地显示出正确的嵌套层次。</p></div><hr><h4 id="_1-2-2-img-image-图像" tabindex="-1">1.2.2 <code>&lt;img&gt;</code> image 图像 <a class="header-anchor" href="#_1-2-2-img-image-图像" aria-label="Permalink to &quot;1.2.2 \`&lt;img&gt;\` image 图像&quot;">​</a></h4><p><code>&lt;img&gt;</code> 元素通过包含图像文件路径的地址属性 src，可在所在位置嵌入图像。</p><p><code>&lt;img src=&quot;images/firefox.png&quot; alt=&quot;firefox logo&quot; /&gt;</code></p><p>替换文字属性 <code>alt</code> 是图像的文字描述，用于当图像不能被用户看见时显示。</p><div class="info custom-block"><p class="custom-block-title">空元素 Void elements</p><p><code>&lt;img&gt;</code> 元素包含两个属性，但是并没有 <code>&lt;/img&gt;</code> 结束标签，元素里也没有内容。这是因为图像元素不需要通过内容来产生效果，它的作用是向其所在的位置嵌入一个图像。</p><p>换行或硬回车 <code>&lt;brk /&gt;</code> 也是空元素。</p></div><hr><h4 id="_1-2-3-h1-headings-标题" tabindex="-1">1.2.3 <code>&lt;h1&gt;</code> Headings 标题 <a class="header-anchor" href="#_1-2-3-h1-headings-标题" aria-label="Permalink to &quot;1.2.3 \`&lt;h1&gt;\` Headings 标题&quot;">​</a></h4><p>标题元素用于指定内容的标题和子标题。HTML 包括六个级别的标题，<code>&lt;h1&gt; - &lt;h6&gt;</code>，一般最多用到 3-4 级标题。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 4 heading levels: --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My main title</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My top level heading</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My subheading</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My sub-subheading</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>HTML 中 <code>&lt;!-- and --&gt;</code> 之间的任何内容都是 HTML 注释。 浏览器在呈现代码时会忽略注释。</p><div class="info custom-block"><p class="custom-block-title">备注</p><p>你可以看到第一级标题是有隐式的主题样式。不要使用标题元素来加大、加粗字体，因为标题对于 无障碍访问 和 搜索引擎优化 等问题非常有意义。要保持页面结构清晰，标题整洁，不要发生标题级别跳跃。</p></div><hr><h4 id="_1-2-4-ul-ol-list-列表" tabindex="-1">1.2.4 <code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code> List 列表 <a class="header-anchor" href="#_1-2-4-ul-ol-list-列表" aria-label="Permalink to &quot;1.2.4 \`&lt;ul&gt;\` \`&lt;ol&gt;\` List 列表&quot;">​</a></h4><p>最常用的列表类型为：</p><ul><li><code>&lt;ul&gt;</code>: 无序列表 (Unordered List)，项目中的顺序并不重要，就像购物列表。</li><li><code>&lt;ol&gt;</code>: 有序列表 (Ordered List)，项目中的顺序很重要，就像烹调指南。</li></ul><p>列表的每个项目用一个列表项目 (List Item) 元素 <code>&lt;li&gt;</code> 包围。</p><p>比如，要将下面的段落片段改成一个列表：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  At Mozilla, we&#39;re a global community of technologists, thinkers, and builders</span></span>
<span class="line"><span style="color:#A6ACCD;">  working together…</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>可以这样更改标记：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">At Mozilla, we&#39;re a global community of</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">technologists</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">thinkers</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">builders</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">working together…</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><h4 id="_1-2-5-a-links-链接" tabindex="-1">1.2.5 <code>&lt;a&gt;</code> Links 链接 <a class="header-anchor" href="#_1-2-5-a-links-链接" aria-label="Permalink to &quot;1.2.5 \`&lt;a&gt;\` Links 链接&quot;">​</a></h4><p>a 是 &quot;anchor&quot; (锚)的缩写，要将一些文本添加到链接中，只需如下几步：</p><ul><li>选择一些文本。比如 <code>Mozilla Manifesto</code>。</li><li>将文本包含在 <code>&lt;a&gt;</code> 元素内：<br><code>&lt;a&gt;Mozilla Manifesto&lt;/a&gt;</code></li><li>为此 <code>&lt;a&gt;</code> 元素添加一个 <code>href</code> (hypertext reference)属性：<br><code>&lt;a href=&quot;&quot;&gt;Mozilla Manifesto&lt;/a&gt;</code></li><li>把属性的值设置为所需网址：<br><code>&lt;a href=&quot;https://www.mozilla.org/en-US/about/manifesto/&quot;&gt;Mozilla Manifesto&lt;/a&gt;</code></li></ul><h3 id="_1-3-小结" tabindex="-1">1.3 小结 <a class="header-anchor" href="#_1-3-小结" aria-label="Permalink to &quot;1.3 小结&quot;">​</a></h3><p>跟随前面章节的指导，我们应该能完成并完全理解一个像下面这样的 index.html 文档：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zh-CN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">WWEB 初学者指南</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Mozilla is cool</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images/firefox.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">alt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The Firefox logo: a flaming fox surrounding the Earth.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">在 Mozilla，我们是一个全球社区</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- changed to list in the tutorial --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">技术人员</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">思想家</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">建设者</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">共同努力保持 Internet 的活力和可访问性，以便全世界的人们都可以成为 Web 的知情贡献者和创建者。我们相信这种跨开放平台的人类协作行为对于个人成长和我们共同的未来至关重要。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">阅读 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.mozilla.org/en-US/about/manifesto/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Mozilla 宣言 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      ，进一步了解指导我们追求使命的价值观和原则。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_2-css-基础" tabindex="-1">2 CSS 基础 <a class="header-anchor" href="#_2-css-基础" aria-label="Permalink to &quot;2 CSS 基础&quot;">​</a></h2><p>CSS (Cascading Style Sheets) 层叠样式表是为网页添加样式的代码。</p><h3 id="_2-1-选择器和规则集" tabindex="-1">2.1 选择器和规则集 <a class="header-anchor" href="#_2-1-选择器和规则集" aria-label="Permalink to &quot;2.1 选择器和规则集&quot;">​</a></h3><p>和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。</p><ul><li>新建文件 <code>styles/style.css</code><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>打开 index.html 文件，在 <code>&lt;head&gt;</code> 和 <code>&lt;/head&gt;</code> 标签之间插入：<br><code>&lt;link href=&quot;styles/style.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></li></ul><p>可以看到段落文字变红，说明我们已经成功地迈出了 CSS 学习的第一步。</p><hr><h4 id="_2-1-1-规则集详解" tabindex="-1">2.1.1 规则集详解 <a class="header-anchor" href="#_2-1-1-规则集详解" aria-label="Permalink to &quot;2.1.1 规则集详解&quot;">​</a></h4><p>让我们来仔细看一看上述 CSS：<br><img src="https://silenthunter0814.github.io/pub/web/css.png" alt=""></p><p>整个结构称为 <strong>规则集</strong>（通常简称“规则”），各部分释义如下：</p><ul><li>Selector 选择器<br> HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素(在这个例子中就是 <code>p</code> 元素)。</li><li>Declaration 声明<br> 一个单独的规则，如 <code>color: red;</code> 用来指定添加样式元素的属性。</li><li>Properties 属性<br> 改变 HTML 元素样式的途径。(本例中 <code>color</code> 就是 <code>&lt;p&gt;</code> 元素的属性。) CSS 中，由编写人员决定修改哪个属性以改变规则。</li><li>Property value 属性的值<br> 在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值 (除了 red 之外还有很多属性值可以用于 <code>color</code>)。</li></ul><p>注意其他重要的语法：</p><ul><li>每个规则集(除了选择器的部分)都应该包含在成对的大括号里(<code>{}</code>)。</li><li>在每个声明里要用冒号(<code>:</code>)将属性与属性值分隔开。</li><li>在每个规则集里要用分号(<code>;</code>)将各个声明分隔开。</li></ul><hr><h4 id="_2-1-2-多属性" tabindex="-1">2.1.2 多属性 <a class="header-anchor" href="#_2-1-2-多属性" aria-label="Permalink to &quot;2.1.2 多属性&quot;">​</a></h4><p>如果要同时修改多个属性，只需要将它们用分号隔开：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid black</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h4 id="_2-1-3-多元素选择" tabindex="-1">2.1.3 多元素选择 <a class="header-anchor" href="#_2-1-3-多元素选择" aria-label="Permalink to &quot;2.1.3 多元素选择&quot;">​</a></h4><p>可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">li</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><h4 id="_2-1-4-不同类型的选择器" tabindex="-1">2.1.4 不同类型的选择器 <a class="header-anchor" href="#_2-1-4-不同类型的选择器" aria-label="Permalink to &quot;2.1.4 不同类型的选择器&quot;">​</a></h4><p>选择器有许多不同的类型。上面只介绍了<strong>元素选择器</strong>，用来选择 HTML 文档中给定的元素。但是选择操作可以更加具体。下面是一些常用的选择器类型：</p><ul><li>元素选择器：指定类型的所有 HTML 元素<br><code>p</code> --&gt; <code>&lt;p&gt;</code></li><li>ID 选择器：具有特定 ID 的元素<br><code>#my-id</code> --&gt; <code>&lt;a id=&quot;my-id&quot;&gt;</code></li><li>类选择器：具有特定类的元素<br><code>.my-class</code> --&gt; <code>&lt;p class=&quot;my-class&quot;&gt;</code> 和 <code>&lt;a class=&quot;my-class&quot;&gt;</code></li><li>属性选择器：拥有特定属性的元素<br><code>img[src]</code> --&gt; <code>&lt;img src=&quot;myimage.png&quot;&gt;</code></li><li>伪（Pseudo）类选择器：特定状态下的特定元素(比如鼠标指针悬停)<br><code>a:hover</code> 仅在鼠标指针悬停在链接上时选择 <code>&lt;a&gt;</code></li></ul><h3 id="_2-2-字体和文本" tabindex="-1">2.2 字体和文本 <a class="header-anchor" href="#_2-2-字体和文本" aria-label="Permalink to &quot;2.2 字体和文本&quot;">​</a></h3><ul><li><p>访问 <a href="https://www.google.com/fonts" target="_blank" rel="noreferrer">Google Fonts</a> 选择一种喜欢的字体。以 <code>&lt;link&gt;</code> 元素的形式添加进 <code>&lt;head&gt;&lt;/head&gt;</code>:</p><p><code>&lt;link href=&quot;https://fonts.googleapis.com/css?family=Open+Sans&quot; rel=&quot;stylesheet&quot; /&gt;</code><br> 以上代码为当前网页下载 Open Sans 字体，从而使自定义 CSS 中可以对 HTML 元素应用这个字体</p></li><li><p>将下列代码添加到相应的位置，用在 Google Fonts 找到的字体替代 font-family 中的占位行。这条规则首先为整个页面设定了一个全局字体和字号。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 10 pixels high */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Open Sans</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><div class="info custom-block"><p class="custom-block-title">CSS 注释</p><p>CSS 文档中所有位于 <code>/*</code> 和 <code>*/</code> 之间的内容都是 CSS 注释，它会被浏览器在渲染代码时忽略。</p></div>`,78),p=[o];function t(c,r,i,D,F,y){return a(),l("div",null,p)}const b=s(e,[["render",t]]);export{u as __pageData,b as default};