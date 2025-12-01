# include <stdio.h> 
# include <string.h>

// other ways to initialize structures.

struct employee 
{
   int code;
   float salary;
   char name[10];
};
int main()
{
    struct employee Sufi = {100,10000.567,"Sufiyan"}, Zero = {0}; // For Zero, all values are assigned to zero.
    
    printf("For employee Sufi:\n");
    printf("Name = %s\n",Sufi.name);
    printf("Code = %d\n",Sufi.code);
    printf("Salary = %f\n",Sufi.salary);

    printf("For employee Zero:\n");
    printf("Name = %s\n",Zero.name);
    printf("Code = %d\n",Zero.code);
    printf("Salary = %f\n",Zero.salary);
    return 0;
}