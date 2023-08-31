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
  - 使用新的let关键字创建块级变量：  
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

6. Promise 是计算结果的占位符。 

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

