-- Lua 使用表模拟类
Person = {}
Person.__index = Person

function Person:new(name, age)
    local obj = {name = name, age = age}
    setmetatable(obj, Person)
    return obj
end

function Person:greet()
    print("Hello, " .. self.name)
end