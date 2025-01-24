## Week 2 Notes

### General Node notes

node.js doesn't like capital letters or spaces

```JSON
    "name": "N320 lectures", // This is wrong
    "version": "1.0.0",
    "main": "index.js",
```

package-lock.json is a history of modules and dependencies of the project

### Deconstructing Objects/Arrays

Surround the desired property with curly braces to store just the desired property.

```JS
const mathFunctions = require("./functions");
// {calcTriArea, calcSquareArea}
```

Deconstructing this object to get one function:

```JS
const { calcTriArea } = require("./functions");
```

Deconstructing can occur at any point, not just during export/import

---

Anything can be an object.

```JS
const blah = new Number(5);
blah.hide = function () {
    // blahblahblah
}
// This is a Number that has a function -- it is an object
```

### Pre-built modules

##### Readline

readline allows for user input in the terminal

```JS
// Pre-built imports
const readline = require("readline");

// App
const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Questions (for calculating triangle areas)
app.question(`Enter the height of the triangle: (1) `, function (userHeight) {
  console.log("Height entered: ", userHeight);

  app.question(`Enter the base of the triangle: (1) `, function (userBase) {
    const userArea = mathFunctions.calcTriArea(userBase, userHeight);
    console.log("Area of the triangle: ", userArea);
    app.close(); // use close to stop readline
  });
});
```
