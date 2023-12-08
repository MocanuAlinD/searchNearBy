import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import NotSignedIn from "../components/NotSignedIn";
import { firebase } from "../firebase";
import { useSelector } from "react-redux";

export default function Inscriere() {
  const uid = useSelector(state => state.login.uid)
  return (
    <Container>
      {uid ? <FormRegister /> : <NotSignedIn />}
    </Container>
  );
}
