import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { username, password } = req.query;
  console.log("API: ", username, password);
  if (req.method === "GET") {
    try {
      firebase.child("serviciiUsers").once("value", (s) => {
        // const temp = [];

        if (s.val() !== null) {
          const alin = [s.val()].map((item) =>
            Object.values(item).filter(
              (el) => el.utilizator === username && el.parola === password
            )
          );
          console.log("Alin is: ", alin[0].length, alin[0]);
          res.json({ msg: alin[0] });
        }
      });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
