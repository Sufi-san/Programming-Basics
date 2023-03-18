# 2D Lists is basically, other lists stored inside a list
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
# Simply getting a linear print of the structure
print(matrix)
for row in range(len(matrix)):  # Printing row by row
    print(matrix[row])
# OR
print()
for row in matrix:
    print(row)
# Accessing elements
print(matrix[2][1])
for row in range(len(matrix)):  # Printing element by element
    print()
    for col in range(len(matrix[row])):
        print(matrix[row][col], end=" ")  # end=" " tells the program to not go to new line.
# OR
print()
for row in matrix:
    print()
    for col in row:
        print(col, end=" ")

