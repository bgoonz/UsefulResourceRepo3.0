int main()
{
	int number = 0;
	int i = 0;
	int count = 0;
	printf("Enter a Number: ");
	scanf("%d", &number);

	for (i = 2; i <= (number / 2); i++)
	{
		if ((num % i) == 0)
		{
			count++;
			break;
		}
	}
	
	if (count == 0 && number != 1)
		printf("%d is a prime number.\n", number);
	else
		printf("%d is not a prime number.\n", number);
	return 0;
}
