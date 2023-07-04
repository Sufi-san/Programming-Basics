import random  # required for random function
mile_to_kilometers = 1.609
kilometers_in_meters = 0.001
animals = ["giraffe", "elephant", "monkey", "lion", "tiger"]


def get_file_ext(filename):
    return filename[filename.index(".") + 1:]  # Gets index of . and returns all letters after it


def random_num(num1, num2):
    return random.randint(num1, num2)  # Return random number between 1 to num
