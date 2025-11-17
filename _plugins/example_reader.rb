# Jekyll 插件：读取示例代码文件
module Jekyll
  class ExampleReader < Generator
    safe true
    priority :high

    def generate(site)
      # 读取所有示例代码
      site.config['examples'].each do |example|
        example_id = example['id']
        example_dir = File.join(site.source, '_examples', example_id)
        
        # 存储每种语言的代码
        codes = {}
        
        if Dir.exist?(example_dir)
          site.config['languages'].each do |lang_key, lang_config|
            extension = lang_config['extension']
            code_file = File.join(example_dir, "#{lang_key}.#{extension}")
            
            if File.exist?(code_file)
              codes[lang_key] = File.read(code_file)
            end
          end
        end
        
        # 将代码添加到示例配置中
        example['codes'] = codes
      end
    end
  end
end
