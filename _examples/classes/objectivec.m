@interface Person : NSObject
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) int age;
- (instancetype)initWithName:(NSString *)name age:(int)age;
- (void)greet;
@end

@implementation Person
- (instancetype)initWithName:(NSString *)name age:(int)age {
    if (self = [super init]) {
        _name = name;
        _age = age;
    }
    return self;
}
- (void)greet {
    NSLog(@"Hello, %@", self.name);
}
@end
