## 解释器模式

### 定义
解释器模式：给定一门语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子。

### 结构分析
解释器模式 主要包含以下角色：

- 抽象表达式（Expression）：负责定义一个解释方法interpret，交由具体子类进行具体解释；
- 终结符表达式（TerminalExpression）：实现文法中与终结符有关的解释操作。文法中的每一个终结符都有一个具体终结表达式与之相对应，比如公式 R=R1+R2，R1 和 R2 就是终结符，对应的解析 R1 和 R2 的解释器就是终结符表达式。通常一个 解释器模式 中只有一个终结符表达式，但有多个实例，对应不同的终结符（R1，R2）；
- 非终结符表达式（NonterminalExpression）：实现文法中与非终结符有关的解释操作。文法中的每条规则都对应于一个非终结符表达式。非终结符表达式一般是文法中的运算符或者其他关键字，比如公式 R=R1+R2 中，“+"就是非终结符，解析“+”的解释器就是一个非终结符表达式。非终结符表达式根据逻辑的复杂程度而增加，原则上每个文法规则都对应一个非终结符表达式；
- 上下文环境类（Context）：包含解释器之外的全局信息。它的任务一般是用来存放文法中各个终结符所对应的具体值，比如 R=R1+R2，给 R1 赋值100，给 R2 赋值200，这些信息需要存放到环境中。
![Interpreter](../../images/pattern/Interpreter.png)  

### [代码实现](../../code/interpreter)

### 优点
- 扩展性强：在解释器模式中由于语法是由很多类表示的，当语法规则更改时，只需修改相应的非终结符表达式即可；若扩展语法时，只需添加相应非终结符类即可；
- 增加了新的解释表达式的方式；
- 易于实现文法：解释器模式对应的文法应当是比较简单且易于实现的，过于复杂的语法并不适合使用解释器模式。

### 缺点
- 语法规则较复杂时，会引起类膨胀：解释器模式每个语法都要产生一个非终结符表达式，当语法规则比较复杂时，就会产生大量的解释类，增加系统维护困难；
- 执行效率比较低：解释器模式采用递归调用方法，每个非终结符表达式只关心与自己有关的表达式，每个表达式需要知道最终的结果，因此完整表达式的最终结果是通过从后往前递归调用的方式获取得到。当完整表达式层级较深时，解释效率下降，且出错时调试困难，因为递归迭代层级太深。

### 使用场景
- 可以将一个需要解释执行的语言中的句子表示为一个抽象语法树。
- 一些重复出现的问题可以用一种简单的语言来进行表达。
- 一个简单语法需要解释的场景。