#include <tuple>

// 创建元组
auto person = std::tuple{25, "Alice", 1.68};

// C++20 结构化绑定
auto [age, name, height] = person;

// 使用 std::apply 解包
std::apply([](auto... args) {
    ((std::cout << args << " "), ...);
}, person);