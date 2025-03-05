#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>



char GetPlayerMove() 
{
	char playerMove;
		
	while (1) {
		printf("Enter your move (r for rock, p for paper, s for scissors):\n");
		scanf(" %c", &playerMove);
		while (getchar() != '\n');


			if (playerMove == 'r' || playerMove == 'p' || playerMove == 's') {
				return playerMove;
			}
			else {
				printf("Invalid input, please try again.\n");
			}
		
	}
}

char GetComputerMove()
{
	char move1 = 'r';
	char move2 = 'p';
	char move3 = 's';
	int num = rand() % 3;

	if (num == 0)
		return move1;
	if (num == 1)
		return move2;
	if (num == 2)
		return move3;
	
	
	
}

int PlayRockPaperScissorsGame()
{
	char playerMove = GetPlayerMove();
	char computerMove = GetComputerMove();

	printf("Player: %c\n", playerMove);
    printf("Computer: %c\n", computerMove);

	if (playerMove == computerMove) {
		printf("Its a tie!\n");
	}
	else if ((playerMove == 'r' && computerMove == 's') || 
		(playerMove == 'p' && computerMove == 'r')||
		(playerMove == 's' && computerMove == 'p')) {
		printf("You Win!\n");
	}
	else {
		printf("You Lose!\n");
	}
	
	return 0;
}

int main()
{
	char c;
	
	printf("Welcome to Rock, Paper, Scissors! Press 'q' to quit or any other key to continue:\n");
	

	while (1)
	{
		
		scanf(" %c", &c);

		while (getchar() != '\n');

		if (c == 'q') {
			break;
		}
		PlayRockPaperScissorsGame();
		printf("Press 'q' to quit or any other key to play again!\n");
	}
	printf("Bye Bye!\n");

	return 0;
}