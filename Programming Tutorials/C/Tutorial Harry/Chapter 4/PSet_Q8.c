// Write a program to calculate the factorial of a given number using for loop.

#include <stdio.h>

int main()
{
    int i, n, factorial = 1;
    printf("Enter the number whose factorial is to be displayed :\n");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        factorial *= i; // The expression 'factorial *= i' means facorial(new) = factorial(old) * i.
    }
    printf("%d! = %d\n", n, factorial);

    return 0;
}