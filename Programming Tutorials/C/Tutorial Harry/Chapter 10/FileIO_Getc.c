#include <stdio.h>

int main()
{
    FILE *ptr;
    ptr = fopen("CNotepad", "r"); // Writing the exact name of the file
    char s = fgetc(ptr); // First character of the file gets stored in char variable.
    printf("The value of my character is: %c\n", s);
    fclose(ptr); // closing file to reset pointer.
    
    ptr = fopen("CNotepad","r");
    printf("The text in the file is: ");
    for (s = 0; s != EOF;) // IMP: EOF is End Of File
    {
        printf("%c", s); // The pointer increments automatically and reads every character.
        s = fgetc(ptr); // This is required for the auto increment of the pointer and making it reach EOF.
    }
    fclose(ptr);
    
    ptr = fopen("CNotepad","r");
    char p[50];
    fgets(p,50,ptr); // Reading in one go with a string, fgets(string name,number of char to be read,file pointer).
    printf("\nThe string is: %s\n", p);
    fclose(ptr);
    return 0;
}