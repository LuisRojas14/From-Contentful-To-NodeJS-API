require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;


app.listen(port, function () {
  console.log(`Server running on : ${port}`);
});
app.use(bodyParser.json());

// Web routes
const recipes = require("./router/recipesRouter");
app.use("/api/recipes", recipes);
