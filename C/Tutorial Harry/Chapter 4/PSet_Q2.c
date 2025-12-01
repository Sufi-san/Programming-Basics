// Write a program to print a multiplication table of 10 in reversed order

#include <stdio.h>

int main()
{
    int n = 10, x;

    printf("Therefore, the table of 10 in reverse order is as follows:\n");
    for (x = 10; x; x--)
    {
        printf("%d X %d = %d\n", n, x, n * x);
    }
    return 0;
}