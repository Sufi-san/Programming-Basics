for letter in "Programming Hub":
    print(letter, end="")  # Prints a different letter in every iteration of the loop
    # In the above print statement end="" makes output appear in same line
    # Anything between the inverted commas in end="" will be what separates(appear between) the outputs

things = ["Comb", "Candle", "Soap", "Broom"]
for thing in things:
    print(thing)
for number in range(10):  # Not including 10 itself
    print(number, end=" ")
print()
for number2 in range(3, 11):  # 3 will be included, but not 11
    print(number2, end=" ")

for index in range(len(things)):  # Using len() to print all list elements i.e. index will be 0,1,2,...
    print(things[index])
