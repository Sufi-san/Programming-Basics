/* In this program we see,
   '&' more uses and info about (address of) operator.
   '*' used as (value of address) operator.
   '%u' Specifier to print address of a variable in the output.
   Pointers : Variables which store the address of other variables. */

#include <stdio.h>

int main()
{
    int i = 7;
    int *j; // Declaring with * symbol is necessary to declare it as a pointer.
    // Such a declaration confirms that the variable 'j' will be used to store address of other variable.
    j = &i; // Can also be declared in one line, like : int *j = &i; .
    printf("Address of i : %u\n", &i);
    printf("Address of i : %u\n", j);
    printf("Address of j : %u\n", &j); // The pointer variable itself has a different memory address.
    printf("Value at address of i : %d\n", i);
    printf("Value at address of i : %d\n", *(&i));
    printf("Value at address of i : %d\n", *j);
    printf("Value at address of j : %d\n", *(&j)); // Which is same as '&i' .
    return 0;
}