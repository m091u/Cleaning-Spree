### Cleaning Spree
## [Play the game!](https://cleaning-spree-game.netlify.app/)

## Description
Spree Cleanup is an interactive web-based game that challenges players to clean up the Spree River by collecting debris and avoiding obstacles. The game aims to raise awareness about river pollution and encourage players to take action against it in real life.

## MVP
- Player character can move to collect debris by clicking `up` and `down` on the keyboard
- Debris and obstacles move from right to left across the screen
- Debris and obstacles appear from random locations and at a set interval
- The game has multiple types of obstacles and debris that appear on the screen in a random order
- Scoring system tracks player's progress
- Score is calculated based on the ammount of debris collected and obstacles avoided
- Lives system tracks player's interaction with the obstacles
- Game Over screen appears once lives run out


## Backlog
- Adding sounds effects and background music
- Adding tracking of high score
- Improving graphics and animation

## Data structure
- `Game` class: Manages game loop, player, debris, and obstacles
  - `start()`: Initializes game elements and starts the game loop
  - `gameLoop()`: Updates game elements and handles transitions
  - `update()`: Manages the core game logic by moving the player, updating obstacle and debris positions
  - `startDebrisGeneration()`: Handles the debris generation
  - `updateScoreAndLives()`: Updates the display of the player's score and remaining lives on the user interface
  - `endGame()`: Handles the process of ending the game, including stopping obstacle and debris generation intervals, removing game elements from the screen, displaying the end game screen with scores, and playing a game over sound

- `Player` class: Represents the player character
  - `move()`: Updates player's position based on user input
  - `didColide()`: Checks for collisions with debris and obstacles
  - `updatePosition()`: Updates the position of the player on the screen

- `Debris` class: Represents debris floating in the river
  - `move()`: Moves the debris elements horizontally
  - `updatePosition()`: Updates the position of the debris elements on the screen

- `Obstacle` class: Represents obstacles floating in the river
  - `move()`: Moves the obstacle elements horizontally
  - `updatePosition()`: Updates the position of the obstacle elements on the screen

- `Script`: Initialises a simple game interface and controls using JavaScript
  - Game Initialization: When the webpage loads, the script sets up the game by obtaining references to the `Start` and `Restart` buttons and creating a new Game instance.
  - Start Button Click: When the `Start` button is clicked, the startGame() function is triggered, which calls the start() method of the game instance.
  - Keyboard Input Handling: When arrow keys are pressed:`ArrowUp` updates the player's upward movement and `ArrowDown` updates the player's downward movement. When arrow keys are released, player movement is reset.
  - Restart Button Click: Clicking the `Restart` button triggers the function, which reloads the page to start a new game.


## States y States Transitions
- **Start Screen**: Introduction and instructions for the game
- **Game Screen**: Actual gameplay with player, debris, and obstacles
- **Game Over Screen**: Displayed when lives run out, showing the player's score

## Task
- Set up project structure and basic HTML/CSS
- Implement player movement and interactions
- Create debris and obstacle classes
- Develop game loop and scoring system
- Implement lives system and Game Over logic


## Links
[Trello Link](https://trello.com/b/rYRQoUv4/project1game)
[Slides Link](https://docs.google.com/presentation/d/1_6UUthyYpogdkGGAO0O6pv0IqoGPnRxHuknZQHDL-ok/edit#slide=id.g27753e23bc7_0_103)
[Github repository Link](https://github.com/m091u/My_First_Game/tree/master)
[Deployment Link](https://m091u.github.io/My_First_Game/)
