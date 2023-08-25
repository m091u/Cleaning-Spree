window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = new Game(); //creates new instance of the game

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game.start(); // added
  }

  // Handle Keyboard Input
  window.addEventListener("keydown", (event) => {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        game.player.directionY = -5; //move up
        break;
      case "ArrowDown":
        game.player.directionY = 5; //move down
        break;
    }

    // Reset direction property when arrow key is released
    window.addEventListener("keyup", (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        game.player.directionY = 0; // Stop movement
      }
    });
  });

  // End Game Screen
  // Add an event listener to the restart button & Call the restartGame function when the button is clicked
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};
