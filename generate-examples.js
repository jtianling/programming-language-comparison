// 从 examples.js 提取示例并生成独立文件的脚本
const fs = require('fs');
const path = require('path');

// 导入示例数据
const examples = require('./examples.js');

// 示例 ID 映射
const exampleIdMap = {
    "Hello World": "hello-world",
    "变量声明": "variables",
    "函数定义": "functions",
    "条件语句": "conditionals",
    "循环": "loops",
    "类和对象": "classes",
    "继承": "inheritance",
    "数组/列表": "arrays",
    "字典/映射": "maps",
    "错误处理": "error-handling",
    "异步编程": "async",
    "内存管理": "memory"
};

// 语言扩展名映射
const extensionMap = {
    cpp: 'cpp',
    cpp20: 'cpp',
    python: 'py',
    rust: 'rs',
    java: 'java',
    csharp: 'cs',
    javascript: 'js',
    typescript: 'ts',
    lua: 'lua'
};

// 创建示例文件
examples.forEach(example => {
    const exampleId = exampleIdMap[example.title];
    const exampleDir = path.join('_examples', exampleId);
    
    // 创建示例目录
    if (!fs.existsSync(exampleDir)) {
        fs.mkdirSync(exampleDir, { recursive: true });
    }
    
    // 为每种语言创建代码文件
    Object.keys(example.codes).forEach(lang => {
        const extension = extensionMap[lang];
        const filename = `${lang}.${extension}`;
        const filepath = path.join(exampleDir, filename);
        const code = example.codes[lang];
        
        fs.writeFileSync(filepath, code, 'utf8');
        console.log(`创建文件: ${filepath}`);
    });
});

console.log('所有示例文件已生成！');
