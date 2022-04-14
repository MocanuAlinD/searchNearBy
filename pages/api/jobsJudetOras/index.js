import firebase from "../../../firebase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { search, judet, oras } = req.query;
    try {
      firebase.child(`Alin/${judet}`).on("value", (s) => {
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
      });
    } catch (error) {
      res.json({ msg: "Error occured from jobsJudetOras api." });
    }
  }
}
