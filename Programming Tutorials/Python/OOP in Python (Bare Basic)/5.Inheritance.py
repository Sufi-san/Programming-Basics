class Person:  # The true Super Class
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def access(self):
        print(f"{self.name} of age {self.age} is not an Employee and has no access.")


class Employee(Person):  # Inheriting 'Person' class, super class for Manager and Salesperson
    def __init__(self, id_num, name, age, salary):
        super().__init__(name, age)  # attributes same as 'Person' class
        self.id_num = id_num
        self.salary = salary

    def get_all_details(self):
        print(f"\n\n{self.id_num}\n{self.name}\n{self.age}\n{self.salary}")

    def access(self):
        print(f"{self.name} having ID {self.id_num} and age {self.age} has basic Employee access.")


class Manager(Employee):  # Inheriting 'Employee' class
    def __init__(self, id_num, name, age, salary, department):
        super().__init__(id_num, name, age, salary)  # attributes same as 'Employee' class
        self.department = department

    def get_all_details(self):
        print(f"\n\n{self.id_num}\n{self.name}\n{self.age}\n{self.salary}\n{self.department}")

    def access(self):
        print(f"{self.name} is a Manager of the {self.department} department and has access to all spaces within.")


class Salesperson(Employee):  # Inheriting 'Employee' class
    def __init__(self, id_num, name, age, salary, store):
        super().__init__(id_num,name, age, salary)  # attributes same as 'Employee' class
        self.store = store

    def get_all_details(self):
        print(f"\n\n{self.id_num}\n{self.name}\n{self.age}\n{self.salary}\n{self.store}")

    def access(self):
        print(f"{self.name} is a Salesperson in the {self.store} store and can access only the store space.")


person = Person("Nimesh Kuthe", 34)
emp1 = Employee("E1243", "Onkar Khandekar", 21, 25000)
emp2 = Employee("E3241", "Nikita Verma", 20, 22000)
manager = Manager("M3893", "Sufiyan Chougule", 28, 65000, "Sales")
sales1 = Salesperson("S8293", "Vivek Kumbhar", 23, 33000, "Jewellery")
sales2 = Salesperson("S5385", "Vinita Choudhari", 22, 30000, "Cosmetics")

person.access()
emp1.get_all_details()
emp2.get_all_details()
emp2.access()
sales1.get_all_details()
sales2.get_all_details()
sales1.access()
manager.get_all_details()
manager.access()
