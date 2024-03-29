# 斯图尔特 微积分

---  
<details>
<summary>章节目录</summary>

[[toc]]

</details>

## 微积分预览

[1] &emsp; 割线的斜率

$$m_{PQ}=\frac{f(x)-f(a)}{x-a}$$

[2] &emsp; 切线的斜率  

$$m=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$$

[3] &emsp; 级数之和  

$$1=\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\frac{1}{16}+ \cdots+\frac{1}{2^n}+\cdots$$


## 1 函数和极限

### 1.1 函数的四种表示方法

[1] &emsp; 有四种可能的方法来表示函数：  
- 口头（通过文字描述）
- 数字化（通过数值表）
- 可视化（通过图表）
- 代数（通过明确的公式）

[2] &emsp; 垂直线测试  
当且仅当没有垂直线与曲线相交多次时，xy 平面中的曲线是 x 函数的图形。

[3] &emsp; 分段定义的函数   
函数在其域的不同部分由不同的公式定义。

[4] &emsp; 对称  
- 偶函数 &nbsp; $f(x)=f(-x)$
- 奇函数 &nbsp; $f(-x)=-f(x)$

[5] &emsp; 增减函数  
- 増函数 &nbsp; 函数 f 称为在区间 I 上递增，如果  
  $f(x_1)<f(x_2)$ &nbsp; whenever $x_1<x_2$ in I
- 减函数 &nbsp; 函数 f 称为在区间 I 上递减，如果  
  $f(x_1)>f(x_2)$ &nbsp; whenever $x_1<x_2$ in I


### 1.2 数学模型

- 线性模型  
  当我们说 y 是 x 的线性函数时，我们的意思是该函数的图像是一条直线，因此我们可以使用直线方程的斜率截距形式将该函数的公式写为
  $$y=f(x)=mx+b$$
  其中 m 是直线的斜率，b 是 y 轴截距。


