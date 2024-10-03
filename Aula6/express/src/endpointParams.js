const express = require("express");

const app = express();

app.get("/oneparameter/:primeiroNome/:ultimoNome", (req, res) => {
  console.log("Hello", req.params.primeiroNome + " " + req.params.ultimoNome);
  res.send(`Hello ${req.params.primeiroNome} ${req.params.ultimoNome}!`);
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080!");
});
