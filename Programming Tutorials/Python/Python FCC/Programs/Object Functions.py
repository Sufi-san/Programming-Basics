# Functions are used inside classes to operate on values
from MoreStudents import MoreStudents

name = input("Enter Student's name: ")
sgpi_1 = float(input("Enter first sem sgpi: "))
sgpi_2 = float(input("Enter second sem sgpi: "))
student_score = MoreStudents(name, sgpi_1, sgpi_2)
print("The average of both sgpi for "+student_score.name+" is: "+str(student_score.cgpa_calc()))
