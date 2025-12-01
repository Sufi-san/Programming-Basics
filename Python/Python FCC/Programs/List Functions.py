# Functions on lists
def print_lists():
    print(vegetables)
    print(numbers)


vegetables = ["Onion", "Potato", "Beetroot", "Cabbage", "Carrot"]
numbers = [100, 300, 500, 700]
print_lists()
vegetables.extend(numbers)
print(vegetables)

numbers.append(900)  # Adding another item at the end of list
vegetables.insert(3, "Cucumber")  # Adding to middle of list using index
print_lists()

vegetables.remove("Beetroot")  # Remove an element from the list
numbers.clear()  # Remove all elements from the list
print_lists()
vegetables.pop()  # Removes last element from the list
print(vegetables)

print(vegetables.index(100))  # Checks for element and returns index if it exists
vegetables.append("Cucumber")
print(vegetables.count("Cucumber"))  # Returns number of appearance of element in list
vegetables.remove(100)
vegetables.remove(300)
vegetables.remove(500)
vegetables.sort()  # List elements arranged in alphabetical or ascending order
print(vegetables)
vegetables.reverse()  # Reverses order of list
print(vegetables)

vegetables2 = vegetables.copy()  # Another list is created with same elements as the copied list
print(vegetables2)