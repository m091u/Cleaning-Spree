class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    // this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    // Set up the default element's property values
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
    this.gameScreen.appendChild(this.element);
  }

  //Enables & sets parameters in which the character can move
  move() {
      // this.left += this.directionX;
    this.top += this.directionY;
    
    // if (this.left < 10) {
    //   this.left = 10;
    // }
    if (this.top < 10) {
      this.top = 10;
    }
    // if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
    //   this.left = this.gameScreen.offsetWidth - this.width - 10;
    // }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
    this.updatePosition();
  }

  updatePosition() {
    // this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  //Provides dimensions & position of obstacle/debris and whether or not it collides with the player
  didColide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  didColide(debris) {
    const playerRect = this.element.getBoundingClientRect();
    const debrisRect = debris.element.getBoundingClientRect();

    if (
      playerRect.left < debrisRect.right &&
      playerRect.right > debrisRect.left &&
      playerRect.top < debrisRect.bottom &&
      playerRect.bottom > debrisRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
