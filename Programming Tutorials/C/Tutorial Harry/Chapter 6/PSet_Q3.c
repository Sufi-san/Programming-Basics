/* Write a program to change the value of a variable
   to ten times its current value.
   Write a function and pass the value by reference. */

#include <stdio.h>

float multiplier(float *a); // Function for call by reference.

int main()
{
    float a;
    printf("Enter value for the variable : \n");
    scanf("%f", &a);
    multiplier(&a);
    printf("Value of variable after call by reference : %.2f", a);
    return 0;
}

float multiplier(float *a) // Here *a will be the pointer to the variable whose address is provided.
{
    // *a = 10*(*a);
    //  return *a;  <--- ( This code also works and displays the required output.)

    return *a = 10 * (*a);
}