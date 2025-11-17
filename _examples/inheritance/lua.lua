-- Lua 继承通过元表实现
Animal = {}
Animal.__index = Animal

function Animal:new()
    local obj = {}
    setmetatable(obj, Animal)
    return obj
end

function Animal:speak()
    print("Some sound")
end

Dog = setmetatable({}, {__index = Animal})
Dog.__index = Dog

function Dog:new()
    local obj = Animal:new()
    setmetatable(obj, Dog)
    return obj
end

function Dog:speak()
    print("Woof!")
end