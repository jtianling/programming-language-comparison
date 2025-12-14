class Person {
private:
    std::string name;
    int age;
public:
    Person(std::string n, int a) : name(n), age(a) {}
    void greet() {
        std::cout << "Hello, " << name;
    }
};