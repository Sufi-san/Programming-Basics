/* Write a program having a variable i.
   Print the address of i. Pass this variable to a function and print its address.
   Are these addresses same? Why? */

#include <stdio.h>

void func(int a);

int main()
{
    int i = 12;
    printf("Address of variable 'i' in main function : %u\n", &i);
    func(i);
    printf("\nAs the arguments passed to a call by value function are copies of original variable values,");
    printf("\nthey have different addresses in the memory.");
    printf("\nThe second address is of parameter 'a' instead of variable 'i'.");
    return 0;
}

void func(int a)
{
    printf("Address of variable 'i' in new function : %u\n", &a);
}