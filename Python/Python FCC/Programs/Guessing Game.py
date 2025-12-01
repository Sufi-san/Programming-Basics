req_word = "three"
response = 0
attempt = 0
attempt_limit = int(input("How many attempts do you require?: "))
while True and attempt < attempt_limit:  # Imitating a do-while statement
    attempt += 1
    response = input("Guess the correct word: (Hint: The spelling of a single-digit number starting with 't'.)\n")
    if req_word != response:
        print("Incorrect Guess, Attempts Left: "+str(attempt_limit - attempt))
    elif req_word == response:
        print("Congratulations! You have guessed the word correctly. No. of Attempts: "+str(attempt))
        break  # Sends control out of the loop
if req_word != response:
    print("You Lose ! Out of Attempts.")
