from Dog import Dog  # Importing Dog Class, Inheritance


class Dalmatian(Dog):  # Inheriting Dog Class

    def spot_check(self):
        print("The Dalmatian has spots.")

    def height_check(self):   # method is now overrided for Dalmatian Class
        print("The Dalmatian's height is 59 centimeters.")
