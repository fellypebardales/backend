const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  const filePath = path.join(__dirname, "products.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de produtos" });
    }

    let products = JSON.parse(data);

    const limit = parseInt(req.query.limit, 10);
    if (!isNaN(limit) && limit > 0) {
      products = products.slice(0, limit);
    }

    res.json({ products });
  });
});

app.get("/products/:pid", (req, res) => {
  const filePath = path.join(__dirname, "products.json");
  const pid = req.params.pid;

  fs.readFile(filePath, "utf-8", (err, data) => {
    let products = JSON.parse(data);

    let produto = products.find((produto) => produto.id === pid);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado!" });
    }

    res.json(produto);
  });
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080!");
});

// http://localhost:8080/products/1
// http://localhost:8080/products?limit=2
