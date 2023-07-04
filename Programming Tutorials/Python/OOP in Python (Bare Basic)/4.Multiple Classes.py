class Employee:
    def __init__(self, name, age, salary):
        self.name = name
        self.age = age
        self.salary = salary

    def get_salary(self):
        return print("Salary of Employee", self.name, "is", self.salary)


class PayRaiseScheme:

    def __init__(self, name, max_employee):
        self.name = name
        self.max_employee = max_employee  # Max limit of employees which are to be included
        self.employees = []  # An empty list to store employees

    def add_employee(self, employee):  # Here employee will be an object of 'Employee' class.
        if len(self.employees) < self.max_employee:
            self.employees.append(employee)
            if self.name == "The 2x Scheme":
                employee.salary = employee.salary * 2
                print("Salary doubled successfully.")
            elif self.name == "The 1.5x Scheme":
                employee.salary = employee.salary * 1.5
                print("Salary incremented successfully.")
            else:
                print("Operation failed.")
            return print("Employee added to scheme Successfully.")
        return print("Operation not possible.")

    def get_average_salary(self):
        result = 0
        for employee in self.employees:
            result += employee.salary
        return print("Average Salary of Employees in", self.name, "is", result / len(self.employees))


# The Actual Operations:
# Creating objects of Employee class
emp1 = Employee("Jason", 28, 50000)
emp2 = Employee("Damian", 21, 45000)
emp3 = Employee("Tim", 24, 48000)
emp4 = Employee("Dick", 25, 42000)

# Creating PayRaise schemes
double_pay = PayRaiseScheme("The 2x Scheme", 2)
x15_pay = PayRaiseScheme("The 1.5x Scheme", 2)

# Adding Employees to PayRaise Scheme
# i.e. Sending objects of one class to the method of another class and modifying the object's attributes.
double_pay.add_employee(emp1)
double_pay.add_employee(emp2)
double_pay.add_employee(emp3)  # This will return "Operation not possible" as the scheme limit is exceeded.
x15_pay.add_employee(emp3)
x15_pay.add_employee(emp4)
print("\n Salaries of all employees after increment: ")
emp1.get_salary()
emp2.get_salary()
emp3.get_salary()
emp4.get_salary()

# Getting Average Salary for Employees of Both Schemes
double_pay.get_average_salary()
x15_pay.get_average_salary()
