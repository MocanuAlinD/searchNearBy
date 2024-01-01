import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { search, judet } = req.query;
  // console.log("judet api", judet)
  const db = getDatabase();
  const items = ref(db, `Alin/${judet}`);
  const dbName = ref(db, `reviews`);

  if (req.method === "GET") {
    try {
      const endresult = [];
      const revs = [];

      onValue(dbName, (r) => {
        if (r.val() !== null) {
          [r.val()].map((item) =>
            Object.values(item).map((a) => {
              for (let x in a) {
                const jd = a[x].judet;
                if (jd == judet) {
                  revs.push(a[x]);
                }
              }
            })
          );
        }
      });

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
