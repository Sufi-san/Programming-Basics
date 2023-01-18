# The "w" can be used to completely overwrite files or create a new file
gamers_file = open("Gamers.txt", "w")  # Creates a new file
gamers_file.write("Noobie - Pro Mini Milita Player\nPanda - Pro PUBG Mobile Player")  # Writing text in the new file
gamers_file.close()
gamers_file = open("Gamers.txt", "w")  # Reopening file
gamers_file.write("The file has now been overwritten.")
gamers_file.close()
gamers_file = open("Gamers.txt", "r")  # Reopening in readable format
print(gamers_file.read())
gamers_file.close()
