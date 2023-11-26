import { firebase } from "../../../firebase";
import { getDatabase, ref, push } from "firebase/database";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  const db = getDatabase();
  const items = ref(db, "serviciiUsers");

  if (req.method === "POST") {
    try {
      push(items, data);
      res.json({ creat: `A fost creat userul "${data.utilizator}".` });
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
      return;
    }
  }
}
