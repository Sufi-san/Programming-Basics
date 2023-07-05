package StringAndStringBuilder;

public class StringBuilderExp {
    public static void main(String[] args) {
        StringBuilder build_alpha = new StringBuilder();
        for(int i = 0; i < 26; i++){
            char ch = (char)('a' + i);
            build_alpha.append(ch);
            // build_alpha.insert(i, ch); will work the same but, time complexity will be O(n^2).
            // I tried build_alpha = build_alpha.append(ch), but build_alpha's object is itself is modified using .append()
            // Also IDE says that build_alpha is already assigned the value. (assignments are read from right to left!)
        }
        System.out.println(build_alpha);
        /*
        Above code performs the same task as StringPerformance.java(java class in this folder), however in this case,
        as StringBuilder allows us to modify the same object the time complexity is reduced
        to linear, O(N).

        Other StringBuilder methods: ( '*' stands for also a method for Strings, might differ in functionality )
        .toString()
        .append()
        .insert()
        .reverse()
        .compareTo() *
        .replace() *
        .equals() *
        .charAt() *
        .delete()
        .deleteCharAt()
        .setCharAt()
        .substring() *
         */
    }
}
