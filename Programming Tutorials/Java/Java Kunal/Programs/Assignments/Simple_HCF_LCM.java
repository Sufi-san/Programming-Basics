package Assignments;
import java.util.Scanner;
public class Simple_HCF_LCM {
    public static void main(String[] args) {
        int num1, num2, temp, hcf = 1, lcm, rem;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter two whole numbers to find their HCF and LCM:(Press enter after each entry) ");
        num1 = in.nextInt();
        num2 = in.nextInt();
        temp = num2;
        do{
            rem = num1%temp;
            if(rem == 0 && num1 != temp)
                hcf = temp;
            temp = rem;
        }while(rem != 0);
        lcm = num1*num2/hcf;
        System.out.println("HCF = "+hcf+", LCM = "+lcm);
    }
}
