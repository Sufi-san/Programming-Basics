// To check whether a file exists or not before opening the file.

# include <stdio.h> 

int main()
{
    FILE *ptr;
    int num,num2;

    ptr = fopen("NULLFile.txt","r");
    if(ptr == NULL) // When a file doesn't exist, the pointer stores NULL.
    {
     printf("The required file doesn't exist.");
    }
    else
    {
    fscanf(ptr,"%d",&num); 
    fscanf(ptr,"%d",&num2);
    fclose(ptr); 
    printf("The value inside file TestText.txt is %d\n",num); 
    printf("The next integer in the file TextText.txt is %d\n",num2);
    }
    return 0;
}