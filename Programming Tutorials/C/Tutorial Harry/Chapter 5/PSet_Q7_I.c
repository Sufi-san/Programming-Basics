// Write a program using functions to print the following pattern(first n lines):
// *
// ***
// *****

/* Comparing Number of line to Number of Stars in that particular line, we get the relation:
   If 'n' is Number of Line, then Number of Stars in that line = 2*n-1 (Formula for odd number). */

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

void Pattern(int a) // Using Double For-loop method.(Iterative)
{
    for (int x = 1; x <= a; x++)
    {
        for (int i = 0; i < 2 * x - 1; i++)
        {
            printf("*");
        }
        printf("\n");
    }
}
