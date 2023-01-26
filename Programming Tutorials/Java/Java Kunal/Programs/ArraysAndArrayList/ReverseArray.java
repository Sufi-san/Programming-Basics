package ArraysAndArrayList;
import java.util.Arrays;
public class ReverseArray {
    public static void main(String[] args) {
       int[] arr = {34,56,78,99,100,34,88};
       System.out.println("Normal Array: "+Arrays.toString(arr));
       reverseArray(arr);
       System.out.println("Reversed Array: "+Arrays.toString(arr));
    }

    static void reverseArray(int[] array){
        for (int i = 0; i < array.length/2; i++) {
            SwapArray.swap(array, i, (array.length - 1 - i));  // No import needed as class file is in same package.
        }
    }
}
