# Ruby 自动垃圾回收
obj = [1, 2, 3]
obj = nil
GC.start # 手动触发GC
