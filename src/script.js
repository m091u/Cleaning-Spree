window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    // game = new Game(); // added
    game.start(); // added
  }

  //## Iteration 5: Handle Keyboard Input
  window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        game.player.directionY = -2;
        break;
      case "ArrowDown":
        game.player.directionY = 2;
        break;
    }
  });

  // ## Iteration 8: End Game Screen

  // Add an event listener to the restart button & Call the restartGame function when the button is clicked
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};
