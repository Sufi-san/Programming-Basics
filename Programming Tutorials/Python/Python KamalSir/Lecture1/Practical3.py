try:
	int1 = int(input("Enter an integer: "))
	int2 = int(input("Enter another integer: "))
	sum = int1 + int2
	print(f"The sum of the two numbers is {sum}")
except:
	print("ValueError: Enter only integers as input")