var admin = require("firebase-admin");
const express = require("express");


admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});
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
app.post("/adote", (req, res) => {
  res.send("Hello World!");
})
app.get("/pet", (req, res) => {
  res.send("Hello World!");
})