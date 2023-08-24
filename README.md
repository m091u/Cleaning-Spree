### Cleaning Spree
## [Play the game!](link here)

## Description
Spree Cleanup is an interactive web-based game that challenges players to clean up the Spree River by collecting debris and avoiding obstacles. The game aims to raise awareness about river pollution and encourage players to take action against it in real life.

## MVP
MVP definition here, list of minimum features
- Player character can move to collect debris by clicking `up` and `down` on the keyboard
- Debris and obstacles move from right to left across the screen
- Debris and obstacles appear from random locations and at a regular interval
- The game has multiple types of obstacles and debris that appear on the screen in a random order
- Scoring system tracks player's progress
- Score is calculated based on the ammount of debris collected and obstacles avoided
- Lives system tracks player's interaction with the obstacles
- Game Over screen when lives run out


## Backlog
- Adding sounds effects and background music
- Adding tracking of high score
- Improving graphics and animation

## Data structure
- `Game` class: Manages game loop, player, debris, and obstacles
  - `start()`: Initializes game elements and starts the game loop
  - `gameLoop()`: Updates game elements and handles transitions
  - `endGame()`: 
  - `update()`:
  - `startDebrisGeneration()`:
  - `updateScoreAndLives()`:
  - `endGame()`:

- `Player` class: Represents the player character
  - `move()`: Updates player's position based on user input
  - `didColide()`: Checks for collisions with debris and obstacles
  - `updatePosition()`:

- `Debris` class: Represents debris floating in the river
  - `move()`: Moves the debris elements horizontally
  - `updatePosition()`: Updates the position of the debris elements on the screen

- `Obstacle` class: Represents obstacles floating in the river
  - `move()`: Moves the obstacle elements horizontally
  - `updatePosition()`: Updates the position of the obstacle elements on the screen

- `Script` class: 



## States y States Transitions
- **Start Screen**: Introduction and instructions for the game
- **Game Screen**: Actual gameplay with player, debris, and obstacles
- **Game Over Screen**: Displayed when lives run out, showing the player's score


Task
List of tasks in order of priority

## Links
[Trello Link](https://trello.com/b/rYRQoUv4/project1game)
[Slides Link](https://docs.google.com/presentation/d/1_6UUthyYpogdkGGAO0O6pv0IqoGPnRxHuknZQHDL-ok/edit#slide=id.g27753e23bc7_0_103)
[Github repository Link] (https://github.com/m091u/My_First_Game/tree/master)
[Deployment Link]()