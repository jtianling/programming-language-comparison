-- Lua 自动垃圾回收
local obj = {data = "test"}
obj = nil -- 标记为可回收
collectgarbage() -- 手动触发GC