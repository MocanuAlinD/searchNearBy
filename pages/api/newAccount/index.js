import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);

  if (req.method === "POST") {
    try {
      firebase.child(`serviciiUsers/`).push(data);
      res.json({ creat: `A fost creat userul "${data.utilizator}".` });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
