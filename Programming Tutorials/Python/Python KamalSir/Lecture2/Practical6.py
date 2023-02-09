# wapf to accept length and bradth print area and peri of rect

def compute(length, breadth):
	area = round(length*breadth,2)
	perimeter= round(2*(length+breadth),2)
	print("Area of rectangle = ",area,"\nPerimeter of rectangle = ",perimeter)

length = float(input("Enter the length of the rectangle: "))
breadth = float(input("Enter the breadth of the rectangle: "))
if length > 0 and breadth > 0:
	compute(length, breadth)
else:
	print("Enter valid data.")