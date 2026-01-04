# 编程语言语法对比网站

通过实例对比不同编程语言的语法差异,帮助开发者快速了解和学习新的编程语言。

## 🎯 项目特点

- ✅ **纯前端实现**：无需构建步骤,直接在浏览器中运行
- ✅ **完全自动化**：添加新语言只需修改配置文件,无需手动添加 HTML
- ✅ **代码分离管理**：每种语言的示例代码存储在独立的文件中（如 `.cpp`, `.py`, `.rs` 等）
- ✅ **智能按钮生成**：根据配置自动生成语言选择按钮
- ✅ **拖拽排序**：支持拖拽调整语言显示顺序
- ✅ **用户偏好记忆**：使用 localStorage 自动保存用户选择
- ✅ **语法高亮**：使用 Prism.js 提供美观的代码高亮
- ✅ **响应式设计**：适配各种屏幕尺寸

## 📁 项目结构

```
programming-language-comparison/
├── index.html              # 主页面
├── app.js                  # 应用逻辑(自动化按钮生成和内容加载)
├── examples-config.js      # 语言和示例配置
├── styles.css              # 样式文件
├── _examples/              # 示例代码目录(按语言组织)
│   ├── python/             # Python 示例
│   │   ├── hello-world.py
│   │   ├── variables.py
│   │   ├── functions.py
│   │   └── ...
│   ├── rust/               # Rust 示例
│   │   ├── hello-world.rs
│   │   ├── variables.rs
│   │   └── ...
│   ├── commonlisp/         # Common Lisp 示例
│   │   ├── hello-world.lisp
│   │   └── ...
│   └── ...                 # 其他语言
├── README.md               # 本文档
└── CONTRIBUTING.md         # 贡献指南(详细说明如何添加语言)
```

## 🚀 快速开始

### 本地运行

无需安装依赖,只需要一个 HTTP 服务器:

使用 Python 3:
```bash
python3 -m http.server 8000
```

使用 Node.js (http-server):
```bash
npx http-server -p 8000
```

使用 Python 2:
```bash
python -m SimpleHTTPServer 8000
```

然后在浏览器中打开: http://localhost:8000

**为什么需要 HTTP 服务器?**
- 项目使用 fetch API 动态加载代码文件
- fetch API 需要 HTTP/HTTPS 协议,不能使用 file:// 协议

### 使用方法

1. **选择语言**: 点击语言按钮来显示/隐藏特定语言
2. **调整顺序**: 拖动语言按钮来调整显示顺序
3. **查看对比**: 滚动页面查看不同语言的语法对比
4. **偏好保存**: 你的语言选择和顺序会自动保存在浏览器中

## 📝 添加新语言

详细步骤请参考 [CONTRIBUTING.md](./CONTRIBUTING.md)

### 简要步骤

**步骤 1**: 在 `examples-config.js` 添加语言配置

```javascript
const languagesConfig = {
    // ... 现有语言 ...

    your_language: {
        name: '语言显示名称',
        ext: '文件扩展名',
        prism: 'prism语法ID'
    }
};
```

**步骤 2**: 创建示例代码文件

```bash
mkdir _examples/your_language
```

然后为每个示例创建对应的代码文件:
- `_examples/your_language/hello-world.ext`
- `_examples/your_language/variables.ext`
- `_examples/your_language/functions.ext`
- 等等...

**步骤 3**: (可选)在 `index.html` 中添加 Prism.js 语言支持

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-{language}.min.js"></script>
```

**完成!** 刷新页面,新语言会自动显示!

### 示例: 添加 Common Lisp

在 `examples-config.js` 中:
```javascript
commonlisp: {
    name: 'Common Lisp',
    ext: 'lisp',
    prism: 'lisp'
}
```

创建文件:
```bash
mkdir _examples/commonlisp
# 然后添加 hello-world.lisp, variables.lisp 等文件
```

在 `index.html` 中:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-lisp.min.js"></script>
```

