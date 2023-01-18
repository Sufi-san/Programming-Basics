//Understanding the use of ternary or conditional operators. [ ? and : ]

# include <stdio.h> 

int main()
{
    // A shorthand “if-else” can be written using conditional or ternary operators.
    int x;
    printf("Enter an integer : \n");
    scanf("%d",&x);

    //Conditional operators will be used now.

    /*The if part*/(x>=100)? printf("You have either crossed or reached century.\n") : /*The else part*/printf("You haven't crossed century.\n");
    // One-liner if statement.
    return 0;
}