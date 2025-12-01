# Try Except block is used to display a message in case an exception occurs instead of the usual case
# Example
try:
    number = int(input("Enter an integer: "))
    print(number)
    value = 10/0
except ValueError:
    print("Invalid input, Please enter only integers.")
except ZeroDivisionError as err:  # Prints actual error message
    print(err)
