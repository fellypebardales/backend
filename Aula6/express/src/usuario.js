const express = require("express");

const app = express();

const usuarios = [
  { id: 1, nome: "Fellype", sobrenome: "Bardales", idade: 22 },
  { id: 2, nome: "Kelly", sobrenome: "Oliveira", idade: 45 },
];

app.get("/", (req, res) => {
  console.log(usuarios);
  res.send(usuarios);
});

app.get("/:userId", (req, res) => {
  let userId = req.params.userId;
  let usuario = usuarios.find((user) => user.id === +userId);

  if (!usuario) return res.send({ error: "Usuário não encontrado!" });
  res.send(usuario);
});

app.listen(8080, () => {
  console.log("Rodando na porta 8080.");
});
