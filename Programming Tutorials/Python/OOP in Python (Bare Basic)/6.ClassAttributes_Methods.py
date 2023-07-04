class Student:
    num_of_students = 0  # This is a class attribute
    # Basically a class attribute is variable which has global scope inside the class.

    def __init__(self, name, age, roll_num, sgpi1, sgpi2):
        self.name = name
        self.age = age
        self.roll_num = roll_num
        self.sgpi1 = sgpi1
        self.sgpi2 = sgpi2
        self.cgpa = Student.calc_cgpa(sgpi1, sgpi2)  # This calculates cgpa as soon as object is created
        Student.add_student()  # Student. is important, further signifying it as a 'class' attribute or method.

    @classmethod  # ClassMethod is a method which is used by class itself rather than objects or class instances.
    # It can be called by any other function inside the class for e.g. __init__ function
    # However, like ClassAttributes, it can also be called via an instance.
    def calc_cgpa(cls, sgpi1, sgpi2):
        return (sgpi1 + sgpi2)/2

    @classmethod
    def add_student(cls):
        cls.num_of_students += 1  # cls represents the class, Student.num_of_students is also correct here.

    def show_details(self):
        print(f"""\nStudent Details:\nName: {self.name}\nAge: {self.age}\nRoll Number: {self.roll_num}
CGPA: {self.cgpa}""")


# The class attribute can be accessed using both the class name or the object(class instance) name
s1 = Student("Drake", 22, 16, 7.8, 8.6)  # number of entities is now 1
print("Number of instances for class 'Student':", s1.num_of_students)  # Using object name
s2 = Student("Krade", 21, 61, 9.33, 8.3)  # number of entities is now 2
print("Number of instances for class 'Student':", Student.num_of_students)  # Using Class name
s1.show_details()
s2.show_details()
