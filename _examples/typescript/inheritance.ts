class Animal {
    speak(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    speak(): void {
        console.log("Woof!");
    }
}