/*Write a program to sum the first n natural numbers using 'for' and 'do-while' loop.*/

#include <stdio.h>

int main()
{
    int c, n, i, sum = 0;
    printf("Which program do you want to run ?\nEnter 1 for 'for-loop' and 2 for 'do-while' loop :\n");
    scanf("%d", &c);
    printf("Enter the number upto which natural numbers are to be summed :\n");
    scanf("%d", &n);
    if (c == 1)
    {
        for (i = 0; i <= n; i++)
        {
            sum += i;
        }
    }
    else if (c == 2)
    {
        int i = 0;
        do
        {
            sum += i; // The expression 'sum +=' is the same as sum(new value) = sum(old value) + i;
            i++;
        } while (i <= n);
    }
    printf("The summation of natural numbers upto %d is %d\n", n, sum);

    return 0;
}