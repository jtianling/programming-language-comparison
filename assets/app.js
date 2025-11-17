// 当前选中的语言
let selectedLanguages = new Set(['cpp', 'cpp20', 'python', 'rust', 'java', 'csharp', 'javascript', 'typescript', 'lua']);

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageFilters();
    // 使用 Prism.js 进行语法高亮
    if (window.Prism) {
        Prism.highlightAll();
    }
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
