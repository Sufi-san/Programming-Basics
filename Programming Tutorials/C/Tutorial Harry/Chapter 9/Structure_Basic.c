# include <stdio.h> 
# include <string.h>

/* Structure is used to create a custom datatype.
   It can hold multiple dissimilar datatypes.  */

struct employee // Declaration of new user defined data type 'employee'
{
   int code;
   float salary;
   char name[10];
};

int main()
{
    
    struct employee e1;
    e1.code = 123;
    e1.salary = 1300.579;
    strcpy(e1.name,"Sufi");// This won't work ---> e1.name[10]="Sufi";
    
    printf("The employee details are as follows:\nCode = %d\nSalary = %.3f\nName = %s",e1.code,e1.salary,e1.name);

    return 0;
}