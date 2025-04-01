const express = require("express");
const path = require("path");

// create express app
const app = express();

app.use(express.static(path.join(__dirname, "views")));

app.get("/*page/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/404.html"));
});

const port = process.env.PORT || 14538;

app.listen(port);
console.log(`Server is running on port ${port}`);
console.log(`http://localhost:${port}`);
