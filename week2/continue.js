// Ask the user if they want to continue
// If they do, then wait 2 seconds (2000ms)
// Then ask them again
// Else, close app

// Things to use:
// Readline, setTimeout

// Pre-built
const readline = require("readline");

// App init
const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// App logic
function continueGame() {
  app.question("Do you want to continue? (yes/no) ", (answer) => {
    if (answer === "yes" || answer === "y") {
      setTimeout(continueGame, 2000);
    } else {
      app.close();
    }
  });
}

// Start the app
continueGame();
