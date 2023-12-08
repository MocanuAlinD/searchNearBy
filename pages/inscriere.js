import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import NotSignedIn from "../components/NotSignedIn";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";

export default function Inscriere() {
  const auth = getAuth();
  return (
    <Container>
      {auth.currentUser ? <FormRegister /> : <NotSignedIn />}
    </Container>
  );
}
