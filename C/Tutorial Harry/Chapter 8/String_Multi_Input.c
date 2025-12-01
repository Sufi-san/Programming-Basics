# include <stdio.h> 

int main()
{
    
    /* Taking multi-word string input using gets() and printing it using puts()
       is possible */

    char t[100];
    printf("Enter a short sentence:\n");
    gets(t); // No '&' required 
    printf("The entered sentence is : ");
    puts(t);
    puts(t); // Automatically moves cursor to next line.

    return 0;
}