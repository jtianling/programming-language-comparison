// Go 自动垃圾回收
obj := make([]int, 3)
obj = nil // 标记为可回收
runtime.GC() // 手动触发GC