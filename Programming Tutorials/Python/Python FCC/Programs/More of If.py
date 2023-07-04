def max_num(num1, num2, num3):
    if num1 >= num2 and num1 >= num3:
        return num1
    elif num2 >= num3:
        return num2
    else:
        return num3


numb_1 = float(input("Enter a number: "))
numb_2 = float(input("Enter another number: "))
numb_3 = float(input("Enter another number: "))
result = max_num(numb_1, numb_2, numb_3)
print(result)
