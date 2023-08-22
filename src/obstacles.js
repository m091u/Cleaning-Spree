class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // dimensions and position editing will be required
    this.left = 1000;
    this.top = Math.floor(Math.random() * 300) + 70; // using width of game area which is 300;
    this.width = 100;
    this.height = 150;

    this.element = document.createElement("img");
    this.element.src = "../images/Obstacle- Bottle.png"; //get source
    this.element.style.position = "absolute";

    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }

  //movement updated to acount for horizontal orientation
  move() {
    this.left -= 4;
    this.updatePosition();
    this.gamePort.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }
}


class Debris {
  constructor(gameScreen) {
    this.gamePort = gamePort;
    this.left = 1000;
    this.top = Math.floor(Math.random() * 350 + 70);
    this.width = 100;
    this.height = 100;
    this.element = document.createElement("img");

    //Creates array of possible debris elements, then randomises, rounded to integer
    const randomDebris = [
      "../images/debris-plastic-bag.jpeg",
      "../images/Debris-paper-coffee-cup.jpeg",
      "../images/Debris-water-bottle.png",
    ];
    const randomChoice = Math.floor(Math.random() * randomDebris.length);

    this.element.src = `${randomDebris[randomChoice]}`;

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gamePort.appendChild(this.element);
  }

  //Enables position of debris elements to change along x and y axes
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  //Sets the rate at which the objects move
  move() {
    this.left -= 4;
    this.updatePosition();
    this.gamePort.appendChild(this.element);
  }
}
