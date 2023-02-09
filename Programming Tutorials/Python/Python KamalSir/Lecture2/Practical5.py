# wapf to accept as input radius
# print area and circumference of circle

def compute(radius):
	area = round(3.14*radius**2,3)
	circumference = round(2*3.14*radius,3)
	print(f"Area of Circle = {area}\nCircumference of circle = {circumference}")

radius = float(input("Enter the radius of circle: "))
if radius > 0:
	compute(radius)
else:
	print("Please enter valid input.")