// Write a program to print n natural numbers in reverse order.

#include <stdio.h>

int main()
{
    int n, a;
    printf("Enter a number upto which natural numbers are to be displayed (in reverse order): \n");
    scanf("%d", &n);
    printf("\nThe Natural numbers are : \n");
    for (a = n; a; a--) // 'a' can also be declared inside the for-loop as 'int a = n' if not declared earlier.
    {
        printf("%d\n", a);
    }
    // Here, in the condition part, 'a != 0' or 'a > 0' instead of 'a' will provide the same output.
    // Any non-zero value is true and as we just want the condition to be true we just wrote 'a' in that part.
    // However when value of 'a' becomes zero, the condition will turn false and the loop stops executing.

    return 0;
}