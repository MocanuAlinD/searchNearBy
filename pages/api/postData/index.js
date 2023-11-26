import { firebase } from "../../../firebase";
import { getDatabase, ref, push } from "firebase/database";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  // USE THIS FOR AUTH.UID TO ADD AS KEY
  // const id = Math.floor(Math.random() * 99999);
  // const dt = Date.now();
  // const uid = `${dt}${id}`;
  const db = getDatabase();
  // const items = ref(db, `Alin/${data.judet}/${uid}`);
  const items = ref(db, `Alin/${data.judet}`);

  if (req.method === "POST") {
    try {
      push(items, data);
      res.json({ msg: `Date salvate cu succes in ${data.judet}` });
    } catch (error) {
      res.json({ error: `Datele nu s-au putut inregistra` });
    }
  }
}
