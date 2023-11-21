import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { exista } = req.query;
  const tmp = [];
  if (req.method === "GET") {
    try {
      firebase.child("serviciiUsers/").on("value", (s) => {
        if (s.val() !== null) {
          Object.values([s.val()][0]).filter(
            (item) => item.utilizator === exista && tmp.push(exista)
          );
        }
      });
      res.json({ msg: tmp.length > 0 });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
