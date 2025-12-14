// C++20 简化函数模板语法
auto add(auto a, auto b) {
    return a + b;
}

// 或使用 Concepts
template<typename T>
concept Numeric = std::is_arithmetic_v<T>;

auto multiply(Numeric auto a, Numeric auto b) {
    return a * b;
}