## 🌈 添加新的语法特性示例

**步骤 1**: 在 `examples-config.js` 添加示例配置

```javascript
const examplesConfig = [
    // ... 现有示例 ...

    {
        id: "pattern-matching",
        title: "模式匹配",
        description: "使用模式匹配进行数据解构"
    }
];
```

**步骤 2**: 为各语言添加示例代码

在每个语言目录下创建对应文件:
- `_examples/python/pattern-matching.py`
- `_examples/rust/pattern-matching.rs`
- 等等...

**注意**: 不是所有语言都需要实现所有特性,只添加支持的语言即可。

## 🛠️ 调试

### 查看调试信息

打开浏览器开发者工具的控制台(F12),你会看到详细的调试信息:

- `[语言初始化]` - 语言加载和初始化信息,检测新添加的语言
- `[按钮渲染]` - 按钮生成信息,显示渲染了多少个按钮
- `[示例加载]` - 代码示例加载统计,显示每个语言加载了多少示例

### 常见问题

**问题: 添加新语言后按钮没有显示?**

解决方法:
1. 硬刷新页面: `Ctrl+Shift+R` (Windows/Linux) 或 `Cmd+Shift+R` (Mac)
2. 清除 localStorage:
   ```javascript
   // 在浏览器控制台执行
   localStorage.clear();
   location.reload();
   ```
3. 检查配置文件语法是否正确
4. 查看浏览器控制台是否有错误信息

**问题: 代码没有语法高亮?**

检查:
1. `index.html` 中是否包含了对应语言的 Prism.js 脚本
2. `prism` 配置项是否正确
3. 网络是否正常(Prism.js 从 CDN 加载)

**问题: 示例代码没有显示?**

检查:
1. 文件路径是否正确: `_examples/{language_id}/{example_id}.{ext}`
2. 文件扩展名是否与配置一致
3. 是否使用 HTTP 服务器(不能直接打开 HTML 文件)

### 查看内部状态

在浏览器控制台执行:

```javascript
// 查看所有语言配置
console.log(languagesConfig);

// 查看当前语言顺序
console.log(languageOrder);

// 查看选中的语言
console.log(Array.from(selectedLanguages));

// 查看加载的示例数据
console.log(examplesData);
```

## 📂 核心文件说明

### `examples-config.js`
配置文件,定义:
- **languagesConfig**: 所有支持的编程语言及其配置(名称、扩展名、Prism.js ID)
- **examplesConfig**: 示例列表及其元数据(ID、标题、描述)

### `app.js`
应用逻辑,负责:
- **自动生成语言按钮**: 从 `languagesConfig` 读取并生成 DOM 元素
- **动态加载代码**: 使用 fetch API 从 `_examples/` 加载示例代码
- **用户偏好管理**: localStorage 保存和恢复语言选择和顺序
- **拖拽排序**: 实现语言按钮的拖拽功能
- **调试日志**: 输出详细的调试信息

### `_examples/`
存储所有示例代码的目录,按语言组织:
- 每个语言一个子目录
- 子目录名必须与 `languagesConfig` 中的键名一致
- 文件名格式: `{example_id}.{ext}`

### `index.html`
HTML 主页面,包含:
- 基本页面结构
- Prism.js 语法高亮库引用
- 语言选择区域(按钮由 JS 动态生成)
- 示例显示区域(内容由 JS 动态生成)

### `styles.css`
样式文件,定义网站外观。

## 🎨 自定义样式

编辑 `styles.css` 文件来修改网站外观。

## 🔧 工作原理

### 自动化设计

本项目采用**完全自动化**的架构设计:

1. **配置驱动**: 所有语言和示例通过 `examples-config.js` 集中配置
2. **按钮自动生成**: `app.js` 读取 `languagesConfig`,自动生成所有语言按钮
3. **代码动态加载**: 使用 fetch API 从 `_examples/` 目录动态加载代码文件
4. **智能处理新语言**: 新添加的语言会自动选中并显示,无需手动操作
5. **用户偏好记忆**: localStorage 自动保存和恢复用户的语言选择和排序

