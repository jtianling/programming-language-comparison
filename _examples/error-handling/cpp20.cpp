#include <stdexcept>

try {
    throw std::runtime_error("错误");
} catch (const std::exception& e) {
    std::println(stderr, "{}", e.what());
}