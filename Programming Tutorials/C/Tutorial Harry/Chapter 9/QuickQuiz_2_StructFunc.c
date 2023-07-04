/* void show(struct employee e);
   Complete this show function to display the content of the employee. */

# include <stdio.h> 

// A structure can be passed to a function.
struct employee 
{
   int code;
   float salary;
   char name[10];
};
void show(struct employee e)
{
   printf("Code of Employee : %d\n",e.code);
   printf("Salary of Employee : %.3f\n",e.salary);
   printf("Name of Employee : %s\n",e.name);
};
int main()
{
   struct employee e1 = {100,2345.57,"Employee"};
   show(e1);
   return 0;
}
