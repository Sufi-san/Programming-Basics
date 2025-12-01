# include <stdio.h> 
# include <string.h>

/* To create multiple structures of same
   category easily we create structure 
   arrays. */
struct employee 
{
    int code;
    float salary;
    char name[20];
};
int main()
{
    int a;
    
    printf("How many employee details need to be filled?\n");
    scanf("%d",&a);

    struct employee e[a];


    for(int i = 1 ;i < a+1;i++)
    {
        printf("Employee %d Name = ",i);
        scanf("%s",&e[i].name);
        printf("Employee %d Code = ",i);
        scanf("%d",&e[i].code);
        printf("Employee %d Salary = ",i);
        scanf("%f",&e[i].salary);
        printf("\n");
    }
    printf("Therefore, all employees and there details are:\n");
    for(int i = 1 ;i < a+1;i++)
    {
        printf("\nEmployee %d Name = %s\n",i,e[i].name);
        printf("Employee %d Code = %d\n",i,e[i].code);
        printf("Employee %d Salary = %f\n",i,e[i].salary);
    }
    return 0;
}
