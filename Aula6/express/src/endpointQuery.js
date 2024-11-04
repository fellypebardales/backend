const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/dados", (req, res) => {
  let consultas = req.query;

  let { nome, sobrenome, idade } = req.query;

  res.send(consultas);
});

// http://localhost:8080/dados?nome=fellype&sobrenome=bardales&idade=22

app.listen(8080, () => {
  console.log("Rodando na porta 8080.");
});
