# wapf to convert rupees into dollars

def convert(rupees):
	dollars = round(rupees/82,3)
	print(f"The amount in dollars is $ {dollars}")

rupees = float(input("Enter amount in rupees: "))
if rupees > 0:
	convert(rupees)
else:
	print("Enter valid amount.")