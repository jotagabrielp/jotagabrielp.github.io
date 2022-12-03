var admin = require("firebase-admin");
const express = require("express");

const serviceAccountKey = require("./serviceAccountKey.json");
//FIREBASE
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});

//INICIALIZA APP
const app = express();

//EJS
app.set('view engine', 'ejs');

//ROTAS
app.get("/", (req, res) => {
  res.render('pages/index');
})

app.get("/sobre", (req, res) => {
  res.render('pages/sobre');
})

app.get("/pets", (req, res) => {
  admin.firestore().collection('pet').get().then((snapshot) => {
    const pets = snapshot.docs.map(doc => ({
      ...doc.data(),
      uid: doc.id,
    }));
    res.render('pages/pets', {pets});
  });
})


app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {console.log('aberto')})