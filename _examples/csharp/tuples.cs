// C# 值元组 (C# 7.0+)
var person = (25, "Alice", 1.68);
(int age, string name, double height) = person;

// 命名元组
var named = (Age: 25, Name: "Alice", Height: 1.68);
Console.WriteLine(named.Name);

// 元组方法返回
(int min, int max) GetRange() => (0, 100);