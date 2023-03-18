class Vehicle:
    def __init__(self, name, speed):  # Arguments are instantly passed to this method upon object creation.
        # In a war, the init method is similar to constructors in Java.
        self.name = name  # We created attribute of class Vehicle which is 'name'
        self.speed = speed
        print("Name of Vehicle:", name, "\n", "Speed of Vehicle:", speed)
        # Above method will execute without explicitly calling it.

    def get_name(self):  # Here we do not pass the name directly but, we do it through self which is defined in init.
        print(self.name)

    def get_speed(self):
        print(self.speed)

    def set_speed(self):
        print("Current Speed: ", self.speed)
        speed = int(input("Set new speed: "))
        self.speed = speed
        print("New Speed: ", self.speed)


Vehicle1 = Vehicle("Car", 65)
Vehicle1.get_name()
Vehicle1.get_speed()
Vehicle1.set_speed()
Vehicle2 = Vehicle("Truck", 52)
Vehicle2.get_name()
Vehicle2.get_speed()
Vehicle2.set_speed()
