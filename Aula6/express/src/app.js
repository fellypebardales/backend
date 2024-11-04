const express = require("express");

const app = express();

app.get("/saldar", (req, res) => {
  res.send("Olá pessoal, agora do express.");
});

app.get("/", (req, res) => {
  res.send("Helooo");
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080!");
});
