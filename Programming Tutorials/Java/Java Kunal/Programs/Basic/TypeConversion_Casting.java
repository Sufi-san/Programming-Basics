import java.util.Scanner;
public class TypeConversion_Casting {
    public static void main(String[] args) {
        Scanner s1 = new Scanner(System.in);

        // When few conditions are met, automatic type conversions take place
        // 1) The two data types should be compatible. eg: int converted to float
        System.out.println("Enter a number: ");
        float var = s1.nextFloat();  // If integer is given, it gets converted to float
        System.out.println(var);

        // 2) The destination type should be greater than the source type. eg: float cannot be automatically converted to int
        // TypeCasting: Narrowing Conversion (to convert into different data type even when condition is not fulfilled
        int num = (int)(var); // Float variable type-casted into integer
        System.out.println(num);

        // Automatic type promotion in expressions
        byte byt = (byte)(num); // will return (var%256), as max byte value is 256
        byte a = 40;
        byte b = 6;
        byte c = 40;
        int x = (a * c) + b; // java automatically converts byte evaluations(eg: (a*c)) to int
        System.out.println("Byt = "+byt+", x ="+x);

        int alpha = 'A';  // As java follows unicode, 'A' will return 65;
        System.out.println(alpha);
        /* Rules for
        All the byte,short and character values are promoted to integer
        If one of the operands is long, whole operation becomes long, same for float and double.
         */

        // Great Example:
        byte _byte = 100;
        short _short = 456;
        int _int = 1000;
        char _char = 'a';
        float _float = 78.97f;
        long _long= 4500000L;
        double _double = 345678.98756;
        double result = (_byte*_float) + (_double / _int) - (_long/_char);
        // float + double - long = double
        System.out.println((_byte*_float) +" + "+ (_double * _int) +" - "+ (_long/_char));
        System.out.println(result);


    }
}
