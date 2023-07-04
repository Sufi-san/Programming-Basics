/* Write a program to print the value of a variable i
   by using the "pointer to pointer" type of variable. */

#include <stdio.h>

int main()
{
   int i, *j = &i, **k = &j;
   printf("Enter value for variable 'i' :\n");
   scanf("%d", j);
   printf("%u\n%u\n%u\n", &i, &j, &k);
   printf("Simply printing value of 'i' : %d\n", i);
   printf("Printing value of 'i' using pointer 'j' : %d\n", *j);
   printf("Printing value of 'i' using pointer 'k' : %d\n", **k); // Required Output.
   // Used "pointer to pointer" (**k) to display initial variable's value.
   /* From this we come to know that, when pointer's are printed in their declared form (*-form),
      they always provide value of initial variable. */

   return 0;
}