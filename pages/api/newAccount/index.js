import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
    console.log(data);

  if (req.method === "POST") {
    try {

        // get data from firebase
        firebase.child("serviciiUsers/").on("value", (s) => {
          if (s.val() !== null) {
            [s.val()].map((item) => {
              Object.values(item).map((el) => console.log(el));
            });
          }
        });

      // push data to firebase OK
    //   await firebase.child(`serviciiUsers/`).push(data);
    //   res.json({ msg: `Contul pentru ${data.nume} a fost creat cu succes.` });
    } catch (error) {
      res.json({ error: `Contul nu a fost creat` });
    }
  }
}
