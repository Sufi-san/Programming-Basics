// Write a program using functions to print the following pattern(first n lines):
// *
// ***
// *****

/* Comparing Number of line to Number of Stars in that particular line, we get the relation:
   If 'n' is Number of Line, then Number of Stars in that line = 2*n-1 (Formula for odd number). */

// In this version we have used Recursion instead of double 'for' loops.

#include <stdio.h>
#include <time.h>

void Pattern(int a);

int main()
{
    int n;
    printf("Enter number of lines to be printed : \n");
    scanf("%d", &n);
    printf("The pattern is as follows:\n");
    Pattern(n);

    return 0;
}

void Pattern(int a) // Using Recursion.
{
    if (a == 1)
    {
        printf("*\n");
        return; // Important so as to continue the recursion and the loop below for every value.
        // The 'return;' statement transfers the result at the location where the function is called.
    }
    Pattern(a - 1); // Due to this recursive function the output will start from ouput of a = 1.
    for (int i = 0; i < 2 * a - 1; i++)
    {
        printf("*");
    }
    printf("\n");
}
