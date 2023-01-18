/*Calculate income tax paid by an employee to the government as per the slabs mentioned below:
Income Slab	Tax
2.5L-5.0L	5%
5.0L-10.0L	20%
Above 10.0L	30%
Note that there is no tax below 2.5L. Take income amount as an input from the user.*/

/*The % income tax applies on the amount left after subtracting the lower limit of
  the income tax slab under which the income falls, from the total income.
  For e.g: If a person earns 2.6Lakhs, the income tax will be applicable on the (2.6L - 2.5L) i.e
  excess 10K.

  Harry declared the tax variable as 'tax = 0' and in the conditions,
  as 'tax = tax + ...'. I cannot figure out the actual reason as of now.
  However, the program made by me works the same as his and the outputs match.

  Disclaimer: This is just a beginner level program for practicing conditional statements
  and it isn't suitable for officially calculating income tax. */

#include <stdio.h>

int main()
{
  float income, tax;
  printf("Enter your income : \n");
  scanf("%f", &income);

  if (income >= 250000 && income <= 500000)
  {
    tax = 0.05 * (income - 250000);
  }
  if (income > 500000 && income <= 1000000)
  {
    tax = 0.2 * (income - 500000);
  }
  if (income > 1000000)
  {
    tax = 0.3 * (income - 1000000);
  }
  printf("Your income tax is : %f\n", tax);
  return 0;
}