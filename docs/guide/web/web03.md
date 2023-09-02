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

### 2.1 Whitespace

空白可以采用格式化字符或注释的形式。 空格通常无关紧要，但有时需要使用空格来分隔字符序列，否则这些字符序列将组合成单个标记。 例如，在：

`var that = this;`

`var` 和 `that` 之间的空格不能去掉，但其他空格可以去掉。

