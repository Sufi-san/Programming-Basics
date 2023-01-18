# include <stdio.h> 
# include <string.h>

// Pointers can be used to point towards the first datatype of the structure.

struct employee 
{
   int code;
   float salary;
   char name[10];
};

int main()
{
    struct employee e1;
    struct employee *ptr; // Creation of a structure pointer.
    ptr = &e1; // The structure pointer points to e1.
    
    /* The elements of structure can be mentioned using two different syntax types:
       1) (*ptr).element
       2) ptr->element 
    */
    printf("Enter the Name,Code and Salary of employee respectively:\n"); 
    scanf("%s%d%f",&ptr->name,&ptr->code,&ptr->salary); 
    printf("\nThe details of the employee are:\n");
    printf("Name : %s\nCode : %d\nSalary : %f",(*ptr).name,(*ptr).code,(*ptr).salary);
    return 0;
}