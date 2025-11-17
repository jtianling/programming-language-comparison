#include <future>

auto future = std::async([]() {
    return 42;
});
int result = future.get();