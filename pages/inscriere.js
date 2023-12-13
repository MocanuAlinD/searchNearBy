import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import NotSignedIn from "../components/NotSignedIn";
import { firebase } from "../firebase";
import { useSelector } from "react-redux";

export default function Inscriere() {
  const uid = useSelector((state) => state.login.uid);
  const hasService = useSelector((state) => state.login.hasService);
  return (
    <Container>
      {!hasService && uid ? (
        <FormRegister />
      ) : uid && hasService ? (
        <h4>Ai deja serviciu inregistrat.</h4>
      ) : (
        <NotSignedIn />
      )}
    </Container>
  );
}
