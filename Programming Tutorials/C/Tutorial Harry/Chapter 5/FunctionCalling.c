// Understanding Function Calling.

#include <stdio.h>

void GoodMorning(); // Function Prototype
void GoodAfternoon();
void GoodNight();

int main()
{
    printf("Calling multiple functions from one function (Direct & Indirect Calling).\n");
    GoodMorning(); // Directly calling GoodMorning and Indirectly calling GoodNight and GoodAfternoon function.
    return 0;
}

// Function Definiton
void GoodMorning()
{
    printf("Good Morning\n"); // Two different functions inside one single function.
    GoodAfternoon();
    GoodNight();
}
void GoodAfternoon()
{
    printf("Good Afternoon\n");
}
void GoodNight()
{
    printf("Good Night\n");
}