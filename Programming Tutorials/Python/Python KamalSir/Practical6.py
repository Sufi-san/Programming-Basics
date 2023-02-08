# A Program to read amount in Dollars and convert to 
# Rupee value, along with the signs.

dollars = float(input("Enter the amount in dollars: "))
if dollars >= 0:
	rupee = round(dollars*82,2)
	print(f"The entered amount in dollars is {chr(36)} {dollars}")
	print(f"The amount in rupees is \u20B9 {rupee}")
else:
	print("The amount cannot be negative. Please try again.")