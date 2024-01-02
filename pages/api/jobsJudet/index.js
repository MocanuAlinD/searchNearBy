import { firebase } from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { search, judet } = req.query;
  const db = getDatabase();
  const base = ref(db, "/");

  if (req.method === "GET") {
    try {
      onValue(base, (s) => {
        const endresult = [];
        const revs = [];
        // ADD MESSAGES IN CASE SOMETHING DOESNT EXISTS
        const msg = "";
        if (s.val() !== null) {
          const judeteDB = s.val().Alin;
          if (judeteDB) {
            const singleJudet = judeteDB[judet];
            if (singleJudet) {
              [singleJudet].map((item) =>
                Object.values(item).map((i) => {
                  if (!search) {
                    endresult.push(i);
                  }
                  if (
                    search &&
                    i.tipjob.toLowerCase().includes(search.toLowerCase())
                  ) {
                    endresult.push(i);
                  }
                  const b = s.val().reviews;
                  const c = b[i.id];
                  if (c) {
                    Object.values(c).map((item) => revs.push(item));
                  }
                })
              );
            }
          }
        }
        res.json({ endresult, revs });
      });
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

// if (!search) {
//   endresult.push(a);
//   console.log("from api: ", a);
// }
// if (search && a.tipjob.toLowerCase().includes(search.toLowerCase())) {
//   endresult.push(a);
// }
