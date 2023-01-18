// Write a program to sum the first ten natural numbers using a while loop.

#include <stdio.h>

int main()
{
    int i = 0, sum = 0;
    printf("The sum of first ten natural numbers is : \n");
    while (i < 10)
    {
        i++;
        sum += i;
    }
    /* Here we understand that a loop can be used to get our desired
       value into a variable after a series of repetitive operations.
       the variable will contain the final value after the loop's
       completion. (The 'sum' variable in this case.) */
    printf("%d", sum);

    return 0;
}