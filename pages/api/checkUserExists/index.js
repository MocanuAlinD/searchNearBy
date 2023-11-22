import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { userName } = req.query;

  if (req.method === "GET") {
    try {
      firebase.child("serviciiUsers").on("value", (s) => {
        if (s.val() !== null) {
          var checkedUser = [s.val()].map((item) =>
            Object.values(item).some((el) => el.utilizator === userName)
          );
        }
        res.json({ msg: checkedUser });
      });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
