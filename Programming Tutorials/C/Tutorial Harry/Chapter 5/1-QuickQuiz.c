/* Quick Quiz: Write a program with three functions,

   Good morning function which prints "Good Morning."
   Good afternoon function which prints "Good Afternoon."
   Good night function, which prints "Good night."
   main() should call all of these in order 1 - 2 - 3. */

#include <stdio.h>

void GoodMorning(); // Function Prototype
void GoodAfternoon();
void GoodNight();

int main()
{
    printf("Calling functions according to order 1-2-3.\n");
    printf("1\n");
    GoodMorning(); // Function Call
    printf("2\n");
    GoodAfternoon();
    printf("3\n");
    GoodNight();
    return 0;
}

// Function Definiton
void GoodMorning()
{
    printf("Good Morning\n");
}
void GoodAfternoon()
{
    printf("Good Afternoon\n");
}
void GoodNight()
{
    printf("Good Night\n");
}