// 创建元组
let person: (i32, &str, f64) = (25, "Alice", 1.68);

// 访问元素
let age = person.0;
let name = person.1;

// 解构
let (a, n, h) = person;

// 单元素元组
let single = (42,);