// Swift 使用 ARC 自动引用计数
class MyClass {
    deinit {
        print("释放资源")
    }
}
var obj: MyClass? = MyClass()
obj = nil // 自动释放