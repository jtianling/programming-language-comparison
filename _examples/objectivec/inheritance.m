@interface Animal : NSObject
- (void)speak;
@end

@implementation Animal
- (void)speak {
    NSLog(@"Some sound");
}
@end

@interface Dog : Animal
@end

@implementation Dog
- (void)speak {
    NSLog(@"Woof!");
}
@end