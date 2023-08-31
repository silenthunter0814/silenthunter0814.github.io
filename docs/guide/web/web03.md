---
description: ninja 忍者。javascript 课程课件，学习笔记。  
author: silenthunter0814, Silent Hunter
---

# Javascript 忍者秘籍

book: Secrets of the JavaScript Ninja, Second Edition  
authors: John Resig, Bear Bibeault, Josip Maras

课程视频：
- 油管: https://youtube.com/@silenthunter0814
- B 站：https://space.bilibili.com/1551957972

---  
<details>
<summary>章节目录</summary>

[[toc]]

</details>

## 0 ES6 速查表

1. 模板文字将表达式嵌入到字符串中  
`${ninja}`

2. 块作用域变量  
  - 使用新的 `let` 关键字创建块级变量：  
  `let ninja = “Yoshi”`
  - 使用 `const` 关键字创建块级常量变量，其值不能重新分配为全新值：  
  `const ninja = "Yoshi"`

3. 函数参数
  - 剩余参数根据与参数不匹配的参数创建一个数组：

```js
function multiMax(first, ...remaining) {
    /* ... */
}
multiMax(2, 3, 4, 5); // first: 2; remaining: [3, 4, 5]
```

  - 默认参数指定在调用期间未提供值时使用的默认参数值：

```js
function fn(ninja, action = "skulk") {
    return ninja + " " + action;
}
fn("Fuma"); // "Fuma skulk"
```

4. 扩展运算符扩展需要多个项目的表达式：  
  `[...items, 3, 4, 5]`

5. 箭头函数没有自己的 `this` 参数。 相反，它们从创建它们的上下文中继承它

```js
const values = [0, 3, 2, 5, 7, 4, 8, 1];
values.sort((v1,v2) => v1 - v2);
values.forEach(value => console.log(value));
```

6. Promise 是计算结果的占位符 

  - Promise 是我们最终会知道某些计算结果的保证。 
  - Promise 要么成功，要么失败，一旦成功，就不会再有任何变化。
  - 创建一个新的承诺:   
  `new Promise((resolve, reject) => {});`
  - 调用 `resolve` 函数来显式解析 Promise。 
  - 调用 `reject` 函数来显式拒绝承诺。 如果发生错误，承诺将被隐式拒绝。
  - Promise 对象有一个 `then` 方法，它返回一个 Promise 并接受两个回调，一个成功回调和一个失败回调：  
  `myPromise.then(val => console.log("Success"), err => console.log("Error"));`
  - 链入 `catch` 方法以捕获承诺失败：  
  `myPromise.catch(e => alert(e));`

## 1 JavaScript 无处不在

本章涵盖
- JavaScript 的核心语言特性
- JavaScript 引擎的核心项目
- JavaScript 开发的三个最佳实践

### 1.1 理解JavaScript语言

与其他主流语言相比，JavaScript 更加注重功能。 一些 JavaScript 概念与大多数其他语言的概念有着根本的不同。

这些差异包括以下内容：
1. 函数是一等对象——在 JavaScript 中，函数与任何其他 JavaScript 对象共存，并且可以像对待任何其他 JavaScript 对象一样对待。 它们可以通过文字创建、由变量引用、作为函数参数传递，甚至作为函数返回值返回。
2. 函数闭包——函数闭包的概念通常不太被理解，现在，只要知道一个函数在主动维护（“关闭”）其主体中使用的外部变量时就是一个闭包就足够了。
3. 基于原型的面向对象——与使用基于类的面向对象的其他主流编程语言（例如 C#、Java 和 Ruby）不同，JavaScript 使用原型。

JavaScript 由对象和原型、函数和闭包之间的密切关系组成。其他 JavaScript 功能可以帮助您编写更优雅、更高效的代码：
- 生成器，这些函数可以根据每个请求生成多个值，并且可以在请求之间暂停其执行
- Promise，让我们更好地控制异步代码
- 代理，允许我们控制对某些对象的访问
- 高级数组方法，使数组处理代码更加优雅
- `map`，我们可以用它来创建字典集合； 和 `set`，这使我们能够处理独特项目的集合
- 正则表达式，它让我们简化原本复杂的代码片段
- 模块，我们可以用它来将代码分解成更小的、相对独立的部分，使项目更易于管理

### 1.2 了解浏览器

浏览器提供各种概念和API供深入探索； 见图1.1：

![](https://silenthunter0814.github.io/pub/web03/1.1.png)

我们将重点关注以下内容：
- 文档对象模型 (DOM) — DOM 是客户端 Web 应用程序 UI 的结构化表示。 要开发出色的应用程序，您不仅需要深入了解 JavaScript 的核心机制，还需要研究 DOM 的构造方式（第 2 章）以及如何编写有效的代码来操作 DOM（第 12 章）。 这将使高级、高度动态的 UI 的创建触手可及。
- 事件——绝大多数 JavaScript 应用程序都是事件驱动的应用程序，这意味着大多数代码是在响应特定事件的上下文中执行的。 事件的示例包括网络事件、计时器和用户生成的事件（例如单击、鼠标移动、按下键盘等）。 因此，我们将在第 13 章中彻底探索事件背后的机制。我们将特别关注计时器，它通常是一个谜，但让我们能够处理复杂的编码任务，例如长时间运行的计算和平滑的动画。
- 浏览器 API——为了帮助我们与世界互动，浏览器提供了一个 API，允许我们访问有关设备的信息、在本地存储数据或与远程服务器通信。 我们将在整本书中探讨其中一些 API。

### 1.3 使用当前最佳实践

最佳实践除了对语言的掌握之外，包括以下要素：
- 调试技巧
- 测试
- 性能分析

