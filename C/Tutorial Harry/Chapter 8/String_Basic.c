# include <stdio.h> 
# include <string.h> // standard library for useful string functions.

int main()
{
    char s[]="String"; // same as :char s[]={'S','t','r','i','n','g','\0'};

    /* Strings can be printed character by character, or at once using a loop.
       However there is an even more convenient way for printing strings.
       In this program both ways are displayed */

    for(int i = 0;i<strlen(s);i++)
    {
        printf("%c",s[i]);
    }
    // OR using pointer alongwith loop:
    printf("\n");
    char *ptr = s; // First element of string
    while(*ptr != '\0')
    {
        printf("%c",*ptr);
        ptr ++; /* As ptr is character variable, an addition of 1 into ptr will 
                   increase address value by 1 only. */
    }

    // Convenient way : use of %s identifier and string name.

    printf("\n%s",s);
    return 0;
}