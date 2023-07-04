#include <stdio.h>

int main()
{
    // To Explain evaluation of 3x/y-z+k using order of precedence and associativity in C.

    int x = 2, y = 3, z = 3, k = 1;
    printf("\nWe know that  x = 2, y = 3, z = 3, k = 1\n");
    printf("The evaluation according to precedence will be applied on 3*x/y-z+k : \n");
    printf("Therefore according to order of precedence and associativity,\n Multiplication and then Division will be performed first. \n");
    printf("This will be followed by Subtraction and then Addition according to order associativity.\n");
    printf("Step 1 - Multiplying 3 with x, we get : %d \n", 3 * x);
    printf("Step 2 - Dividing result obtained from Step 1 by y, we get : %d \n", ((3 * x) / y));
    printf("Step 3 - Subtracting z from result obtained of Step 2, we get : %d \n", ((3 * x) / y) - z);
    printf("Step 4 - Adding k to the result obtained from Step 3, \n\t we get the final evaluated value : %d \n", ((3 * x) / y) - z + k);
    printf("The value obtained is the same value that will be displayed \n if we simply evaluate it in C language without parenthesis.\n");
    return 0;
}