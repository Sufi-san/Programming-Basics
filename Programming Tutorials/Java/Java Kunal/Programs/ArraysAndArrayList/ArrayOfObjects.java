package ArraysAndArrayList;
import java.util.Arrays;
import java.util.Scanner;
public class ArrayOfObjects {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // array of strings:
        /* Here, an array object is created and stored in heap memory.
           This object itself contains reference variables as elements,
           these reference variables point to other objects in the heap.
           This concept is similar to 2D arrays, as Strings themselves
           are in a way, character arrays.
         */
        String[] str_arr = new String[8];
        for (int i = 0; i < str_arr.length; i++) {
            str_arr[i] = in.next().trim();
        }
        System.out.println(Arrays.toString(str_arr));
    }
}