### 加载流程

1. **初始化** (`DOMContentLoaded`)
   - 从 `languagesConfig` 读取所有语言
   - 从 localStorage 恢复用户偏好(或使用默认值)
   - 检测并自动选中新添加的语言

2. **生成按钮** (`renderLanguageCheckboxes`)
   - 为每个语言创建可拖拽的按钮 DOM 元素
   - 绑定点击事件(切换选中状态)
   - 绑定拖拽事件(调整顺序)

3. **加载代码** (`loadAllExamples`)
   - 并行 fetch 所有语言的所有示例代码
   - 将代码缓存到 `examplesData` 对象
   - 输出加载统计信息

4. **渲染示例** (`renderExamples`)
   - 按照 `examplesConfig` 的顺序渲染示例
   - 按照用户的 `languageOrder` 排列代码块
   - 使用 Prism.js 进行语法高亮
   - 根据 `selectedLanguages` 显示/隐藏代码块

### 添加新语言时发生了什么?

1. 你在 `examples-config.js` 添加配置
2. 刷新页面后,`initializeLanguageOrder()` 检测到新语言
3. 新语言自动添加到 `languageOrder` 末尾
4. 新语言自动添加到 `selectedLanguages` (自动选中)
5. `renderLanguageCheckboxes()` 生成新的按钮
6. `loadAllExamples()` 加载新语言的代码文件
7. `renderExamples()` 显示新语言的代码块

这就是为什么添加新语言只需要:
1. 修改配置(3 行)
2. 添加代码文件

系统会自动处理其他所有事情!

## 🌟 支持的语言

目前支持以下 15+ 种编程语言:

| 语言 | ID | 扩展名 |
|------|-----|--------|
| C++ | cpp | .cpp |
| C++20 | cpp20 | .cpp |
| Python | python | .py |
| Rust | rust | .rs |
| Java | java | .java |
| C# | csharp | .cs |
| JavaScript | javascript | .js |
| TypeScript | typescript | .ts |
| Lua | lua | .lua |
| Ruby | ruby | .rb |
| Swift | swift | .swift |
| Objective-C | objectivec | .m |
| Go | go | .go |
| Zig | zig | .zig |
| Common Lisp | commonlisp | .lisp |

## 📚 对比的语法特性

- Hello World
- 变量声明
- 函数定义
- 条件语句
- 循环
- 类和对象
- 继承
- 元组
- 数组/列表
- 字典/映射
- 错误处理
- 异步编程
- 内存管理

## 📦 部署

本项目是纯静态网站,可以部署到任何支持静态网站托管的平台:

- **GitHub Pages**: 直接推送到 gh-pages 分支
- **Netlify**: 拖放整个项目目录
- **Vercel**: 连接 Git 仓库自动部署
- **Cloudflare Pages**: 简单快速的静态托管
- **任何 Web 服务器**: 上传所有文件到服务器根目录

无需构建步骤,所有文件都可以直接使用!

## ⚙️ 技术栈

- **纯前端**: HTML + CSS + JavaScript (无框架,无构建)
- **代码高亮**: [Prism.js](https://prismjs.com/)
- **数据存储**: localStorage (用户偏好)
- **API**: Drag and Drop API (拖拽排序)

## 🤝 贡献

欢迎贡献!常见贡献方式:

- 添加新的编程语言 → 参考 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 添加新的语法特性示例
- 改进现有示例代码
- 修复 bug
- 改进文档
- 优化样式和用户体验

## 📄 许可证

MIT License

## 🤖 开发工具

本项目使用 LLM 辅助开发。

---

祝你学习愉快! 如有问题,请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 或浏览器控制台的调试信息。
