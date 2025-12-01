# include <stdio.h> 
# include <string.h>

// A structure is required for reading or writing from or to a file. 
// A pointer to the structure is needed for communication between the file and the program.

int main()
{
    FILE *poi; // FILE is the structure, *poi is the file pointer. 
    char D[10];
    printf("If the file is to be read, type READ, for writing type WRITE.\n");
    gets(D);

    if(strcmp(D,"READ") == 0) // strcmp is used to compare strings
    {
    printf("Reading from the file.\n");
    poi = fopen("TestText.txt","r"); // for reading
    }
    else if(strcmp(D,"WRITE") == 0)
    {
    printf("Writing into the file.\n");
    poi = fopen("TestText.txt","w"); // for writing, if not present already, it will generate a new file with the name.
    }
    return 0;
}