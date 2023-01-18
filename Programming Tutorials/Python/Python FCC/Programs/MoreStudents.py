class MoreStudents:

    def __init__(self, name, sgpi_1, sgpi_2):
        self.name = name
        self.sgpi_1 = sgpi_1
        self.sgpi_2 = sgpi_2

    def cgpa_calc(self):
        return (self.sgpi_1 + self.sgpi_2)/2
