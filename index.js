const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
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
  res.send("Hello World!");
})