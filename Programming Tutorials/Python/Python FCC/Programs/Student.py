class Student:

    def __init__(self, name, year, branch, gpa, at_kt):  # Mapping out what attributes a student should have
        self.name = name
        self.year = year
        self.branch = branch
        self.gpa = gpa
        self.at_kt = at_kt


class Teacher:

    def __init__(self, name, is_good):
        self.name = name
        self.is_good = is_good
