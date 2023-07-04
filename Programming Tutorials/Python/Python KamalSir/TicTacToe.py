def printGame(n):
	print(f"\nPlayer {turn}'s turn:\n")
	print("     |     |     ")
	print(f"  {n[0]}  |  {n[1]}  |  {n[2]}  ")
	print("_____|_____|_____")
	print("     |     |     ")
	print(f"  {n[3]}  |  {n[4]}  |  {n[5]}  ")
	print("_____|_____|_____")
	print("     |     |     ")
	print(f"  {n[6]}  |  {n[7]}  |  {n[8]}  ")
	print("     |     |     ")

def testWin(n):
	if n[0] == n[1] == n[2] or n[3] == n[4] == n[5] or n[6] == n[7] == n[8] or n[0] == n[3] == n[6] or n[1] == n[4] == n[7] or n[2] == n[5] == n[8] or n[0] == n[4] == n[8] or n[2] == n[4] == n[6]:
		return True
	else:
		return False

def testDraw(n):
	limit = 0
	for symbol in n:
		if symbol == 'X' or symbol == 'O':
			limit += 1
	if limit == len(n):
		return True
	else:
		return False

print("Welcome to TicTacToe, made using Python.\n")
print("Player 1: X\nPlayer 2: O\n")
n = [1,2,3,4,5,6,7,8,9]
decision = "pending"
i = 0
while(decision != "made"):
	if i % 2 == 0:
		turn = 1
		symbol = 'X'
	else:
		turn = 2
		symbol = 'O'
	i += 1	
	printGame(n)
	try:
		position = int(input(f"Enter number to place {symbol} at: "))
	except:
		print("Please enter integers only.")
		i -= 1
		continue
	if position <= 9 and position > 0:
		if n[position-1] == 'X' or n[position-1] == 'O':
			print("There is already a symbol at the selected position, please select an unused position.")
			i -= 1
		else:
			n[position-1] = symbol 
	else:
		print("Enter a number within given range.(1 to 9)")
	if testWin(n):
		printGame(n)
		print(f"Player {turn} WINS.")
		decision = "made"
	elif testDraw(n):
		printGame(n)
		print("No positions left to fill, the game is DRAWN.")
		decision = "made"

