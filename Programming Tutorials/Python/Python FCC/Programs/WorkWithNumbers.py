from math import *  # This imports and enables access to all the functions from math into this program file
# Examples of displaying and operating on numbers
print(-78.8979)
print(78 + 23 - 7 * 45 % 9)  # Follows Order of Associativity and Operator Precedence

my_num = 69
print("We use str() function for converting numbers to strings and concatenate them: "+str(my_num))

# Common functions for numbers in Python
neg_num = my_num*-1
print("Without absolute function: "+str(neg_num))
print("With absolute function: "+str(abs(neg_num)))
print("Using the pow() function: "+str(pow(neg_num, 4)))
print("Using the max() function: "+str(max(4, 5, 6, 7)))
print("Using the min() function: "+str(min(4, 5, 6)))
print("Using the round() function: "+str(round(3.4)))

# Specific functions which need 'math' import
print("floor() function rounds off to lowest possible value: "+str(floor(6.9)))
print("ceil() function rounds off to highest possible value: "+str(ceil(6.9)))
print("sqrt() returns square root of a number: "+str(sqrt(49)))
