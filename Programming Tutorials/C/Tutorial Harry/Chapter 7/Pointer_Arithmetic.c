/* Understanding about Pointer Arithmetic.
   A pointer stores the address of a variable as it's value. 
   This stored address is actually in the form of bytes,when we increment a pointer,
   according to the byte size of the value, a number of bytes are added to address.
   This increments the value of a pointer by the same number of bytes.
   Generally the size of integers and real numbers is 4 bytes and size of characters is of 1 byte.
   This size can vary according to the machine under operation. */


# include <stdio.h> 

int main()
{
    int i = 35,*poi = &i;
    printf("Value of pointer before increment is %d\n",poi);
    poi++; //Decrement is also possible and same amount of bytes will be reduced.
    printf("Value of pointer after increment is %d\n",poi);
    // Here we see an increment of 4 in the value of 'poi'.
    /* To understand more deeply,upon increment or decrement (p++ or p--),
       New value of pointer(in bytes)[This depends on type of pointer (int/float/char)]
       = Old value of pointer(in bytes) + or - any value multiplied by number of bytes  */
    
    return 0;
}