# Providing the user the choice of operation
def select(choice, num1, num2):
    if choice == 1:
        return num1 + num2
    elif choice == 2:
        return num1 - num2
    elif choice == 3:
        return num1 * num2
    elif choice == 4:
        return num1 / num2
    else:
        print("Please select appropriate option")


numb1 = input("Enter a number: ")
numb2 = input("Enter another number: ")
print("Select an operation to be performed: ")
print("1. "+numb1+" + "+numb2+"\n2. "+numb1+" - "+numb2+"\n3. "+numb1+" * "+numb2+"\n4. "+numb1+" / "+numb2)
prefer = int(input("Your choice is: "))
result = select(prefer, float(numb1), float(numb2))
print(result)
