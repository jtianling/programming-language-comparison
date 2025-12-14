// Swift 元组
let person: (Int, String, Double) = (25, "Alice", 1.68)

// 访问元素
let age = person.0
let name = person.1

// 命名元组
let named = (age: 25, name: "Alice", height: 1.68)
print(named.name)

// 解构
let (a, n, h) = person