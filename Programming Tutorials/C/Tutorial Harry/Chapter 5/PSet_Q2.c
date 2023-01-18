// Write a function to convert Celcius temperature into Fahrenheit.

#include <stdio.h>

float Fahrenheit(float a);

int main()
{
    float Cel;
    printf("Enter the value of temperature in Celcius : \n");
    scanf("%f", &Cel);
    printf("Therefore, the value of temperature in Fahrenheit is %f .\n", Fahrenheit(Cel));
    return 0;
}

float Fahrenheit(float a)
{
    float Fahr;
    Fahr = a * 9 / 5 + 32;
    return Fahr;
}