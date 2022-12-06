const postAgendamento = (firestore, agendamento, res) => {
  firestore
    .collection("agendamentos")
    .doc()
    .set(agendamento)
    .then((result) => {
      res.json(result);
    });
};
const postPets = (firestore, pet, res) => {
  firestore
    .collection("pet")
    .doc()
    .set(pet)
    .then((result) => {
      res.json(result);
    });
};
const deletePet = (firestore, nome, res) => {
  firestore
    .collection("pet")
    .where("nome", "==", nome)[0]
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
      res.json({ message: "Pet deletado com sucesso!" });
    })
    .catch((err) => {
      res.json({ message: "Erro ao deletar pet!" });
    });
};

const deleteAgendamento = (firestore, nome, res) => {
  firestore
    .collection("agendamento")
    .where("nomePet", "==", nome)[0]
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
      res.json({ message: "Agendamento deletado com sucesso!" });
    })
    .catch((err) => {
      res.json({ message: "Erro ao deletar pet!" });
    });
};

const postServico = (firestore, servico, res) => {
  firestore
    .collection("servicos")
    .doc()
    .set(servico)
    .then((result) => {
      res.json(result);
    });
};

const getPets = (firestore, res, page) => {
  firestore
    .collection("pet")
    .get()
    .then((snapshot) => {
      const pets = snapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      res.render("pages/" + page, { pets });
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
  postPets,
  postServico,
  deletePet,
  deleteAgendamento,
};
