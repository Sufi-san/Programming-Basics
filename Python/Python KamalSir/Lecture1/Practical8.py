nth_term = int(input("Enter the term to find its factorial: "))
i = 0
factorial = 1
while i < nth_term:
	factorial = factorial*(nth_term-i)
	i+=1
print(f"The factorial of {nth_term} is {factorial}")