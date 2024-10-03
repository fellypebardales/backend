// Importa o módulo HTTP
// Cria um  servidor WEB

const http = require("http");

const server = http.createServer((request, response) => {
  // Enviando a resposta HTTP com o texto
  response.end("My first hello world from the backend!");
});
// Inicia o servidor na porta 8080
server.listen(8080, () => {
  console.log("Servidor rodando na porta 8080!"); //Imprimir mensagem no console.
});
