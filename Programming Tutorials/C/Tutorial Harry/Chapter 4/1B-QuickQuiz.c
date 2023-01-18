/* The task:
   Write a program to print natural numbers from 10 to 20 when the initial loop counter i is initialized to 0.
   The loop counter need not be int, it can be a float as well.

   Note: I created the program in 1A-QuickQuiz, However after seeing Harry's method
         I realized that we can create the loop without even slightly changing the
         initial counter.
         In this program I have created the while-loop and the for-loop in a manner
         that is more accurate to the given conditions. */

#include <stdio.h>

int main()
{
    int a;
    printf("Which loop program do you want to use?\n Enter : 1 for 'while' and 2 for 'for'.\n");
    scanf("%d", &a);

    // While-loop execution;
    if (a == 1)
    {
        printf("Executing while-loop program.\n");
        float i = 0;

        while (i <= 20)
        {
            if (i >= 10)
            {
                printf("%f\n", i);
            }
            i++;
        }
    }
    // For-loop execution;
    else if (a == 2)
    {
        printf("Executing for-loop program.\n");
        float i; // In for-loop we can set the counter inside the condition brackets.()
        for (i = 0; i <= 20; i++)
        {
            if (i >= 10)
                printf("%f\n", i);
        }
    }
    return 0;
}