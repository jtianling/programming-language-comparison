struct Person {
    name: String,
    age: i32,
}

impl Person {
    fn new(name: String, age: i32) -> Self {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, {}", self.name);
    }
}