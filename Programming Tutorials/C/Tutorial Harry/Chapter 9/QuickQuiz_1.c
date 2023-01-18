// Write a program to store the details of 3 employees from user-defined data. Use the structure declared above.

# include <stdio.h> 
# include <string.h>

struct employee
{
    int code;
    char name[10];
    float salary;
};

int main()
{
    int a = 1;
    
    struct employee e1,e2,e3;
   

    printf("Storing and displaying the data of 3 employees:\n");
   
        printf("Employee %d Name = ",a);
        scanf("%s",&e1.name);
        printf("Employee %d Code = ",a);
        scanf("%d",&e1.code);
        printf("Employee %d Salary = ",a);
        scanf("%f",&e1.salary);
        a++;
        printf("\nEmployee %d Name = ",a);
        scanf("%s",&e2.name);
        printf("Employee %d Code = ",a);
        scanf("%d",&e2.code);
        printf("Employee %d Salary = ",a);
        scanf("%f",&e2.salary);
        a++;
        printf("\nEmployee %d Name = ",a);
        scanf("%s",&e3.name);
        printf("Employee %d Code = ",a);
        scanf("%d",&e3.code);
        printf("Employee %d Salary = ",a);
        scanf("%f",&e3.salary);
        a = a - 2;
       printf("\nData of employee: %d\n",a);
       printf("Employee name : %s\n",e1.name);
       printf("Employee code : %d\n",e1.code);
       printf("Employee salary : %f\n",e1.salary);
       a++;
       printf("\nData of employee: %d\n",a);       
       printf("Employee name : %s\n",e2.name);
       printf("Employee code : %d\n",e2.code);
       printf("Employee salary : %f\n",e2.salary);
       a++;
       printf("\nData of employee: %d\n",a);
       printf("Employee name : %s\n",e3.name);
       printf("Employee code : %d\n",e3.code);
       printf("Employee salary : %f\n",e3.salary);

    return 0;
}