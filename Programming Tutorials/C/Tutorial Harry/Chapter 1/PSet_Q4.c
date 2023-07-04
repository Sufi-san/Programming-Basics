/* The purpose of this program is to calculate simple interest based on Principal Value and Rate with respect to time.*/

#include <stdio.h>

int main()
{
    int t;
    float r, P;

    printf("\n\nCalculating simple interest. \n");

    printf("\nEnter Time in Years : \n");
    scanf("%d", &t);
    printf("Enter Rate of Interest in Percentage Value : \n");
    scanf("%f", &r);
    printf("Enter Principal Value : \n");
    scanf("%f", &P);

    float SI = P * r * t / 100;

    printf("\nTherefore, Simple Interest after %d years will be: %f \n", t, SI);

    return 0;
}