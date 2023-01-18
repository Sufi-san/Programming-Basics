// With the help of this program we will understand break and continue statements.

#include <stdio.h>

int main()
{
    int i, stopper;
    printf("Enter value(from 1 to 20) before which the loop will stop.\n");
    scanf("%d", &stopper);
    printf("The loop will be terminated when i = %d\n", stopper);
    for (i = 0; i <= 20; i++)
    {
        if (i != stopper)
        {
            printf("%d\n", i);
            continue; // Ignores the code written after it and initiates loop again from the beginning.
        }
        break; // Ends the loop completely irrespective of for-loop conditions being true of false.
    }
    return 0;
}