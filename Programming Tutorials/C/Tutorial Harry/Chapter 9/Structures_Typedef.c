# include <stdio.h> 

/* Typedef is generally used with structures for easy and efficient program writing.
   Typedef allows the programmer to set a custom name for any structure, i.e. setting
   a custom datatype for 'struct (anything)' and then using it to set other custom
   datatypes using that particular structure. */


typedef struct employee 
{
   int code;
   float salary;
   char name[10];
}Emp;   // Successfully customized the structure.

void show(Emp e)
{
    printf("\nThe details of the employee are:\n");
    printf("Name : %s\nCode : %d\nSalary : %.3f",e.name,e.code,e.salary);
};

int main()
{
    Emp e1,*ptr; // Here Emp = struct employee.
    ptr = &e1;

    printf("Enter the Name,Code and Salary of employee respectively:\n"); 
    scanf("%s%d%f",&ptr->name,&ptr->code,&ptr->salary);
    show(e1);
   return 0;
}

