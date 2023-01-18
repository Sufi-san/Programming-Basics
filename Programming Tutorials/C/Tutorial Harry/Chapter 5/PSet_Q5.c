// What will the following line produce in a C program: printf(“%d %d %d\n”,a,++a,a++);

/* Though it differs according to compilers, the sequence in which our mentioned
   arguments are executed in a printf() function is from right to left.
   The example of this is as given in this program. */

#include <stdio.h>

int main()
{
    int a = 0;
    printf("%d %d %d\n", a, ++a, a++); // Sequence of argument in this case : a++ -> ++a -> a
    /* In the above line of code as a = 0, according to sequence a++ will be executed first
       this will raise a's value by 1 but the old value will get printed.
       Then the ++a will be interpreted by the compiler and a's value will again get raised
       by 1 and the latest value will be printed.
       After that, simply 'a' itself will be compiled and it's latest value (old 'a' + 2)
       will printed. The final output will be 2 2 0 */
    return 0;
}