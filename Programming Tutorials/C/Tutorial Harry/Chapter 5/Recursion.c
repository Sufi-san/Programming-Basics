/* Understanding recursion :
   Recursion is calling a function inside of itself.
   Such a function is called a recursive function.

   A great example of recursion and a recursive function is factorial operation.
   This program consists of the factorial function so as to provide an example. */

#include <stdio.h>

int factorial(int f);

int main()
{
    int x;
    printf("Enter the number to get it's factorial :\n");
    scanf("%d", &x);
    printf("%d! = %d\n", x, factorial(x));
    return 0;
}

int factorial(int f)
{
    int v;
    if (f == 0 || f == 1) // Base condition for Recursion.
    {
        return 1;
    }
    else
    {
        return f * factorial(f - 1); // Here, factorial called itself. As n! = n * (n-1)!
    }
}