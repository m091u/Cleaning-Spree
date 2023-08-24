class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameContainer = document.querySelector("#game-container"); // added to set styling to container with none display
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");

    this.player = new Player(
      this.gameScreen,
      130,
      170,
      90,
      90,
      "../images/Player-bear-boat.png"
    );

    // game screen
    this.height = 380;
    this.width = 1500; // length of the river
    this.obstacles = [];
    this.debris = [];
    this.score = 0;
    this.lives = 4;

    this.gameStats = document.querySelector(".stats");
    this.scoreElement = document.querySelectorAll(".score"); //added for score & lives
    this.livesElement = document.querySelector("#lives"); //added for score & lives
    this.gameIsOver = false;
    this.obstacleGenerationInterval = 1200;
    this.debrisGenerationInterval = 1300;
  }

  // Starts game loop
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameStats.style.display = "block";
    this.gameContainer.style.display = "flex"; //added to format game view to display both game screen & stats

    this.gameLoop();
    this.startObstacleGeneration();
    this.startDebrisGeneration();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  //Controls player movement, object ineraction & scoring system
  update() {
    this.player.move();

    // Update obstacles
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Avoid collision and handle game logic as before
      if (
        obstacle.left + obstacle.width < this.player.left &&
        !this.player.didColide(obstacle)
      ) {
        this.score += 5;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
      }

      if (this.player.didColide(obstacle)) {
        this.lives--;
        console.log("lives:", this.lives);
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
      }
    }

    // Update debris
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const debrisPiece = this.debris[i];
      debrisPiece.move();

      // Collect points for collection (collision with debris)
      if (this.player.didColide(debrisPiece)) {
        this.score += 20;
        console.log("score:", this.score);
        debrisPiece.element.remove();
        this.debris.splice(i, 1);
      }
    }

    // Update the display of score and lives
    this.updateScoreAndLives();

    if (this.lives <= 0) {
      this.endGame();
    }
  }

  //Sets up interval with callback function creating a new obstacle and pushing to obstacle array
  startObstacleGeneration() {
    this.obstacleGenerationInterval = setInterval(() => {
      const obstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(obstacle);
    }, this.obstacleGenerationInterval);
  }

  startDebrisGeneration() {
    this.debrisGenerationInterval = setInterval(() => {
      const debrisPiece = new Debris(this.gameScreen);
      this.debris.push(debrisPiece);
    }, this.debrisGenerationInterval);
  }

  // Added for score & lives tracking
  updateScoreAndLives() {
    this.scoreElement[0].textContent = this.score;
    this.scoreElement[1].textContent = this.score;
    this.livesElement.textContent = this.lives;
  }

  endGame() {
    // Clear obstacle and debris generation intervals
    clearInterval(this.obstacleGenerationInterval);
    clearInterval(this.debrisGenerationInterval);

    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.debris.forEach((debrisPiece) => debrisPiece.element.remove());

    this.gameIsOver = true;

    // this.gameScreen.style.display = "none";
    this.gameContainer.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.gameStats.style.display = "block";
    this.scoreElement[0].textContent = this.score;
    this.scoreElement[1].textContent = this.score;

    // Play the game over sound
    const gameOverSound = document.getElementById("gameEndSound");
    gameOverSound.play();
  }
}
