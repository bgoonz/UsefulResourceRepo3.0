// Calculating factorials.
#include <stdio.h> // printf() function

long fact(int); // prototype for factorial function

int main()
{
	int number;
	long factorial = 1;

	printf("Enter number to calc the Factorial of: ");
	scanf("%d", &number);

	printf("%d! = %ld\n", number, fact(number));

	return 0;
}

long fact(int n)
{
	int count;
	long res = 1;

	for (count = 1; count <= n; count++)
		result *= count;
	return result;
}
