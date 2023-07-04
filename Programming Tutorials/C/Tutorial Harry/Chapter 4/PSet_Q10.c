// Write a program to check whether a given number is prime or not using loops.

/* Harry just wrote a condition inside the for-loop and then applied it's result outside
   the loop with conditional operators to determine whether a number is prime or not.
   The condition was : if(n%i == 0){prime = 0; break;}. He initially declared the prime
   variable as prime = 1.
   However, the program didn't work for 0 and 1 as an input.
   The program I made considers 0 & 1 and declares it as neither prime nor composite.
   */

#include <stdio.h>

int main()
{
    int i, n;
    printf("Enter the number to check whether it's a prime number :\n");
    scanf("%d", &n);
    for (i = 0; i <= n; i++)
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
    }
    return 0;
}