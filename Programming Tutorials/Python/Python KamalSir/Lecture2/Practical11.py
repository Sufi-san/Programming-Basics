from tkinter import *
from random import *
from time import *

root = Tk()
root.geometry("500x400+100+200")
root.title("Random Color 2")

def color():
		name = ["red","black","blue","brown","green","white","yellow"]
		r = randint(0,len(name)-1)
		root.configure(bg=name[r])
		root.after(50,color)  # 1 second = 1000 millisecond
color()

root.mainloop()