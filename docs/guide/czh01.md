
# czh01 语言快速入门
**学习方法**  
- coding and parsing  
- 滚动式学习，通过后续知识的学习复习巩固前面的知识  
- 通过实践（编程）学习掌握 C 标准，而不是通过学习 C 标准来指导实践（编程）

## 资源链接
**课程视频**  

#  C语言快速入门

## 1 hello world
### 1.1 hello.c
vi/vscode 编辑器编写第一个程序  
hello.c:  

```c
1   #include <stdio.h>
2   
3   int main()
4   {
5       printf("hello, world\n");
6       return 0;
7   }
```
- 第 1 行：`#include <stdio.h>` 在 C 程序中，所有以#开头的行都由预处理器处理，预处理器是编译器调用的程序。在一个非常基本的术语中，预处理器接受一个 C 程序并生成另一个 C 程序。生成的程序没有以 # 开头的行，所有这些行都由预处理器处理。在上面的例子中，预处理器将 `stdio.h` 文件的预处理代码复制到我们的文件中。`xxx.h` 文件在 C 中称为头文件。这些头文件通常包含函数声明。我们需要 `stdio.h` 用于程序中使用的函数 `printf(...)`。
- 第 3 行 `int main()` 程序必须有一个开始执行的入口点，从那里开始执行已编译的 C 程序。在 C 中，执行通常从 `main()` 的第一行开始。写在括号中的空白表示 main 函数不带任何参数。`main()` 也可以写成带参数。我们将在以后进行介绍。int 写在 main 之前，表示 `main()` 的返回类型。main 返回的值表示程序终止的状态。
- 第 4 和 7 行：`{` 和 `}` 在 C 语言中，一对大括号定义了作用域，主要用于函数和控制语句，如 `if`, `else` 循环。所有函数都必须以大括号开头和结尾。
- 第 5 行 `printf("Hello World");`, `printf()` 是一个标准库函数，用于在标准输出上打印一些东西。`printf` 末尾的分号表示语句终止。在 C 中，分号总是用来表示语句的结束。
- 第 6 行 `return 0;`, `return` 语句从 `main()` 返回值。操作系统可以使用返回值来了解程序的终止状态。值 0 通常表示成功终止。

### 1.1 C程序的编译
## 2 数据类型，变量，运算符，表达式和语句
data type, variable, expression and statement
### 2.1 数据类型 - data type
### 2.2 变量 - variable
### 2.2 语句 - statement
### 2.4 小结
变量声明/定义 - declaration and definition
格式化输出转换函数 - printf
变量初始化 - initialization
### 2.5 运算符和表达式 - operator and expression
!, & 一元运算符 - unary
小结
### 2.6 编程练习
数据类型大小
两整数之和
圆的面积
## 3 控制流 - flow control
### 3.1 if-else
### 3.2 else-if
### 3.3 while loop and for loop
### 3.4 编程练习
the Sum of Natural Numbers
reverse integer
palindrome
perfect number
print stars
## 4 函数 - function
### 4.1 函数概念
### 4.2 参数传递
### 4.3 递归函数 - recursion
## 5 指针与数组 - pointer and array
### 5.1 指针 - pointer
### 5.2 数组 - array
数组声明和初始化
数组访问
### 5.3 指针与数组
### 5.4 编程练习
printarray - 打印数组
findelem - 查找数组元素
maxofa - 数组的最大值
average - 数组的平均值
insert sort - 插入排序
binsearch - 二分查找 (sorted array)
## 6 常量，字符串，字符数组
### 6.1 数字常量，字符常量
### 6.2 字符数组
### 6.3 字符串 - string literal
## 7 动态内存分配 - malloc and free
## 8 局部变量，全局变量，符号表
local, global, symbol table
### 8.1 局部变量 - local variable
### 8.2 全局变量 - global variable
### 8.3 符号表，作用域 - symbol table, scope
## 9 结构和联合 - struct and union
### 9.1 结构 - struct
创建结构，结构变量
结构作为函数的参数
指向结构的指针
### 9.2 联合 - union
typedef
switch 语句
union 示例
数据封装 
## 10 链表 - link list
### 10.1 自引用结构 - self referential structure
### 10.2 链表 - link list
创建，打印链表
atolink - 数组转换为链表
## 11 预处理器 - preprocessor
## 12 标准输入, 标准输出, 错误输出 - stdin, stdout, stderr

