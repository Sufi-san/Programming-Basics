/* Write a program to print the address of a variable.
   Use this address to get the value of this variable. */

#include <stdio.h>

int main()
{
    int a, *i = &a;
    printf("Enter value for variable 'a' :\n");
    scanf("%d", &a);                                    // Can also use 'i'
    printf("Thus, address of variable 'a' is %u\n", i); // Can also use '&a'
    printf("And, value at address of 'a' is %d\n", *i); // Can also use '*(&a)'
    return 0;
}