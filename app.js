// 语言配置
const languageNames = {
    cpp: 'C++',
    cpp20: 'C++20',
    python: 'Python',
    rust: 'Rust',
    java: 'Java',
    csharp: 'C#',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    lua: 'Lua'
};

// Prism.js 语言映射
const prismLanguages = {
    cpp: 'cpp',
    cpp20: 'cpp',  // C++20 也使用 cpp 高亮
    python: 'python',
    rust: 'rust',
    java: 'java',
    csharp: 'csharp',
    javascript: 'javascript',
    typescript: 'typescript',
    lua: 'lua'
};

// 当前选中的语言
let selectedLanguages = new Set(['cpp', 'cpp20', 'python', 'rust', 'java', 'csharp', 'javascript', 'typescript', 'lua']);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageFilters();
    renderExamples();
});

// 设置语言过滤器
function setupLanguageFilters() {
    const checkboxes = document.querySelectorAll('.language-checkboxes input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const lang = e.target.value;
            
            if (e.target.checked) {
                selectedLanguages.add(lang);
            } else {
                selectedLanguages.delete(lang);
            }
            
            updateVisibleLanguages();
        });
    });
}

// 更新可见的语言
function updateVisibleLanguages() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const lang = block.dataset.language;
        
        if (selectedLanguages.has(lang)) {
            block.classList.remove('hidden');
        } else {
            block.classList.add('hidden');
        }
    });
}

// 渲染所有示例
function renderExamples() {
    const container = document.getElementById('examples-container');
    container.innerHTML = '';
    
    examples.forEach(example => {
        const section = createExampleSection(example);
        container.appendChild(section);
    });
}

// 创建单个示例区块
function createExampleSection(example) {
    const section = document.createElement('div');
    section.className = 'example-section';
    
    // 创建标题
    const header = document.createElement('div');
    header.className = 'example-header';
    header.innerHTML = `
        <h2>${example.title}</h2>
        <p>${example.description}</p>
    `;
    section.appendChild(header);
    
    // 创建代码网格
    const codeGrid = document.createElement('div');
    codeGrid.className = 'code-grid';
    
    // 为每种语言创建代码块
    Object.keys(languageNames).forEach(lang => {
        if (example.codes[lang]) {
            const codeBlock = createCodeBlock(lang, example.codes[lang]);
            codeGrid.appendChild(codeBlock);
        }
    });
    
    section.appendChild(codeGrid);
    
    return section;
}

// 创建代码块
function createCodeBlock(language, code) {
    const block = document.createElement('div');
    block.className = 'code-block';
    block.dataset.language = language;
    
    // 如果语言未被选中，添加 hidden 类
    if (!selectedLanguages.has(language)) {
        block.classList.add('hidden');
    }
    
    const label = document.createElement('div');
    label.className = 'language-label';
    label.textContent = languageNames[language];
    
    const pre = document.createElement('pre');
    const codeElement = document.createElement('code');
    
    // 添加 Prism.js 的语言类
    const prismLang = prismLanguages[language];
    codeElement.className = `language-${prismLang}`;
    codeElement.textContent = code;
    
    pre.appendChild(codeElement);
    
    block.appendChild(label);
    block.appendChild(pre);
    
    // 使用 Prism.js 进行语法高亮
    if (window.Prism) {
        Prism.highlightElement(codeElement);
    }
    
    return block;
}

// 复制代码到剪贴板（可选功能）
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // 可以添加复制成功的提示
        console.log('代码已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
    });
}
