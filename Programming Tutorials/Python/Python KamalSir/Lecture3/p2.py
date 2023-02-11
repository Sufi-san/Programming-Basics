from tkinter import *
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
	print(msg)
	lab.configure(text=msg)

btn_msg = Button(root,text = "Get Msg",font = f, command = get)
btn_msg.pack(pady=20)
lab = Label(root,font = f,wraplength=1200)
lab.pack()
lab.place(relx=0.5,rely=0.5,anchor='center')

root.mainloop()