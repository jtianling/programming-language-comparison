// 编程语言语法对比示例数据
// 简化版本 - 只保留核心示例以减少 prompt 长度
const examples = [
    {
        title: "Hello World",
        description: "最基本的程序 - 输出 Hello World",
        codes: {
            cpp: `#include <iostream>

int main() {
    std::cout << "Hello World" << std::endl;
    return 0;
}`,
            cpp20: `import std;

int main() {
    std::println("Hello World");
    return 0;
}`,
            python: `print("Hello World")`,
            rust: `fn main() {
    println!("Hello World");
}`,
            java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
            csharp: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello World");
    }
}`,
            javascript: `console.log("Hello World");`,
            typescript: `console.log("Hello World");`,
            lua: `print("Hello World")`
        }
    },
    {
        title: "变量声明",
        description: "声明和初始化变量",
        codes: {
            cpp: `int age = 25;
double price = 19.99;
std::string name = "Alice";
auto count = 10;`,
            cpp20: `int age = 25;
std::string name = "Alice";
auto count = 10;`,
            python: `age = 25
price = 19.99
name = "Alice"`,
            rust: `let age = 25;
let mut price = 19.99;
let name = "Alice";`,
            java: `int age = 25;
String name = "Alice";
var count = 10;`,
            csharp: `int age = 25;
string name = "Alice";
var count = 10;`,
            javascript: `let age = 25;
const name = "Alice";`,
            typescript: `let age: number = 25;
const name: string = "Alice";`,
            lua: `local age = 25
local price = 19.99
local name = "Alice"`
        }
    },
    {
        title: "函数定义",
        description: "定义和调用函数",
        codes: {
            cpp: `int add(int a, int b) {
    return a + b;
}`,
            cpp20: `auto add(auto a, auto b) {
    return a + b;
}`,
            python: `def add(a, b):
    return a + b`,
            rust: `fn add(a: i32, b: i32) -> i32 {
    a + b
}`,
            java: `public static int add(int a, int b) {
    return a + b;
}`,
            csharp: `public static int Add(int a, int b) {
    return a + b;
}`,
            javascript: `function add(a, b) {
    return a + b;
}`,
            typescript: `function add(a: number, b: number): number {
    return a + b;
}`,
            lua: `function add(a, b)
    return a + b
end`
        }
    },
    {
        title: "条件语句",
        description: "if-else 条件判断",
        codes: {
            cpp: `if (score >= 90) {
    std::cout << "优秀";
} else if (score >= 60) {
    std::cout << "及格";
}`,
            cpp20: `if (score >= 90) {
    std::println("优秀");
} else if (score >= 60) {
    std::println("及格");
}`,
            python: `if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")`,
            rust: `if score >= 90 {
    println!("优秀");
} else if score >= 60 {
    println!("及格");
}`,
            java: `if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 60) {
    System.out.println("及格");
}`,
            csharp: `if (score >= 90) {
    Console.WriteLine("优秀");
} else if (score >= 60) {
    Console.WriteLine("及格");
}`,
            javascript: `if (score >= 90) {
    console.log("优秀");
} else if (score >= 60) {
    console.log("及格");
}`,
            typescript: `if (score >= 90) {
    console.log("优秀");
} else if (score >= 60) {
    console.log("及格");
}`,
            lua: `if score >= 90 then
    print("优秀")
elseif score >= 60 then
    print("及格")
end`
        }
    },
    {
        title: "循环",
        description: "for 和 while 循环",
        codes: {
            cpp: `for (int i = 0; i < 5; i++) {
    std::cout << i;
}`,
            cpp20: `for (int i = 0; i < 5; i++) {
    std::print("{}", i);
}`,
            python: `for i in range(5):
    print(i)`,
            rust: `for i in 0..5 {
    print!("{}", i);
}`,
            java: `for (int i = 0; i < 5; i++) {
    System.out.print(i);
}`,
            csharp: `for (int i = 0; i < 5; i++) {
    Console.Write(i);
}`,
            javascript: `for (let i = 0; i < 5; i++) {
    console.log(i);
}`,
            typescript: `for (let i = 0; i < 5; i++) {
    console.log(i);
}`,
            lua: `for i = 0, 4 do
    print(i)
end`
        }
    }
];
