// Write a program to calculate the factorial of a given number using while and do-while loop.

#include <stdio.h>

int main()
{
    int i = 1, n, factorial = 1, x;
    printf("Enter the number who's factorial is needed :\n");
    scanf("%d", &n);
    printf("Choose the program : 1 for 'while' and 2 for 'do-while' loop.\n");
    scanf("%d", &x);
    if (x == 1)
    {
        while (i <= n)
        {
            factorial *= i;
            i++;
        }
        printf("%d! = %d\n", n, factorial);
    }
    if (x == 2)
    {
        do
        {
            factorial *= i;
            i++;
        } while (i <= n);
        printf("%d! = %d\n", n, factorial);
    }

    return 0;
}