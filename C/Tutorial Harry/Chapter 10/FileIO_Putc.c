# include <stdio.h> 

int main()
{
    FILE *ptr;
    ptr = fopen("PutcFile","w");
    char string[100];
    fputc('T',ptr); // fputc for character with ''
    
    fputs("his is a string.\n",ptr); // fputs for string with ""
    printf("Via User-Input, Type Anything:\n");
    gets(string);
    fputs(string,ptr); // cannot be used to print int,float type variable makes it different form fprintf.
    fclose(ptr);
    return 0;
}