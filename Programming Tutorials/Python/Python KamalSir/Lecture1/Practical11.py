# Program to read and sort letters of entered name
# in an alphabetical order
# sorted() and .join() functions will be used

name = input("Enter your name: ")
sort_name = sorted(name)
print(sort_name)  # Sorted List of Characters
join_sort = "".join(sort_name)  # Joining All elements of sorted list with nothing in between
print(f"Alphabetically sorted: {join_sort}")

# What happens in the background?
# sorted() function treats the string as a character array
# the elements of this character array are then sorted based on unicode
# though sorted, the string is now separated into an array of characters
# to join the separated letters we use .join
# "" indicates that there should be nothing between the letters
# while they are being joined together into a string
# if we insert a character inside "", then it will appear after
# each letter in the string.
