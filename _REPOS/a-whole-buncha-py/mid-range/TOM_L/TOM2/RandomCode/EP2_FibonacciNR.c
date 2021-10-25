// fib of n - non recursive solution

#include <stdio.h>

int main()
{
	int n, first = 0, second = 1, next, counter;

	printf("Enter Number of terms: ");
	scanf("%d", &n);

	for ( counter = 0; counter <= n; counter++)
	{
		if (counter <= 1)
		{	
			next = c;
		}
		else
		{
			next = first + second;
			first = second;
			second = next;
		}
		printf("%d\n", next);
	}
	return 0;
}
