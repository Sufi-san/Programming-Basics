# include <stdio.h> 
# include <string.h>
/* <string.h> includes :
   strlen() gives the length of the string i.e. number of characters in string.
   strcpy() prints content of source string to target string.
   strcat() concatenates two strings and stores the result in the destination string.
   strcmp() compares strings, 
            if all characters are equal returns 0,
            if first mismatching character of first string has ASCII value less than second string returns -ve value,
            else returns +ve value.
*/
int main()
{
   char s1[]="Con",s2[]="catenate",s3[]="Con",s4[30],s5[]="Compare";

   printf("The length of string s2 is : %d\n",strlen(s2));
   printf("s1 is %s and s2 is %s and s4 is empty.\n",s1,s2);
   strcpy(s4,s1); // s4 is target string where s1 is copied.
   printf("After copying s1(source string) to s4(target string), s4 = %s\n",s4);
   strcat(s1,s2); // s1 is destination string where concatenated string is stored.
   printf("Concatenating s1 and s2 we get : %s\n",s1);
   printf("s3 = %s\nand s5 = %s\n",s3,s5);
   printf("Comparing s3 to s4 we get: %d\n",strcmp(s3,s4));
   printf("Comparing s3 to s5 we get: %d\n",strcmp(s3,s5));
   printf("Comparing s5 to s3 we get: %d\n",strcmp(s5,s3));
   printf("s1 = %s\n",s1);
   printf("Comparing s1 to s2 we get: %d\n",strcmp(s1,s2));

    return 0;
}