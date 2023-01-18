// Write a function to calculate the force of attraction on a body of mass 'm' exerted by earth. (g=9.8m/S2)
//  Formula : m * g

#include <stdio.h>

float AttForce(float a);

int main()
{
    float m;
    printf("Enter mass of the body(in kgs) : \n");
    scanf("%f", &m);
    printf("Hence, Force of attraction exerted by the earth on the body is %.3f Newton.\n", AttForce(m));
    // In the above line of code, the '.3' in between % and f is indicating required decimals after point in output.
    // It can be adjusted according to the number entered after the point '.' .
    return 0;
}

float AttForce(float a)
{
    float Force, g = 9.8;
    Force = a * g;
    return Force;
}