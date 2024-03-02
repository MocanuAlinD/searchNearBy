import {
  Container,
  H4Custom,
  SmallContainer,
  Wrapper,
} from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import NotSignedIn from "../components/NotSignedIn";
import { firebase } from "../firebase";
import { useSelector } from "react-redux";

export default function Inscriere() {
  const uid = useSelector((state) => state.login.uid);
  const hasService = useSelector((state) => state.login.hasService);
  return (
    <Container>
      {hasService && uid ? (
        <FormRegister />
      ) : uid && hasService ? (
        <SmallContainer bg border>
          <H4Custom m="0">Ai deja serviciu inregistrat.</H4Custom>
        </SmallContainer>
      ) : (
        <NotSignedIn />
      )}
    </Container>
  );
}
