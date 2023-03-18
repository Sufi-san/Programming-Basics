# Sometimes it is better to organize a cluster of functions into a class.
# For doing this we require Static Methods.
# We however, do not want to create an instance for such classes.
# Static means not changing.

class Math:

    @staticmethod
    def add_two_num(f, g):
        return round(f + g, 2)

    @staticmethod
    def subt_two_num(z, a):
        return round(z - a, 2)

    @staticmethod
    def mult_two_num(b, c):
        return round(b * c, 2)

    @staticmethod
    def div_two_num(d, e):
        if e != 0:
            return round(d / e, 2)


x = float(input("Enter a number: "))
y = float(input("Enter another number: "))
print(f"""{x} + {y} = {Math.add_two_num(x,y)}\n{x} - {y} = {Math.subt_two_num(x,y)}\n{x} * {y} = {Math.mult_two_num(x,y)
}\n{x} / {y} = {Math.div_two_num(x,y)}""")
