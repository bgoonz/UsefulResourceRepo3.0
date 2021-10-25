int main()
{
        long int decNum, remainder, quotient;
        int binNum[100];
        int c = 1;
        int j = 0;

        printf("Enter a Decimal Number: ");
        scanf("%ld", &decNum);

        quotient = decNum;

        while(quotient != 0)
        {
                binNum[c++] = quotient % 2;
                quotient /= 2;
        }

        printf("Binary Value of your Decimal Number %ld: ", decNum);

        for (j = (c - 1); j > 0; j--)
        {
                printf("%d", binNum[j]);

        }
        printf("\n");
        return 0;
}
