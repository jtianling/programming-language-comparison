@try {
    @throw [NSException exceptionWithName:@"Error" reason:@"错误" userInfo:nil];
} @catch (NSException *exception) {
    NSLog(@"捕获: %@", exception.reason);
}
