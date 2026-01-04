for (0..5) |i| {
    std.debug.print("{}\n", .{i});
}

var i: usize = 0;
while (i < 5) {
    std.debug.print("{}\n", .{i});
    i += 1;
}
