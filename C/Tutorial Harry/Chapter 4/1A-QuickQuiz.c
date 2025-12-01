/* The task:
   Write a program to print natural numbers from 10 to 20 when the initial loop counter i is initialized to 0.
   The loop counter need not be int, it can be a float as well. */

#include <stdio.h>

int main()
{
    // Though there is another way to do it using for loop, it can also be executed using while loop.
    // Thus, I will create an if-elseif system so that user can get same ouput using both ways.
    int a;
    printf("Which loop program do you want to use?\n Enter : 1 for 'while' and 2 for 'for'.\n");
    scanf("%d", &a);

    // While-loop execution;
    if (a == 1)
    {
        printf("Executing while-loop program.\n");
        float i = 0;
        i += 10;
        while (i >= 10 && i <= 20)
        {
            printf("%f\n", i);
            i++;
        }
    }
    // For-loop execution;
    else if (a == 2)
    {
        printf("Executing for-loop program.\n");
        float i = 0;
        for (i = 10; i >= 10 && i <= 20; i++)
        {
            printf("%f\n", i);
        }
    }
    return 0;
}