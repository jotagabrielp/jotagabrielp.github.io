const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/index.html");
})
app.get("/adote", (req, res) => {
  res.send("Hello World!");
})
app.get("/contato", (req, res) => {
  res.send("Hello World!");
})
app.get("/pet/:nome", (req, res) => {
  res.send("Hello World!");
})
app.get("/adote/:nome", (req, res) => {
  res.sendFile(__dirname + `/public/pages/adote${req.params.nome}.html`);
  
})
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {console.log('aberto')})