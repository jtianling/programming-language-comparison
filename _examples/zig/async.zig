const std = @import("std");

fn fetch() []const u8 {
    return "数据";
}

// Zig 的 async 正在重新设计中
// 未来可能使用 async/await 语法
