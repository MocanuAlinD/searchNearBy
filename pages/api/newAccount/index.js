import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);

  if (req.method === "POST") {
    try {
      let ret = false;
      // firebase.child("serviciiUsers/").on("value", (s) => {
      //   if (s.val() !== null) {
      //     ret = Object.values([s.val()][0]).some(
      //       (item) => item.utilizator === data.utilizator
      //     );
      //   }
      // });

      // if (!ret) {
      //   firebase.child(`serviciiUsers/`).push(data);
      //   res.json({ msg: `A fost creat userul "${data.utilizator}".` });
      // } else if (ret) {
      //   res.json({
      //     exista: `"${data.utilizator}" exista deja.\nIncearca alt nume de utilizator`,
      //   });
      // }
    } catch (error) {
      res.json({
        error: "Eroare aparuta in baza de date.\nIncercati mai tarziu.",
      });
    }
  }
}
