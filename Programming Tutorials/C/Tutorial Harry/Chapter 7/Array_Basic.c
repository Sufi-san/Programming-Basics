// Understanding declaration of an array.

/* An 'array' is a variable capable of storing multiple similar values.
   Array's index starts from 0 and goes on till n-1.(Where 'n' is the number of elements in the array)
   Syntax: <type of array> <name of array>[<number of elements>].
   e.g: int marks[32] --> This array has the capacity for storing 32 element from 0 to 31 . */

// An array can be initialized in many ways. Some examples are given in the program.

# include <stdio.h> 

int main()
{
    // Hard-coded array. Method 1 - Initialize and then declare.
    int array1[4]; // Capacity for 4 elements.
    array1[0] = 1;
    array1[1] = 2;
    array1[2] = 3;
    array1[3] = 4; 
    printf("Printing array1 : %d %d %d %d\n",array1[0],array1[1],array1[2],array1[3]);  

    // Hard-coded array. Method 2 - Initialize alongwith declaration. (easier)
    int array2[4] = {4,3,2,1};
    printf("Printing array2 : %d %d %d %d\n",array2[0],array2[1],array2[2],array2[3]);

    // Hard-coded array. Method 3 - undefined size of array.
     int array3[] = {2,3,4,5};
     printf("Printing array3 : %d %d %d %d\n",array3[0],array3[1],array3[2],array3[3]);


     // User Supplied Input.
    int marks[4]; // Allocated space for marks of 4 students. From 0 to 3.
    printf("Enter marks for student 1: \n");
    scanf("%d",&marks[0]);
    printf("Enter marks for student 2: \n");
    scanf("%d",&marks[1]);
    printf("Enter marks for student 3: \n");
    scanf("%d",&marks[2]);
    printf("Enter marks for student 4: \n");
    scanf("%d",&marks[3]);
    printf("The entered marks for four students are : \n%d\n%d\n%d\n%d",marks[0],marks[1],marks[2],marks[3]);   
    return 0;
}