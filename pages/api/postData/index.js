import firebase from "../../../firebase";

export default async function handler(req, res) {
  const { data } = JSON.parse(req.body);
  const delayedPost = new Promise((e) => setTimeout(5000));
  try {
    firebase.child(`Alin/${data.judet}`).push(data);
    res.json({ msg: `Date salvate cu succes in ${data.judet}` });
  } catch (error) {
    res.json({ msg: `Datele nu s-au putut inregistra.` });
  }
}
