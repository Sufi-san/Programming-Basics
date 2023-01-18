#include <stdio.h>
#include <math.h>

int main()
{
   int a = 4, b = 8;

   printf("The value of a + b is %d\n", a + b);
   printf("The value of a - b is %d\n", a - b);
   printf("The value of a * b is %d\n", a * b);
   printf("The value of a / b is %d\n", a / b); // Rounded off to nearest integer because of %d.
   printf("The value of a / b is %f\n", a / b); // For correct answer with '%f' the variables should be assigned with float.

   int z;
   z = b * a; // Here b*a = z will be invalid because int/float/char are assignment operators.
   // For assignment operators such an expression i.e. b*a=<a value> is illegal.

   printf("The value of z is : %d\n", z);

   // Now looking at the % modular division operator.

   printf("10 when divided by 4 leaves a remainder of : %d\n", 10 % 4);                              // The modular division operator gives the remainder.
   printf("-10 when divided by 4 leaves a remainder of : %d\n", -10 % 4);                            // The sign of remainder is decided by the numerator's sign.
   printf("10 when divided by -4 leaves a remainder of \n(using modular operator) : %d\n", 10 % -4); // The sign of remainder isn't dependant on denominator.

   // No operator is assumed to be present automatically. e.g. ab is not equal to a*b.

   // There is no operator to perform exponentiation in C language.(^ doesn't mean exponentiation.)
   // printf("The value of 2^2 is : %d\n",2^2); ->Will not provide 2 raised to power 2.
   printf("The value of 2^2 is : %f\n", pow(2, 2));
   /* The pow() function will provide the desired output.
      Its a function from <Math.h> and we will have to include the library at the start of the program.*/
   // Also the %f is to be mentioned inside the printf function as the pow() function returns double.

   // Discussing results of combinations of variable declaration keywords.
   /* int and int gives int
      int and float gives float
      float and float give float */

   printf("Value of 6 + 5 is %d\n", 6 + 5);         // int and int
   printf("Value of 6 + 5.5 is %f\n", 6 + 5.5);     // int and float
   printf("Value of 6.6 + 5.5 is %f\n", 6.6 + 5.5); // float and float

   return 0;
}