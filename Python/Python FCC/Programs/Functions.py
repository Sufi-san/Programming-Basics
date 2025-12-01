# Collection of code which performs a particular task

def greet_user(p_name, p_age):  # All the code that is indented below, belongs to the function
    print("Hello "+p_name+", hope you are having a great coding experience.")
    print("Your age is "+p_age)


name = input("Enter your name: ")
age = input("Enter your age: ")
greet_user(name, age)
