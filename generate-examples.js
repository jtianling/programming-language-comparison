// 从 examples.js 提取示例并生成按语言分组的独立文件
const fs = require('fs');
const path = require('path');

// 导入示例数据
const examples = require('./examples.js');
const { examplesConfig, languagesConfig } = require('./examples-config.js');

// 示例 ID 映射
const exampleIdMap = {
    "Hello World": "hello-world",
    "变量声明": "variables",
    "函数定义": "functions",
    "条件语句": "conditionals",
    "循环": "loops",
    "类和对象": "classes",
    "继承": "inheritance",
    "元组": "tuples",
    "数组/列表": "arrays",
    "字典/映射": "maps",
    "错误处理": "error-handling",
    "异步编程": "async",
    "内存管理": "memory"
};

// 清理旧的 _examples 目录
const examplesDir = '_examples';
if (fs.existsSync(examplesDir)) {
    fs.rmSync(examplesDir, { recursive: true });
    console.log('已删除旧的 _examples 目录');
}

// 创建新的目录结构：_examples/{language}/{example}.{ext}
examples.forEach(example => {
    const exampleId = exampleIdMap[example.title];
    
    Object.keys(example.codes).forEach(lang => {
        const langConfig = languagesConfig[lang];
        if (!langConfig) {
            console.warn(`未找到语言配置: ${lang}`);
            return;
        }
        
        const langDir = path.join(examplesDir, lang);
        
        // 创建语言目录
        if (!fs.existsSync(langDir)) {
            fs.mkdirSync(langDir, { recursive: true });
        }
        
        // 创建示例文件
        const filename = `${exampleId}.${langConfig.ext}`;
        const filepath = path.join(langDir, filename);
        const code = example.codes[lang];
        
        fs.writeFileSync(filepath, code, 'utf8');
        console.log(`创建文件: ${filepath}`);
    });
});

console.log('\n所有示例文件已生成！');
console.log('\n新的目录结构：');
console.log('_examples/');
Object.keys(languagesConfig).forEach(lang => {
    console.log(`  ${lang}/`);
});
