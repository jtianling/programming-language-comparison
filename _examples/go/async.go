func fetch() string {
    time.Sleep(1 * time.Second)
    return "数据"
}

// 并发: go fetch()