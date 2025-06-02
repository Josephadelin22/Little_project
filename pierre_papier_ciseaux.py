rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

import random

rule_game = [rock, paper, scissors]

user_choice = int(input("Qu'est ce que tu choisis? Tape 0 for rock, 1 for paper, 2 for scissors.\n" ))


if user_choice >= 0 and user_choice <= 2:
    print(rule_game[user_choice])

choice_computer = random.randint(0,2)
print("Computer choose: ")
print(rule_game[choice_computer])

if user_choice >= 3 or user_choice < 0:
    print("you type a invalid number you lose")

if user_choice == choice_computer:
    print("Its a draw")
if user_choice == 0 and choice_computer == 2:
        print("you win")
elif user_choice == 1 and choice_computer == 0:
        print("You win")
elif user_choice == 2 and choice_computer == 1:
        print("you win")
elif choice_computer == 2 and user_choice == 0:
    print("You lose")
elif choice_computer == 1 and user_choice == 0:
    print("you lose")
elif choice_computer == 2 and user_choice == 1:
    print("You lose")