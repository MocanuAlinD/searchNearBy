import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  if (req.method === "POST") {
    try {
      await firebase.child(`Alin/${data.judet}`).push(data);
      // const delay = new Promise(() => setTimeout(3000,))
      res.json({ msg: `Date salvate cu succes in ${data.judet}` });
    } catch (error) {
      res.json({ error: `Datele nu s-au putut inregistra` });
    }
  }
}
