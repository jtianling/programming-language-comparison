class Person {
    private name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): void {
        console.log(`Hello, ${this.name}`);
    }
}