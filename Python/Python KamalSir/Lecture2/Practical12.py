# Area & Circumference Finder
from tkinter import *

root = Tk()
root.geometry("500x400+100+100")
root.title("Area & Circumference Finder")
f1 = ("Times New Roman", 30, "bold")
f2 = ("Calibri", 20, "bold")

def find():
	radius = float(ent_radius.get())  # .get() fetches data entered by user in an entry.
	if radius > 0:
		area = round(3.14*radius**2,2)
		circumference = round(2*3.14*radius,2)
		msg = f"Area is {area}\nCircumference is {circumference}"
		lab_ans.configure(text = msg)
	else:
		lab_ans.configure(text = "Please enter valid input")

lab_msg = Label(root,text = "Area & Circumference Finder",font = f1)
lab_msg.pack(pady=20)
lab_radius = Label(root,text = "Enter Radius: ", font = f2)
lab_radius.pack(pady = 10)
ent_radius = Entry(root,font = f2)
ent_radius.pack() 
btn_find = Button(root,text = "Calculate", font = f1, command = find)
btn_find.pack(pady = 20)
lab_ans = Label(root,font = f1)
lab_ans.pack()

root.mainloop()