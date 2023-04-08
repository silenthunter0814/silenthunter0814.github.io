
# 语言快速入门

## 资源链接
- 课程教材 英文 pdf 版 [**The Linux Command Line**](https://silenthunter0814.github.io/pub/lfm/TLCL-17.10.pdf)



$2345 = 2 \times 10^3 + 3 \times 10^2 + 4 \times 10^1 + 5 \times 10^0$

$$\eqalign{
1101    &= 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 \\
        &= 8 + 4 + 0 + 1 \\
        &= 13
}$$


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


# Hello Equations!

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## Maxwell's Equations

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |

![electricity](https://i.giphy.com/Gty2oDYQ1fih2.gif)



## C 课程大纲
### 1 编程基础
- 1.1 number system - 数字系统
- 1.2 数据存储格式
- 1.3 基础架构
- 1.4 操作系统
- 1.5 开发环境
### 2 hello world
- 2.1 hello.c
- 2.2 C程序的编译
### 3 数据类型，变量，运算符，表达式和语句
data type, variable, expression and statement
- 3.1 数据类型 - data type
- 3.2 变量 - variable
- 3.3 语句 - statement
- 3.4 小结
变量声明/定义 - declaration and definition
格式化输出转换函数 - printf
变量初始化 - initialization
- 3.5 运算符和表达式 - operator and expression
!, & 一元运算符 - unary
小结
- 3.6 编程练习
数据类型大小
两整数之和
圆的面积
### 4 控制流 - flow control
- 4.1 if-else
- 4.2 else-if
- 4.3 while loop and for loop
- 4.4 编程练习
the Sum of Natural Numbers
reverse integer
palindrome
perfect number
print stars
### 5 函数 - function
- 5.1 函数概念
- 5.2 参数传递
- 5.3 递归函数 - recursion
### 6 指针与数组 - pointer and array
- 6.1 指针 - pointer
- 6.2 数组 - array
数组声明和初始化
数组访问
- 6.3 指针与数组
- 6.4 编程练习
printarray - 打印数组
findelem - 查找数组元素
maxofa - 数组的最大值
average - 数组的平均值
insert sort - 插入排序
binsearch - 二分查找 (sorted array)
### 7 常量，字符串，字符数组
- 7.1 数字常量，字符常量
- 7.2 字符数组
- 7.3 字符串 - string literal
### 8 动态内存分配 - malloc and free
### 9 局部变量，全局变量，符号表
local, global, symbol table
- 9.1 局部变量 - local variable
- 9.2 全局变量 - global variable
- 9.3 符号表，作用域 - symbol table, scope
### 10 结构和联合 - struct and union
- 10.1 结构 - struct
创建结构，结构变量
结构作为函数的参数
指向结构的指针
- 10.2 联合 - union
typedef
switch 语句
union 示例
数据封装 
### 11 链表 - link list
- 11.1 自引用结构 - self referential structure
- 11.2 链表 - link list
创建，打印链表
atolink - 数组转换为链表
### 12 预处理器 - preprocessor
### 13 标准输入, 标准输出, 错误输出 - stdin, stdout, stderr
### 14 课程回顾
