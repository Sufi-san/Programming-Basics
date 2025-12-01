some_string = "Some Text"
print("Some\nText")  # \n creates a new line and text after it is printed in the new line
print(some_string+" is printed")

# Using some built-in functions to modify Strings

'''
upper() converts text to upper case
lower() converts text to lower case
isupper() and islower() returns Boolean True/False after checking upper or lower case
len() returns integer after checking number of characters in string
'''

upper_case = some_string.upper()  # converting to upper case and storing in a variable
print(upper_case)
lower_case = some_string.lower()  # converting to lower case and storing in a variable
print(lower_case)

print("'some_string' is upper case? "+str(some_string.isupper()))
print("'upper_case' is upper case? "+str(upper_case.isupper()))
print("'lower_case' is lower case? "+str(lower_case.islower()))
print("'lower_case' is upper case? After conversion: "+str(lower_case.upper().isupper()))
print("Number of characters in 'some_string' is "+str(len(some_string)))

# As strings are basically character arrays, we can fetch a single character based on its index
print(some_string[5])

# Reverse is also possible for strings
print(some_string.index("Tex"))  # Since the first letter T is at index 5

# Replacements can also be done
print("From 'Some Text' to "+some_string.replace("Some", "Great"))
print(some_string)
