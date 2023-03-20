# Program to calculate length and breadth of rectangle using GUI
from tkinter import *

root = Tk()
root.title("Area & Perimeter Calculator")
root.geometry("500x400+100+200")
f1 = ("Impact", 30, "normal")
f2 = ("Times New Roman", 20, "bold")
f3 = ("Calibri", 20, "normal")

def calc():
	length = float(ent_length.get())
	breadth = float(ent_breadth.get())
	if length > 0 and breadth > 0:
		perimeter = round(2*(length+breadth),2)
		area = round(length*breadth,2)
		msg = "Area of Rectangle is "+str(area)+"\nPerimeter of Rectangle is "+str(perimeter)
		lab_ans.configure(text = msg)
	else:
		lab_ans.configure(text = "Please provide valid input.\nEnter positive values.\nEnter numbers only.")

lab_title = Label(root,text = "Area & Perimeter Calculator.", font = f1)
lab_title.pack(pady=20)
lab_inst1 = Label(root,text = "Enter Length of Rectangle:", font = f2)
lab_inst1.pack(pady=10)
ent_length = Entry(root, font = f3)
ent_length.pack()
lab_inst2 = Label(root,text = "Enter Breadth of Rectangle:", font = f2)
lab_inst2.pack(pady=10)
ent_breadth = Entry(root, font = f3)
ent_breadth.pack()
btn_calc = Button(root, text = "CALCULATE", font = f2, command = calc)
btn_calc.pack(pady = 10)
lab_ans = Label(root,font = f2)
lab_ans.pack(pady=20)

root.mainloop()