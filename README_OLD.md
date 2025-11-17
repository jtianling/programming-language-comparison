# 编程语言语法对比网站

一个用于对比多种编程语言语法差异的交互式网站。

## 功能特性

- 📊 **多语言对比**：支持 C++, Python, Rust, Java, C#, JavaScript, TypeScript 等主流编程语言
- 🎯 **实例驱动**：通过典型代码示例展示语法差异
- 🔍 **动态过滤**：可选择性显示/隐藏特定编程语言
- 📱 **响应式设计**：适配桌面和移动设备
- 🎨 **清晰布局**：网格布局便于横向对比

## 包含的示例

1. **Hello World** - 最基本的程序
2. **变量声明** - 变量定义和类型系统
3. **函数定义** - 函数/方法的声明和使用
4. **条件语句** - if-else 条件判断
5. **循环** - for 和 while 循环
6. **数组/列表** - 数组和列表操作
7. **类和对象** - 面向对象编程
8. **字典/映射** - 键值对数据结构
9. **错误处理** - 异常处理机制
10. **模式匹配** - 现代语言的模式匹配特性
11. **异步编程** - 异步操作和并发处理

## 使用方法

1. 在浏览器中打开 `index.html`
2. 使用顶部的复选框选择要对比的编程语言
3. 滚动浏览不同的语法示例
4. 横向对比各语言的实现差异

## 文件结构

```
.
├── index.html      # 主页面
├── styles.css      # 样式表
├── examples.js     # 示例数据
├── app.js          # 交互逻辑
└── README.md       # 项目说明
```

## 扩展示例

要添加新的语法对比示例，编辑 `examples.js` 文件，按以下格式添加：

```javascript
{
    title: "示例标题",
    description: "示例描述",
    codes: {
        cpp: `C++ 代码`,
        python: `Python 代码`,
        rust: `Rust 代码`,
        java: `Java 代码`,
        csharp: `C# 代码`,
        javascript: `JavaScript 代码`,
        typescript: `TypeScript 代码`
    }
}
```

## 技术栈

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- 无需外部依赖

## 浏览器兼容性

支持所有现代浏览器：
- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)

## 许可证

MIT License

## 贡献

欢迎提交 Pull Request 来添加更多语言或示例！
