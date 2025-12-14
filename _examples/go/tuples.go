// Go 没有元组类型
// 使用多返回值模拟
func getPerson() (int, string, float64) {
    return 25, "Alice", 1.68
}

age, name, height := getPerson()

// 或使用结构体
type Person struct {
    Age    int
    Name   string
    Height float64
}