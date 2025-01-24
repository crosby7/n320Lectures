### Running a Node.js script

You can run the "start" script from package.json:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "shs": "node ./functions"
  },
```

Then, in the terminal:

```console
npm start
```

For any other scripts, you need to add "run":
`npm run shs` or `npm run script3`

OR directly in the terminal:

```console
node index.js
```

### Importing / Exporting files in Node

To export, use:

```js
module.exports = {
  // functions to export here
};
```

in the file to export from.

To import, start the receiving file with:

```js
const fileVar = require("./filepath/fileName.js");
```

NOTE: when importing, the whole imported file will be executed, but only the exported functions will be available to use in the importing file.
