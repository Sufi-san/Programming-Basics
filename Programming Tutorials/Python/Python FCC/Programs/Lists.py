fruits = ["apple", "mango", "banana", "grapes"]  # Example of list in python
# Ways to access list element and display them
print(fruits)  # All elements are printed
print(fruits[0])  # Using indexes
print(fruits[1])
print(fruits[2])
print(fruits[-1]+" "+fruits[-2])  # Negative indexes return elements from end of the list
print(fruits[2:])  # All elements after index 2
print(fruits[1:3]) # All elements after index 1 and before index 3, while not including index 1 and 3
# Modifying the list
fruits[1] = "King of Fruits"
print(fruits[1])
