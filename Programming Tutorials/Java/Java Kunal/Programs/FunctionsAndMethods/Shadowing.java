package FunctionsAndMethods;

public class Shadowing {
    static int y = 89;  // 'y' will be available in all functions inside class Shadowing.
    // static means object independent, and main() is also static we want 'y' to be static too.
    // we cannot use object dependent things inside object independent things and hence variable is static
    // More about it in OOP.
    public static void main(String[] args) {
        // Shadowing means
        System.out.println(y);  // 89
        int y = 70;  // variable having same name is initialized and variable with higher level scope is hidden.
        // Thus class variable 'y' at line 4 is now shadowed. Scope begins when value is 'initialized' not 'declared'
        System.out.println(y);  // 70
        fun();
        // Shadowing effect is exclusive to classes. It does not work for methods.
    }

    static void fun() {
        System.out.println(y);  // Since no variable with same name is initialized before it, higher level 'y' is used.
    }
}
