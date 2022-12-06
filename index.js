const bodyParser = require("body-parser");
const express = require("express");
const {
  getPets,
  getServicos,
  postAgendamento,
  postPets,
  postServico,
  deletePet,
} = require("./functions");
//FIREBASE
const firestore = require("./initFirestore");

//INICIALIZA APP
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
//EJS
app.set("view engine", "ejs");

//ROTAS
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/sobre", (req, res) => {
  res.render("pages/sobre");
});

app.get("/servico", (req, res) => {
  getServicos(firestore, res);
});

app.get("/pets", (req, res) => {
  getPets(firestore, res, "pets");
});

app.get("/adote", (req, res) => {
  getPets(firestore, res, "adote");
});

app.post("/agendamento", (req, res) => {
  const agendamento = req.body;
  postAgendamento(firestore, agendamento, res);
});

app.post("/adote", (req, res) => {
  const adocao = req.body;
  postPets(firestore, adocao, res);
});

app.post("/servico", (req, res) => {
  const servico = req.body;
  postServico(firestore, servico, res);
});

app.delete("pet/:nome", (req, res) => {
  const nome = req.params.nome;
  deletePet(firestore, nome, res);
});
app.delete("agendamento/:nome", (req, res) => {
  const nome = req.params.nome;
  deleteAgendamento(firestore, nome, res);
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("aberto");
});
