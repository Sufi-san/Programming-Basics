from Questions import Questions  # Imported Questions class from Questions Python File
mc_questions = [
    "\nWhich gas do humans inhale for survival?\n(a)Oxygen\n(b)Sulphur-di-oxide\n(c)Carbon-di-oxide\n",
    "\nFifteen Thousand subtracted from Twenty Thousand equals?\n(a)3000\n(b)4000\n(c)5000\n",
    "\nHow many continents are there in the world?\n(a)12\n(b)7\n(c)10\n"
]

obj_question = [
    Questions(mc_questions[0], "a"),
    Questions(mc_questions[1], "c"),
    Questions(mc_questions[2], "b")
]


def run_quiz(questions):
    correct = 0
    for question in questions:
        print(question.display)
        ans = input("Enter Correct Option: ")
        if ans in question.ans:
            correct += 1
    print("You Scored "+str(correct)+" points out of "+str(len(questions)))


run_quiz(obj_question)
