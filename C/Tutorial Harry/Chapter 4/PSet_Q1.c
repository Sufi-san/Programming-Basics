// Write a program to print the multiplication table of a given number n.

#include <stdio.h>

int main()
{
    int n, x;
    printf("Enter the number who's table needs to be printed.\n");
    scanf("%d", &n);
    printf("Therefore, the table is as follows:\n");
    for (x = 0; x < 10; x++)
    {
        printf("%d X %d = %d\n", n, x + 1, n * (x + 1));
    }
    return 0;
}