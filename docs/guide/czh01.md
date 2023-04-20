
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

<details>
<summary>章节目录</summary>

[[toc]]

</details>

## 1 hello world

- [1.1 hello.c](#_1-1-hello-c)
- [1.2 预处理，编译，汇编，链接和运行](#_1-2-预处理-编译-汇编-链接和运行)
- [1.3 文件格式，进程地址空间](#_1-3-文件格式-进程地址空间)

### 1.1 hello.c

vi/vscode 编辑器编写第一个程序 `hello.c`:  

```c
#include <stdio.h>

int main()
{
        printf("hello, world\n");
        return 0;
}
```
- 第 1 行：以 `#` 开头的行都由预处理器处理，预处理器将 `stdio.h` 文件的内容复制到我们的文件中。`xxx.h` 文件称为预处理头文件，通常包含函数声明。 `stdio.h` 文件中包含函数 `printf(...)`的声明。
- 第 3 行： `main` 函数，程序开始执行的入口点。`int` 表示 `main()` 的返回类型。`()` 表示 `main` 函数不带任何参数。
- 第 4 和 7 行：`{` 和 `}` 一对大括号定义了函数体，也叫做复合语句块。所有函数都必须以大括号开头和结尾。
- 第 5 行： `printf()` 是一个标准库函数，用于在标准输出上打印一些东西。末尾的 `;` 用来表示语句的结束。
- 第 6 行： `return 0;`, 返回语句，值 0 通常表示成功终止。

### 1.2 预处理，编译，汇编，链接和运行

#### 1.2.1 gcc 编译器集合

- 预处理  Preprocess	  将 `stdio.h` 文件的内容复制到 `hello.c`   
`stdio.h` + `hello.c` => `hello.c`
- 编译		Compile	     将C语言源文件翻译为汇编语言  
`hello.c` -> `hello.s`
- 汇编		Assembly	   由汇编源文件生成机器指令二进制代码  
`hello.s` -> `hello.o`
- 链接		Linking      将二进制对象文件链接成可执行文件  
`hello.o` + `printf.o` => `a.out`  

#### 1.2.2 终端命令行

```bash
$ gcc hello.c     # create a.out
$ ./a.out
hello, world
$
```

### 1.3 文件格式，进程地址空间

- `ELF`可执行文件    [view wiki](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)  
  `ELF` = `ELF header` + `text section` + `data section`
- 进程地址空间  
  `address space` = `text` + `data` + `stack`
  - `text`    文本段（指令）
  - `data`    数据段
  - `stack`   栈

## 2 数据存储和C语言

### 2.1 数据存储格式

--- 
#### 2.1.1 数字系统
number system

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

&emsp; &emsp; do (2) - (1)  

$$\eqalign{
  S &= 2^n - 2^0 \\
  &= 2^n - 1 
}$$  

$0111 \ 1111 = 2^7 - 1 = 127$  
$1111 \ 1111 = 2^8 -1 = 255$  
$0111 \ 1111 \ 1111 \ 1111 = 2^{15} - 1 = 32767$  
$1111 \ 1111 \ 1111 \ 1111 = 2^{16} - 1 = 65535$  

---  
#### 2.1.2 位，字节和内存  

bit, byte and memory

- bit 二进制数字，`0` 或 `1`，物理上低电平表示 `0`，高电平表示 `1`  

| volt | LED | binary |  
| --- | --- | --- |  
| low | off | 0 |  
| high | on | 1 |  

- byte 8bit 位组合形成一个字节，物理上是一个内存单元格(cell)  
  **数据表示范围： 0 - 255**  
  binary: 1010 1101  
  decimal: 173  
  A cell:
  | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1|  
  | - | - | - | - | - | - | - | - |  

  | 173 |  
  | --- |  
  
- memory 连续的单元格(byte)形成的长数组，由起始为0的数字进行编号寻址  
  ![](https://silenthunter0814.github.io/pub/czh01/fig2_1.png)  

---  
#### 2.1.3 ASCII 编码 

ASCII： 美国信息交换标准代码 &emsp;扩展阅读 [wiki](https://zh.wikipedia.org/zh-cn/ASCII)  
ASCII 码是 7 位码，其格式（排列）为  

$X_6X_5X_4X_3X_2X_1X_0$  

需要 `1 byte` 来存储  

<details>
<summary>ASCII CODE TABLE</summary>

| Dec |  Char | Dec  |  Char |  Dec  |  Char |  Dec   |  Char |
|-----|-------|------|-------|-------|-------|--------|-------|
|   0 |  NUL  |   32 |   SP  |    64 |   @   |     96 |   `   |
|   1 |  SOH  |   33 |   !   |    65 |   A   |     97 |  a    |
|   2 |  STX  |   34 |   "   |    66 |   B   |     98 |  b    |
|   3 |  ETX  |   35 |   #   |    67 |   C   |     99 |  c    |
|   4 |  EOT  |   36 |   $   |    68 |   D   |    100 |  d    |
|   5 |  ENQ  |   37 |   %   |    69 |   E   |    101 |  e    |
|   6 |  ACK  |   38 |   &   |    70 |   F   |    102 |  f    |
|   7 |  BEL  |   39 |   '   |    71 |   G   |    103 |  g    |
|   8 |  BS   |   40 |   (   |    72 |   H   |    104 |  h    |
|   9 |  TAB  |   41 |   )   |    73 |   I   |    105 |  i    |
|  10 |  LF   |   42 |   *   |    74 |   J   |    106 |  j    |
|  11 |  VT   |   43 |   +   |    75 |   K   |    107 |  k    |
|  12 |  FF   |   44 |   ,   |    76 |   L   |    108 |  l    |
|  13 |  CR   |   45 |   -   |    77 |   M   |    109 |  m    |
|  14 |  SO   |   46 |   .   |    78 |   N   |    110 |  n    |
|  15 |  SI   |   47 |   /   |    79 |   O   |    111 |  o    |
|  16 |  DLE  |   48 |   0   |    80 |   P   |    112 |  p    |
|  17 |  DC1  |   49 |   1   |    81 |   Q   |    113 |  q    |
|  18 |  DC2  |   50 |   2   |    82 |   R   |    114 |  r    |
|  19 |  DC3  |   51 |   3   |    83 |   S   |    115 |  s    |
|  20 |  DC4  |   52 |   4   |    84 |   T   |    116 |  t    |
|  21 |  NAK  |   53 |   5   |    85 |   U   |    117 |  u    |
|  22 |  SYN  |   54 |   6   |    86 |   V   |    118 |  v    |
|  23 |  ETB  |   55 |   7   |    87 |   W   |    119 |  w    |
|  24 |  CAN  |   56 |   8   |    88 |   X   |    120 |  x    |
|  25 |  EM   |   57 |   9   |    89 |   Y   |    121 |  y    |
|  26 |  SUB  |   58 |   :   |    90 |   Z   |    122 |  z    |
|  27 |  ESC  |   59 |   ;   |    91 |   [   |    123 |  {    |
|  28 |  FS   |   60 |   <   |    92 |   \   |    124 |  \|    |
|  29 |  GS   |   61 |   =   |    93 |   ]   |    125 |  }    |
|  30 |  RS   |   62 |   >   |    94 |   ^   |    126 |  ~    |
|  31 |  US   |   63 |   ?   |    95 |   _   |    127 |  DEL  |

</details>   

需要熟悉的 ASCII 编码

| binary | dec | char | comment |
| --- | --- | --- |:--- |  
| 0000 1001 | 9 | \t | 制表键 |  
| 0000 1010 | 10 | \n | 换行键 |  
| 0010 0000 | 32 | SP | 空格键 |
| 0011 0000 | 48 | 0 | 9: 57 |  
| 0100 0001 | 65 | A | Z: 90 |   
| 0110 0001 | 97 | a | z: 122 |  

例：键盘输入 `Mary`  
`M` &emsp; 0100 1101 (77)  
`a` &emsp; 0110 0001 (97)  
`r` &emsp; 0111 0010 (114)  
`y` &emsp; 0111 1001 (121)  

内存的两种表示：

| M | a | r | y |  
| --- | --- | --- | --- |  
| 77 | 97 | 114 | 121 |  

---
#### 2.1.4 内存支持的位组

- byte &emsp; 1-byte
- word &emsp; 2-bytes
- double-word &emsp; 4-bytes
- quad-word &emsp; 8-bytes

| name | bytes | unsigned range | signed range |  
| --- | --- | --- | --- |  
| byte | 1 | $0$ ~ $2^8-1$ | $-2^7$ ~ $2^7-1$ |  
| word | 2 | $0$ ~ $2^{16}-1$ | $-2^{15}$ ~ $2^{15}-1$ |  
| dword | 4 | $0$ ~ $2^{32}-1$ | $-2^{31}$ ~ $2^{31}-1$ |  
| qword | 8 | $0$ ~ $2^{64}-1$ | $-2^{63}$ ~ $2^{63}-1$ |  


### 2.2 数据类型和变量
data type and variable

---
#### 2.2.1 数据类型

C 语言提供了下列几种基本数据类型  

| keyword | data type | size | range |  
| --- | --- | --- | --- |  
| char | integer | 1 | $-2^7$ to $2^7-1$ |  
| short | integer | 2 | $-2^{15}$ to $2^{15}-1$ |  
| int | integer | 4 | $-2^{31}$ to $2^{31}-1$ |  
| long | integer | 8 | $-2^{63}$ to $2^{63}-1$ |  
| float | single float | 4 | signed |  
| double | double float | 8 | signed |  

无符号整型：  
unsigned char, unsigned short, unsigned int, unsigned long   

---
#### 2.2.2 变量  

- 内存地址的人类可读名称
- 关联内存地址易于记忆的标签
- 存储、读取和更改内存中的数据
- 总是同具体的数据类型相关联  

---
#### 2.2.3 变量命名规则

- 由`字符`，`数字`，`下划线`组成  
- 首字符不能是数字
- 不能与C关键字冲突  

---
#### 2.2.4 变量的声明  
变量在使用前必须进行声明，这是通过声明语句完成的。

```c
int main()
{
    int x;
    int y;
    int m, n;

    return 0;
}
```  

行尾的分号表示一条语句的结束。  
变量的内存空间由编译器在 stack 中自动分配(auto)。  
 
---
### 2.3 运算符和表达式  
operator and expression  

---
#### 2.3.1 赋值运算符 `=`
asignment operator

- 赋值语句  
  `x = 28;`  
  `int n = 3523;`  
- `printf` 格式化输出函数  
  `printf("x = %d\n", x);`  

  `%` - 转换说明符

    - `%d` &emsp; int 类型，十进制数字
    - `%u` &emsp; unsigned int 类型， 无符号十进制数
    - `%c` &emsp; int 类型，单个字符
    - `%f` &emsp; float 类型， 十进制小数
    - `%lf` &emsp; double 类型，十进制小数  

---
<details>
<summary>code example prog2_1.c</summary>

```c
/* 
 * file name: prog2_1.c
 */

#include <stdio.h>

int main()
{
        int x;
        int y;

        x = 28;
        y = 3523;
        printf("x = %d\n", x);
        printf("y = %d\n", y);
        printf("x = %d\ty=%d\n", x, y);
        return 0;
}
```  
</details>  

---
#### 2.3.2 算术运算符，表达式
算术运算符属于二元运算符(有左、右两个操作数的运算符) `binary operator` 
- 算术运算符  
`+`, `-`, `*`, `/`, `%`  
- 表达式：运算符和操作数形成表达式 `expression`  
  `expr` = `operand` `op` ...  
- 语句：表达式后跟一个 `;` 形成语句 `statement`  
  `stmt` = `expr` `;`  
- 合法的表达式和语句  
    - `3 + 4;`
    - `i = x * y;`
    - `i = i + x * y;`  
- 表达式的值  
  C语言表达式被翻译为一条或多条汇编指令，由CPU顺序执行，最终的结果被保存在CPU寄存器中，这称为表达式的值。  
---
#### 2.3.3 赋值运算符 `op=`
大多数二元运算符都有一个相应的赋值运算符 `op=`  
`expr1 op= expr2;` \<=\> `expr1 = expr1 op expr2`  
例如：  
- `i += 6;` \<=\> `i = i + 6;`
- `i *= x + 6;` \<=\> `i = i * (x+6)`  

---
<details>
<summary>code example prog2_2.c</summary>

```c
/* 
 * file name: prog2_2.c
 */

#include <stdio.h>

int main()
{
        int x, i;

        i = 3;
        x = 5;
        i *= x + 6;
        printf("i = %d\n", i);
        return 0;
}
```  
</details>  

---
#### 2.3.4 `++`, `--` 运算符
属于一元运算符(只有一个操作数) `unary operator`  
一元运算符拥有最高的优先级  

- prefix `++` `--`  
  `++i;`  
  `y = 10 + --i;`  
  `y = ++i * 2;`  

- postfix `++` `--`  
  `i++`;  
  `y = 10 + i--;`  
  `y = i-- * 2;`  

---
#### 2.3.5 相等运算符
equality operator  `==` `!=`

- `x == y` 1 if x equals y, otherwise 0
- `x != y` 1 if x does not equals y, otherwise 0  

---
<details>
<summary>code example prog2_3.c</summary>

```c
/*
 * file name: prog2_3.c
 */

#include <stdio.h>

int main()
{
        int x, y, z;
        
        x = 10;
        y = 10;
        z = x == y;
        printf("x = %d\ty=%d\tz = %d\n", x, y, z);
        x++;
        z = x == y;
        printf("x = %d\ty=%d\tz = %d\n", x, y, z);
        z = x != y;
        printf("x != y\tz = %d\n", z);
        return 0;
}
```  
</details>  

---
#### 2.3.6 关系运算符
relational operator `>` `>=` `<` `<=`  

- `x > y` &emsp; 1 if x greater than y, otherwise 0
- `x >= y` &emsp; 1 if x greater or equal y, otherwise 0
- `x < y` &emsp; 1 if x is less than y, otherwise 0
- `x <= y` &emsp; 1 if x less or equal y, otherwise 0  

---
#### 2.3.7 逻辑运算符
logical operator `&&` `||`

- `x && y` &emsp; 1 if x != 0 and y != 0, otherwise 0
- `x || y` &emsp; 1 if x != 0 or y != 0, otherwise 0

---
#### 2.3.8 一元运算符
unary operator `!` `&`  

- `!` logical NOT, 运算结果是 `0` 或 `1`  
  `!8;` &emsp; 0  
  `!0;` &emsp; 1  
  `!x;` &emsp; 1 if x == 0; otherwise 0   

- `&` 取地址运算符  
  `&x;        /* get address of variable x */`  
  `printf("%p\n", &x);    /* p - pointer, print address */`  
  `scanf("%d", &x);` 这里 `scanf` 是标准输入格式化函数，`%d`说明符接收终端十进制数字输入并存入变量`x`中，`&x`说明传递给`scanf`的是变量`x`的地址。  

---
<details>
<summary>code example prog2_4.c</summary>  

```c
/*
 * filename: prog2_4.c
 * calculate rectangle's area
 */
 
#include <stdio.h>

int main()
{
        int a, b, s;       /* width, length, area */
        
        printf("input width and length: ");
        scanf("%d %d", &a, &b);
        s = a * b;
        printf("The rectangle's area is: %d\n\n", s);
        printf("Address of var a: %p\n", &a);
        return 0;
}
```
</details>  

---
#### 2.3.9 运算符的优先级与结合性

| Operators | Associativity |
| :--- | --- |
| `()` `[]` `->` `.` | left to right |
| `!` `~` `++` `--` `+` `-` `*` `&` `(type)` `sizeof` | right to left |
| `*` `/` `%` | left to right |
| `+` `-` | left to right |
| `<<` `>>` | left to right |
| `<` `<=` `>` `>=` | left to right |
| `==` `!=` | left to right |
| `&` | left to right |
| `^` | left to right |
| `\|` | left to right |
| `&&` | left to right |
| `\|\|` | left to right |
| `?:` | right to left |
| `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `\|= ` `<<=` `>>=` | right to left |
| `,` | left to right |  


## 3 控制流
flow control  

- 普通语句以 `;` 结尾，包括声明语句和表达式语句
- 复合/块语句，以 `{` 开头， 以 `}` 结尾， 最后不需要分号；块语句中包括一条或多条声明语句和表达式语句

### 3.1 if-else 语句
if-else 语句用于条件判断，语法格式为

```c
if (expr)
        statement1;
else  /* optional */
        statement2;
```  

`if-else` 语句执行逻辑：  
1. 计算 `expr` 值  
    - 如果其值为真(非 0)，则执行 `statement1`  
    - 如果存在 `else` 子句，并且 `expr` 值为假(0)，则执行 `statement2`  
2. 继续执行后面的程序代码  

---
<details>
<summary>code example prog3_1.c</summary>

```c
/*
 * filename prog3_1.c
 * get max from two absolute value
 */
 
#include <stdio.h>

int main()
{
        int x1, x2, max;
    
        printf("input x1 and x2: ");
        scanf("%d %d", &x1, &x2);
        if (x1 < 0)
                x1 = -x1;
        if (x2 < 0)
                x2 = -x2;
        if (x1 >= x2)
                max = x1;
        else
                max = x2;
        printf("The max value is: %d\n", max);
        return 0;
}
```  
</details>  

编码风格：  

::: info coding style
<pre>
if (expr)            if (expr != 0)
---------------------------------------------
if (0.2)             if (0.2 != 0)
---------------------------------------------
if (i && j)          if (i != 0 && j != 0)
--------------------------------------------- 
if (i && j) { i++; j++; }   等价于

if (i != 0 && j != 0)  
{
    i++;
    j++;
}                           等价于

if (i != 0 && j != 0) {   /* K&R C coding style */
        i++;
        j++;
} else {
        ...
}
</pre>
:::

---
<details>
<summary>code example prog3_2.c</summary>

```c
/*
 * file name prog3_2.c
 * K&R C coding style
 */

#include <stdio.h>

int main()
{
        int 	i, j;
    
        printf("input integer i and j: ");
        scanf("%d %d", &i, &j);
    
        if (i > 0 && j > 0) {   /* not equal to (i && j) */
                i--;
                j--;
        } else {
                i++;
                j++;
        }
        printf("i = %d\tj = %d\n", i, j);
        return 0;
}
```
</details>

---
### 3.2 条件表达式
tenary operator `?:`  
三元运算符形成条件表达式语句等价于 `if-else` 语句：  
`expr1 ? expr2 : expr3`  
- 先计算表达式 `expr1`
- 如果 `expr1 != 0`, 则计算 `expr2`，并将该值作为三元表达式的值
- 如果 `expr1 == 0`, 则计算 `expr3`，并将该值作为三元表达式的值
- `expr2` 和 `expr3` 只有一个被计算  

例如：  

```c
max = (x > y)? x : y;

if (x > y)
        max = x;
else
        max = y;
```


---
### 3.3 else-if 语句
多路判定语句，语法格式  

```c
if (expr1)
        statement1
else if (expr2)
        statement2
else if (expr3)
        statement3
else
        statement4
```

- 依次测试 `expr`, 如果某个 `expr` 为真，则执行相关联的 `statement`，后续 `else if` 子句不再执行
- 最后的 `else` 子句可选，意为在前面的多路判定都为假时执行
- `statement` 既可以是以 `;` 结尾的单条语句，也可以是 `{}` 复合语句块  

---  
<details>
<summary>code example prog3_3.c</summary>

```c
/*
 * file name prog3_3.c
 */

#include <stdio.h>

int main()
{
        int marks, grade;

        printf("Enter your marks: ");
        scanf("%d", &marks);
        if (marks >= 85 && marks <= 100)
                grade = 'A';
        else if (marks >= 60 && marks <85)
                grade = 'B';
        else if (marks >= 40 && marks <60)
                grade = 'C';
        else if (marks >= 0 && marks < 40)
                grade = 'D';
        else {
                printf("marks input error!!!\n");
                printf("marks = %d\n", marks);
                return 0;
        }
        printf("Scored Grade: %c\n", grade);
        return 0;
}
```
</details>

---
### 3.3 循环语句 `while` `for`
`while` 循环语法格式:

```c
while (expr)
        statement
/* rest C code */
...
```  

循环逻辑：  
    首先计算 `expr` 的值。如果其值非 0，则执行 `statement`，并再次计算 `expr` 的值。这一循环过程
一直进行下去，直到 `expr` 的值为 0 为止，随后继续执行 `rest C code` 注释后面的部分。  

---  
<details>
<summary>code example prog3_4.c</summary>

```c
/*
 * file name: prog3_4.c
 */

#include <stdio.h>

int main()
{
        int i;
        
        i = 5;
        while (i > 0) {
                printf("%d\n", i);
                i--;
        }
        printf("loop over!\n");
        return 0;
}
```
</details>

`for` 循环语法格式:

```c
for (expr1; expr2; expr3)
        statement
/* rest C code */
...
```

循环逻辑：  
- `expr1` 进行初始化(initialize),只执行一次  
- `expr2` 进行条件判断(condition)  
      如果为真，则执行 `statement`->`expr3`->`expr2`,进行下一次循环  
      如果为假，退出循环，继续执行 `rest C code` 注释后面的部分  

---  
<details>
<summary>code example prog3_5.c</summary>

```c
/*
 * file name: prog3_5.c
 */

#include <stdio.h>

int main()
{
        int i;
        
        for (i = 5; i > 0; i--) 
                printf("%d\n", i);
        printf("loop over!\n");
        return 0;
}
```
</details>

`for` 循环等价于 `while` 循环

```c
expr1;
while (expr2) {
        statement
        expr3;
}
/* rest C code */
...
``` 

## 4 编程示例

`exit` 函数
- 头文件： #include <stdlib.h>
- 函数原型： void exit(int status);
- 导致正常进程终止，并且 `status` 返回调用者  

---
### 4.1 自然数之和
the Sum of Natural Numbers  
$sum = 1 + 2 + ... + n$  

---  
<details>
<summary>code example prog4_1.c</summary>

```c
/*
 * file name: prog4_1.c
 * the Sum of Natural Numbers
 */

#include <stdio.h>
#include <stdlib.h>

int main()
{
        int n, i, sum = 0;
        
        printf("enter a positive integer: ");
        scanf("%d", &n);
        if (n <= 0) {
                printf("input error, n must greater than 0\n");
                exit(1);
        }
        for (i = 1; i <= n; i++)
                sum += i;
        printf("sum = %d\n", sum);
        return 0;
}
```
</details>

- 空间分析： $S(n) = 3$  
- 时间分析：  

$$T(n) = \cases{
        5 & if $ n <= 0 $ \\
        3n + 6 & if $ n > 0 $
}$$  

`for` 循环执行次数  
|  n  | i = 1 | i <= n | loop | i++ | total |
|-----|-------|--------|------|-----|-------|
| 1   |     1 | 2      | 1    | 1   | 5     |
| 2   |     1 | 3      | 2    | 2   | 8     |
| 3   |     1 | 4      | 3    | 3   | 11    |
| ... |   ... | ...    | ...  | ... | ...   |
| n   |     1 | n+1    | n    | n   | 3n+2  |

---
### 4.2 整数反转
reverse integer  
- `123` &emsp; -> &emsp; `321`
- `-25` &emsp; -> &emsp; `-52`
- `0` &emsp; -> &emsp; `0`

---  
<details>
<summary>code example prog4_2.c</summary>

```c
/*
 * file name: prog4_2.c
 * reverse integer
 */

#include <stdio.h>

int main()
{
        int n, rem, rev = 0;    /* rev: reversed, rem: remainder */
        
        printf("Enter a integer: ");
        scanf("%d", &n);
        while (n != 0) {
                rem = n % 10;
                rev = 10 * rev + rem;
                n /= 10;
        }
        printf("Reversed number = %d\n", rev);
        return 0;
}
```
</details>

- 空间分析： $S(n) = 1$  
- 时间分析：  

$$T(n) = \cases{
        1 & if $ n == 0 $ \\
        \lg n & if $ n \ != 0 $
}$$  

`while` 循环分析  


|       n       | k's loop |
|---------------|----------|
| $n$           | 1        |
| $n/10$        | 2        |
| $n/10^2$      | 3        |
| ...           | ...      |
| $n/10^{k-1}$  | k        |
| $n/10^k == 0$ | -        |

计算循环次数 `k`:  

$$\begin{gather}
1 <= \frac n {10^{k-1}} < 10 \\
\frac 1 n <= \frac 1 {10^{k-1}} < \frac {10} n \\
\frac n {10} < 10^{k-1} <= n \\
\lg n - 1 < k-1 <= \lg n \\
\lg n < k <= \lg n + 1 \\
k = \lg n + 1
\end{gather}$$  

---
### 4.3 整数回文
palindrome of integer  
回文数：当其数字反转时保持不变。`16461`, `33`, `262`, `3553`.  

---  
<details>
<summary>code example prog4_3.c</summary>

```c
/*
 * file name: prog4_3.c
 * reverse integer
 */

#include <stdio.h>

int main()
{
        int n, orig, rem, rev = 0;      /* original, remainder, reversed */
        
        printf("Enter an integer: ");
        scanf("%d", &n);
        orig = n;
        while (n != 0) {
                rem = n % 10;
                rev = rev * 10 + rem;
                n /= 10;
        }
        printf("%d is %s palindrome.\n", orig, (rev==orig)? "a" : "not a");
        return 0;
}
```
</details>

- 空间分析： $S(n) = 1$  
- 时间分析：  

$$T(n) = \cases{
        1 & if $ n == 0 $ \\
        \lg n & if $ n \ != 0 $
}$$  

---
### 4.4 完美数字
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

