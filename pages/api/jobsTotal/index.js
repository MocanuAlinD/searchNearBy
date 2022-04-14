import firebase from "../../../firebase";

export default async function handler(req, res) {
  try {
    firebase.child(`Alin`).on("value", (s) => {
      if (s.val() !== null) {
        res.json(s.val())
      }
    });
  } catch (error) {
    res.status(404).json({msg: 'Error occured from jobsTotal api.'})
  }
}
