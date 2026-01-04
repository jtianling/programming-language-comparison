const std = @import("std");

// Zig 使用结构体模拟元组
const Tuple = struct { i32, []const u8, f64 };

const person = Tuple{ 25, "Alice", 1.68 };
const age = person[0];
const name = person[1];

// 单元素元组
const single = struct { i32 }{ 42 };
