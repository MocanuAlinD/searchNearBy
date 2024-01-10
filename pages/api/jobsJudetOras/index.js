import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { search, judet, oras } = req.query;
  const db = getDatabase();
  const items = ref(db, `Alin/${judet}`);

  if (req.method === "GET") {
    try {
      onValue(
        items,
        (s) => {
          const temp = [];
          if (s.val() !== null) {
            [s.val()].map((item) =>
              Object.values(item).map((a) => {
                if (!search && a.oras.includes(oras)) {
                  temp.push(a);
                }
                if (
                  search.toLowerCase() &&
                  a.oras.includes(oras) &&
                  a.tipjob.toLowerCase().includes(search.toLowerCase())
                ) {
                  temp.push(a);
                }
              })
            );
          }
          res.json(temp);
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      res.json({ msg: "Error occured from jobsJudetOras api." });
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
