package Basic;
public class Primitives {  // Primitives are data types which cannot be further broken down
    // Primitive data type objects are stored directly in Stack Memory instead of Heap.
    // Non-primitive data type objects, have only reference variable stored in stack while object is in heap.
    public static void main(String[] args) {
        /* Reference variables, Class, Packages, Methods etc. are called Identifiers,
        the values assigned or objects are called literals. */
        int num1 = 8; // Primitive (4 bytes)
        char alphabet = 'k';  // Primitive (1 byte)
        float decimal = 67.8f;  // Primitive, 'f' after number is required for float declaration (4 bytes)
        double lrg_decimal = 56779834589.78945;  // Primitive (8 bytes)
        long lrg_num = 56798738579903L;  //Primitive 'L' after number is required for long declaration (8 bytes)
        boolean truth_value = true; // Primitive, can also be 'false'
        String name = "Sufiyan Chougule";  // Strings are not primitive, can be broken down to characters
    }
}
