// Understanding the passing of an Array to a Function.

/* In this program we have prepard two functions with different parameters for 
   array input. Both of these functions will provide the same output on execution. */

# include <stdio.h> 

void PrintArray1(int *poi,int a);
void PrintArray2(int array[],int a);
int main()
{
    int x;
    printf("Enter the number of elements in the array :\n");
    scanf("%d",&x);
    int array[x];
     for(int i = 0;i < x;i++)
    {
        printf("Enter element %d into the array :\n",i + 1);
        scanf("%d",&array[i]);
    }
    printf("\nUsing function PrintArray1 : \n");
    PrintArray1(array,x); // Mentioning the name and size of array. Thus in function, int *poi = array, a = x .
    printf("\nUsing function PrintArray2 : \n");
    PrintArray2(array,x); // Mentioning the name and size of array. Thus in function, int array[] = array, a = x .
    return 0;
}

void PrintArray1(int *poi,int a) // Using the pointer to access the array.
{
    /* Since, we are using a different function with a unique and non updated pointer,
       we can make use of this pointer to display output. */
    for(int i = 0;i < a;i++)
    {
        printf("Element %d of array is %d.\n",i + 1,*(poi + i));
        /* Here instead of updating 'poi' pointer using an increment or decrement operator,
           the correct way would be to add the updated 'i' to the original 'poi' address each 
           time and use '*' to take the value at that address. i.e *(poi + i)  */
    }
}

void PrintArray2(int array[],int a) // Using an array(array[]) as parameter for the main function's array.
{
    for(int i = 0;i < a;i++)
    {
        printf("Element %d of array is %d.\n",i + 1,*(array + i));
        /* Here, even though parameter is an array, we can use it in the same manner
           we use a pointer to display the output. Since syntax-wise, 'array = &array[0] = poi'
           
           Also, if we use the array itself with syntax 'array[i]' the ouput will still be the 
           same. */ 
    }
}