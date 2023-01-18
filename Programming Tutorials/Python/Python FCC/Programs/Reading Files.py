
# When file is in same directory, we only need the file name as first parameter
# "r" as second parameter means to just read the file
# "w" means to change the file, write new info or update/remove existing
# "a" means to append, we cannot change or modify the info but, we can add new info
# "r+" has the function of both "r" and "w"
students_file = open("Students.txt", "r")  # All info of the file now saved in variable
students_file.close()  # Good practice to close all files which were opened

# Functions that can be performed:
'''
students_file = open("Students.txt", "r")  # If 'w' then readable will be false
print(students_file.readable())  # Check whether file can be read from
print(students_file.readline())  # Reads first line of the file, a new line is automatically added below
print(students_file.readline())  # Reads second line of the file and so on...
print(students_file.read())  # Displays all remaining contents up to last line
students_file.close()

students_file = open("Students.txt", "r")  # Pointer is reset to first line
print(students_file.readline())
print(students_file.readlines())  # Generates a list of all remaining content
students_file.close()
'''
'''
students_file = open("Students.txt", "r")
content_list = students_file.readlines()  # List stored in variable
print(content_list[0])
students_file.close()
# Above procedure can also be done as:
students_file = open("Students.txt", "r")
print(students_file.readlines()[3])  # Can read any line in this manner
students_file.close()
'''
# Using for loop
students_file = open("Students.txt", "r")
for Student in students_file.readlines():  # Here Student variable equals all elements of the list 1 by 1
    print(Student)
students_file.close()