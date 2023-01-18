// Use the library function to calculate the area of a square with side 'a'.

#include <stdio.h>
#include <math.h> // Required library.

int main()
{
    float a, area;
    printf("Enter the value of side 'a' of the square.\n");
    scanf("%f", &a);
    area = pow(a, 2); // Required function from the library.
    printf("Therefore, the area of square with side %f is %f\n", a, area);
    /* Note: If we don't assign or declare the 'area' variable and directly
             use the 'pow(a,2)', no matter the type of 'a' variable (int,float,char),
             we will always have to use %f for printing 'pow()'.
             This is because, 'pow()' function always returns 'double'. */
    return 0;
}