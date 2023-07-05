package ArraysAndArrayList;
import java.util.Scanner;
import java.util.Arrays;

public class TwoDArrays {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 2D Arrays are Arrays containing more Arrays as elements.
        // 2D Arrays are matrix like structures, having rows and columns.
        int[][] arr = new int[3][]; // adding number of columns is not mandatory if we want a square matrix type.
        // when column size is not given, it is assumed to be same as number of rows.
        // Manually storing elements in 2D Array:
        int[][] arr2 = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };  // Each element is itself an array.
        for (int[] element: arr2){
            System.out.println(Arrays.toString(element));
        }
        // Accessing single element:
        System.out.println(arr2[1][2]); // will display 6

        // There can be variable number of columns, hence number of columns is not mandatory.
        int[][] arr3 = {
                {1,2},  // 0th index (row 0)
                {3,4,5},  // 1st index (row 1)
                {6,7,8,9}  // 2nd index (row 2)
        };
        for(int[] element: arr3){  // Since each element is an array
            System.out.println(Arrays.toString(element));
        }

        int[][] arr4 = new int[4][3];  // 4 rows, 3 columns
        System.out.println(arr4.length);  // number of rows = number of sub arrays
        // User (Dynamic) Input for 2D arrays:
        for (int row = 0; row < arr4.length; row++) {  // for loop for row
              for(int col = 0; col < arr4[row].length; col++){  // for loop for columns,
                  // here arr[row].length gives length of each array stored in initialized 2D array
                  // in this case, as size of columns if fixed i.e. 3, we can replace arr4[row].length with 3.
                  System.out.print("arr4["+row+"]["+col+"] = ");
                  arr4[row][col] = in.nextInt();
              }
        }
        System.out.println();
        System.out.println("Printing arr4 by enhance for loop and toString() method:");
        for (int[] element: arr4){
            System.out.println(Arrays.toString(element));
        }
        System.out.println("Printing arr4 by accessing each element:");
        for (int row = 0; row < arr4.length; row++) {
            for (int col = 0; col < arr4[row].length; col++) { // arr4[row].length returns number of column in each row
                System.out.print(" "+arr4[row][col]);
            }
            System.out.println();  // for printing every row in new line
        }
    }
}
