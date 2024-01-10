import { firebase } from "../../../firebase";
import { getDatabase, ref, set } from "firebase/database";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  const {
    userId,
    id,
    currentStar,
    sortRev,
    longRev,
    postTime,
    numeReview,
    oras,
    judet,
  } = data;

  const dataToWrite = {
    currentStar,
    id,
    numeReview,
    sortRev,
    longRev,
    postTime,
    judet,
    oras,
  };
  const db = getDatabase();
  const baseDB = ref(db, `reviews/${id}/${userId}`);

  if (req.method === "POST") {
    try {
      set(baseDB, dataToWrite);
      res.json({ msg: "Review inregistrat" });
    } catch (error) {
      res.json({ error: `Datele nu s-au putut inregistra` });
    }
  }
}
