const std = @import("std");

// Zig 使用接口实现多态
fn Animal(comptime Self: type) type {
    return struct {
        fn speak(self: Self) void {
            _ = self;
        }
    };
}

const Dog = struct {
    fn speak(self: Dog) void {
        _ = self;
        std.debug.print("Woof!\n", .{});
    }
};
