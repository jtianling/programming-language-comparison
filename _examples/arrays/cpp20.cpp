#include <vector>
#include <ranges>

// C++20 CTAD (类模板参数推导)
std::vector nums = {1, 2, 3};
nums.push_back(4);

// C++20 Ranges
auto doubled = nums | std::views::transform([](int n) { return n * 2; });