// Write a program to check whether a given number is prime or not using while and do-while loops.
// In this program I have also used 'else if' for the conditions and not 'break' to just exit the loop.
#include <stdio.h>

int main()
{
    int i = 0, n, x;
    printf("Enter 0 for while loop and 1 for do-while loop : \n");
    scanf("%d", &x);
    printf("Enter the number to check whether it's a prime number :\n");
    scanf("%d", &n);
    if (x == 0)
    {
        printf("Initiating while loop.\n");
        while (i <= n)
        {
            if (n == 1 || n == 0) // Special Cases
            {
                printf("%d is neither prime nor composite.\n", n);
                break;
            }
            if (n % (i + 2) == 0 && i + 2 != n) // Criteria for composite number.
            {
                printf("%d is NOT a prime number.\n", n);
                break;
            }
            if (n % (i + 2) == 0 && i + 2 == n) // Criteria for prime number.
            {
                printf("%d is a prime number.\n", n);
                break;
            }
            i++;
        }
    }
    if (x == 1)
    {
        printf("Initiating do-while loop.\n");
        do
        {
            if (n == 1 || n == 0) // Special Cases
            {
                printf("%d is neither prime nor composite.\n", n);
                break;
            }
            if (n % (i + 2) == 0 && i + 2 != n) // Criteria for composite number.
            {
                printf("%d is NOT a prime number.\n", n);
                break;
            }
            if (n % (i + 2) == 0 && i + 2 == n) // Criteria for prime number.
            {
                printf("%d is a prime number.\n", n);
                break;
            }
            i++;
        } while (i <= n);
    }
    return 0;
}