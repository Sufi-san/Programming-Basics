def cube_number(p_number):
    result = p_number * p_number * p_number
    return result  # Returns a value and also breaks the control out of the function


number = float(input("Enter a number: "))
print("Cube of given number is: "+str(cube_number(number)))
