// Understanding Switch case-control instruction.
//  Syntax for Switch is :
//      switch (variable-expression)
//   {
//   case  (value assigned to variable-expression) :
//       /* code */;
//         break; --> //It is necessary to add this if you don't want the code for a false case to be displayed.
//   default: --> // If none of the cases are true for the value of variable, the default code is displayed.
//       /* code */;
//   }

#include <stdio.h>

int main()
{
    int Stars;
    printf("How many stars will you give to the program from the range 1-5?\n");
    scanf("%d", &Stars);

    switch (Stars)
    {
    case 1:
        printf("You gave the program a rating of 1 out of 5.\n");
        break;
    case 2:
        printf("You gave the program a rating of 2 out of 5.\n");
        break;
    case 3:
        printf("You gave the program a rating of 3 out of 5.\n");
        break;
    case 4:
        printf("You gave the program a rating of 4 out of 5.\n");
        break;
    case 5:
        printf("You gave the program a rating of 5 out of 5.\n");
        break;
    default:
        printf("Your rating was out of range!\n");
        break;
    }
    return 0;
}