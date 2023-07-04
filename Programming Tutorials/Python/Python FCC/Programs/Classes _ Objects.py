#  We can create our own datatypes and model real-world objects in Python using Classes & Objects
# The name of the class must be same as the file name
from Student import Student  # Getting the Student Class from the Student file
from Student import Teacher
student1 = Student("Sufiyan", "SE", "AIML", 8.765, False)  # Object created
print("Student's name :"+student1.name)  # Using Attributes of the object
student2 = Student("Aryan", "SE", "Computer", 9.2, False)  # Another object created
teacher1 = Teacher("Rishikesh", True)
print("The students "+student1.name+" and "+student2.name+" agree that Sir "+teacher1.name+" teaches well")
print("\nStudent1 details:\nName: "+student1.name+"\nYear: "+student1.year+"\nBranch: "+student1.branch)
print("CGPA: "+str(student1.gpa)+"\nATKT: "+str(student1.at_kt))
print("\nStudent2 details:\nName: "+student2.name+"\nYear: "+student2.year+"\nBranch: "+student2.branch)
print("CGPA: "+str(student2.gpa)+"\nATKT: "+str(student2.at_kt))
