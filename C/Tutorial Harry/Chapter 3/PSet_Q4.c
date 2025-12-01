/*Write a program to find whether a year entered
  by the user is a leap year or not.
  Take the year as input from the user.*/

/* The given year is a leap year if it is fully divisible by 4.
   However century years e.g:300,1300,2400 etc. require to be
   fully divisible by 400 instead.
   For differentiating these century years from the divisible by
   4 condition, we also check it's non-divisibility by 100.*/

#include <stdio.h>

int main()
{
    int Year;
    printf("Enter the year to be checked.\n");
    scanf("%d", &Year);

    if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0)
    {
        printf("The Year %d is a leap year. \n", Year);
    }
    else
    {
        printf("The Year %d is not a leap year. \n", Year);
    }
    return 0;
}