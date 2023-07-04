/* Create an array of 10 numbers. Verify using pointer arithmetic
   that (ptr+2) points to the third element where ptr is a pointer 
   pointing to the first element of the array. */

# include <stdio.h> 

int main()
{
    int arr[10]={1,2,3,4,5,0,9,8,7,6};
    int *ptr = arr;
    printf("An array of ten numbers is created and is as follows:\n\n");
    for (int i = 0; i < 10; i++)
    {
        printf("%d ",*(ptr + i));
    }
    printf("\nAddress of first element of the array is %d which is also the value of 'ptr' pointer.\n",ptr);
    printf("Thus, address of third element of array using Pointer Arithmetic should be : ptr + 2*(4 bytes) = %d\n",ptr + 2);
    printf("Also, as address of the third element using '&arr[2]' is : %u\n",&arr[2]);
    if(ptr + 2 == &arr[2])
    {
    printf("\n Hence, as address of the third element (&arr[2]) = ptr + 2,\n it is verified that (ptr + 2) points to the third element of the array.\n");
    }
    

    return 0;
}