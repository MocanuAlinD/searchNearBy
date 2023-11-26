import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { username, password } = req.query;
  const db = getDatabase();
  const items = ref(db, "serviciiUsers");

  if (req.method === "GET") {
    try {
      // once
      onValue(items, (s) => {
        if (s.val() !== null) {
          const alin = [s.val()].map((item) =>
            Object.values(item).filter(
              (el) => el.utilizator === username && el.parola === password
            )
          );
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
