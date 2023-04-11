
# czh01 C语言快速入门
**学习方法**  
- coding and parsing  
- 滚动式学习，通过后续知识的学习复习巩固前面的知识  
- 通过实践（编程）学习掌握 C 标准，而不是通过学习 C 标准来指导实践（编程）

## 资源链接
- 课程视频
- 课程源码  https://github.com/silenthunter0814/czh01.git
  
---  


# C语言快速入门

Author: Silent Hunter    
| [c1](#_1-hello-world) | [c2](#_2-数据类型-变量-运算符-表达式和语句) | [c3](#_3-控制流-flow-control) | 
[c4](#) | [c5](#) | [c6](#) | [c7](#) | [c8](#) | [c9](#) | [c10](#) | [c11](#) | [c12](#) |
## 1 hello world
- [1.1 hello.c](#_1-1-hello-c)
- [1.2 预处理，编译，汇编，链接和运行](#_1-2-预处理-编译-汇编-链接和运行)
- [1.3 文件格式，进程地址空间](#_1-3-文件格式-进程地址空间)

### 1.1 hello.c
vi/vscode 编辑器编写第一个程序 `hello.c`:  

```c
1   #include <stdio.h>
2   
3   int main()
4   {
5       printf("hello, world\n");
6       return 0;
7   }
```
- 第 1 行：以 `#` 开头的行都由预处理器处理，预处理器将 `stdio.h` 文件的内容复制到我们的文件中。`xxx.h` 文件称为预处理头文件，通常包含函数声明。 `stdio.h` 文件中包含函数 `printf(...)`的声明。
- 第 3 行： `main` 函数，程序开始执行的入口点。`int` 表示 `main()` 的返回类型。`()` 表示 `main` 函数不带任何参数。
- 第 4 和 7 行：`{` 和 `}` 一对大括号定义了函数体，也叫做复合语句块。所有函数都必须以大括号开头和结尾。
- 第 5 行： `printf()` 是一个标准库函数，用于在标准输出上打印一些东西。末尾的 `;` 用来表示语句的结束。
- 第 6 行： `return 0;`, 返回语句，值 0 通常表示成功终止。

### 1.2 预处理，编译，汇编，链接和运行
#### gcc 编译器集合
- 预处理  Preprocess	  将 `stdio.h` 文件的内容复制到 `hello.c`   
`stdio.h` + `hello.c` => `hello.c`
- 编译		Compile	     将C语言源文件翻译为汇编语言  
`hello.c` -> `hello.s`
- 汇编		Assembly	   由汇编源文件生成机器指令二进制代码  
`hello.s` -> `hello.o`
- 链接		Linking      将二进制对象文件链接成可执行文件  
`hello.o` + `printf.o` => `a.out`  

#### 终端命令行
```bash
$ gcc hello.c     # create a.out
$ ./a.out
hello, world
$
```

### 1.3 文件格式，进程地址空间

- `ELF`可执行文件    [wiki](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)  
  `ELF` = `ELF header` + `text section` + `data section`
- 进程地址空间  
  `address space` = `text` + `data` + `stack`
  - `text`    文本段（指令）
  - `data`    数据段
  - `stack`   栈

## 2 数据类型，变量，运算符，表达式和语句

### 2.1 数字系统

- 十进制  0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
  $$1234_{10} = 1 \times 10^3 + 2 \times 10^2 + 3 \times 10^1 + 4 \times 10^0$$
- 二进制  0, 1  

$$\eqalign{
  1101_{2} &= 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 \\
  &= 8 + 4 + 0 + 1 \\
  &= 13
}$$

- 二进制-十进制转换表  

$$\eqalign{
  0000 \ 0001 &= 2^0 &= 1 \\
  0000 \ 0010 &= 2^1 &= 2 \\
  0000 \ 0100 &= 2^2 &= 4 \\
  0000 \ 1000 &= 2^3 &= 8 \\
  0001 \ 0000 &= 2^4 &= 16 \\
  0010 \ 0000 &= 2^5 &= 32 \\
  0100 \ 0000 &= 2^6 &= 64 \\
  1000 \ 0000 &= 2^7 &= 128 
}$$

- 十进制到二进制转换  

$$\eqalign{
  123 &= 64 + 59 \\
  &= 2^6 + 32 + 27 \\
  &= 2^6 + 2^5 + 16 + 11 \\
  &= 2^6 + 2^5 + 2^4 + 8 + 3 \\
  &= 2^6 + 2^5 + 2^4 + 2^3 + 2^1 + 2^0 \\
  &= 0111 \ 1011
}$$  

- N位二进制最大值  

$$\eqalignno{
S &= 2^0 + 2^1 + ... + 2^{n-1} &(1) \\
2S &= 2^1 + 2^2 + ... + 2^n &(2) 
}$$  

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; do (2) - (1)  

$$\eqalign{
  S &= 2^n - 2^0 \\
  &= 2^n - 1 
}$$  

$0111 \ 1111 = 2^7 - 1 = 127$  
$1111 \ 1111 = 2^8 -1 = 255$  
$0111 \ 1111 \ 1111 \ 1111 = 2^{15} - 1 = 32767$  
$1111 \ 1111 \ 1111 \ 1111 = 2^{16} - 1 = 65535$  

### 2.2 位，字节和内存  
bit, byte and memory
- bit 二进制数字，`0` 或 `1`，物理上低电平表示 `0`，高电平表示 `1`  
| 0 | 1 |
| $\Huge\bullet$ | $\bigcirc$ |
- byte 8bit 位组合形成一个字节，物理上是一个内存单元格(cell)
- memory 连续的单元格(byte)形成的长数组，由起始为0的数字进行编号寻址

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

