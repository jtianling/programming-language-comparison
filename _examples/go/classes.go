type Person struct {
    name string
    age  int
}

func NewPerson(name string, age int) *Person {
    return &Person{name: name, age: age}
}

func (p *Person) Greet() {
    fmt.Printf("Hello, %s\n", p.name)
}