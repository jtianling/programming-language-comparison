const std = @import("std");

// 固定大小数组
var nums: [3]i32 = [_]i32{ 1, 2, 3 };
const first = nums[0];
const size = nums.len;

// 动态数组 (ArrayList)
var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
defer arena.deinit();
const allocator = arena.allocator();

var list = std.ArrayList(i32).init(allocator);
try list.append(1);
try list.append(2);
