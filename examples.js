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
            lua: `print("Hello World")`,
            ruby: `puts "Hello World"`,
            swift: `print("Hello World")`,
            objectivec: `#import <Foundation/Foundation.h>

int main() {
    @autoreleasepool {
        NSLog(@"Hello World");
    }
    return 0;
}`,
            go: `package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`
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
            cpp20: `// C++20 使用 auto 和指定初始化器
auto age = 25;
auto price = 19.99;
auto name = std::string("Alice");

// C++20 指定初始化器
struct Point { int x; int y; };
Point p{.x = 10, .y = 20};`,
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
local name = "Alice"`,
            ruby: `age = 25
price = 19.99
name = "Alice"`,
            swift: `var age = 25
let price = 19.99
let name = "Alice"`,
            objectivec: `int age = 25;
double price = 19.99;
NSString *name = @"Alice";`,
            go: `age := 25
price := 19.99
name := "Alice"`
        }
    },
    {
        title: "函数定义",
        description: "定义和调用函数",
        codes: {
            cpp: `int add(int a, int b) {
    return a + b;
}`,
            cpp20: `// C++20 简化函数模板语法
auto add(auto a, auto b) {
    return a + b;
}

// 或使用 Concepts
template<typename T>
concept Numeric = std::is_arithmetic_v<T>;

auto multiply(Numeric auto a, Numeric auto b) {
    return a * b;
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
end`,
            ruby: `def add(a, b)
  a + b
end`,
            swift: `func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}`,
            objectivec: `- (int)add:(int)a with:(int)b {
    return a + b;
}`,
            go: `func add(a int, b int) int {
    return a + b
}`
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
end`,
            ruby: `if score >= 90
  puts "优秀"
elsif score >= 60
  puts "及格"
end`,
            swift: `if score >= 90 {
    print("优秀")
} else if score >= 60 {
    print("及格")
}`,
            objectivec: `if (score >= 90) {
    NSLog(@"优秀");
} else if (score >= 60) {
    NSLog(@"及格");
}`,
            go: `if score >= 90 {
    fmt.Println("优秀")
} else if score >= 60 {
    fmt.Println("及格")
}`
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
end`,
            ruby: `(0...5).each do |i|
  puts i
