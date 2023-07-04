/*Write a program to find out whether a student is pass or fail;
  if it requires a total of 40% and at least 33% in each subject to pass.
  Assume 3 subjects and take marks as input from the user.*/

#include <stdio.h>

int main()
{
    int Physics, Chemistry, Mathematics;

    printf("Total Marks: 600\nPhysics: 200 \nChemistry: 200 \nMatematics: 200\n");
    printf("Enter the student's marks in Physics (Integral value).\n");
    scanf("%d", &Physics);
    printf("Enter the student's marks in Chemistry (Integral value).\n");
    scanf("%d", &Chemistry);
    printf("Enter the student's marks in Mathematics (Integral value).\n");
    scanf("%d", &Mathematics);

    int Total = Physics + Chemistry + Mathematics;

    printf("Physics marks : %d \n", Physics);
    printf("Chemistry marks : %d \n", Chemistry);
    printf("Mathematics marks : %d \n", Mathematics);
    printf("Total Obtained marks : %d \n", Total);

    if (Total >= 240 && Physics >= 66 && Chemistry >= 66 && Mathematics >= 66) // Harry used Criteria for fail in 'if-statment'.
    {
        printf("The student has passed.\n");
    }
    else
    {
        printf("The students has failed.\n");
    }

    return 0;
}