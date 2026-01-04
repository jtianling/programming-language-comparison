const std = @import("std");

// 手动内存管理
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();

const mem = try allocator.alloc(u8, 1024);
defer allocator.free(mem);

// Zig 使用 RAII 模式
// defer 确保内存被释放
