const std = @import("std");

const Person = struct {
    name: []const u8,
    age: i32,

    fn greet(self: *const Person) void {
        std.debug.print("Hello, {s}\n", .{self.name});
    }
};
