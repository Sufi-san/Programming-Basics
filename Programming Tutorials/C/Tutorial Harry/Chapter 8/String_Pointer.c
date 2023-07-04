# include <stdio.h> 

/* Once a string is defined using char st[]= ” ”, it cannot be initialized to something else.
A string defined using pointers can be reinitialized.   => *ptr=” ”; */

int main()
{
    // Initializing using s[]=""

    char s[]="Sufiyan";
    printf("%s",s);
    /* s[] ="Sufi"; will result into 
       an error */

    // Initializing using pointer *ptr=""

    char *ptr="Sufiyan"; 
    printf("\n%s\n",ptr);
    ptr = "Sufi"; // String can be successfully reinitialized.
    puts(ptr);
   
    return 0;
}