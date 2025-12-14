-- Lua 使用 table 模拟元组
local person = {25, "Alice", 1.68}

-- 访问元素
local age = person[1]
local name = person[2]

-- 多重赋值（类似解包）
local a, b, c = 25, "Alice", 1.68

-- 函数返回多值
local function getPerson()
    return 25, "Alice", 1.68
end
local age, name, height = getPerson()