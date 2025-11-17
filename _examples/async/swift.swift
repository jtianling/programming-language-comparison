func fetch() async -> String {
    try? await Task.sleep(nanoseconds: 1_000_000_000)
    return "数据"
}

// 使用: await fetch()
