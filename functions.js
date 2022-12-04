const postAgendamento = (firestore, agendamento, res) => {
  firestore
    .collection("agendamentos")
    .doc()
    .set(agendamento)
    .then((result) => {
      res.json(result);
    });
};

const getPets = (firestore, res) => {
  firestore
    .collection("pet")
    .get()
    .then((snapshot) => {
      const pets = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      res.render("pages/pets", { pets });
    });
};

const getServicos = (firestore, res) => {
  firestore
    .collection("servicos")
    .get()
    .then((snapshot) => {
      const servicos = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      res.render("pages/servico", { servicos });
    });
};

module.exports = {
  postAgendamento,
  getServicos,
  getPets,
};
