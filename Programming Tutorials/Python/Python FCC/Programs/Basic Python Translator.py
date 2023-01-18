# Language Idea:
# All t's are replaced with p and all a's are replaced with q


def translate(text):
    text = text.replace('t', 'p')
    text = text.replace('a', 'q')
    return text
# OR


def translate2(text):
    result = ""
    for letter in text:
        if letter in "t":
            # Note: 'in' is used and not 'is' for checking and '==' can also be used in place of 'in'
            result = result + "p"
        elif letter in "a":
            result = result + "q"
        else:
            result = result + letter
    return result


user_text = input("Write a few lines of text:\n")
print(translate(user_text))
print(translate2(user_text))