- 多项式  
  函数 P 称为多项式，如果  
  $$P(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_2x^2+a_{1}x+a_0$$
  其中 n 是非负整数，数字 $a_0, a_1, a_2, \cdots, a_n$ 是称为多项式系数的常数。 任何多项式的定义域都是 $\mathbb{R}=(-\infty, \infty)$。 如果首项系数 $a_n\ne 0$，则多项式的次数为 n。


- 幂函数
  $f(x)=x^a$ 形式的函数（其中 a 是常数）称为幂函数。 我们考虑几种情况  
  (i) $a=n$，其中 n 是正整数  
  (ii) $a=1/n$，其中 n 是正整数  
  (iii) $a=-1$  
  倒数函数的方程为 $y=\frac{1}{x}$ 或 $xy=1$，是一条以坐标轴为渐近线的双曲线。

- 代数函数  
  如果函数 f 可以使用从多项式开始的代数运算（例如加法、减法、乘法、除法和求根）来构造，则该函数称为代数函数。 任何有理函数都自动成为代数函数。

- 三角函数  
  在微积分中，惯例是始终使用弧度度量（除非另有说明）。

- 指数函数  
  指数函数是 $f(x)=b^x$ 形式的函数，其中底数 b 是正常数。

- 对数函数  
  对数函数 $f(x)=\log_{b}{x}$（其中 b 为正常数）是指数函数的反函数。


### 1.3 来自旧函数的新函数

#### 1.3.1 函数变换

- 垂直和水平移动  
  假设 $c>0$，基于 $y=f(x)$ 的图形  
  $y=f(x)+c$， &nbsp; 向上移动 c 个单位  
  $y=f(x)-c$， &nbsp; 向下移动 c 个单位  
  $y=f(x-c)$， &nbsp; 向右移动 c 个单位  
  $y=f(x+c)$， &nbsp; 向左移动 c 个单位


- 垂直和水平拉伸和反射  
  假设 $c>1$，基于 $y=f(x)$ 的图形  
  $y=cf(x)$，&nbsp; 垂直拉伸 c 倍  
  $y=(1/c)f(x)$，&nbsp; 垂直缩小 c 倍  
  $y=f(cx)$，&nbsp; 水平缩小 c 倍  
  $y=f(x/c)$，&nbsp; 水平拉伸 c 倍  
  $y= -f(x)$，&nbsp; 反射 $y=f(x)$ 关于 x 轴的图形  
  $y=f(-x)$，&nbsp; 反射 $y=f(x)$ 关于 y 轴的图形

#### 1.3.2 组合函数
两个函数 f 和 g 可以组合起来形成新函数 f + g, f - g, fg 和 f/g，其方式类似于我们对实数进行加、减、乘、除的方式。

- 和函数: &nbsp; $(f+g)(x)=f(x)+g(x)$
- 差函数: &nbsp; $(f-g)(x)=f(x)-g(x)$
- 积函数: &nbsp; $(fg)(x)=f(x)g(x)$
- 商函数: &nbsp; $(\frac{f}{g})(x)=\frac{f(x)}{g(x)}$

f + g, f - g, fg 的定义域是 $A\cap B$, f/g 的定义域是 $\{x\in A\cap B\ |\ g(x)\ne 0\}$

- 定义 复合函数  
  给定两个函数 f 和 g，复合函数 $f\circ g$ （也称为 f 和 g 的复合）定义为  
  &nbsp; $(f\circ g)(x)=f(g(x))$  
  $f\circ g$ 的定义域是 g 定义域中所有 x 的集合，使得 $g(x)$ 位于 f 定义域中。


### 1.4 切线和速度问题

- 正切  
  曲线的切线是与曲线相切的线。 换句话说，切线应与接触点处的曲线具有相同的方向。  

- 瞬时速度  
  越来越短的时间段内平均速度的极限值。


### 1.5 函数的极限

[1] &emsp; 极限的直观定义  
假设当 x 接近数字 a 时 f(x) 定义。 （这意味着 f 是在某个包含 a 的开区间上定义的，除了可能在 a 本身。）然后我们写
$$\lim_{x\to a}f(x) = L$$
并说 &emsp; “当 x 接近 a 时，f(x) 的极限等于 L”。  
如果我们可以通过限制 x 足够接近 a（在 a 的任一侧）但不等于 a 来使 f(x) 的值任意接近 L（尽可能接近 L）。

[2] &emsp; 单边极限的定义  
我们写  
$$\lim_{x\to a^-}f(x) = L$$  
并说 “当 x 接近 a 时 f(x) 的左极限 [或当 x 从左侧接近 a 时 f(x) 的极限]”  等于 L，如果我们可以通过使 x 充分接近 a 并且 x 小于 a 来使 f(x) 的值任意接近 L。

类似地，如果我们要求 x 大于 a，我们会得到 “当 x 接近 a 时 f(x) 的右侧极限等于 L”，我们可以这样写
$$\lim_{x\to a^+}f(x) = L$$

[3] &emsp; 极限定义  
$\lim_{x\to a}f(x) = L$ &emsp; 当且仅当 $\lim_{x\to a^-}f(x) = L$ 并且 $\lim_{x\to a^+}f(x) = L$

[4] &emsp; 无限极限的直观定义  
设 f 是在 a 两侧定义的函数，但可能在 a 本身除外。 那么
$$\lim_{x\to a}f(x) = \infty$$
意味着 f(x) 的值可以通过使 x 足够接近 a 但不等于 a 来任意大（我们希望多大）。

[5] &emsp; 定义 负的无穷大极限  
设 f 是在 a 两侧定义的函数，但可能在 a 本身除外。 那么  
$$\lim_{x\to a}f(x) = -\infty$$  
意味着通过使 x 足够接近 a 但不等于 a，f(x) 的值可以变为任意大的负值。

[6] &emsp; 定义 垂直渐近线  
如果以下陈述至少之一为真，则垂直线 $x=a$ 称为曲线 $y=f(x)$ 的垂直渐近线：  
$\lim_{x\to a}f(x)=\infty$ &emsp;&emsp;&emsp; $\lim_{x\to a^-}f(x)=\infty$ &emsp;&emsp;&emsp; $\lim_{x\to a^+}f(x)=\infty$  
$\lim_{x\to a}f(x)=-\infty$ &emsp;&emsp; $\lim_{x\to a^-}f(x)=-\infty$ &emsp;&emsp; $\lim_{x\to a^+}f(x)=-\infty$  


### 1.6 使用极限定律计算极限

- 极限定律  
  假设 c 是常数并且极限  
  &emsp; $\lim_{x\to a}f(x)$ &emsp; 和 &emsp; $\lim_{x\to a}g(x)$  
  存在。 那么  
1. &emsp; $\lim_{x\to a}[f(x)+g(x)] = \lim_{x\to a}f(x) + \lim_{x\to a}g(x)$
2. &emsp; $\lim_{x\to a}[f(x)-g(x)] = \lim_{x\to a}f(x) - \lim_{x\to a}g(x)$
3. &emsp; $\lim_{x\to a}[cf(x)] = c\lim_{x\to a}f(x)$
4. &emsp; $\lim_{x\to a}[f(x)g(x)] = \lim_{x\to a}f(x) \cdot \lim_{x\to a}g(x)$
5. &emsp; $\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}$ &emsp; 如果 $\lim_{x\to a}g(x)\ne 0$
6. &emsp; $\lim_{x\to a}[f(x)]^n = [\lim_{x\to a}f(x)]^n$ &emsp; 其中 n 是正整数  
7. &emsp; $\lim_{x\to a}c =c$
8. &emsp; $\lim_{x\to a}x =a$
9. &emsp; $\lim_{x\to a}x^n =a^n$ &emsp; 其中 n 是正整数
10. &emsp; $\lim_{x\to a}\sqrt[n]{x} = \sqrt[n]{x}$ &emsp; 其中 n 是正整数；n 是偶数假定 $a>0$
11. &emsp; $\lim_{x\to a}\sqrt[n]{f(x)} = \sqrt[n]{\lim_{x\to a}f(x)}$  
  &emsp; 其中 n 是正整数；n 是偶数假定 $\lim_{x\to a}f(x)>0$

