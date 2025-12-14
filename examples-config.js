// 示例配置 - 定义示例的元数据和顺序
// 实际代码从 _examples/{language}/{example}.{ext} 文件加载

const examplesConfig = [
    {
        id: "hello-world",
        title: "Hello World",
        description: "最基本的程序 - 输出 Hello World"
    },
    {
        id: "variables",
        title: "变量声明",
        description: "声明和初始化变量"
    },
    {
        id: "functions",
        title: "函数定义",
        description: "定义和调用函数"
    },
    {
        id: "conditionals",
        title: "条件语句",
        description: "if-else 条件判断"
    },
    {
        id: "loops",
        title: "循环",
        description: "for 和 while 循环"
    },
    {
        id: "classes",
        title: "类和对象",
        description: "面向对象编程 - 类的定义"
    },
    {
        id: "inheritance",
        title: "继承",
        description: "类的继承和多态"
    },
    {
        id: "tuples",
        title: "元组",
        description: "固定大小的不可变序列，可包含不同类型元素"
    },
    {
        id: "arrays",
        title: "数组/列表",
        description: "数组和列表的创建与操作"
    },
    {
        id: "maps",
        title: "字典/映射",
        description: "键值对数据结构"
    },
    {
        id: "error-handling",
        title: "错误处理",
        description: "异常捕获和错误处理"
    },
    {
        id: "async",
        title: "异步编程",
        description: "异步操作和并发"
    },
    {
        id: "memory",
        title: "内存管理",
        description: "内存分配和管理"
    }
];

// 语言配置
const languagesConfig = {
    cpp: { name: 'C++', ext: 'cpp', prism: 'cpp' },
    cpp20: { name: 'C++20', ext: 'cpp', prism: 'cpp' },
    python: { name: 'Python', ext: 'py', prism: 'python' },
    rust: { name: 'Rust', ext: 'rs', prism: 'rust' },
    java: { name: 'Java', ext: 'java', prism: 'java' },
    csharp: { name: 'C#', ext: 'cs', prism: 'csharp' },
    javascript: { name: 'JavaScript', ext: 'js', prism: 'javascript' },
    typescript: { name: 'TypeScript', ext: 'ts', prism: 'typescript' },
    lua: { name: 'Lua', ext: 'lua', prism: 'lua' },
    ruby: { name: 'Ruby', ext: 'rb', prism: 'ruby' },
    swift: { name: 'Swift', ext: 'swift', prism: 'swift' },
    objectivec: { name: 'Objective-C', ext: 'm', prism: 'objectivec' },
    go: { name: 'Go', ext: 'go', prism: 'go' }
};

// Node.js 环境下导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examplesConfig, languagesConfig };
}
