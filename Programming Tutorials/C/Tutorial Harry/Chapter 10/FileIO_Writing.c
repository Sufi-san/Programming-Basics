#include <stdio.h>
#include <string.h>
int main()
{
    FILE *ptr;
    char s[5];
    ptr = fopen("CNotepad", "w");
    fprintf(ptr, "This text is written via a C Program.\n"); // The message inside will be written into the file.
    fclose(ptr);
    printf("Do you want to overwrite the previous text?\nType YES or NO: ");
    gets(s);
    if (strcmp(s, "YES") == 0)
    {
        char st[50];
        ptr = fopen("CNotepad", "w"); // the overwrite happens only if the file is first closed and then opened again.
        printf("Type the new message:\n");
        gets(st);
        fprintf(ptr, st);
        fclose(ptr);
    }
    else if (strcmp(s, "NO") == 0)
    {
        fclose(ptr);
    }
    return 0;
}