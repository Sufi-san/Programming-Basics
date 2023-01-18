# Program to print even numbers up to user specified number
limit = int(input("Enter an integer up to which even numbers are to be displayed: "))
i = 0
while i <= limit:
    print(i)
    i = i + 2

print("Loop execution complete")
