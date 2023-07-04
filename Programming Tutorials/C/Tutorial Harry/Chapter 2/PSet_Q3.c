// The goal of this program is to check any number's divisibility by 97.
/*IMPORTANT: Use of IF ELSE Statement is required.
  Though it will be taught in the next chapter,
  I will use an improv and try & run approach for,
  writing the program. Will Google a lot :-) */

#include <stdio.h>

int main()
{
    /*Since a number is considered divisible by any
      other number only if the remainder left is zero,
      we will use the modular division (%) operator to
      check the remainder of any input value divided by
      97.*/

    int x, a = 97;

    printf("Enter an integral value to be checked for divisibility by 97: \n");
    scanf("%d", &x);

    int b = x % a;

    printf("The value for remainder is :%d\n", b);

    if (b == 0)
    {
        printf("%d is divisible by 97\n",x);
    }
    else
    {
        printf("%d is not divisible by 97.\n",x);
    }

    return 0;
}