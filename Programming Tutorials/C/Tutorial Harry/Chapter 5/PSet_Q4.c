//Write a program using recursion to calculate the nth element of the Fibonacci series.

# include <stdio.h> 

int FibElmt(int a);

int main()
{
    int Pos;
    printf("Enter the position of Fibonacci element in numeric form (1 to n):\n");
    scanf("%d",&Pos);
    printf("The required Fibonacci element is %d\n",FibElmt(Pos));
    return 0;
}

int FibElmt(int a)
{
    if (a == 1)
    {
        return 0;
    }
    if (a == 2)
    {
        return 1;
    }
    else
    {
        return FibElmt(a - 1) + FibElmt(a - 2); // Using Recursion.
    }
}