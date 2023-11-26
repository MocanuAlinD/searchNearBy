import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const db = getDatabase();
  const items = ref(db, "Alin");

  try {
    onValue(items, (s) => {
      if (s.val() !== null) {
        res.json(s.val());
      }
    });
  } catch (error) {
    res.status(404).json({ msg: "Error occured from jobsTotal api." });
  }
}
