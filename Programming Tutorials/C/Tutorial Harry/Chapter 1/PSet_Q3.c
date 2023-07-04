/* Program to convert temperature from degree celcius to farenheit.*/

#include <stdio.h>

int main()
{
    float c;

    /* We will first fetch the degree celcius input and
       then use the formula for converting it to
       degree farenheit */
       
    printf("\n\nEnter the value of temperature in \n Degree Celcius : ");
    scanf("%f", &c);

    printf("\nTherefore, the value of temperature in \n Degree Farenheit : %f \n", c * 9 / 5 + 32);

    return 0;
}