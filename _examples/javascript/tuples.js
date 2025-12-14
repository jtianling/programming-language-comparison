// JavaScript 没有原生元组，使用数组模拟
const person = [25, "Alice", 1.68];

// 解构赋值
const [age, name, height] = person;

// Object.freeze 创建不可变"元组"
const tuple = Object.freeze([1, 2, 3]);