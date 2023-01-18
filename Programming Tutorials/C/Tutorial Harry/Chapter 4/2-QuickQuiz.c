// Write a program to print first n natural numbers using for-loop and do-while loop.

#include <stdio.h>

int main()
{
    int x;
    printf("Enter the 1 or 2 as per the program you want to run : (1 is 'for-loop' and 2 is 'do-while loop'.)\n");
    scanf("%d", &x);
    // Using for-loop.
    if (x == 1)
    {
        int n, a;
        printf("Enter a number upto which natural numbers are to be displayed : \n");
        scanf("%d", &n);
        printf("\nThe Natural numbers are : \n");
        for (a = 1; a <= n; a++)
        {
            printf("%d\n", a);
            /* This code gives the same output : (This shows that there are multiple ways to write a code with same execution.)
               for (a = 0; a < n; a++)
           {
               printf("%d\n", a + 1);
           }*/
        }
    }
    // Using do-while loop.
    else if (x == 2)
    {
        int m, b = 0;
        printf("Enter a number upto which natural numbers are to be displayed : \n");
        scanf("%d", &m);
        printf("\nThe Natural numbers are : \n");
        do
        {
            printf("%d\n", ++b);
        } while (b < m); // We don't want '<=' operator as we don't want to the loop to continue after b = m.
    }

    return 0;
}