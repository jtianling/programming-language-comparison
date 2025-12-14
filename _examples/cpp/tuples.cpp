#include <tuple>

// 创建元组
std::tuple<int, std::string, double> person(25, "Alice", 1.68);

// 访问元素
int age = std::get<0>(person);
std::string name = std::get<1>(person);

// C++17 结构化绑定
auto [a, n, h] = person;