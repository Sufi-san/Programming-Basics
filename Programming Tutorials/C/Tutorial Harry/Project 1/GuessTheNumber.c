#include <stdio.h>
#include <stdlib.h> // Library required for using a random number generator : rand()
#include <time.h>   // Library required for using : srand(time(0))

int main()
{
    int na = 0, guess, number;
    srand(time(0));            // Ensures uniqueness of random number each time the program runs.
    number = rand() % 100 + 1; // Generates and stores a random number between 1 - 100 into the variable.
    /* Type this line and run program to check whether the number generator is working :
       printf("The number is %d\n",number); */
    printf("Guess and enter the generated number (From 1 to 100) : \n");
    scanf("%d", &guess);
    while (guess != number)
    {
        na++;
        if (guess > number)
        {
            printf("The guessed number is HIGHER than the actual number.\n");
            printf("Guess again : \n");
            scanf("%d", &guess);
            continue;
        }
        if (guess < number)
        {
            printf("The guessed number is LOWER than the actual number.\n");
            printf("Guess again : \n");
            scanf("%d", &guess);
            continue;
        }
    }
    if (guess == number)
    {
        printf("Congratulations! You have successfully guessed the correct number.\n");
        printf("The correct number is : %d\n", number);
        printf("No. of attempts : %d\n", ++na);
        /* Harry used the do-while loop in his program.
           As I wanted to make mine different, I used the
           while loop. There are also other sequence and
           presentation differences. */
    }
    return 0;
}