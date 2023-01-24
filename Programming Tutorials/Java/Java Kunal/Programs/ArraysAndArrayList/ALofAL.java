package ArraysAndArrayList;
import java.util.Scanner;
import java.util.ArrayList;
public class ALofAL {
    public static void main(String[] args) {
        Scanner s1 = new Scanner(System.in);
        ArrayList<ArrayList<Integer>> list = new ArrayList<>(5);  // Here the generic is Arraylist itself.
        // This means that it is a dynamic array containing dynamic arrays as elements.
        // It is basically a 2D ArrayList
        for (int i = 0; i < 3; i++) {  // Initializing the ArrayList of ArrayLists.
            list.add(new ArrayList<>(5));  // Inserted 3 ArrayList objects into the ArrayList.
        }

        // Input for 2D ArrayList:
        System.out.println("Enter ArrayList Elements: ");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                list.get(i).add(s1.nextInt()); // Here list.get(i) obtains index of sub ArrayList
                // and .add(s1.nextInt()) adds user input to the subArrayList.
                // In this case, each arraylist will contain three elements.
            }
        }
        System.out.println(list);
    }
}
