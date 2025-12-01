# include <stdio.h> 

int main()
{
    FILE *ptr;
    int num,num2;
    ptr = fopen("TestText.txt","r");
    fscanf(ptr,"%d",&num); // scans integer from the file.
    fscanf(ptr,"%d",&num2); // scans the next integer in the file (after space)
    fclose(ptr); // a good practice, as the use of the file is over the file should be closed.
    printf("The value inside file TestText.txt is %d\n",num); // normal printf() because the integer is now stored in num.
    printf("The next integer in the file TextText.txt is %d\n",num2);
    
    return 0;
}