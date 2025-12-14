class Animal {
    func speak() {
        print("Some sound")
    }
}

class Dog: Animal {
    override func speak() {
        print("Woof!")
    }
}