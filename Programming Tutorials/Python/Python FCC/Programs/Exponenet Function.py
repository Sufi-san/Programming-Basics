print("2 raised to power 3 gives: "+str(2**3))  # Python feature for exponents
# Now, to create the function on our own...


def exp(base, power):
    result = 1
    for number in range(power):  # Here number will range from 0 to (num2 - 1)
        result = result * base
    return result


numb1 = float(input("Enter the base number: "))
numb2 = int(input("Enter an integral power for base: "))
print(str(numb1)+" raised to power "+str(numb2)+" gives: "+str(exp(numb1, numb2)))
