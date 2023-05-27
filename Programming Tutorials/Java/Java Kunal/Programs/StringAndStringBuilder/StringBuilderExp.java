package StringAndStringBuilder;

public class StringBuilderExp {
    public static void main(String[] args) {
        StringBuilder build_alpha = new StringBuilder();
        for(int i = 0; i < 26; i++){
            char ch = (char)('a' + i);
            build_alpha.append(ch);
        }
        System.out.println(build_alpha);
        /*
        Above code performs the same task as StringPerformance.java, however in this case,
        as StringBuilder allows us to modify the same object the time complexity is reduced
        to linear, O(N).

        Other StringBuilder methods:
        .insert()
        .reverse()
        .compareTo()
        .replace()
        .charAt()
        .delete()
        .deleteCharAt()
        .setCharAt()
         */
    }
}
