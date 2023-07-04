students_file = open("Students.txt", "r")
print(students_file.read())
students_file.close()
students_file = open("Students.txt", "a")  # Appending to file
students_file.write("\n\"Salim\" - New Class Representative")  # Will get added at the end of the file
# If the 'write()' function is accidentally used again, it can mess up the file and hence we need to be careful
students_file.close()
