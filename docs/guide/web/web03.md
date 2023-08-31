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

  - 扩展运算符扩展需要多个项目的表达式：  
  `[...items, 3, 4, 5]`