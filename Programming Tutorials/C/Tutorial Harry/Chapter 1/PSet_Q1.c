/* This C Program is made to calculate the area of a rectangle
   using both hardcoded input and supply input.*/

#include <stdio.h>

int main()
{

    float l = 33.57, b = 45.87, a, x;
    float A = l * b;

    // a) Calculating Area of Rectangle using hardcoded input.

    printf("Calculating using hardcoded input. \n \n");
    printf("The length of the rectangle is %f \n", l);
    printf("The breadth of the rectangle is %f \n", b);
    printf("Therfore area of rectangle is l*b that is : %f \n \n", A);

    // b) Calculating Area of Rectangle using user-supplied input.

    printf("Calculating using supplied input. \n \n");
    printf("Enter value for length of rectangle \n");
    scanf("%f", &a);

    printf("Enter value for breadth of rectangle \n");
    scanf("%f", &x);

    float Area = a * x; // The Area variable worked only when it was declared after assigning values to 'a' and 'x'.

    printf("Thus, Area of Rectangle : %f \n", Area);

    return 0;
}