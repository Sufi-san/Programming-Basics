# include <stdio.h> 
# include <string.h>

int main()
{
    /* We can use %s with scanf to take string input from the user
       However, it is valid for strings containing single word only
       (no spaces) */

    char s[50];
    printf("Type word to enter in string variable:\n");
    scanf("%s",s); // No '&' required for string input in scanf
    printf("\nTherefore, s[] = %s",s);

    return 0;
}