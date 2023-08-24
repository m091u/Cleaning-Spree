class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // dimensions and position
    this.left = 1100;
    this.top = Math.floor(Math.random() * 310);

    this.width = 70;
    this.height = 70;

    this.element = document.createElement("img");
    const randomObstacle = [
      "./images/Obstacle-swan-v1.png",
      "./images/Obstacle-duck(v1).png",
    ];
    const randomChoice = Math.floor(Math.random() * randomObstacle.length);
    this.element.src = `${randomObstacle[randomChoice]}`;

    this.element.style.position = "absolute";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }

  move() {
    this.left -= 4;
    this.updatePosition();
    this.gameScreen.appendChild(this.element);
  }
}

class Debris {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    this.left = 1200;
    this.top = Math.floor(Math.random() * 310);
    this.width = 80;
    this.height = 80;
    this.element = document.createElement("img");

    //Creates array of possible debris elements, then randomises
    const randomDebris = [
      "./images/Debris-plasti-bag-v2.png",
      "./images/Debris-paper-coffee-cup.png",
      "./images/Debris-water-bottle.png",
    ];
    const randomChoice = Math.floor(Math.random() * randomDebris.length);
    this.element.src = `${randomDebris[randomChoice]}`;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  //Enables position of debris elements to change along  axes
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  //Sets the rate at which the debris move
  move() {
    this.left -= 4;
    this.updatePosition();
    this.gameScreen.appendChild(this.element);
  }
}
