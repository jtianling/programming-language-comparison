-- Lua 没有原生异步支持
-- 通常使用协程
local co = coroutine.create(function()
    print("异步任务")
end)
coroutine.resume(co)