import requests
from tkinter import *
#rupees to dollars dynamic

root = Tk()
root.title("Live Currency Converter")
root.geometry("1000x400+100+100")
f = ("Times New Roman", 40, "bold")

def convert():
	wa = "https://api.exchangerate-api.com/v4/latest/USD"
	amount = float(ent_amt.get())
	rate = requests.get(wa)
	data = rate.json()
	inr = data["rates"]["INR"]
	
	if amount > 0:
		result = amount/inr
		lab_ans.configure(text = "$ "+str(round(result, 4)))
	else:
		lab_ans.configure(text = "Invalid data")
		
lab_inst = Label(root,text = "Enter amount in Rupees", font = f)
lab_inst.pack(pady=20)
ent_amt = Entry(root,font = f)
ent_amt.pack()
btn_conv = Button(root,text = "CONVERT",font = f, command = convert)
btn_conv.pack(pady=20)
lab_ans = Label(root,font = f)
lab_ans.pack()

root.mainloop()
