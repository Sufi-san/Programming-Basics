/* The purpose for writing this code is to to find
 the grade of a student given his marks based on below:
 A : 90 - 100
 B : 80 - 90
 C : 70 - 80
 D : 60 - 70
 F : <60
 */

#include <stdio.h>

int main()
{
    int marks;
    printf("Enter the student's marks out of 100 in integral value: \n");
    scanf("%d", &marks);
    if (marks >= 90 && marks <= 100)
    {
        printf("The student's grade is A.");
    }
    else if (marks >= 80 && marks < 90)
    {
        printf(" The student's grade is B.");
    }
    else if (marks >= 70 && marks < 80)
    {
        printf(" The student's grade is C.");
    }
    else if (marks >= 60 && marks < 70)
    {
        printf(" The student's grade is D.");
    }
    else if (marks < 60)
    {
        printf(" The student's grade is F.");
    }
    else if (marks < 0 || marks > 100)
    {
        printf(" The marks entered are invalid.");
    }
    return 0;
}