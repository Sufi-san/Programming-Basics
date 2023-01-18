/* IMP:
   Info for 'char' input and output :
   1-Input by %c & Output by %c: For All Characters(Symbols+Alphabet+Numbers) 
   only one character is accepted and printed. In case of multiple, only the first typed is accepted.
   2-Input by %c & Output by %d: For Symbols and Alphabet ASCII is displayed. 
   Numbers have output which is different from input.
   3-Input by %d & Output by %c: For Symbols and Alphabet we get no output.
   For a Numeric Input we get corresponding symbols as output. If we enter accurate ASCII we get the 
   required alphabet or symbol.
   4-Input by %d & Output by %d: For Symbols and Alphabet we get no output.
   The Numeric Input gets accurate output in the range -128 to 126. */

# include <stdio.h> 

int main()
{
    // Try It Yourself.
    char a;
    scanf("%c",&a); //Change the letter after '%' and check for every case.
    printf("%c",a);

    return 0;
}