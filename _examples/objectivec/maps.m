NSMutableDictionary *ages = [@{@"Alice": @25, @"Bob": @30} mutableCopy];
ages[@"Charlie"] = @35;
NSNumber *age = ages[@"Alice"];