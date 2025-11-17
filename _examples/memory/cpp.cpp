// 智能指针
#include <memory>

auto ptr = std::make_unique<int>(42);
auto shared = std::make_shared<int>(100);