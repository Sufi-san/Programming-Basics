# Program to print 'success' when correct username
# and password is entered. Print 'failure' otherwise.
# Username is Sufiyan
# Password is Chougule

from getpass import *  # Import required for using getpass() function
# getpass() function makes the password invisible while it is entered.

username = input("Enter the username: ")
password = getpass("Enter the password: ")
if username == "Sufiyan" and password == "Chougule":
	print("success")
else:
	print("failure")
