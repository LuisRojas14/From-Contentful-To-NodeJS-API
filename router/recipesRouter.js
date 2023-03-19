const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool();

// get all the recipes
router.get("/", (req, res) => {
  pool
    .query("SELECT * FROM recipes ")
    .then((data) => res.json(data))
    .catch((e) => {
      console.error(e);
      res.status(500).json({ error: " error" });
    });
});


// GET  /:id :  To get one recipe (with the id)

router.get("/:id", (req, res) => {
    const id = req.params.id;
    pool
      .query("SELECT * FROM recipes WHERE id=$1;", [id])
      .then(({ rows }) => res.json(rows))
      .catch((e) => res.sendStatus(500));
  });

// POST / -> To create a recipe
// router.post("/", (req, res) => {
//     //   console.log(req.body);
//     const { name, description, ingredients, instruction } = req.body;
//     pool
//       .query(
//         "INSERT INTO recipes ( name, description, ingredients, instruction) VALUES ($1, $2, $3, $4 ) RETURNING *;",
//         [name, description, ingredients, instruction]
//       )
//       .then(({ rows }) => res.json(rows))
//       .catch((e) => res.sendStatus(500));
//   });
  




module.exports = router;


