import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { search, judet } = req.query;
  const db = getDatabase();
  const items = ref(db, `Alin/${judet}`);

  if (req.method === "GET") {
    try {
      var endresult = [];
      var revs = [];
      onValue(
        items,
        (s) => {
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
        },
        {
          onlyOnce: true,
        }
      );
      const dbName = ref(db, `reviews`);
      onValue(
        dbName,
        (s) => {
          if (s.val() !== null) {
            [s.val()].map((i, index) => {
              const a = endresult.map((x) => x.id); //id from all search results
              const b = Object.keys(i); // id (key) from reviews
              const d = Object.values(i);
              // for (let c = 0; c < a.length; c++) {
              // if (a.includes(b[c])) {
              //   console.log("endres api jobsJudet", d);
              // } else {
              //   console.log("not includes");
              // }
              // }
            });
          }
        },
        {
          onlyOnce: true,
        }
      );
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
