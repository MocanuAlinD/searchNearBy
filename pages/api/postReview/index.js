import { firebase } from "../../../firebase";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  const { currentStar, sortRev, longRev, postTime } = data;
  console.log(currentStar, sortRev, longRev, postTime);
  const dataToWrite = {
    currentStar,
    sortRev,
    longRev,
    postTime,
  };
  const db = getDatabase();
  const addTo = ref(db, `reviews/${data.id}/${data.userId}`);

  if (req.method === "POST") {
    try {
      set(addTo, dataToWrite);
      res.json({ msg: "Review inregistrat" });
    } catch (error) {
      res.json({ error: `Datele nu s-au putut inregistra` });
    }
  }
}
