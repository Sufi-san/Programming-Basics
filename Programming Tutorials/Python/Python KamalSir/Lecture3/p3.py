from tkinter import *
from time import *
import requests

root= Tk()
root.title("Motivation")
root.geometry("1000x400+0+0")
f = ("Calibri", 50, "bold")

def get():
	wa = "http://api.quotable.io/random"
	res = requests.get(wa)
	data= res.json()
	msg = data["content"]
	lab.configure(text=msg)
	lab.after(10000, get)

lab = Label(root,font = f,wraplength=1200)
lab.pack()
lab.place(relx=0.5,rely=0.5,anchor='center')
get()

root.mainloop()