local status, err = pcall(function()
    error("错误")
end)
if not status then
    print("捕获: " .. err)
end