def hello():
    print("Hello User!")
# Most of the elements of a Python program are objects, some are just disguised.


hello()
x = 1  # This is an integer variable.
# However, in Python this integer variable is an object of 'int' class
print(type(x))

# Even functions are objects in Python.
print(type(hello))

# We can use methods described in classes on the objects of those classes
string_name = "sufiyan"
print(string_name.upper())  # Here upper is a method which works on string objects
