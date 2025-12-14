class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}