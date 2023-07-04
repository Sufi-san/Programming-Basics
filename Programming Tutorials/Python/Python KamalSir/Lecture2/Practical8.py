from tkinter import *

root = Tk()
root.geometry("800x600")
root.title("My First Application.")
f = ("Arial", 50, "bold")

def show():
	lab.configure(text="Welcome to GUI")

btn = Button(root, text ="Click Me", font = f, bg = "skyblue",command = show)
btn.pack()
lab = Label(root, bg = "#FFFFAA", font = f)
lab.pack()
root.mainloop()
