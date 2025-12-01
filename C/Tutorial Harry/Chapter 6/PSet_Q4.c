/* Write a program using a function that calculates the sum and average of two numbers.
   Use pointers and print the values of sum and average in main(). */

/* We know that a function cannot return two values. However, with the use of pointers
   and a bit of maneuvering we can obtain two results simultaneously.

   In the program what we have done is that, we already declared extra variables in the
   main function and provided the address of those, inside new the function with the use
   of paramateric pointers.
   We have also turned the new function into a 'void' function.
   Though the new function won't return any value, it will use the two input variables and
   bring about change in the value of the extra variables in the main function.
   We can then display those extra variables with their updated values from the new function,
   into the main function. */

#include <stdio.h>

void SumAndAvg(int a, int b, int *j, float *k);

int main()
{
    int a, b, sum;
    float avg; // 'sum' and 'avg' are extra variables.
    printf("Enter two numbers one after another: (Press Enter)\n");
    scanf("%d%d", &a, &b); // Using pointers for address.
    SumAndAvg(a, b, &sum, &avg);
    printf("For the two numbers, sum and average are %d and %f.\n", sum, avg); // Using pointers for arguments.
    return 0;
}

void SumAndAvg(int a, int b, int *j, float *k) // Simultaneous Call by Value and Call by Reference.
{
    *j = a + b;         // Updating value of 'sum' variable.
    *k = (float)*j / 2; // Updating value of 'avg' variable.
    // Typecasting, to get accurate answer. Because, as 'a' and 'b' are integers, they will demote float value to int.
}
