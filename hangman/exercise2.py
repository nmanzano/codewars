word = 'longhorns'
letters_correct = []
wrong = []
incorrect_scrore = len(word)
addbody = []
COUNT = 0
masterword = list(word)
wordsofar = []

for x in masterword:
    wordsofar.append(' _ ')


def startgame():
    if len(letters_correct) < len(masterword):
        print 'Correct: ' + ''.join(wordsofar) + ', ' + 'Lives Left: ' + str(incorrect_scrore) + ' of ' + str(len(word)) + ', ' + 'Incorrect Letters Used: ' + ','.join(wrong)
        user_input = raw_input('Choose a letter: ')
        user_input = user_input.lower()
        choose(user_input)

def choose(choice):
    # print wordsofar, 'letters_correct' +  'and', word
    if choice in wordsofar:
        print "YOU CHOOSE THIS LETTER ALREADY, YOU JUST LOST A TURN!"
        incorrect(choice)
    elif choice in masterword:
        correct(choice)
    else:
        incorrect(choice)

def incorrect(choice):
    global incorrect_scrore

    wrong.append(choice)
    if len(addbody) < incorrect_scrore:
        incorrect_scrore -= 1
        if incorrect_scrore == 0:
            print 'You lose!'
        elif incorrect_scrore >= 1:
            startgame()

def correct(choice):
    checkmark = organize_choice(choice)
    letters_correct.append(choice)
    # print len(''.join(wordsofar)), 'letters_correct' +  'and', word
    if wordsofar == masterword:
        print 'You Won!'
        print word
    else:
        startgame()

def organize_choice(choice):
    #letter = [0,5]
    # wordsofar ['_', '_', '_', '_', '_', '_', '_', '_', '_']
    #masterword ['l', 'o', 'n', 'g', 'h', 'o', 'r', 'n', 's']

    letter = [index for index, value in enumerate(masterword) if value == choice]
    for index in letter:
        wordsofar[index] = masterword[index]
    return wordsofar




startgame()
