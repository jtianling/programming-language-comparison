// 构建脚本 - 从示例代码文件生成静态 HTML
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// 读取配置文件
const config = yaml.load(fs.readFileSync('_config.yml', 'utf8'));

// 读取布局模板
const layoutTemplate = fs.readFileSync('_layouts/default.html', 'utf8');
const indexTemplate = fs.readFileSync('index.md', 'utf8');

// 移除 Front Matter
const indexContent = indexTemplate.replace(/^---[\s\S]*?---\n/, '');

// 读取所有示例代码
config.examples.forEach(example => {
    const exampleId = example.id;

    example.codes = {};

    Object.keys(config.languages).forEach(langKey => {
        const langConfig = config.languages[langKey];
        const extension = langConfig.extension;
        // 新的目录结构：_examples/{language}/{example-id}.{extension}
        const codeFile = path.join('_examples', langKey, `${exampleId}.${extension}`);

        if (fs.existsSync(codeFile)) {
            example.codes[langKey] = fs.readFileSync(codeFile, 'utf8');
        }
    });
});

// 生成 HTML 内容
let htmlContent = '<nav class="language-filter">\n';
htmlContent += '    <h3>选择要对比的语言：<span class="hint">（拖动调整顺序）</span></h3>\n';
htmlContent += '    <div class="language-checkboxes" id="language-checkboxes">\n';
htmlContent += '        <!-- 语言按钮将由 JavaScript 动态生成 -->\n';
htmlContent += '    </div>\n';
htmlContent += '</nav>\n\n';
htmlContent += '<main id="examples-container">\n';

config.examples.forEach(example => {
    htmlContent += '    <div class="example-section">\n';
    htmlContent += '        <div class="example-header">\n';
    htmlContent += `            <h2>${example.title}</h2>\n`;
    htmlContent += `            <p>${example.description}</p>\n`;
    htmlContent += '        </div>\n';
    htmlContent += '        \n';
    htmlContent += '        <div class="code-grid">\n';
    
    Object.keys(config.languages).forEach(langKey => {
        const langConfig = config.languages[langKey];
        const code = example.codes[langKey];
        
        if (code) {
            // HTML 转义
            const escapedCode = code
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
            
            htmlContent += `            <div class="code-block" data-language="${langKey}">\n`;
            htmlContent += `                <div class="language-label">${langConfig.name}</div>\n`;
            htmlContent += `                <pre><code class="language-${langConfig.prism}">${escapedCode}</code></pre>\n`;
            htmlContent += '            </div>\n';
        }
    });
    
    htmlContent += '        </div>\n';
    htmlContent += '    </div>\n';
});

htmlContent += '</main>\n';

// 应用布局模板
let finalHtml = layoutTemplate
    .replace(/\{\{ site\.title \}\}/g, config.title)
    .replace(/\{\{ site\.description \}\}/g, config.description)
    .replace('{{ content }}', htmlContent)
    .replace(/\{\{ '\/styles\.css' \| relative_url \}\}/g, 'styles.css')
    .replace(/\{\{ '\/assets\/app\.js' \| relative_url \}\}/g, 'assets/app.js')
    .replace(/\{\{ '\/assets\/vibe-companion\.js' \| relative_url \}\}/g, 'assets/vibe-companion.js');

// 创建 _site 目录
if (!fs.existsSync('_site')) {
    fs.mkdirSync('_site');
}

// 写入生成的 HTML
fs.writeFileSync('_site/index.html', finalHtml, 'utf8');

// 复制 CSS 和 JS 文件
fs.copyFileSync('styles.css', '_site/styles.css');

// 创建 assets 目录并复制 JS
if (!fs.existsSync('_site/assets')) {
    fs.mkdirSync('_site/assets');
}
fs.copyFileSync('assets/app.js', '_site/assets/app.js');
fs.copyFileSync('vibe-companion.js', '_site/assets/vibe-companion.js');

// 复制 node_modules/vibe-kanban-web-companion 到 _site
const vibeKanbanSrc = 'node_modules/vibe-kanban-web-companion';
const vibeKanbanDest = '_site/node_modules/vibe-kanban-web-companion';
if (!fs.existsSync('_site/node_modules')) {
    fs.mkdirSync('_site/node_modules');
}
if (!fs.existsSync(vibeKanbanDest)) {
    fs.mkdirSync(vibeKanbanDest, { recursive: true });
}

// 递归复制目录
function copyRecursive(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
            }
            copyRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyRecursive(vibeKanbanSrc, vibeKanbanDest);

// 复制 _examples 目录到 _site（用于调试模式）
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
copyDir('_examples', '_site/_examples');

// 复制 examples-config.js 和 app.js 到 _site（用于调试模式）
fs.copyFileSync('examples-config.js', '_site/examples-config.js');
fs.copyFileSync('app.js', '_site/app.js');

console.log('✅ 网站构建成功！');
console.log('📁 生成的文件位于 _site/ 目录');
console.log('🌐 在浏览器中打开 _site/index.html 查看结果');
