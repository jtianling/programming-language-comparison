class Animal {
public:
    virtual void speak() {
        std::println("Some sound");
    }
};

class Dog : public Animal {
public:
    void speak() override {
        std::println("Woof!");
    }
};