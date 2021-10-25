#include <stdio.h>
#include <stdint.h>
//Q: when does 500 * 500 / 500 not equal 500?
//A: When its a 8bit integer!
int main()
{
        uint8_t a = 1, b = 2;
        a=500*500/500;
        b = 500 * 500;
        b = b / 500;
        printf("the 8 bit answer of 500 * 500 / 500 = %d\n", a);
        printf("The 8 bit answer of (500 * 500) / 500 = %d\n", b);
        return 0;
