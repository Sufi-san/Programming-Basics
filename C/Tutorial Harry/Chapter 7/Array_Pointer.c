// Understanding use of pointer for accessing array.

# include <stdio.h> 

int main()
{
    int marks[5],*ptr = &marks[0];
    /* int *ptr = marks; will also function the same way. 
       This shows that if (&) address-of operator and [i] index 
       of the array aren't mentioned, the pointer automatically
       points to the first element of the array. */   

    // Though the address is of marks[0], the pointer will keep moving forward onto other elements inside for-loop.
    for (int i = 0; i < 5; i++)
    {
        printf("Enter Student %d's marks : \n",i + 1);
        scanf("%d",ptr);
        ptr++; // Crucial for making the pointer move to next element in the array.
    }
    for (int i = 0; i < 5; i++)
    {
        printf("Marks for Student %d : %d\n", i + 1,marks[i]);
    }
    /* Note : The 'ptr' pointer was used only for input while for output
              we had to switch back to using 'marks[i]'
              However, we can also display the same correct output using 
              *(ptr + i) if the 'ptr' pointer isn't used at the time of input.
              i.e if 'ptr' isn't updated already.  */
    return 0;
}