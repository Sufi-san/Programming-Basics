// Write a program using functions to find the average of three numbers.

#include <stdio.h>

float avg(float a, float b, float c);

int main()
{
    float a, b, c;
    printf("Enter the 3 numbers in succession to the average value (Press Enter after each input) :\n");
    scanf("%f%f%f", &a, &b, &c);
    printf("Therefore, the average of the three numbers is %f\n", avg(a, b, c));

    return 0;
}

float avg(float a, float b, float c)
{
    float avg;
    avg = (a + b + c) / 3;
    return avg;
}