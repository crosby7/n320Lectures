// Pre-built
const readline = require("readline");

// Installed Dependencies

// Custom Modules
const mathFunctions = require("./functions");

// window refers to the browser - node.js does not have a browser to reference
// console.log(window);

console.log("home");

console.log("Triangle (3, 7): ", mathFunctions.calcTriArea(3, 7));

console.log("Triangle (2, x): ", mathFunctions.calcTriArea(2));

console.log("Triangle missing vars: ", mathFunctions.calcTriArea());

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.question(`Enter the height of the triangle: (1) `, function (userHeight) {
  console.log("Height entered: ", userHeight);

  app.question(`Enter the base of the triangle: (1) `, function (userBase) {
    const userArea = mathFunctions.calcTriArea(userBase, userHeight);
    console.log("Area of the triangle: ", userArea);
    app.close();
  });
});
