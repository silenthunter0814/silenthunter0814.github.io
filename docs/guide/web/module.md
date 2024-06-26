在 GitHub Pages 上配置 JavaScript 模块（ES Modules）需要进行一些基本设置，以确保你的 JavaScript 代码可以通过模块化方式加载和使用。以下是具体步骤：

### 1. 创建和配置仓库

1. **创建 GitHub 仓库**:
   - 登录 GitHub，创建一个新的仓库，选择 "public" 选项。
   - 初始化仓库，并且可以添加一个 `README.md` 文件。

2. **克隆仓库**:
   - 使用 Git 命令行工具克隆你的仓库到本地：
     ```bash
     git clone https://github.com/your-username/your-repository.git
     ```

### 2. 设置项目结构

在你的项目目录中，设置以下文件结构：

```
your-repository/
├── index.html
└── js/
    ├── main.js
    └── module.js
```

### 3. 创建 HTML 文件

在项目根目录创建 `index.html` 文件，并添加基本的 HTML 结构和模块化 JavaScript 文件引用：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages with ES Modules</title>
</head>
<body>
    <h1>Hello, GitHub Pages with ES Modules!</h1>
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

### 4. 创建 JavaScript 模块文件

在 `js` 目录中创建两个 JavaScript 文件：`main.js` 和 `module.js`。

`module.js`:
```javascript
export function greet(name) {
    return `Hello, ${name}!`;
}
```

`main.js`:
```javascript
import { greet } from './module.js';

const message = greet('GitHub Pages');
console.log(message);

const h1 = document.querySelector('h1');
h1.textContent = message;
```

### 5. 推送代码到 GitHub

将你的文件添加到 GitHub 仓库并推送：

```bash
git add .
git commit -m "Initial commit with ES Modules"
git push origin main
```

### 6. 配置 GitHub Pages

1. **启用 GitHub Pages**:
   - 进入 GitHub 仓库页面，点击 "Settings"。
   - 在左侧菜单中找到 "Pages"。
   - 在 "Source" 部分，选择 `main` 分支和 `root` 目录。
   - 点击 "Save" 按钮。

2. **访问 GitHub Pages**:
   - 配置完成后，GitHub Pages 会为你生成一个 URL，例如 `https://your-username.github.io/your-repository`。
   - 访问这个 URL，你应该可以看到 "Hello, GitHub Pages with ES Modules!" 消息。

### 注意事项

1. **CORS 问题**:
   - GitHub Pages 是静态托管服务，不支持跨域请求。如果你的模块涉及跨域请求，请确保正确设置 CORS 头。
   
2. **相对路径**:
   - 在 `import` 语句中使用相对路径，确保路径正确。

3. **缓存**:
   - 有时候浏览器会缓存旧的 JavaScript 文件，如果更新后没有生效，尝试清除浏览器缓存或使用无痕模式访问。

通过这些步骤，你可以在 GitHub Pages 上配置并使用 JavaScript 模块。


CommonJS 是一种模块规范，主要用于 Node.js 环境中。在 CommonJS 模块系统中，每个文件都是一个模块，模块通过 `require` 函数来引入，并使用 `module.exports` 或 `exports` 对外暴露内容。以下是如何使用 CommonJS 模块的详细介绍。

### 创建和使用 CommonJS 模块

#### 1. 创建模块

首先，创建一个文件 `math.js`，并定义一些导出的函数或变量：

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

#### 2. 使用模块

在另一个文件中使用 `require` 函数来引入模块：

```javascript
// app.js
const math = require('./math');

const sum = math.add(5, 3);
const difference = math.subtract(5, 3);

console.log(`Sum: ${sum}`); // 输出: Sum: 8
console.log(`Difference: ${difference}`); // 输出: Difference: 2
```

### CommonJS 关键概念

#### 1. `require` 函数

`require` 用于引入模块。可以引入本地文件模块、核心模块（如 `fs`、`http` 等），以及通过 npm 安装的第三方模块。

```javascript
const fs = require('fs'); // 引入 Node.js 核心模块
const express = require('express'); // 引入通过 npm 安装的第三方模块
```

#### 2. `module.exports` 和 `exports`

- **`module.exports`**: 用于导出整个模块。当你想导出一个对象、函数或其他内容时，使用 `module.exports`。

  ```javascript
  // module.js
  module.exports = function() {
      console.log('This is a module function');
  };
  ```

  ```javascript
  // app.js
  const myModuleFunction = require('./module');
  myModuleFunction(); // 输出: This is a module function
  ```

- **`exports`**: 是 `module.exports` 的一个引用。可以使用 `exports` 导出多个变量或函数。

  ```javascript
  // module.js
  exports.sayHello = function() {
      console.log('Hello');
  };

  exports.sayGoodbye = function() {
      console.log('Goodbye');
  };
  ```

  ```javascript
  // app.js
  const myModule = require('./module');
  myModule.sayHello(); // 输出: Hello
  myModule.sayGoodbye(); // 输出: Goodbye
  ```

#### 3. 模块缓存

当一个模块被第一次加载时，Node.js 会缓存该模块。这意味着后续的 `require` 调用会返回缓存的版本，而不会重新执行模块代码。这有助于提升性能。

```javascript
// module.js
console.log('Module loaded');

module.exports = {
    message: 'Hello from the module'
};
```

```javascript
// app.js
require('./module'); // 输出: Module loaded
require('./module'); // 不会输出，因为模块已被缓存
```

### 适用场景

CommonJS 模块主要用于服务器端（Node.js 环境），适合构建后端应用程序、命令行工具等。对于浏览器端应用程序，建议使用 ES Modules（通过 `<script type="module">`）或打包工具（如 Webpack、Rollup）来进行模块化管理。

### 示例项目结构

以下是一个示例项目结构，展示了如何组织和使用 CommonJS 模块：

```
my-project/
├── app.js
├── math.js
└── utils/
    ├── format.js
    └── logger.js
```

### 例子

`utils/format.js`:
```javascript
// utils/format.js
function formatDate(date) {
    return date.toISOString();
}

module.exports = {
    formatDate
};
```

`utils/logger.js`:
```javascript
// utils/logger.js
function log(message) {
    console.log(`[LOG]: ${message}`);
}

module.exports = {
    log
};
```

`app.js`:
```javascript
// app.js
const math = require('./math');
const format = require('./utils/format');
const logger = require('./utils/logger');

const sum = math.add(10, 20);
logger.log(`Sum: ${sum}`);

const formattedDate = format.formatDate(new Date());
logger.log(`Formatted Date: ${formattedDate}`);
```

通过这种方式，你可以组织和使用 CommonJS 模块来构建你的 Node.js 应用程序。
