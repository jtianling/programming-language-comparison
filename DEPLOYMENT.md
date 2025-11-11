# GitHub Pages 部署指南

## 步骤 1: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `programming-language-syntax-comparison` (或其他你喜欢的名字)
   - Description: `编程语言语法对比网站 - 支持 9 种编程语言的语法对比`
   - 选择 Public (公开仓库才能使用免费的 GitHub Pages)
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

## 步骤 2: 推送代码到 GitHub

创建仓库后，GitHub 会显示一些命令。在终端中执行以下命令（替换 YOUR_USERNAME 为你的 GitHub 用户名）：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/programming-language-syntax-comparison.git

# 推送代码
git branch -M main
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings" (设置)
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 "Save"

## 步骤 4: 访问你的网站

几分钟后，你的网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/programming-language-syntax-comparison/
```

GitHub 会在页面顶部显示你的网站 URL。

## 更新网站

以后如果要更新网站内容，只需：

```bash
# 修改文件后
git add .
git commit -m "描述你的更改"
git push
```

几分钟后，更改就会自动部署到 GitHub Pages。

## 注意事项

- 首次部署可能需要等待 5-10 分钟
- 确保仓库是 Public（公开）状态
- 如果遇到问题，检查 Settings > Pages 中的部署状态
