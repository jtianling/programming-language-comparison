#include <future>

auto future = std::async([]() {
    return 42;
});
auto result = future.get();