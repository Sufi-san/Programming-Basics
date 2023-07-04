num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
# Python assumes user input to be a string by default, hence conversion is necessary
summation = float(num1) + float(num2)  # Python doesn't have a built-in function for double data type
difference = float(num1) - float(num2)
product = float(num1) * float(num2)
quotient = float(num1) / float(num2)
print("The sum of the two numbers is: "+str(summation))
print("The difference between of the two numbers is: "+str(abs(difference)))
print("The product of the two numbers is: "+str(product))
print(str(num1)+" divided by "+str(num2)+" returns: "+str(quotient))
