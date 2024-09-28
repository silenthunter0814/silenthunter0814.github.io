# MathJax 数学公式指南
MathJax是一个跨浏览器的JavaScript库，它使用MathML、LaTeX和ASCIIMathML标记在Web浏览器中显示数学符号。

MathJax可以显示用LaTeX或MathML标记编写的数学符号。因为MathJax只用于数学显示，而LaTeX是一种文档布局语言，所以MathJax只支持用于描述数学表示法的LaTeX子集。

## 1 基本输入
### 1.1 数学环境
对于内联公式，将公式括在 `$…$` 中。对于显示公式，使用 `$$…$$`。

这些渲染方式不同。例如，输入以下内容以显示内联模式: $\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$

或输入以下内容以显示模式：

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

$$
\left.x^2\right|_3^5 = 5^2-3^2
$$

$$
x^2 |_3^5 = 5^2-3^2 \\\  
$$

```math
\left (\frac{x}{y}\right )
```

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
