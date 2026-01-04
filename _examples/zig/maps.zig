const std = @import("std");

var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
defer arena.deinit();
const allocator = arena.allocator();

var ages = std.StringHashMap(u32).init(allocator);
try ages.put("Alice", 25);
try ages.put("Bob", 30);
