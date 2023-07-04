# A Module is a python file that is imported into current Python file
import useful_tools  # Imported File = Module

# Now all variables and functions can be used from the module
# There are various pre-made Python modules

num1 = int(input("Enter minimum value for range: "))
num2 = int(input("Enter maximum value for range: "))
print("Generating a random number from given range: "+str(useful_tools.random_num(num1, num2)))

# PIP is a pre-installed program, it is used to install Python.
# It is referred to as a Package Manager.
# It allows user to install, manage, update, uninstall different Python modules.
# pip is used as a command in cmd for Windows
# Normally an installed module is put inside a lib folder inside site-packages
