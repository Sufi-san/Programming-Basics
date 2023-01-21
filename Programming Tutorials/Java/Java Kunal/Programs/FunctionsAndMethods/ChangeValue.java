package FunctionsAndMethods;
import java.util.Arrays;   // required for 'Arrays', adds Array class.
public class ChangeValue {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};  // Non-primitive data-type, will get passed by value OF reference variable.
        // Strings are an exception, as they are final classes and are immutable.
        // Note: passing Copy of value of reference variable(this case) and pass by reference are different.
        // In pass by reference, we provide the address of the reference variable which is the case in C/C++.
        // Here we are making the p_arr variable in replace() function point to the same object.
        System.out.println(Arrays.toString(arr));  // Before replacement, toString() converts array to String
        replace(arr); // Passing the whole array to function
        System.out.println(Arrays.toString(arr)); // Printing the whole array, element of index 0 & 1 are changed
    }

    static void replace(int[] p_arr) {  //
        p_arr[0] = 10;
        p_arr[1] = 20;  // The values will also be changed in main function
    }
}
