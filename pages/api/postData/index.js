import { firebase } from "../../../firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default async function handler(req, res) {
  const { data, uid } = JSON.parse(req.body);
  const db = getDatabase();
  const items = ref(db, `Alin/${data.judet}/${uid}`);
  const userId = ref(db, `searchUsers`);
  const userId2 = ref(db, `searchUsers/${uid}`);

  if (req.method === "POST") {
    try {
      onValue(
        userId,
        (s) => {
          let temp = {};
          if (s.val() !== null) {
            [s.val()].map((item) => {
              const key = Object.keys(item);
              if (key.includes(uid)) {
                temp = { error: "Nu mai poti adauga alt serviciu." };
              } else {
                set(userId2, data); // insert into searchUsers DB
                set(items, data); // Insert into Alin DB
                temp = { msg: `Date salvate cu succes in ${data.judet}` };
              }
            });
          } else {
            set(userId2, data); // insert into searchUsers DB
            set(items, data); // Insert into Alin DB
            temp = { msg: `Esti primul care salveaza in  ${data.judet}` };
          }
          res.json({ msg: temp });
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      res.json({ error: `Datele nu s-au putut salva.` });
    }
  }
}
