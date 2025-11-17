# 使用指南

这份指南将帮助您快速上手并理解项目的工作流程。

## 📚 目录

1. [快速开始](#快速开始)
2. [项目架构](#项目架构)
3. [管理示例代码](#管理示例代码)
4. [管理语言配置](#管理语言配置)
5. [自定义样式](#自定义样式)
6. [构建和部署](#构建和部署)

## 快速开始

### 第一次使用

```bash
# 1. 克隆项目
git clone <your-repo-url>
cd programming-language-comparison

# 2. 安装依赖
npm install

# 3. 构建网站
npm run build

# 4. 在浏览器中查看
npm run dev  # macOS
# 或
open _site/index.html  # macOS
start _site/index.html  # Windows
xdg-open _site/index.html  # Linux
```

### 日常工作流程

1. **修改示例代码** - 编辑 `_examples/` 目录中的代码文件
2. **更新配置** - 如需添加新示例或语言，修改 `_config.yml`
3. **重新构建** - 运行 `npm run build`
4. **查看结果** - 在浏览器中打开 `_site/index.html`

## 项目架构

### 核心文件说明

```
_config.yml          ← 所有配置的中心
_examples/           ← 示例代码存储
  hello-world/
    cpp.cpp          ← 每个文件对应一种语言
    python.py
    rust.rs
    ...
build.js             ← 构建脚本（生成静态网站）
_layouts/default.html ← HTML 模板
index.md             ← 页面内容模板
```

### 构建流程

```
_config.yml ─┐
             │
_examples/   ├─→ build.js ─→ _site/index.html
             │
_layouts/    ┘
```

## 管理示例代码

### 添加新示例

**步骤 1：在配置中定义示例**

编辑 `_config.yml`，在 `examples` 列表末尾添加：

```yaml
examples:
  # ... 现有示例 ...
  - id: my-example        # 目录名（使用短横线分隔）
    title: 我的新示例     # 显示的标题
    description: 示例描述  # 简短说明
```

**步骤 2：创建示例目录**

```bash
mkdir _examples/my-example
```

**步骤 3：添加代码文件**

为每种支持的语言创建代码文件：

```bash
# C++
cat > _examples/my-example/cpp.cpp << 'EOF'
#include <iostream>
int main() {
    // 你的代码
}
EOF

# Python
cat > _examples/my-example/python.py << 'EOF'
# 你的代码
print("Hello")
EOF

# ... 其他语言
```

**步骤 4：重新构建**

```bash
npm run build
```

### 修改现有示例

直接编辑对应的代码文件即可：

```bash
# 编辑 Hello World 的 Python 版本
vim _examples/hello-world/python.py

# 重新构建
npm run build
```

### 删除示例

1. 从 `_config.yml` 的 `examples` 列表中删除对应条目
2. 删除示例目录：`rm -rf _examples/示例id`
3. 重新构建：`npm run build`

## 管理语言配置

### 添加新语言

**步骤 1：在配置中添加语言**

编辑 `_config.yml`：

```yaml
languages:
  # ... 现有语言 ...
  golang:                    # 语言 ID
    name: Go                 # 显示名称
    extension: go            # 文件扩展名
    prism: go               # Prism.js 语法高亮标识
```

**步骤 2：为所有示例添加新语言代码**

```bash
# 为每个示例创建 Go 代码文件
for dir in _examples/*/; do
    touch "${dir}golang.go"
    # 在这里可以添加默认代码
done
```

**步骤 3：添加语法高亮支持**

编辑 `_layouts/default.html`，在其他 Prism.js 脚本后添加：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-go.min.js"></script>
```

**步骤 4：填充代码示例**

手动编辑每个 `_examples/*/golang.go` 文件，添加对应的 Go 代码。

**步骤 5：重新构建**

```bash
npm run build
```

### Prism.js 支持的语言

常用语言标识：
- `cpp` - C++
- `python` - Python
- `rust` - Rust
- `java` - Java
- `csharp` - C#
- `javascript` - JavaScript
- `typescript` - TypeScript
- `go` - Go
- `ruby` - Ruby
- `php` - PHP
- `swift` - Swift
- `kotlin` - Kotlin

完整列表：https://prismjs.com/#supported-languages

## 自定义样式

### 修改颜色主题

编辑 `styles.css`：

```css
/* 主色调 - 紫色渐变 */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 修改为蓝色渐变 */
header {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### 修改代码高亮主题

在 `_layouts/default.html` 中更改 Prism.js 主题 CDN 链接：

```html
<!-- 默认：Tomorrow Night -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">

<!-- 可选：Okaidia -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-okaidia.min.css">

<!-- 可选：Solarized Light -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css">
```

更多主题：https://prismjs.com/

### 调整布局

修改 `styles.css` 中的网格设置：

```css
/* 代码块网格 - 默认自适应 */
.code-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* 强制显示 3 列 */
.code-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

/* 强制显示 2 列 */
.code-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
```

## 构建和部署

### 本地构建

```bash
npm run build
```

生成的文件在 `_site/` 目录。

### 部署到 GitHub Pages

**方法 1：手动部署**

```bash
# 构建网站
npm run build

# 创建 gh-pages 分支（首次）
git checkout --orphan gh-pages
git rm -rf .
cp -r _site/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 后续更新
git checkout main
npm run build
git checkout gh-pages
rm -rf !(.|..|.git)
cp -r _site/* .
git add .
git commit -m "Update site"
git push origin gh-pages
```

**方法 2：使用 GitHub Actions**

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build site
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

### 部署到 Netlify

1. 登录 Netlify
2. 选择 "Add new site" > "Import an existing project"
3. 连接 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `_site`
5. 点击 "Deploy site"

### 部署到 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

或在 Vercel 网站上导入项目，设置：
- Build Command: `npm run build`
- Output Directory: `_site`

## 常见问题

### Q: 如何更改网站标题？
A: 编辑 `_config.yml` 中的 `title` 和 `description` 字段。

### Q: 代码没有语法高亮？
A: 检查 `_layouts/default.html` 中是否包含对应语言的 Prism.js 脚本。

### Q: 如何让某些语言默认不显示？
A: 修改 `assets/app.js` 中的 `selectedLanguages` 初始化。

### Q: 能否使用 Jekyll 而不是 Node.js？
A: 可以，但需要解决 Ruby 环境兼容性问题。当前使用 Node.js 构建脚本更简单可靠。

### Q: 如何添加代码复制按钮？
A: 可以使用 Prism.js 的 Copy to Clipboard 插件，或自己实现。

## 进阶技巧

### 批量生成示例文件

如果你有一个现有的 `examples.js` 文件，可以使用：

```bash
npm run generate-examples
```

### 自动化工作流

创建 `Makefile`：

```makefile
.PHONY: build watch deploy

build:
	npm run build

watch:
	while true; do \
		npm run build; \
		sleep 2; \
	done

deploy: build
	# 你的部署命令
```

使用：
```bash
make build
make watch   # 持续构建（简易版）
make deploy  # 构建并部署
```

## 获取帮助

- 提交 Issue：<your-repo-url>/issues
- 贡献代码：欢迎 Pull Request！

## 参考资源

- [Prism.js 文档](https://prismjs.com/)
- [YAML 语法](https://yaml.org/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