- 直接替换性质  
  如果 f 是多项式或有理函数且 a 在 f 的定义域内，则
  $$\lim_{x\to a}f(x) = f(a)$$
  具有直接替换性质的函数称为在 a 处连续的函数。

[1] &emsp; 定理 双边极限   
$\lim_{x\to a}f(x) = L$ &emsp; 当且仅当 $\lim_{x\to a^-}f(x) = L = \lim_{x\to a^+}f(x)$

[2] &emsp; 定理 极限比较  
如果当 x 接近 a（除了可能在 a 处）时 $f(x)\le g(x)$ 并且当 x 接近 a 时 f 和 g 的极限都存在，则
$$\lim_{x\to a}f(x) \le \lim_{x\to a}g(x)$$

[3] &emsp; 挤压定理  
如果 $f(x)\le g(x)\le h(x)$，当 x 接近 a（除了可能在 a 处）并且
$$\lim_{x\to a}f(x) = \lim_{x\to a}h(x) = L$$
则
$$\lim_{x\to a}g(x) = L$$
挤压定理有时也称为三明治定理。


### 1.7 极限的精确定义

- 极限的精确定义  
  设 f 是在某个包含数字 a 的开区间上定义的函数，但可能在 a 本身除外。 然后我们说当 x 接近 a 时 f(x) 的极限是 L，并且我们写
  $$\lim_{x\to a}f(x) = L$$
  如果对于每个数字 $\varepsilon > 0$ 有一个数字 $\delta >0$ 使得  
  &emsp; 如果 &emsp; $0 < |x -a| < \delta$ &emsp; 那么&emsp; $|f(x) - L| < \varepsilon$

