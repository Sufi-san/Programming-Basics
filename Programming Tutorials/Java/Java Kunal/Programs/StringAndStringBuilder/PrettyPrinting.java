package StringAndStringBuilder;

public class PrettyPrinting {
    // Basically printing using the C Programming method 'printf'.
    public static void main(String[] args) {
        int a = 46;
        float b = 35.682532f;
        System.out.printf("a = %d, b = %.2f, Pie = %.3f", a, b, Math.PI); // Float values are also rounded off
        System.out.printf("\nMy name is %s and I am learning %s", "Sufiyan", "Java");
    }

    /*
    Format Specifiers:
    %c - Character
    %d - Decimal number (base 10)
    %e - Exponential floating-point number
    %f - Floating-point number
    %i - Integer (base 10) [depends upon value entered, base is 16 for hex, 8 for oct, and 10 for dec]
    %o - Octal number (base 8)
    %s - String
    %u - Unsigned decimal (integer) number
    %x - Hexadecimal number (base 16)
    %t - Date/time
    %n - Newline

    Escape Sequence (\):
    \b - Insert backspace
    \f - Next line's first character starts to the right of current line's last character
    \n - Insert newline
    \r - Insert carriage return
    \t - Insert tab
    \\ - Insert backslash
    %% - Insert percentage sign
    */
}
