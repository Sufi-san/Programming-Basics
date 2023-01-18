/*Write a program to find the greatest of
  four numbers entered by the user.*/

#include <stdio.h>

int main()
{
    float a, b, c, d;
    float greatest;
    printf("Enter four numbers in succession (Press enter after each number):\n");
    scanf("%f%f%f%f", &a, &b, &c, &d); // All inputs in one 'scanf' function.

    if (a >= b && a >= c && a >= d)
    {
        greatest = a;
    }
    if (b >= a && b >= c && b >= d)
    {
        greatest = b;
    }
    if (c >= a && c >= b && c >= d)
    {
        greatest = c;
    }
    if (d >= a && d >= b && d >= c)
    {
        greatest = d;
    }
    printf("%f is the greatest input.\n", greatest);

    return 0;
}