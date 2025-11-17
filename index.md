---
layout: default
---

<nav class="language-filter">
    <h3>选择要对比的语言：</h3>
    <div class="language-checkboxes">
        {% for lang in site.languages %}
        <label><input type="checkbox" value="{{ lang[0] }}" checked> {{ lang[1].name }}</label>
        {% endfor %}
    </div>
</nav>

<main id="examples-container">
    {% for example in site.examples %}
    <div class="example-section">
        <div class="example-header">
            <h2>{{ example.title }}</h2>
            <p>{{ example.description }}</p>
        </div>
        
        <div class="code-grid">
            {% for lang in site.languages %}
                {% assign lang_key = lang[0] %}
                {% assign lang_config = lang[1] %}
                {% assign code = example.codes[lang_key] %}
                {% if code %}
                <div class="code-block" data-language="{{ lang_key }}">
                    <div class="language-label">{{ lang_config.name }}</div>
                    <pre><code class="language-{{ lang_config.prism }}">{{ code }}</code></pre>
                </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
    {% endfor %}
</main>
