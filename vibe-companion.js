// Vibe Kanban Web Companion Integration
// This script loads React and the VibeKanbanWebCompanion component in development mode

(function() {
    // Only load in development mode (localhost or 127.0.0.1)
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '';

    if (!isLocalhost) {
        console.log('Vibe Kanban Web Companion: Not loading in production');
        return;
    }

    console.log('Vibe Kanban Web Companion: Loading...');

    // Create a container for the companion component
    const container = document.createElement('div');
    container.id = 'vibe-kanban-companion-root';
    document.body.appendChild(container);

    // Load React and ReactDOM from CDN
    const reactScript = document.createElement('script');
    reactScript.crossOrigin = 'anonymous';
    reactScript.src = 'https://unpkg.com/react@18/umd/react.development.js';

    const reactDomScript = document.createElement('script');
    reactDomScript.crossOrigin = 'anonymous';
    reactDomScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

    reactScript.onload = function() {
        console.log('Vibe Kanban Web Companion: React loaded');
        reactDomScript.onload = function() {
            console.log('Vibe Kanban Web Companion: ReactDOM loaded');

            // Import and render the VibeKanbanWebCompanion component
            import('./node_modules/vibe-kanban-web-companion/src/VibeKanbanWebCompanion.js')
                .then(({ VibeKanbanWebCompanion }) => {
                    const { createElement } = window.React;
                    const { createRoot } = window.ReactDOM;

                    const root = createRoot(container);
                    root.render(createElement(VibeKanbanWebCompanion));

                    console.log('✅ Vibe Kanban Web Companion loaded successfully');
                })
                .catch(error => {
                    console.error('Failed to load Vibe Kanban Web Companion:', error);
                    console.error('Make sure you are running the dev server with "npm run dev"');
                });
        };

        reactDomScript.onerror = function() {
            console.error('Failed to load ReactDOM from CDN');
        };

        document.head.appendChild(reactDomScript);
    };

    reactScript.onerror = function() {
        console.error('Failed to load React from CDN');
    };

    document.head.appendChild(reactScript);
})();
