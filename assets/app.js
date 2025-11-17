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
    lua: 'Lua',
    ruby: 'Ruby',
    swift: 'Swift',
    objectivec: 'Objective-C',
    go: 'Go'
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
    lua: 'lua',
    ruby: 'ruby',
    swift: 'swift',
    objectivec: 'objectivec',
    go: 'go'
};

// 语言顺序数组（可拖拽排序）
let languageOrder = [];

// 当前选中的语言
let selectedLanguages = new Set();

// 从 localStorage 加载或初始化语言顺序
function initializeLanguageOrder() {
    const savedOrder = localStorage.getItem('languageOrder');
    const savedSelected = localStorage.getItem('selectedLanguages');
    
    if (savedOrder) {
        languageOrder = JSON.parse(savedOrder);
    } else {
        // 默认顺序
        languageOrder = ['cpp', 'cpp20', 'python', 'rust', 'java', 'csharp', 'javascript', 'typescript', 'lua', 'ruby', 'swift', 'objectivec', 'go'];
    }
    
    if (savedSelected) {
        selectedLanguages = new Set(JSON.parse(savedSelected));
    } else {
        // 默认全部选中
        selectedLanguages = new Set(languageOrder);
    }
}

// 保存语言顺序和选中状态到 localStorage
function saveLanguagePreferences() {
    localStorage.setItem('languageOrder', JSON.stringify(languageOrder));
    localStorage.setItem('selectedLanguages', JSON.stringify(Array.from(selectedLanguages)));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageOrder();
    renderLanguageCheckboxes();
    setupLanguageFilters();
    
    // 只有在 examples 变量存在时才渲染（独立版本）
    // Jekyll 构建版本已经在 HTML 中包含了代码块
    if (typeof examples !== 'undefined') {
        renderExamples();
    } else {
        // Jekyll 版本：只需要更新可见性
        updateVisibleLanguages();
    }
});

// 渲染语言复选框
function renderLanguageCheckboxes() {
    const container = document.getElementById('language-checkboxes');
    container.innerHTML = '';
    
    languageOrder.forEach((lang, index) => {
        const button = document.createElement('div');
        button.className = 'language-item';
        if (selectedLanguages.has(lang)) {
            button.classList.add('selected');
        }
        button.draggable = true;
        button.dataset.language = lang;
        button.dataset.index = index;
        
        const langName = document.createElement('span');
        langName.className = 'language-name';
        langName.textContent = languageNames[lang];
        
        button.appendChild(langName);
        
        // 点击切换选中状态
        button.addEventListener('click', (e) => {
            const lang = button.dataset.language;
            if (selectedLanguages.has(lang)) {
                selectedLanguages.delete(lang);
                button.classList.remove('selected');
            } else {
                selectedLanguages.add(lang);
                button.classList.add('selected');
            }
            
            saveLanguagePreferences();
            updateVisibleLanguages();
        });
        
        // 拖拽事件
        button.addEventListener('dragstart', handleDragStart);
        button.addEventListener('dragover', handleDragOver);
        button.addEventListener('drop', handleDrop);
        button.addEventListener('dragend', handleDragEnd);
        
        container.appendChild(button);
    });
}

// 拖拽相关变量
let draggedElement = null;
let draggedIndex = null;

// 处理拖拽开始
function handleDragStart(e) {
    draggedElement = e.currentTarget;
    draggedIndex = parseInt(draggedElement.dataset.index);
    
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.innerHTML);
}

// 处理拖拽经过
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = 'move';
    
    const targetElement = e.currentTarget;
    if (targetElement !== draggedElement && targetElement.classList.contains('language-item')) {
        targetElement.classList.add('drag-over');
    }
    
    return false;
}

// 处理放置
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    const targetElement = e.currentTarget;
    targetElement.classList.remove('drag-over');
    
    if (draggedElement !== targetElement) {
        const targetIndex = parseInt(targetElement.dataset.index);
        
        // 更新语言顺序数组
        const movedLang = languageOrder[draggedIndex];
        languageOrder.splice(draggedIndex, 1);
        languageOrder.splice(targetIndex, 0, movedLang);
        
        // 保存偏好
        saveLanguagePreferences();
        
        // 重新渲染
        renderLanguageCheckboxes();
        setupLanguageFilters();
        
        // 只有在 examples 变量存在时才重新渲染（独立版本）
        if (typeof examples !== 'undefined') {
            renderExamples();
        } else {
            // Jekyll 版本：只需要更新可见性
            updateVisibleLanguages();
        }
    }
    
    return false;
}

// 处理拖拽结束
function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    
    // 移除所有拖拽效果
    document.querySelectorAll('.language-item').forEach(item => {
        item.classList.remove('drag-over');
    });
}

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
            
            saveLanguagePreferences();
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
    
    // 按照 languageOrder 的顺序创建代码块
    languageOrder.forEach(lang => {
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
