// Objective-C 没有原生元组支持
// 通常使用 NSArray 或自定义类
NSArray *person = @[@25, @"Alice", @1.68];
int age = [person[0] intValue];
NSString *name = person[1];

// 或使用字典
NSDictionary *tuple = @{
    @"age": @25,
    @"name": @"Alice",
    @"height": @1.68
};