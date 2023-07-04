// Write a recursive function to calculate the sum of first 'n' natural numbers.

#include <stdio.h>

int SumNat(int a);

int main()
{
    int n;
    printf("Enter number upto which natural numbers are to be summed :\n");
    scanf("%d", &n);
    printf("Sum of natural numbers upto %d is %d\n", n, SumNat(n));
    return 0;
}

int SumNat(int a)
{
    if (a == 1)
    {
        return 1;
    }
    else
    {
        return SumNat(a - 1) + a;
    }
}