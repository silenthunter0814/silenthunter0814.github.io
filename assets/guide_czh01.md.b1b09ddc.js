import{_ as a,c as e,o as l,N as o}from"./chunks/framework.a68a2679.js";const _=JSON.parse('{"title":"czh01 C语言快速入门","description":"","frontmatter":{},"headers":[],"relativePath":"guide/czh01.md","lastUpdated":1681112443000}'),r={name:"guide/czh01.md"},t=o(`<h1 id="czh01-c语言快速入门" tabindex="-1">czh01 C语言快速入门 <a class="header-anchor" href="#czh01-c语言快速入门" aria-label="Permalink to &quot;czh01 C语言快速入门&quot;">​</a></h1><p><strong>学习方法</strong></p><ul><li>coding and parsing</li><li>滚动式学习，通过后续知识的学习复习巩固前面的知识</li><li>通过实践（编程）学习掌握 C 标准，而不是通过学习 C 标准来指导实践（编程）</li></ul><h2 id="资源链接" tabindex="-1">资源链接 <a class="header-anchor" href="#资源链接" aria-label="Permalink to &quot;资源链接&quot;">​</a></h2><ul><li>课程视频</li><li>课程源码 <a href="https://github.com/silenthunter0814/czh01.git" target="_blank" rel="noreferrer">https://github.com/silenthunter0814/czh01.git</a></li></ul><hr><h1 id="c语言快速入门" tabindex="-1">C语言快速入门 <a class="header-anchor" href="#c语言快速入门" aria-label="Permalink to &quot;C语言快速入门&quot;">​</a></h1><p>Author: Silent Hunter<br> | <a href="#_1-hello-world">c1</a> | <a href="#_2-数据类型-变量-运算符-表达式和语句">c2</a> | <a href="#_3-控制流-flow-control">c3</a> | <a href="#">c4</a> | <a href="#">c5</a> | <a href="#">c6</a> | <a href="#">c7</a> | <a href="#">c8</a> | <a href="#">c9</a> | <a href="#">c10</a> | <a href="#">c11</a> | <a href="#">c12</a> |</p><h2 id="_1-hello-world" tabindex="-1">1 hello world <a class="header-anchor" href="#_1-hello-world" aria-label="Permalink to &quot;1 hello world&quot;">​</a></h2><ul><li><a href="#_1-1-hello-c">1.1 hello.c</a></li><li><a href="#_1-2-预处理-编译-汇编-链接和运行">1.2 预处理，编译，汇编，链接和运行</a></li><li><a href="#_1-3-文件格式-进程地址空间">1.3 文件格式，进程地址空间</a></li></ul><h3 id="_1-1-hello-c" tabindex="-1">1.1 hello.c <a class="header-anchor" href="#_1-1-hello-c" aria-label="Permalink to &quot;1.1 hello.c&quot;">​</a></h3><p>vi/vscode 编辑器编写第一个程序 <code>hello.c</code>:</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">   #include </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F78C6C;">5</span><span style="color:#F07178;">       </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F78C6C;">6</span><span style="color:#F07178;">       </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">7</span><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>第 1 行：以 <code>#</code> 开头的行都由预处理器处理，预处理器将 <code>stdio.h</code> 文件的内容复制到我们的文件中。<code>xxx.h</code> 文件称为预处理头文件，通常包含函数声明。 <code>stdio.h</code> 文件中包含函数 <code>printf(...)</code>的声明。</li><li>第 3 行： <code>main</code> 函数，程序开始执行的入口点。<code>int</code> 表示 <code>main()</code> 的返回类型。<code>()</code> 表示 <code>main</code> 函数不带任何参数。</li><li>第 4 和 7 行：<code>{</code> 和 <code>}</code> 一对大括号定义了函数体，也叫做复合语句块。所有函数都必须以大括号开头和结尾。</li><li>第 5 行： <code>printf()</code> 是一个标准库函数，用于在标准输出上打印一些东西。末尾的 <code>;</code> 用来表示语句的结束。</li><li>第 6 行： <code>return 0;</code>, 返回语句，值 0 通常表示成功终止。</li></ul><h3 id="_1-2-预处理-编译-汇编-链接和运行" tabindex="-1">1.2 预处理，编译，汇编，链接和运行 <a class="header-anchor" href="#_1-2-预处理-编译-汇编-链接和运行" aria-label="Permalink to &quot;1.2 预处理，编译，汇编，链接和运行&quot;">​</a></h3><h4 id="gcc-编译器集合" tabindex="-1">gcc 编译器集合 <a class="header-anchor" href="#gcc-编译器集合" aria-label="Permalink to &quot;gcc 编译器集合&quot;">​</a></h4><ul><li>预处理 Preprocess 将 <code>stdio.h</code> 文件的内容复制到 <code>hello.c</code></li><li>编译 Compile 将C语言源文件翻译为汇编语言 <code>hello.c</code> -&gt; <code>hello.asm</code></li><li>汇编 Assembly 由汇编源文件生成机器指令二进制代码 <code>hello.asm</code> -&gt; <code>hello.o</code></li><li>链接 Linking 将二进制对象文件链接成可执行文件 <code>hello.o</code> + <code>printf.o</code> =&gt; <code>a.out</code></li></ul><h4 id="终端命令行" tabindex="-1">终端命令行 <a class="header-anchor" href="#终端命令行" aria-label="Permalink to &quot;终端命令行&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.c</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># create a.out</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./a.out</span></span>
<span class="line"><span style="color:#FFCB6B;">hello,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">world</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span></span></code></pre></div><h3 id="_1-3-文件格式-进程地址空间" tabindex="-1">1.3 文件格式，进程地址空间 <a class="header-anchor" href="#_1-3-文件格式-进程地址空间" aria-label="Permalink to &quot;1.3 文件格式，进程地址空间&quot;">​</a></h3><ul><li><code>ELF</code>可执行文件 <a href="https://en.wikipedia.org/wiki/Executable_and_Linkable_Format" target="_blank" rel="noreferrer">wiki</a><br><code>ELF</code> = <code>ELF header</code> + <code>text section</code> + <code>data section</code></li><li>进程地址空间<br><code>address space</code> = <code>text</code> + <code>data</code> + <code>stack</code><ul><li><code>text</code> 文本段（指令）</li><li><code>data</code> 数据段</li><li><code>stack</code> 栈</li></ul></li></ul><h2 id="_2-数据类型-变量-运算符-表达式和语句" tabindex="-1">2 数据类型，变量，运算符，表达式和语句， <a class="header-anchor" href="#_2-数据类型-变量-运算符-表达式和语句" aria-label="Permalink to &quot;2 数据类型，变量，运算符，表达式和语句，&quot;">​</a></h2><p>data type, variable, expression and statement</p><h3 id="_2-1-数据类型-data-type" tabindex="-1">2.1 数据类型 - data type <a class="header-anchor" href="#_2-1-数据类型-data-type" aria-label="Permalink to &quot;2.1 数据类型 - data type&quot;">​</a></h3><h3 id="_2-2-变量-variable" tabindex="-1">2.2 变量 - variable <a class="header-anchor" href="#_2-2-变量-variable" aria-label="Permalink to &quot;2.2 变量 - variable&quot;">​</a></h3><h3 id="_2-2-语句-statement" tabindex="-1">2.2 语句 - statement <a class="header-anchor" href="#_2-2-语句-statement" aria-label="Permalink to &quot;2.2 语句 - statement&quot;">​</a></h3><h3 id="_2-4-小结" tabindex="-1">2.4 小结 <a class="header-anchor" href="#_2-4-小结" aria-label="Permalink to &quot;2.4 小结&quot;">​</a></h3><p>变量声明/定义 - declaration and definition 格式化输出转换函数 - printf 变量初始化 - initialization</p><h3 id="_2-5-运算符和表达式-operator-and-expression" tabindex="-1">2.5 运算符和表达式 - operator and expression <a class="header-anchor" href="#_2-5-运算符和表达式-operator-and-expression" aria-label="Permalink to &quot;2.5 运算符和表达式 - operator and expression&quot;">​</a></h3><p>!, &amp; 一元运算符 - unary 小结</p><h3 id="_2-6-编程练习" tabindex="-1">2.6 编程练习 <a class="header-anchor" href="#_2-6-编程练习" aria-label="Permalink to &quot;2.6 编程练习&quot;">​</a></h3><p>数据类型大小 两整数之和 圆的面积</p><h2 id="_3-控制流-flow-control" tabindex="-1">3 控制流 - flow control <a class="header-anchor" href="#_3-控制流-flow-control" aria-label="Permalink to &quot;3 控制流 - flow control&quot;">​</a></h2><h3 id="_3-1-if-else" tabindex="-1">3.1 if-else <a class="header-anchor" href="#_3-1-if-else" aria-label="Permalink to &quot;3.1 if-else&quot;">​</a></h3><h3 id="_3-2-else-if" tabindex="-1">3.2 else-if <a class="header-anchor" href="#_3-2-else-if" aria-label="Permalink to &quot;3.2 else-if&quot;">​</a></h3><h3 id="_3-3-while-loop-and-for-loop" tabindex="-1">3.3 while loop and for loop <a class="header-anchor" href="#_3-3-while-loop-and-for-loop" aria-label="Permalink to &quot;3.3 while loop and for loop&quot;">​</a></h3><h3 id="_3-4-编程练习" tabindex="-1">3.4 编程练习 <a class="header-anchor" href="#_3-4-编程练习" aria-label="Permalink to &quot;3.4 编程练习&quot;">​</a></h3><p>the Sum of Natural Numbers reverse integer palindrome perfect number print stars</p><h2 id="_4-函数-function" tabindex="-1">4 函数 - function <a class="header-anchor" href="#_4-函数-function" aria-label="Permalink to &quot;4 函数 - function&quot;">​</a></h2><h3 id="_4-1-函数概念" tabindex="-1">4.1 函数概念 <a class="header-anchor" href="#_4-1-函数概念" aria-label="Permalink to &quot;4.1 函数概念&quot;">​</a></h3><h3 id="_4-2-参数传递" tabindex="-1">4.2 参数传递 <a class="header-anchor" href="#_4-2-参数传递" aria-label="Permalink to &quot;4.2 参数传递&quot;">​</a></h3><h3 id="_4-3-递归函数-recursion" tabindex="-1">4.3 递归函数 - recursion <a class="header-anchor" href="#_4-3-递归函数-recursion" aria-label="Permalink to &quot;4.3 递归函数 - recursion&quot;">​</a></h3><h2 id="_5-指针与数组-pointer-and-array" tabindex="-1">5 指针与数组 - pointer and array <a class="header-anchor" href="#_5-指针与数组-pointer-and-array" aria-label="Permalink to &quot;5 指针与数组 - pointer and array&quot;">​</a></h2><h3 id="_5-1-指针-pointer" tabindex="-1">5.1 指针 - pointer <a class="header-anchor" href="#_5-1-指针-pointer" aria-label="Permalink to &quot;5.1 指针 - pointer&quot;">​</a></h3><h3 id="_5-2-数组-array" tabindex="-1">5.2 数组 - array <a class="header-anchor" href="#_5-2-数组-array" aria-label="Permalink to &quot;5.2 数组 - array&quot;">​</a></h3><p>数组声明和初始化 数组访问</p><h3 id="_5-3-指针与数组" tabindex="-1">5.3 指针与数组 <a class="header-anchor" href="#_5-3-指针与数组" aria-label="Permalink to &quot;5.3 指针与数组&quot;">​</a></h3><h3 id="_5-4-编程练习" tabindex="-1">5.4 编程练习 <a class="header-anchor" href="#_5-4-编程练习" aria-label="Permalink to &quot;5.4 编程练习&quot;">​</a></h3><p>printarray - 打印数组 findelem - 查找数组元素 maxofa - 数组的最大值 average - 数组的平均值 insert sort - 插入排序 binsearch - 二分查找 (sorted array)</p><h2 id="_6-常量-字符串-字符数组" tabindex="-1">6 常量，字符串，字符数组 <a class="header-anchor" href="#_6-常量-字符串-字符数组" aria-label="Permalink to &quot;6 常量，字符串，字符数组&quot;">​</a></h2><h3 id="_6-1-数字常量-字符常量" tabindex="-1">6.1 数字常量，字符常量 <a class="header-anchor" href="#_6-1-数字常量-字符常量" aria-label="Permalink to &quot;6.1 数字常量，字符常量&quot;">​</a></h3><h3 id="_6-2-字符数组" tabindex="-1">6.2 字符数组 <a class="header-anchor" href="#_6-2-字符数组" aria-label="Permalink to &quot;6.2 字符数组&quot;">​</a></h3><h3 id="_6-3-字符串-string-literal" tabindex="-1">6.3 字符串 - string literal <a class="header-anchor" href="#_6-3-字符串-string-literal" aria-label="Permalink to &quot;6.3 字符串 - string literal&quot;">​</a></h3><h2 id="_7-动态内存分配-malloc-and-free" tabindex="-1">7 动态内存分配 - malloc and free <a class="header-anchor" href="#_7-动态内存分配-malloc-and-free" aria-label="Permalink to &quot;7 动态内存分配 - malloc and free&quot;">​</a></h2><h2 id="_8-局部变量-全局变量-符号表" tabindex="-1">8 局部变量，全局变量，符号表 <a class="header-anchor" href="#_8-局部变量-全局变量-符号表" aria-label="Permalink to &quot;8 局部变量，全局变量，符号表&quot;">​</a></h2><p>local, global, symbol table</p><h3 id="_8-1-局部变量-local-variable" tabindex="-1">8.1 局部变量 - local variable <a class="header-anchor" href="#_8-1-局部变量-local-variable" aria-label="Permalink to &quot;8.1 局部变量 - local variable&quot;">​</a></h3><h3 id="_8-2-全局变量-global-variable" tabindex="-1">8.2 全局变量 - global variable <a class="header-anchor" href="#_8-2-全局变量-global-variable" aria-label="Permalink to &quot;8.2 全局变量 - global variable&quot;">​</a></h3><h3 id="_8-3-符号表-作用域-symbol-table-scope" tabindex="-1">8.3 符号表，作用域 - symbol table, scope <a class="header-anchor" href="#_8-3-符号表-作用域-symbol-table-scope" aria-label="Permalink to &quot;8.3 符号表，作用域 - symbol table, scope&quot;">​</a></h3><h2 id="_9-结构和联合-struct-and-union" tabindex="-1">9 结构和联合 - struct and union <a class="header-anchor" href="#_9-结构和联合-struct-and-union" aria-label="Permalink to &quot;9 结构和联合 - struct and union&quot;">​</a></h2><h3 id="_9-1-结构-struct" tabindex="-1">9.1 结构 - struct <a class="header-anchor" href="#_9-1-结构-struct" aria-label="Permalink to &quot;9.1 结构 - struct&quot;">​</a></h3><p>创建结构，结构变量 结构作为函数的参数 指向结构的指针</p><h3 id="_9-2-联合-union" tabindex="-1">9.2 联合 - union <a class="header-anchor" href="#_9-2-联合-union" aria-label="Permalink to &quot;9.2 联合 - union&quot;">​</a></h3><p>typedef switch 语句 union 示例 数据封装</p><h2 id="_10-链表-link-list" tabindex="-1">10 链表 - link list <a class="header-anchor" href="#_10-链表-link-list" aria-label="Permalink to &quot;10 链表 - link list&quot;">​</a></h2><h3 id="_10-1-自引用结构-self-referential-structure" tabindex="-1">10.1 自引用结构 - self referential structure <a class="header-anchor" href="#_10-1-自引用结构-self-referential-structure" aria-label="Permalink to &quot;10.1 自引用结构 - self referential structure&quot;">​</a></h3><h3 id="_10-2-链表-link-list" tabindex="-1">10.2 链表 - link list <a class="header-anchor" href="#_10-2-链表-link-list" aria-label="Permalink to &quot;10.2 链表 - link list&quot;">​</a></h3><p>创建，打印链表 atolink - 数组转换为链表</p><h2 id="_11-预处理器-preprocessor" tabindex="-1">11 预处理器 - preprocessor <a class="header-anchor" href="#_11-预处理器-preprocessor" aria-label="Permalink to &quot;11 预处理器 - preprocessor&quot;">​</a></h2><h2 id="_12-标准输入-标准输出-错误输出-stdin-stdout-stderr" tabindex="-1">12 标准输入, 标准输出, 错误输出 - stdin, stdout, stderr <a class="header-anchor" href="#_12-标准输入-标准输出-错误输出-stdin-stdout-stderr" aria-label="Permalink to &quot;12 标准输入, 标准输出, 错误输出 - stdin, stdout, stderr&quot;">​</a></h2>`,70),n=[t];function s(i,c,h,d,p,u){return l(),e("div",null,n)}const f=a(r,[["render",s]]);export{_ as __pageData,f as default};