end`,
            swift: `for i in 0..<5 {
    print(i)
}`,
            objectivec: `for (int i = 0; i < 5; i++) {
    NSLog(@"%d", i);
}`,
            go: `for i := 0; i < 5; i++ {
    fmt.Println(i)
}`
        }
    },
    {
        title: "类和对象",
        description: "面向对象编程 - 类的定义",
        codes: {
            cpp: `class Person {
private:
    std::string name;
    int age;
public:
    Person(std::string n, int a) : name(n), age(a) {}
    void greet() {
        std::cout << "Hello, " << name;
    }
};`,
            cpp20: `class Person {
private:
    std::string name;
    int age;
public:
    Person(std::string n, int a) : name(n), age(a) {}
    void greet() {
        std::println("Hello, {}", name);
    }
};`,
            python: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        print(f"Hello, {self.name}")`,
            rust: `struct Person {
    name: String,
    age: i32,
}

impl Person {
    fn new(name: String, age: i32) -> Self {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, {}", self.name);
    }
}`,
            java: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void greet() {
        System.out.println("Hello, " + name);
    }
}`,
            csharp: `public class Person {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void Greet() {
        Console.WriteLine($"Hello, {name}");
    }
}`,
            javascript: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(\`Hello, \${this.name}\`);
    }
}`,
            typescript: `class Person {
    private name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): void {
        console.log(\`Hello, \${this.name}\`);
    }
}`,
            lua: `-- Lua 使用表模拟类
Person = {}
Person.__index = Person

function Person:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, Person)
    return obj
end

function Person:greet()
    print("Hello, " .. self.name)
end`,
            ruby: `class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    puts "Hello, #{@name}"
  end
end`,
            swift: `class Person {
    private var name: String
    private var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func greet() {
        print("Hello, \\(name)")
    }
}`,
            objectivec: `@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) int age;
- (instancetype)initWithName:(NSString *)name age:(int)age;
- (void)greet;
@end

@implementation Person
- (instancetype)initWithName:(NSString *)name age:(int)age {
    if (self = [super init]) {
        _name = name;
        _age = age;
    }
    return self;
}
- (void)greet {
    NSLog(@"Hello, %@", self.name);
}
@end`,
            go: `type Person struct {
    name string
    age  int
}

func NewPerson(name string, age int) *Person {
    return &Person{name: name, age: age}
}

func (p *Person) Greet() {
    fmt.Printf("Hello, %s\\n", p.name)
}`
        }
    },
    {
        title: "继承",
        description: "类的继承和多态",
        codes: {
            cpp: `class Animal {
public:
    virtual void speak() {
        std::cout << "Some sound";
    }
};

class Dog : public Animal {
public:
    void speak() override {
        std::cout << "Woof!";
    }
};`,
            cpp20: `class Animal {
public:
    virtual void speak() {
        std::println("Some sound");
    }
};

class Dog : public Animal {
public:
    void speak() override {
        std::println("Woof!");
    }
};`,
            python: `class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):
    def speak(self):
        print("Woof!")`,
            rust: `// Rust 使用 trait 实现多态
trait Animal {
    fn speak(&self);
}

struct Dog;

impl Animal for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}`,
            java: `class Animal {
    public void speak() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof!");
    }
}`,
            csharp: `class Animal {
    public virtual void Speak() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal {
    public override void Speak() {
        Console.WriteLine("Woof!");
    }
}`,
            javascript: `class Animal {
    speak() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}`,
            typescript: `class Animal {
    speak(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Woof!");
    }
}`,
            lua: `-- Lua 继承通过元表实现
Animal = {}
Animal.__index = Animal

function Animal:new()
    local obj = {}
    setmetatable(obj, Animal)
    return obj
end

function Animal:speak()
    print("Some sound")
end

Dog = setmetatable({}, {__index = Animal})
Dog.__index = Dog

function Dog:new()
    local obj = Animal:new()
    setmetatable(obj, Dog)
    return obj
end

function Dog:speak()
    print("Woof!")
end`,
            ruby: `class Animal
  def speak
    puts "Some sound"
  end
end

class Dog < Animal
  def speak
    puts "Woof!"
  end
end`,
            swift: `class Animal {
    func speak() {
        print("Some sound")
    }
}

class Dog: Animal {
    override func speak() {
        print("Woof!")
    }
}`,
            objectivec: `@interface Animal : NSObject
- (void)speak;
@end

@implementation Animal
- (void)speak {
    NSLog(@"Some sound");
}
@end

@interface Dog : Animal
@end

@implementation Dog
- (void)speak {
    NSLog(@"Woof!");
}
@end`,
            go: `// Go 使用接口实现多态
type Animal interface {
    Speak()
}

type Dog struct{}

func (d Dog) Speak() {
    fmt.Println("Woof!")
}`
        }
    },
    {
        title: "数组/列表",
        description: "数组和列表的创建与操作",
        codes: {
            cpp: `#include <vector>

std::vector<int> nums = {1, 2, 3};
nums.push_back(4);
int first = nums[0];
int size = nums.size();`,
            cpp20: `#include <vector>
#include <ranges>

// C++20 CTAD (类模板参数推导)
std::vector nums = {1, 2, 3};
nums.push_back(4);

// C++20 Ranges
auto doubled = nums | std::views::transform([](int n) { return n * 2; });`,
            python: `nums = [1, 2, 3]
nums.append(4)
first = nums[0]
size = len(nums)`,
            rust: `let mut nums = vec![1, 2, 3];
nums.push(4);
let first = nums[0];
let size = nums.len();`,
            java: `ArrayList<Integer> nums = new ArrayList<>();
nums.add(1);
nums.add(2);
int first = nums.get(0);`,
            csharp: `List<int> nums = new List<int> {1, 2, 3};
nums.Add(4);
int first = nums[0];`,
            javascript: `const nums = [1, 2, 3];
nums.push(4);
const first = nums[0];`,
            typescript: `const nums: number[] = [1, 2, 3];
nums.push(4);
const first: number = nums[0];`,
            lua: `local nums = {1, 2, 3}
table.insert(nums, 4)
local first = nums[1]`,
            ruby: `nums = [1, 2, 3]
nums.push(4)
first = nums[0]`,
            swift: `var nums = [1, 2, 3]
nums.append(4)
let first = nums[0]`,
            objectivec: `NSMutableArray *nums = [@[@1, @2, @3] mutableCopy];
[nums addObject:@4];
NSNumber *first = nums[0];`,
            go: `nums := []int{1, 2, 3}
nums = append(nums, 4)
first := nums[0]`
        }
    },
    {
        title: "字典/映射",
        description: "键值对数据结构",
        codes: {
            cpp: `#include <map>

std::map<std::string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;
int age = ages["Alice"];`,
            cpp20: `#include <map>

std::map ages = {
    {"Alice", 25},
    {"Bob", 30}
};`,
            python: `ages = {"Alice": 25, "Bob": 30}
ages["Charlie"] = 35
age = ages["Alice"]`,
            rust: `use std::collections::HashMap;

let mut ages = HashMap::new();
ages.insert("Alice", 25);
ages.insert("Bob", 30);`,
            java: `HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);`,
            csharp: `Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
ages["Bob"] = 30;`,
            javascript: `const ages = new Map();
ages.set("Alice", 25);
ages.set("Bob", 30);`,
            typescript: `const ages = new Map<string, number>();
ages.set("Alice", 25);
ages.set("Bob", 30);`,
            lua: `local ages = {
    Alice = 25,
    Bob = 30
}`,
            ruby: `ages = {"Alice" => 25, "Bob" => 30}
ages["Charlie"] = 35
age = ages["Alice"]`,
            swift: `var ages = ["Alice": 25, "Bob": 30]
ages["Charlie"] = 35
let age = ages["Alice"]`,
            objectivec: `NSMutableDictionary *ages = [@{@"Alice": @25, @"Bob": @30} mutableCopy];
ages[@"Charlie"] = @35;
NSNumber *age = ages[@"Alice"];`,
            go: `ages := map[string]int{
    "Alice": 25,
    "Bob":   30,
}
ages["Charlie"] = 35
age := ages["Alice"]`
        }
    },
    {
        title: "错误处理",
        description: "异常捕获和错误处理",
        codes: {
            cpp: `#include <stdexcept>

try {
    throw std::runtime_error("错误");
} catch (const std::exception& e) {
    std::cerr << e.what();
}`,
            cpp20: `#include <stdexcept>

try {
    throw std::runtime_error("错误");
} catch (const std::exception& e) {
    std::println(stderr, "{}", e.what());
}`,
            python: `try:
    raise ValueError("错误")
except ValueError as e:
    print(f"捕获: {e}")`,
            rust: `fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("除数为零".to_string())
    } else {
        Ok(a / b)
    }
}`,
            java: `try {
    throw new Exception("错误");
} catch (Exception e) {
    System.err.println(e.getMessage());
}`,
            csharp: `try {
    throw new Exception("错误");
} catch (Exception e) {
    Console.Error.WriteLine(e.Message);
}`,
            javascript: `try {
    throw new Error("错误");
} catch (error) {
    console.error(error.message);
}`,
            typescript: `try {
    throw new Error("错误");
} catch (error) {
    console.error((error as Error).message);
}`,
            lua: `local status, err = pcall(function()
    error("错误")
end)
if not status then
    print("捕获: " .. err)
end`,
            ruby: `begin
  raise StandardError, "错误"
rescue StandardError => e
  puts "捕获: #{e.message}"
end`,
            swift: `do {
    throw NSError(domain: "error", code: 0)
} catch {
    print("捕获: \\(error)")
}`,
            objectivec: `@try {
    @throw [NSException exceptionWithName:@"Error" reason:@"错误" userInfo:nil];
} @catch (NSException *exception) {
    NSLog(@"捕获: %@", exception.reason);
}`,
            go: `func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("除数为零")
    }
    return a / b, nil
}`
        }
    },
    {
        title: "异步编程",
        description: "异步操作和并发",
        codes: {
            cpp: `#include <future>

auto future = std::async([]() {
    return 42;
});
int result = future.get();`,
            cpp20: `#include <future>

auto future = std::async([]() {
    return 42;
});
auto result = future.get();`,
            python: `import asyncio

async def fetch():
    await asyncio.sleep(1)
    return "数据"

asyncio.run(fetch())`,
            rust: `async fn fetch() -> String {
    "数据".to_string()
}

// 需要 tokio 运行时
// let result = fetch().await;`,
            java: `CompletableFuture<String> future = 
    CompletableFuture.supplyAsync(() -> "数据");
future.thenAccept(System.out::println);`,
            csharp: `async Task<string> FetchAsync() {
    await Task.Delay(1000);
    return "数据";
}`,
            javascript: `async function fetch() {
    await new Promise(r => setTimeout(r, 1000));
    return "数据";
}`,
            typescript: `async function fetch(): Promise<string> {
    await new Promise(r => setTimeout(r, 1000));
    return "数据";
}`,
            lua: `-- Lua 没有原生异步支持
-- 通常使用协程
local co = coroutine.create(function()
    print("异步任务")
end)
coroutine.resume(co)`,
            ruby: `# Ruby 使用 Fiber 或第三方库
require 'async'

Async do
  sleep 1
  "数据"
end`,
            swift: `func fetch() async -> String {
    try? await Task.sleep(nanoseconds: 1_000_000_000)
    return "数据"
}

// 使用: await fetch()`,
            objectivec: `dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSLog(@"异步任务");
});`,
            go: `func fetch() string {
    time.Sleep(1 * time.Second)
    return "数据"
}

// 并发: go fetch()`
        }
    },
    {
        title: "内存管理",
        description: "内存分配和管理",
        codes: {
            cpp: `// 智能指针
#include <memory>

auto ptr = std::make_unique<int>(42);
auto shared = std::make_shared<int>(100);`,
            cpp20: `// 智能指针
#include <memory>

auto ptr = std::make_unique<int>(42);
auto shared = std::make_shared<int>(100);`,
            python: `# Python 自动垃圾回收
# 使用 del 删除引用
obj = [1, 2, 3]
del obj`,
            rust: `// Rust 所有权系统
let s1 = String::from("hello");
let s2 = s1; // s1 移动到 s2
// s1 不再有效`,
            java: `// Java 自动垃圾回收
Object obj = new Object();
obj = null; // 标记为可回收`,
            csharp: `// C# 自动垃圾回收
// using 语句自动释放
using (var file = File.Open("test.txt")) {
    // 使用文件
}`,
            javascript: `// JavaScript 自动垃圾回收
let obj = {data: "test"};
obj = null; // 标记为可回收`,
            typescript: `// TypeScript 自动垃圾回收
let obj: object | null = {data: "test"};
obj = null; // 标记为可回收`,
            lua: `-- Lua 自动垃圾回收
local obj = {data = "test"}
obj = nil -- 标记为可回收
collectgarbage() -- 手动触发GC`,
            ruby: `# Ruby 自动垃圾回收
obj = [1, 2, 3]
obj = nil
GC.start # 手动触发GC`,
            swift: `// Swift 使用 ARC 自动引用计数
class MyClass {
    deinit {
        print("释放资源")
    }
}
var obj: MyClass? = MyClass()
obj = nil // 自动释放`,
            objectivec: `// Objective-C 使用 ARC
@autoreleasepool {
    NSObject *obj = [[NSObject alloc] init];
    obj = nil; // 自动释放
}`,
            go: `// Go 自动垃圾回收
obj := make([]int, 3)
obj = nil // 标记为可回收
runtime.GC() // 手动触发GC`
        }
    }
];

// Node.js 环境下导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = examples;
}
