// gcc -o helloObj EP8_helloObj.m -I/usr/include/GNUstep -L/usr/lib/GNUstep -lobjc -lgnustep-base -Wall fconstant-string-class=NSConstantString

#include <stdio.h>
#include <Foundation/Foundation.h>

@interface DsaTest
+ (const char *) classStringValue;
@end

@implementation DsaTest
+ (const char *) classStringValue;
{
	return "This was Objective-C for the Random Code Solution Series.";
}
@end

int main (void)
{
	printf("%s\n", [DsaTest classStringValue]);
	return 0;
}
