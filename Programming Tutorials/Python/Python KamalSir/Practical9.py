# Program to find summation upto given integer
integ = int(input("Enter an integer: "))
sum = 0
i = 0
while i <= integ:
	sum = sum + i
	i+=1
print(f"Summation upto given integer is: {sum}");