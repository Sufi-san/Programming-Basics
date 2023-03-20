from tkinter import *
from random import *  #  required for randint() function

root = Tk()
root.geometry("500x400+100+200")
root.title("Random Color 2")

def color():
		name = ["red","black","blue","brown","green","white","yellow"]
		r = randint(0,len(name)-1)
		root.configure(bg=name[r])
		root.after(5000,color)  # 1 second = 1000 millisecond 
		# after(<time in milliseconds), <function/command to execute>) executes function after given time.
		# the .after function is a built-in method available in Tkinter.
color()

root.mainloop()