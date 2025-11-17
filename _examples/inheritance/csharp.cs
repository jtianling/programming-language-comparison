class Animal {
    public virtual void Speak() {
        Console.WriteLine("Some sound");
    }
}

class Dog : Animal {
    public override void Speak() {
        Console.WriteLine("Woof!");
    }
}