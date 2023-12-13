import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { id } = req.query;
  const db = getDatabase();
  const items = ref(db, `Alin`);

  if (req.method === "GET") {
    try {
      onValue(items, (s) => {
        const detailsList = [];
        if (s.val() !== null) {
          [s.val()].map((item) =>
            Object.values(item).map((i) => {
              const alin = Object.keys(i);
              alin.filter((x) => x === id && detailsList.push(i[id]));
            })
          );
        }
        res.json(detailsList);
      });
    } catch (error) {
      res.json({ error: "A aparut o eroare in gasirea datelor in DB." });
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
