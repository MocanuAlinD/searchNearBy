import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { username } = req.query;
  if (req.method === "GET") {
    try {
      firebase.child("serviciiUsers").once("value", (s) => {
        const tempList = [];
        if (s.val() !== null) {
          [s.val()].map((item) =>
            Object.values(item).filter(
              (el) => el.utilizator === username && tempList.push(username)
            )
          );
          res.json({ msg: tempList.length });
        } else {
          res.json({ msg: 0 });
        }
      });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
