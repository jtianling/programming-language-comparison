# Ruby 没有原生元组，使用数组或 Struct
person = [25, "Alice", 1.68].freeze

# 解构
age, name, height = person

# 使用 Struct 创建命名元组
Person = Struct.new(:age, :name, :height)
p = Person.new(25, "Alice", 1.68)
puts p.name