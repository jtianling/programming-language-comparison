# 创建元组
person = (25, "Alice", 1.68)
coords = 10, 20  # 括号可省略

# 访问元素
age = person[0]
name = person[1]

# 解包
age, name, height = person

# 命名元组
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)