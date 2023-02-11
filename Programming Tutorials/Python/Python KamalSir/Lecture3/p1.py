import requests
wa= "http://api.quotable.io/random"
res= requests.get(wa)
data= res.json()
msg= data["content"]
print(msg)