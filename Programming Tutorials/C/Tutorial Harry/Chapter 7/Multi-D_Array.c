//Understanding Multi-Dimensional Array.

/* An array can be of 'n' number of dimensions.
   Syntax for 2-D array :
   arr[<number of rows/x-axis elements>][<number of columns/Y-axis elements>]
   
   Access to elements : (Imagining a Matrix)
   if we consider arr[i][j] as the array then,
   i = number of row
   j = number of column
   Also, the count for rows and columns starts from 0. (eg: For 3 elements we have 0,1,2.)
   Thus, we can access the elements accordingly with [0][0],[0][1],...,[1][0],[1][1]...[2][0] and so on. 
   Every element will have different address irrespective of being in the same row or column.
   
   We can also make more dimensions to an array however in general, upto 2 dimensions are used
   while making simple programs. */

# include <stdio.h> 

int main()
{
    // Creating a 2-D Array.
    // Hard-coded input.
    int arr[3][2]={{1,2},{2,3},{3,4}};
    for (int i = 0 ;i < 3 ; i++) // For automatic and organized printing, nesting of two loops is necessary in 2-D array.
    {
        for (int j = 0; j < 2; j++)
        {
        printf("Element %d(%d) of array : %d\n",i+1,j+1,arr[i][j]);
        }
    }

    // User-supplied input will be used in 3-QuickQuiz.c
    return 0;
}