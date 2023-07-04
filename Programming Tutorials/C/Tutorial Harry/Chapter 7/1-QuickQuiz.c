// Write a program to accept marks of five students in an array and print them to the screen.

/* An even easier method to write the program is to make use of loops alongwith arrays.
   This will make the program shorter and more efficient. */

# include <stdio.h> 

int main()
{
    int marks[5]; // Allocated space for marks of five students.
    for (int i = 0; i < 5; i++)
    {
    printf("Enter marks for student %d : \n",i+1);
    scanf("%d",&marks[i]);  // Storing the marks into the array.
    }
    for (int i = 0; i < 5; i++)
    {
    printf("Marks for Student %d are %d \n",i+1,marks[i]); // Displaying the marks from the array.
    }
    
    return 0;
}