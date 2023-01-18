/* The two types of fucntion calls are:
   1) Call by value - Sending direct variable values as arguments to the function.
   2) Call by reference - Sending address of variables instead of a copy of their values to the function. */

#include <stdio.h>

int sum(int a, int b);
int swap(int *a, int *b);

int main()
{
    // Call by value.
    // Here, even if we change the values of parameters in the 'sum' function, it won't affect the 'a' and 'b' of main.
    // Without using pointer, we cannot change the value of variable in the main function using other functions.
    int a = 4, b = 7;
    printf("Value of a + b is %d\n", sum(a, b));

    // Call by reference. (Sending address instead of a copy of variable's value to the function)
    // Here, the values of variables can be changed or swapped with the help of pointers.
    printf("Value of 'a' and 'b' before swapping is %d and %d respectively\n", a, b);
    swap(&a, &b); // Providing address of variables 'a' and 'b'.
    printf("Value of 'a' and 'b' after swapping is %d and %d respectively\n", a, b);
    return 0;
}

int sum(int a, int b)
{
    int sum;
    sum = a + b;
    return sum;
}

int swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
    return *a, *b;
}