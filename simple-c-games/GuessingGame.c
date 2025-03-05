#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>
#include <limits.h>

	#define NUM_LEADERS 10

	typedef enum { F = 0, T = 1 } Bool;


	typedef struct
	{
		char player_name[30];
		int player_guesses;
	}Player;

	void PrintLeaders(Player* leaders) {
		printf("Here are the current leaders:\n");
		for (int i = 0; i < NUM_LEADERS; i++) {
			if (leaders[i].player_guesses != INT_MAX) {
				printf("%s made %d guesses\n", leaders[i].player_name, leaders[i].player_guesses);
			}
		}
	}

	void ReadLeaders(const char* filename, Player* leaders) {
		FILE* fp = NULL;
			fp = fopen(filename, "r");
			if (fp == NULL)
			{
				fprintf(stderr, "Cannot open %s.\n", filename);
				exit(1);
			}
			
			for (int i = 0; i < NUM_LEADERS; i++) 
			{
				if (fscanf(fp, "%29s %d", leaders[i].player_name, &leaders[i].player_guesses) != 2) {
					leaders[i].player_guesses = INT_MAX;
					leaders[i].player_name[0] = '\0';
					}
			}
			fclose(fp);

	}

	void WriteLeaders(const char* filename, Player* leaders) {
		FILE* fp = NULL;
		fp = fopen(filename, "w");
		if (fp == NULL)
		{
			fprintf(stderr, "Cannot open %s.\n", filename);
			exit(1);
		}

		for (int i = 0; i < NUM_LEADERS; i++)
		{
			if (leaders[i].player_guesses != INT_MAX) 
			{
				fprintf(fp, "%s %d\n", leaders[i].player_name, leaders[i].player_guesses);
			}
		}
		fclose(fp);
	}

	void InsertPlayer(Player* leaders, Player player) {
		for (int i = 0; i < NUM_LEADERS; i++) {
			if (player.player_guesses < leaders[i].player_guesses) {
				for (int j = NUM_LEADERS; j > i; j--) {
					leaders[j] = leaders[j-1];
				}
				leaders[i] = player;
				break;
			}
		}

	}

	int GetGuess() {
		int guess;
		printf("Guess a value between 10 and 100.\n");
		scanf("%d", &guess);
		return guess;
			

	}

	void PlayGuessingGame(Player* current_player) {
		srand((unsigned int)time(NULL));
		int numberToGuess = rand() % 91 + 10;
		double squareRoot = sqrt(numberToGuess);

		printf("%.8f is the square root of what number?\n", squareRoot);
		Bool done = F;
		current_player->player_guesses = 0;
		

		while (!done) {

			int guess = GetGuess();
			current_player->player_guesses++;

			if (guess < numberToGuess)
				printf("Too low, guess again:\n");
			
			else if (guess > numberToGuess)
				printf("Too high, guess again:\n");
			else
				done = T;
		}
	
		printf("Yippee!\n");
	
	}
	int main() {
		Player leaders[NUM_LEADERS];
		for (int i = 0; i < NUM_LEADERS; i++)
			leaders[i].player_guesses = INT_MAX;

		ReadLeaders("/Users/uyen le/leaderboard.txt", leaders);
		char c, game_over = 0;
	

		printf("Welcome! Press 'q' to quit or any other key to continue:\n");
		scanf(" %c", &c);
		while (getchar() != '\n');

		while (!game_over) {
		

			if (c == 'q') {
				game_over = 1;
				printf("Bye Bye!\n");
			}
			else {
				Player current_player;

				printf("Please enter your name to start:\n");
				scanf("%s", current_player.player_name);

				PlayGuessingGame(&current_player);
				printf("You made %d guesses.\n", current_player.player_guesses);

				InsertPlayer(leaders, current_player);
				PrintLeaders(leaders);

				printf("Press 'q' to quit or any key to play again.\n");
				scanf(" %c", &c);

				while (getchar() != '\n');
			}
		}
		WriteLeaders("/Users/uyen le/leaderboard.txt", leaders);
		return 0;
	}