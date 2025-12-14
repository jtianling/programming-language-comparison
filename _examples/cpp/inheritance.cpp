class Animal {
public:
    virtual void speak() {
        std::cout << "Some sound";
    }
};

class Dog : public Animal {
public:
    void speak() override {
        std::cout << "Woof!";
    }
};