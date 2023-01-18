#include <stdio.h>

int main()
{
  // BODMAS is not applicable in C language!
  // Therefore, we have to follow operator precedence and associativity.
  /*Precedence chart
    Priority 1 : *,/,%
    Priority 2 : +,-
    Priority 3 : =*/

  // A few examples are present in this program.

  int a = 40, b = 3;

  printf("Thus, following operator precedence, the output in C \n for the equation 3a - 4b will be : %d\n", 3 * a - 4 * b);
  // However if proper instructions(parenthesis) are mentioned as instructions, the output can be controlled accordingly.
  printf("The value of 3(a-4b) is : %d\n", 3 * (a - 4 * b));

  // Understanding Associativity.

  printf("\nThe value of 3a/4b will depend on associativity.\n");
  // The operations will be performed left to right according to the input.
  printf("Therefore, the answer will be {(3a)/4}b that is :%d\n", 3 * a / 4 * b);
  // To adjust the output, we need to use brackets in the input instruction.(Adding parenthesis)
  printf("Thus, another value of 3a/4b using parenthesis (3a)/(4b) is : %d\n", (3 * a) / (4 * b));

  return 0;
}