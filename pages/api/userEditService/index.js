import { firebase } from "../../../firebase";
import { getDatabase, ref, set, update } from "firebase/database";

export default async function handler(req, res) {
  const { data, uid } = JSON.parse(req.body);
  const db = getDatabase();
  const base = ref(db, `Alin/${data.judet}/${uid}`);

  const phone = Object.values(data.contact.phone).map((item) => item.phone);
  const email = Object.values(data.contact.email).map((item) => item.email);
  const finalData = {
    ...data,
    contact: { email, phone },
  };

  if (req.method === "POST") {
    try {
      update(base, finalData);
      res.json({ msg: "Modificari salvate cu succes!" });
    } catch (error) {
      res.json({ error: `Modificarile nu au fost salvate!!!` });
    }
  }
}
