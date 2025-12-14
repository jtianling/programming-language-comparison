// TypeScript 元组类型
const person: [number, string, number] = [25, "Alice", 1.68];

// 解构
const [age, name, height] = person;

// 命名元组 (TS 4.0+)
type Person = [age: number, name: string, height: number];

// 只读元组
const point: readonly [number, number] = [10, 20];