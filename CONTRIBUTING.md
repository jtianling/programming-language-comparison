# 编程语言对比网站 - 贡献指南

本文档说明如何向本项目添加新的编程语言和语言特性。

## 项目结构

```
programming-language-comparison/
├── index.html              # 主页面
├── app.js                  # 主应用逻辑(自动生成按钮和内容)
├── examples-config.js      # 语言和示例配置
├── styles.css              # 样式文件
├── _examples/              # 示例代码目录
│   ├── python/             # Python 示例
│   │   ├── hello-world.py
│   │   ├── variables.py
│   │   └── ...
│   ├── rust/               # Rust 示例
│   │   ├── hello-world.rs
│   │   └── ...
│   └── commonlisp/         # Common Lisp 示例
│       ├── hello-world.lisp
│       └── ...
└── CONTRIBUTING.md         # 本文档
```

## 如何添加新的编程语言

添加新语言只需要**两步**,系统会自动处理其他所有事情(包括按钮生成、代码显示等):

### 步骤 1: 在 `examples-config.js` 中添加语言配置

在 `languagesConfig` 对象中添加新语言的配置:

```javascript
const languagesConfig = {
    // ... 现有语言 ...

    // 添加新语言,格式如下:
    your_language_id: {
        name: '显示名称',      // 在按钮和代码块标签上显示的名称
        ext: '文件扩展名',     // 代码文件的扩展名(不带点)
        prism: 'prism语言ID'  // Prism.js 的语言标识符
    }
};
```

**示例 - 添加 Common Lisp:**
```javascript
commonlisp: {
    name: 'Common Lisp',   // 显示为 "Common Lisp"
    ext: 'lisp',           // 文件扩展名 .lisp
    prism: 'lisp'          // Prism.js 使用 'lisp' 进行语法高亮
}
```

**重要提示:**
- `your_language_id` (键名)应该使用小写字母,单词之间可以用下划线或直接连接
- `prism` 值需要是 Prism.js 支持的语言 ID,参考: https://prismjs.com/#supported-languages
- 如果 Prism.js 不支持该语言,使用最接近的语言或 'clike'

### 步骤 2: 创建示例代码文件

在 `_examples/` 目录下创建新的语言目录,并添加示例代码文件:

```bash
mkdir _examples/your_language_id
```

为每个已存在的示例创建对应的代码文件。当前可用的示例 ID (在 `examplesConfig` 中定义):

- `hello-world` - Hello World 程序
- `variables` - 变量声明
- `functions` - 函数定义
- `conditionals` - 条件语句
- `loops` - 循环
- `classes` - 类和对象
- `inheritance` - 继承
- `tuples` - 元组
- `arrays` - 数组/列表
- `maps` - 字典/映射
- `error-handling` - 错误处理
- `async` - 异步编程
- `memory` - 内存管理

文件命名格式: `{example-id}.{ext}`

**示例 - Common Lisp 的文件:**
```
_examples/commonlisp/
├── hello-world.lisp
├── variables.lisp
├── functions.lisp
├── conditionals.lisp
├── loops.lisp
├── classes.lisp
├── inheritance.lisp
├── tuples.lisp
├── arrays.lisp
├── maps.lisp
├── error-handling.lisp
├── async.lisp
└── memory.lisp
```

**注意:**
- 不是所有语言都需要实现所有示例。如果某个特性不适用(例如没有 OOP 的语言没有 classes),可以跳过该文件
- 缺失的文件会被自动跳过,不会显示在该语言的代码块中

### 步骤 3: (可选)添加 Prism.js 语言支持

如果 `index.html` 中没有包含该语言的 Prism.js 支持,需要在 `<head>` 部分添加对应的脚本:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-{language}.min.js"></script>
```

例如,Common Lisp 的支持:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-lisp.min.js"></script>
```

查找可用的 Prism.js 组件: https://cdnjs.com/libraries/prism

## 系统如何自动处理新语言

当你完成上述步骤后,系统会自动:

1. **自动生成语言按钮**: `app.js` 中的 `renderLanguageCheckboxes()` 函数会读取 `languagesConfig` 中的所有语言,并自动生成按钮
2. **自动加载示例代码**: `loadAllExamples()` 函数会扫描所有语言目录,加载可用的示例代码
3. **自动显示代码块**: `renderExamples()` 函数会为每个语言生成代码块,并按照用户的语言顺序排列
4. **自动选中新语言**: 新添加的语言会自动被选中并显示(如果用户之前访问过网站,通过 localStorage 机制)

## 如何添加新的语言特性/示例

如果要添加一个全新的语言特性对比(例如 "模式匹配" 或 "泛型"):

### 步骤 1: 在 `examples-config.js` 中添加示例配置

在 `examplesConfig` 数组中添加新的示例定义:

```javascript
const examplesConfig = [
    // ... 现有示例 ...

    {
        id: "your-example-id",        // 唯一标识符,使用小写和连字符
        title: "示例标题",             // 显示在页面上的标题
        description: "示例描述"        // 示例的简短描述
    }
];
```

