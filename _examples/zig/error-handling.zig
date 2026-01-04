fn divide(a: i32, b: i32) !i32 {
    if (b == 0) {
        return error.DivideByZero;
    }
    return a / b;
}

// 使用
const result = divide(10, 2) catch |err| {
    std.debug.print("错误: {}\n", .{err});
    return;
};
