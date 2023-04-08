# Markdown 学习笔记

## Tips

### 折叠 表格
<details>
<summary>My top languages</summary>

| Rank  | Languages |
| ---:  | --------- |
| 1     | Javascript|
| 2     | Python    |
| 3     | SQL       |  

</details>

### 引用

---
> Quote1  
> Quote2  
-Silent Hunter

<details>
<summary>Quote</summary>

---
> Quote1  
> Quote2  
-Silent Hunter
</details>

### 数学表达式

#### 内联表达式

使用美元符号分隔表达式 `$` 。  

This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$  

#### 表达式块

开始一个新行并用两个美元符号分隔表达式 `$$`。  

**The Cauchy-Schwarz Inequality**  

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$  

或者，使用 <span>```math</span> 代码块语法将数学表达式显示为块。(github only)    

**Here is some math!**

```math
\sqrt{3}
```

## 使用数学表达式
[MathJax 中可用的 TEX 命令](https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm)

### 二次方程

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
 
$(a+b)^2$
 
$$\eqalign{
(a+b)^2 &= (a+b)(a+b) \\
        &= a^2 + ab + ba + b^2 \\
        &= a^2 + 2ab + b^2
}$$
 
$(a-b)^2$
 
$$\eqalign{
(a-b)^2 &= (a-b)(a-b) \\
        &= a^2 - ab - ba + b^2 \\
        &= a^2 - 2ab + b^2
}$$
 
$(a-b)(a+b)$
 
$$\eqalign{
(a+b)(a-b)  &= a^2 - ab + ba - b^2 \\
        &= a^2 - b^2
}$$

### 函数

$$ f(x) = {\sqrt{5x^2+2x-1}+(x-2)^2 } $$
 
$$ g(x) = {\\frac{a}{1-a^2} }$$
 
$$ f(x) = {(x + 2) \over (2x + 1)} $$   
 
$$ f(x) = { \sqrt[3]{x^2} }$$
   
$$ \sqrt[5]{34}$$

### 三角学

$$ cos^2 \theta + sin^2 \theta  = 1  $$
 
$$ tan 2 \theta = {2tan \theta  \over 1 - tan^2 \theta}  $$
 
$$\eqalign{
cos 2 \theta &= cos^2 \theta - sin^2 \theta \\
                       &=  2 cos^2  \theta -1 \\
                       &= 1 - 2sin^2 \theta
}$$  
   
$$ \sqrt{ 1 - cos^2 \theta \over 1- sin^2 \theta} = tan \theta $$  
   
$$ \sqrt{ 1 - cos^2 \theta \over 1- sin^2 \theta} 
= \sqrt{ sin^2 \theta \over cos^2 \theta} 
= {sin \theta \over cos \theta} = Tan \theta
$$

### 微分

$$\eqalign{
f(x) = {3x^4} \implies {dy \over dx} = 12x^3
}$$
 
$$\eqalign{
f(x) = {2x^{-3/2}} \implies {dy \over dx} = -3x^{-5/2} &= -{3 \over \sqrt{x^5}}
}$$
 
If $x = 2t + 1$ and $y = t^2$ find ${dy \over dx}$ ?
 
$$\eqalign{
x = 2t + 1 \implies  {dx \over dt} = 2 \\
        y = t^2 \implies  {dy \over dt} = 2t \\
        {dy \over dx} = {dy \over dt} \div {dx \over dt} \\
         \implies 2t \div 2 = t
}$$

### 积分

$$\int_1^2 (x + 4)^2 dx $$  
 
$$\eqalign{
\int_1^2 (x + 4)^2 dx &= \int_1^2 (x^2 + 8x + 16) dx \\
  &= \left\lbrack {x^3 \over 3} + {8x^2 \over 2} + 16x \right\rbrack_1^2 \\
  &= \left\lbrack {8 \over 3} + {8 * 4 \over 2} + 16 * 2 \right\rbrack
   - \left\lbrack {1 \over 3} + {8 \over 2}  + 16  \right\rbrack
}$$

### 矩阵

$$ {\left\lbrack \matrix{2 & 3 \cr 4 & 5} \right\rbrack} 
* \left\lbrack \matrix{1 & 0 \cr 0 & 1} \right\rbrack
= \left\lbrack \matrix{2 & 3 \cr 4 & 5} \right\rbrack
$$

### 求和

$$\sum_{n=1}^n n = {n \over 2} (n + 1) $$
 
$$\sum_{n=1}^n n^2 = {n \over 6} (n + 1)(2n + 1) $$
