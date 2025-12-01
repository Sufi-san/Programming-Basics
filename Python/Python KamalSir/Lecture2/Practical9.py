from tkinter import *

root = Tk()
root.title("Color Application")
root.geometry("500x400")
f = ("Impact", 30, "normal")

def r():
	root.configure(bg = "red")
def g():
	root.configure(bg = "green")
def b():
	root.configure(bg = "blue")

btn_red = Button(root, text="Red",font = f, width = 7,fg = "red", bg = "maroon", command = r)
btn_red.pack(pady=7)
btn_green = Button(root, text="Green",font = f, width = 7,fg = "green", bg = "lightgreen", command = g)
btn_green.pack(pady=7)
btn_blue = Button(root, text="Blue",font = f, width = 7,fg = "blue", bg = "skyblue", command = b)
btn_blue.pack(pady=7)

root.mainloop()