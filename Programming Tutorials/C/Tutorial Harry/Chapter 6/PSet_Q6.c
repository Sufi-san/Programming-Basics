/* Try problem 3 using call by value and verify that it doesn’t
   change the value of the said variable. */

#include <stdio.h>

float multiplier(float a); // Function for call by value.

int main()
{
    float a;
    printf("Enter value for the variable : \n");
    scanf("%f", &a);
    multiplier(a);
    printf("Value of variable after call by value : %f\n", a);
    printf("As the value for the variable didn't change,\n");
    printf("it is verified that the call by value function\n");
    printf("cannot change the value of a variable present\n");
    printf("in the main function.\n");
    return 0;
}

float multiplier(float a)
{
    return a = 10 * a;
}