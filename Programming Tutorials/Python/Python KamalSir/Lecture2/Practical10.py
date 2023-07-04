from tkinter import *
from random import *  #  required for randint() function

root=Tk()
root.title("Random Color")
root.geometry("500x400+100+100")
f =("Times New Roman",30,"bold")

def color():
	name=["red","blue","green","black","brown","pink"]
	r=randint(0,len(name)-1)  # randint(<lowerlim>,<upperlim>) returns random integer as per given range
	root.configure(bg=name[r])

btn = Button(root,text="Mohe range de",font=f,command=color)
btn.pack(pady=20)


root.mainloop()