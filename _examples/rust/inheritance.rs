// Rust 使用 trait 实现多态
trait Animal {
    fn speak(&self);
}

struct Dog;

impl Animal for Dog {
    fn speak(&self) {
        println!("Woof!");
    }
}