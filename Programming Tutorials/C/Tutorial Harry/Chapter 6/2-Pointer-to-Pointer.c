/* A variable storing the address of a variable that itself stores address of another variable.
   The number of '*' operators increase according to the number of pointers.
   For e.g: If '*j' is itself a pointer, we can use **k pointer to store it's address. */

#include <stdio.h>

int main()
{
    int i = 87;
    int *j = &i, **k = &j; // Address of 'k' can also be stored and the next pointer will have one more star and the process goes on.
    printf("Address of i : %u\n", j);
    printf("Address of j : %u\n", k); // Address of a pointer using another pointer.
    printf("Address of k : %u\n", &k);
    printf("Value at address of i : %d\n", *j);
    printf("Value at address of j : %d\n", *k);
    printf("Value at address of k : %d\n", *(&k)); // Or a simple 'k'.

    return 0;
}