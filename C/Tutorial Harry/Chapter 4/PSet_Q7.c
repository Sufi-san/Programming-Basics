/*Write a program to calculate the sum of the numbers occurring in
  the multiplication table of 8.(Consider 8x1 to 8x10)*/

#include <stdio.h>

int main()
{
  int i, sum = 0; // It is necessary to assign an initial value to 'sum' variable to later use it in for-loop.
  printf("The sum of all products of multiplication table of 8 is :\n");
  for (i = 0; i <= 10; i++)
  {
    sum += i * 8;
  }
  printf("%d", sum);
  return 0;
}