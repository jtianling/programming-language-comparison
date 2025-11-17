# 编程语言语法对比网站

通过实例对比不同编程语言的语法差异

## 🎯 项目特点

- ✅ **代码分离管理**：每种语言的示例代码存储在独立的文件中（如 `.cpp`, `.py`, `.rs` 等）
- ✅ **静态网站生成**：使用 Node.js 构建脚本生成静态 HTML，无需运行时依赖
- ✅ **配置化设计**：语言和示例配置集中在 `_config.yml` 中，易于管理
- ✅ **语法高亮**：使用 Prism.js 提供美观的代码高亮
- ✅ **响应式设计**：适配各种屏幕尺寸

## 📁 项目结构

```
.
├── _config.yml              # 网站配置文件（语言、示例定义）
├── _examples/               # 示例代码目录
│   ├── hello-world/        # 每个示例一个文件夹
│   │   ├── cpp.cpp         # C++ 代码
│   │   ├── python.py       # Python 代码
│   │   ├── rust.rs         # Rust 代码
│   │   └── ...
│   ├── variables/
│   ├── functions/
│   └── ...
├── _layouts/               # HTML 布局模板
│   └── default.html
├── assets/                 # 静态资源
│   └── app.js             # JavaScript 代码
├── styles.css             # 样式文件
├── index.md               # 主页模板
├── build.js               # 构建脚本
├── generate-examples.js   # 从旧代码提取示例的脚本
└── _site/                 # 生成的网站（自动生成）
    ├── index.html
    ├── styles.css
    └── assets/
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 构建网站

```bash
npm run build
```

生成的网站位于 `_site/` 目录。

### 在浏览器中查看

```bash
# macOS
npm run dev

# 或手动打开
open _site/index.html

# Windows
start _site/index.html

# Linux
xdg-open _site/index.html
```

## 📝 添加新示例

### 1. 在 `_config.yml` 中添加示例定义

```yaml
examples:
  - id: my-new-example
    title: 我的新示例
    description: 这是一个新的语法示例
```

### 2. 创建示例代码文件

在 `_examples/my-new-example/` 目录中为每种语言创建代码文件：

```bash
mkdir _examples/my-new-example
```

然后创建各语言的代码文件：
- `_examples/my-new-example/cpp.cpp`
- `_examples/my-new-example/python.py`
- `_examples/my-new-example/rust.rs`
- 等等...

### 3. 重新构建网站

```bash
npm run build
```

## 🌐 添加新语言

### 1. 在 `_config.yml` 中添加语言配置

```yaml
languages:
  golang:
    name: Go
    extension: go
    prism: go
```

### 2. 为现有示例添加新语言代码

为每个示例目录添加对应的代码文件，如 `_examples/hello-world/golang.go`

### 3. 更新布局模板（如需要）

在 `_layouts/default.html` 中添加 Prism.js 语言支持：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-go.min.js"></script>
```

## 🛠️ 可用命令

```bash
# 构建网站
npm run build

# 从旧的 examples.js 生成示例文件（仅在迁移时使用一次）
npm run generate-examples

# 构建并在浏览器中打开（macOS）
npm run dev
```

## 📂 文件说明

### `_config.yml`
网站的主配置文件，定义：
- 网站标题和描述
- 支持的编程语言及其配置
- 示例列表及其元数据

### `build.js`
构建脚本，负责：
- 读取配置和示例代码
- 生成 HTML 内容
- 应用模板
- 输出静态网站到 `_site/` 目录

### `_examples/`
存储所有示例代码的目录。每个示例一个子目录，子目录中包含各语言的代码文件。

### `_layouts/default.html`
HTML 布局模板，定义网站的整体结构。

### `index.md`
主页模板，定义示例的显示方式。

## 🎨 自定义样式

编辑 `styles.css` 文件来修改网站外观。

## 🔧 工作原理

1. **配置读取**：`build.js` 读取 `_config.yml` 中的配置
2. **代码加载**：从 `_examples/` 目录读取各语言的代码文件
3. **HTML 生成**：将代码和配置组合成 HTML
4. **模板应用**：使用 `_layouts/default.html` 作为页面框架
5. **输出文件**：生成完整的静态网站到 `_site/` 目录

## 📦 部署

生成的 `_site/` 目录是一个完整的静态网站，可以部署到：

- GitHub Pages
- Netlify
- Vercel
- 任何支持静态网站的服务器

### GitHub Pages 部署示例

1. 将 `_site/` 目录内容推送到 `gh-pages` 分支
2. 在 GitHub 仓库设置中启用 GitHub Pages
3. 选择 `gh-pages` 分支作为源

或者使用 GitHub Actions 自动构建和部署（参考 `DEPLOYMENT.md`）。

## ⚙️ 技术栈

- **构建工具**：Node.js
- **配置格式**：YAML
- **语法高亮**：Prism.js
- **样式**：纯 CSS

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Pull Request 来添加更多语言或示例！
