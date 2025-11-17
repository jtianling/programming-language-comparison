// TypeScript 自动垃圾回收
let obj: object | null = {data: "test"};
obj = null; // 标记为可回收