**示例 - 添加 "模式匹配" 特性:**
```javascript
{
    id: "pattern-matching",
    title: "模式匹配",
    description: "使用模式匹配进行数据解构和条件判断"
}
```

### 步骤 2: 为所有(或部分)语言添加示例代码

在每个语言的目录下创建对应的代码文件:

```
_examples/python/pattern-matching.py
_examples/rust/pattern-matching.rs
_examples/javascript/pattern-matching.js
... 等等
```

**注意:**
- 不需要为所有语言都添加该特性的示例
- 只添加该语言支持的特性
- 如果某个语言不支持该特性,直接跳过即可

## 常见问题排查

### 问题: 添加了新语言,但按钮没有显示

**可能原因和解决方法:**

1. **浏览器缓存问题**
   - 硬刷新页面: `Ctrl+Shift+R` (Windows/Linux) 或 `Cmd+Shift+R` (Mac)
   - 清除浏览器缓存和 localStorage
   - 在浏览器开发者工具中,清除 `localStorage` 中的 `languageOrder` 和 `selectedLanguages`

2. **配置错误**
   - 检查 `examples-config.js` 中的语言配置是否正确
   - 确保对象语法正确(逗号、引号等)
   - 打开浏览器控制台查看是否有 JavaScript 错误

3. **文件路径错误**
   - 确保语言 ID (键名)与目录名完全一致
   - 检查文件扩展名是否正确

### 问题: 代码没有语法高亮

1. **检查 Prism.js 支持**
   - 确认 `index.html` 中包含了该语言的 Prism.js 脚本
   - 检查 `prism` 配置是否正确

2. **使用替代方案**
   - 如果 Prism.js 不支持该语言,可以使用相似的语言
   - 例如:某些新语言可以使用 `'clike'` 或 `'javascript'`

### 问题: 示例代码没有显示

1. **检查文件路径**
   - 确保文件在 `_examples/{language_id}/{example_id}.{ext}` 路径下
   - 检查文件名是否与 `examplesConfig` 中的 `id` 完全一致

2. **检查文件编码**
   - 确保文件是 UTF-8 编码
   - 检查文件是否为空或包含有效的代码

3. **查看浏览器控制台**
   - 检查是否有网络请求失败(404 错误)
   - 查看是否有 JavaScript 错误

## 调试技巧

1. **查看语言配置**
   在浏览器控制台中执行:
   ```javascript
   console.log(languagesConfig);
   ```

2. **查看当前语言顺序**
   ```javascript
   console.log(languageOrder);
   console.log(selectedLanguages);
   ```

3. **查看加载的示例数据**
   ```javascript
   console.log(examplesData);
   ```

4. **清除 localStorage 重新开始**
   ```javascript
   localStorage.clear();
   location.reload();
   ```

5. **检查特定示例是否加载成功**
   ```javascript
   console.log(examplesData['hello-world'].codes);
   ```

## 代码示例编写建议

1. **保持简洁**: 示例代码应该简短、清晰,专注于展示特定语法
2. **添加注释**: 适当添加注释解释代码的关键部分
3. **展示惯用法**: 使用该语言的惯用写法,而不是直译其他语言
4. **避免依赖**: 尽量使用标准库,避免需要额外安装的第三方库
5. **保持一致**: 在所有示例中使用一致的代码风格

## 技术细节

### localStorage 机制

系统使用 localStorage 保存用户偏好:
- `languageOrder`: 语言的显示顺序(支持拖拽调整)
- `selectedLanguages`: 当前选中(显示)的语言

当添加新语言时:
- `app.js:20-21` 会自动将新语言添加到顺序末尾
- `app.js:30` 会自动选中新语言

### 按钮生成流程

1. `initializeLanguageOrder()` - 从 `languagesConfig` 和 localStorage 初始化语言列表
2. `renderLanguageCheckboxes()` - 根据 `languageOrder` 生成按钮 DOM 元素
3. 用户点击按钮 → 更新 `selectedLanguages` → 保存到 localStorage
4. `updateVisibleLanguages()` - 根据选中状态显示/隐藏代码块

### 代码加载流程

1. `loadAllExamples()` - 并行加载所有语言的所有示例
2. `loadExampleCode()` - 使用 fetch API 加载单个代码文件
3. 代码存储在 `examplesData[exampleId].codes[language]`
4. `renderExamples()` - 渲染所有示例到页面
5. `createCodeBlock()` - 创建单个代码块,使用 Prism.js 高亮

## 总结

添加新语言非常简单:
1. 在 `examples-config.js` 添加配置(3 行代码)
2. 创建示例代码文件
3. (可选)添加 Prism.js 支持

系统会自动处理所有其他事情,包括:
- 自动生成语言按钮
- 自动加载和显示代码
- 自动保存用户偏好
- 支持拖拽排序
- 支持语言选择

如有问题,请查看浏览器控制台的错误信息,或参考本文档的"常见问题排查"部分。
