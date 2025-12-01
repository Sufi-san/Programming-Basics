/* Try these operations on another variable by creating pointers in a separate program.
   Demonstrate all four operations :

    1)Addition of a number to a pointer.
    2)Subtraction of a number from a pointer.
    3)Subtraction of one pointer from another.
    4)Comparison of two pointer variables.    
    
   Pointers can not be multiplied or divided. */

# include <stdio.h> 
# include <stdlib.h> // Required for abs() function. It always returns positive value.

int main()
{
    // Addition of a number to a pointer.
    float a;
    float *p1 = &a;
    printf("Value of pointer before addition : %d\n",p1);
    p1 += 3;
    printf("Value of pointer after addition of 3 times 4 bytes : %d\n",p1);

    // Subtraction of a number from a pointer.
     printf("Value of pointer before subtraction : %d\n",p1);
    p1 -= 3;
    printf("Value of pointer after subtraction of 3 times 4 bytes : %d\n",p1);

    // Subtraction of one pointer from another.
    int marks[3],*p2 = &marks[0],*p3 = &marks[2];
    printf("Value of pointers p2 and p3 is %d and %d resepectively.\n",p2,p3);
    printf("Performing subtraction of one pointer from another \nwe get the numeric/positonal difference between their addresses\n");
    printf("Therefore, the numeric difference between p2 and p3 is : %d\n",abs(p2 - p3));
    printf("Also the byte difference will be 4 times numeric difference : %d\n",4*abs(p2 - p3));

    // Comparison of two pointer variables.
    /* Pointer comparison is valid when the pointers are pointing
       to the elements in the same array. */
    if(p2 == p3)
    {
        printf("Pointer p2 is equal to p3 and is pointing at the same element\n");
    }
    else
    {
        printf("Pointer p2 is not equal to p3 and they are pointing different elements.\n");
    }
    
    return 0;
}