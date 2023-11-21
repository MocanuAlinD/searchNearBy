import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  let ret;
  if (req.method === "POST") {
    try {
      firebase.child("serviciiUsers/").on("value", (s) => {
        if (s.val() !== null) {
          ret = Object.values([s.val()][0]).some(
            (item) => item.utilizator === data
          );
        }
      });
      res.json({ msg: ret });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
