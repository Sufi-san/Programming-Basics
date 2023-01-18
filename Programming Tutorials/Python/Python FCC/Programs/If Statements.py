def male_tall_check(p_male, p_tall):
    if p_male and p_tall is True:  # Using and keyword
        print("The user is male and is tall.")
    elif p_male is True and p_tall is False:
        print("The user is male but is not tall.")
    elif p_male is False and p_tall is True:
        print("The user is not mall but is tall.")
    elif p_male is False and p_tall is False:
        print("The user is not male and is not tall.")


dev_male = True
dev_tall = False
male_tall_check(dev_male, dev_tall)
if dev_male or dev_tall:  # Using or keyword
    print("The user is male or tall or both.")
else:
    print("The user is neither male nor tall.")

user_male = input("Are you Male? Type Yes or No: ")
if user_male == "Yes":
    user_male = True
elif user_male == "No":
    user_male = False
else:
    print("Enter appropriate text")
user_tall = input("Are you tall? Type Yes or No: ")
if user_tall == "Yes":
    user_tall = True
elif user_tall == "No":
    user_tall = False
else:
    print("Enter appropriate text")
male_tall_check(user_male, user_tall)

is_serious = input("Are you Serious? Type Yes or No: ")
if is_serious == "Yes":
    is_serious = True
else:
    is_serious = False
if not is_serious:  # Using not keyword
    print("You are not serious")
else:
    print("You are serious")