- 左极限的定义  
  $$\lim_{x\to a^-}f(x) = L$$
  如果对于每个数字 $\varepsilon > 0$ 有一个数字 $\delta >0$ 使得  
  &emsp; 如果 &emsp; $a - \delta < x < a$ &emsp; 那么&emsp; $|f(x) - L| < \varepsilon$

- 右极限的定义  
  $$\lim_{x\to a^+}f(x) = L$$
  如果对于每个数字 $\varepsilon > 0$ 有一个数字 $\delta >0$ 使得  
  &emsp; 如果 &emsp; $a < x < a + \delta$ &emsp; 那么&emsp; $|f(x) - L| < \varepsilon$

- 无限极限的精确定义  
  设 f 是在某个包含数字 a 的开区间上定义的函数，但可能在 a 本身除外。 那么
  $$\lim_{x\to a}f(x) = \infty$$
  意味着对于每个正数 M 都有一个正数 $\delta$ 使得  
  &emsp; 如果 &emsp; $0 < |x -a| < \delta$ &emsp; 那么&emsp; $f(x) > M$

- 负的无穷大极限  
  设 f 是在某个包含数字 a 的开区间上定义的函数，但可能在 a 本身除外。 那么
  $$\lim_{x\to a}f(x) = -\infty$$
  意味着对于每个负数 N 都有一个正数 $\delta$ 使得  
  &emsp; 如果 &emsp; $0 < |x -a| < \delta$ &emsp; 那么&emsp; $f(x) < N$


### 1.8 连续性

- 定义 连续  
  函数 f 在数字 a 处连续如果
  $$\lim_{x\to a}f(x) = f(a)$$
请注意，如果 f 在 a 处连续，则定义隐含地需要三件事：
  1. 定义 f(a)（即 a 在 f 的定义域内）  
  2. $\lim_{x\to a}f(x)$ 存在  
  3. $\lim_{x\to a}f(x) = f(a)$

- 定义 单边连续  
  函数 f 在数字 a 处从右侧连续如果  
  $$\lim_{x\to a^+}f(x) = f(a)$$
  且 f 在 a 处从左侧连续 如果
  $$\lim_{x\to a^-}f(x) = f(a)$$

- 定义 区间连续  
  如果函数 f 在区间内的每个数字上连续，则函数 f 在区间上连续。 （如果 f 仅定义在区间端点的一侧，我们将端点处的连续理解为从右侧连续或从左侧连续。）

- 定理 组合函数连续  
  如果 f 和 g 在 a 处连续，并且 c 是常数，则以下函数也在 a 处连续：  
  1. $f + g$  
  2. $f - g$  
  3. $cf$  
  4. $fg$  
  5. $\frac{f}{g} \qquad \text{if}\quad g(a) \ne 0$

- 定理 多项式和有理函数连续  
  (a) 任何多项式都是处处连续的； 也就是说，它在 $\mathbb{R} = (-\infty, \infty)$ 上连续。  
  (b) 任何有理函数无论在何处定义都是连续的； 也就是说，它在其域上是连续的

- 定理 函数的连续性  
  以下类型的函数在其域中的每个数字上都是连续的：  
  多项式 &emsp; 有理函数 &emsp; 根函数 &emsp;三角函数

- 定理 复合函数的极限  
  如果 f 在 b 处连续且 $\lim_{x\to a}g(x) = b$, 则 $\lim_{x\to a}f(g(x))=f(b)$，也就是说
  $$\lim_{x\to a}f(g(x)) = f(\lim_{x\to a}g(x))$$

- 定理 复合函数的连续性  
  如果 g 在 a 处连续且 f 在 g(a) 处连续，则由 $(f\circ g)(x)=f(g(x))$ 给出的复合函数 $f\circ g$ 在 a 处连续。


- 定理 中值定理  
  假设 f 在闭区间 [a, b] 上连续，并令 N 为 f(a) 和 f(b) 之间的任意数，其中 $f(a)\ne f(b)$。 那么(a, b) 中存在一个数 c，使得 $f(c)=N$。  

中值定理的一种用途是定位方程的根。


## 2 导数

