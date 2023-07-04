/* The purpose of this program is to calculate the area of a circle and
   using the same radius alongwith new height,also calculate the volume
   of a cylinder.*/

#include <stdio.h>

int main()
{
    float r, h;
    float pi = 3.14;

    // Calculating radius of circle with formula.

    printf("\nCalculating Area of Circle. \n\n");

    printf("Enter value for radius of circle : \n");
    scanf("%f", &r);

    printf("\nTherefore, Area of Circle is pi*r^2, that is :%f \n", pi * r * r);

    // Calculating volume of cylinder by product of height and previous data.

    printf("\n\nNow Calculating Volume of Cylinder using same radius. \n \n");

    printf("\nEnter value for height of the cylinder : \n");
    scanf("%f", &h);

    printf("\nThus, volume of cylinder : %f \n", pi * r * r * h);
    return 0;
}