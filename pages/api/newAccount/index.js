import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);

  if (req.method === "POST") {
    try {
      const temp = [];
      firebase.child("serviciiUsers/").on("value", (s) => {
        if (s.val() !== null) {
          [s.val()].map((item) => {
            Object.values(item).map((el) => {
              temp.push(el.utilizator);
            });
          });
        }
      });
      console.log(temp)

      if (temp.includes(data.utilizator)) {
        res.json({ exista: "Exista utilizatorul" });
        return;
      } else {
        firebase.child(`serviciiUsers/`).push(data);
        res.json({ msg: `Contul pentru ${data.nume} a fost creat cu succes.` });
      }
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
