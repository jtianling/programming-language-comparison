// Java 没有内置元组，使用 Record (Java 16+)
record Person(int age, String name, double height) {}
var person = new Person(25, "Alice", 1.68);

// 访问
int age = person.age();
String name = person.name();

// 或使用 Map.entry 作为二元组
var pair = Map.entry("key", 100);