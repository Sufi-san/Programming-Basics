/* IMP : (For more understanding)
      For pointer - <name of pointer> = Address of 'pointed' variable or pointer.
                    *<name of pointer> = Value of 'pointed' variable or pointer.
                    <required '*' according to sequence><name of pointer> = Corresponding value in the chain of pointers.
                    <all '*' according to sequence><name of pointer> = Value of the first/initial 'pointed' variable. */

#include <stdio.h>

int main()
{
    int i, *j = &i, **k = &j, ***l = &k;
    printf("Value of i : %d\n", i);                    // Initial variable
    printf("Value of i in terms of j : %d\n", *j);     // Value of first/initial variable.
    printf("Address of i in terms of j : %d\n", j);    // That is value of j.
    printf("Value of i in terms of k : %d\n", **k);    // Value of first/initial variable.
    printf("Address of i in terms of k : %d\n", *k);   // That is value of j.
    printf("Address of j in terms of k : %d\n", k);    // That is value of k.
    printf("Value of i in terms of l: %d\n", ***l);    // Value of first/initial variable.
    printf(" Address of i in terms of l : %u\n", **l); // That is value of j.
    printf(" Address of j in terms of l : %u\n", *l);  // That is value of k.
    printf(" Address of k in terms of l : %u\n", l);   // That is value of l.
    return 0;

    // The chain goes on according to the number of pointers present.
    // However, in practical use, it mostly only goes till pointer-of-pointer i.e. **<name of pointer>.
}