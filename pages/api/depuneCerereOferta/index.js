import { firebase } from "../../../firebase";
import { getDatabase, ref, set } from "firebase/database";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  const db = getDatabase();
  const basePost = ref(db, `/cereriOferta/${data.cerereId}`);

  if (req.method === "POST") {
    try {
      set(basePost, data);
      res.json({ msg: "Back from the future" });
    } catch (error) {
      res.json({ error: `Datele nu s-au putut salva.` });
    }
  }
}
