class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.player = new Player(
      this.gameScreen,
      30,
      900,
      120,
      120,
      "../images/inflatable-boat.png"
    );

    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.debris = [];
    this.score = 0;
    this.lives = 2;
    this.scoreElement = document.querySelector("#score"); //added for score & lives
    this.livesElement = document.querySelector("#lives"); //added for score & lives
    this.gameIsOver = false;
  }

  // Starts game loop
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }
    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  //Controls character movement, object ineraction & scoring system
  update() {
    this.character.move();

    // Create a new obstacle & debris based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    if (Math.random() > 0.98 && this.debris.length < 1) {
      this.debris.push(new Debris(this.gameScreen));
    }

    // make obstacle move
    if (this.obstacles.length) {
      const obstacle = this.obstacles[0];
      obstacle.move();

      // avoid colision
      if (obstacle.top > this.height) {
        this.score++;
        console.log("score:", this.score);
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
      }

      if (this.obstacles.length && this.player.didColide(obstacle)) {
        this.lives--;
        console.log("lives:", this.lives);
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
      }
    }

    // make debris move
    if (this.debris.length) {
      const Debris = this.debris[0];
      Debris.move();

      //collect debris
      if (this.debris.length && this.player.didColide(debris)) {
        this.score += 20;
        console.log("score:", this.score);
        Debris.element.remove();
        this.debris.splice(0, 1);
      }
    }

    // Update the display of score and lives
    this.updateScoreAndLives();

    if (this.lives <= 0) {
      this.endGame();
    }
  }

    // Added for score & lives tracking
    updateScoreAndLives() {
      this.scoreElement.textContent = this.score;
      this.livesElement.textContent = this.lives;
    }
  
    endGame() {
      this.player.element.remove();
      this.obstacles.forEach((obstacle) => obstacle.element.remove());
      this.debris.forEach((debris) => Debris.element.remove());
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    }
}
