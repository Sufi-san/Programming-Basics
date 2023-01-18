/* Write a program to determine whether a character
   entered by the user is lowercase or not.

   In this program we will make use of ASCII values assigned to characters.
   As the computer only understands numbers, every character is assigned a
   numeric code by which the computer identifies the character. Using those
   numeric codes as classes we will identify if the input is a lower case or
   upper case alphabet or none.

   When we display a 'char' variable using %c it's output is the same as input.
   However, when a %d is used to display the value we see it's ASCII code if
   the variable is a non-numeric character. Using this property, we will also be
   able to display the ASCII code for each entered character.

   Note: For successfully doing a character input in the 'char' variable, we have to use
   only %c, it won't accept the (character or alphabet) input if we use %d or %f. */

#include <stdio.h>

int main()
{
    char alphabet;
    printf("Enter the alphabet for case check : \n");
    scanf("%c", &alphabet);

    if (alphabet >= 65 && alphabet <= 90)
    {
        printf("The entered alphabet is upper-case.\nIt's ASCII Code is :%d\n", alphabet);
    }
    else if (alphabet >= 97 && alphabet <= 122)
    {
        printf("The entered alphabet is lower-case.\nIt's ASCII Code is : %d\n", alphabet);
    }
    else
    {
        printf("The entered character wasn't an alphabet.\nIt's ASCII Code is : %d\n", alphabet);
    }
    return 0;
}