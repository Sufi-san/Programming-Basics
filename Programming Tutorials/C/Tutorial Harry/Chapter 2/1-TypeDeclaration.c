#include <stdio.h>

int main()
{
  //     int a = 4; // Type declaration instructions
  //     int b, c;
  //     b = c = a; // Type declaration instructions
  //     printf("The value of a is %d\n", a);
  //     printf("The value of b is %d\n", b);
  //     printf("The value of c is %d\n", c);

  float a = 1.1;
  float b = a + 8.9;
  /*Cannot change the order
    First declare a and after that
    only you can declare other
    variables dependant on a.*/

  printf("The value of b is %f\n", b);
  return 0;
}