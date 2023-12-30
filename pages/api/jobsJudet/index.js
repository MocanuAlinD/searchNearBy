import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { search, judet } = req.query;
  const db = getDatabase();
  const items = ref(db, `Alin/${judet}`);

  if (req.method === "GET") {
    try {
      var endresult = [];
      onValue(items, (s) => {
        if (s.val() !== null) {
          [s.val()].map((item) =>
            Object.values(item).map((a) => {
              if (!search) {
                endresult.push(a);
              }
              if (
                search &&
                a.tipjob.toLowerCase().includes(search.toLowerCase())
              ) {
                endresult.push(a);
              }
            })
          );
        }
      });
      const dbName = ref(db, `reviews`);
      var revs = [];
      onValue(dbName, (s) => {
        if (s.val() !== null) {
          [s.val()].map((item) => Object.values(item).map((a) => revs.push(a)));
        }
      });
      res.json({ endresult, revs });
    } catch (error) {
      res.json({ msg: "Error occured fom jobsJudet api." });
    }
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
