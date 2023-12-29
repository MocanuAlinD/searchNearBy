import { Container, Wrapper } from "../components/singleTags/elemetsCustom";
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
        <div className="w-100 d-flex align-items-center justify-content-center flex-grow-1">
          <h4 className="fs-4" style={{ fontWeight: "200" }}>
            Ai deja serviciu inregistrat.
          </h4>
        </div>
      ) : (
        <NotSignedIn />
      )}
    </Container>
  );
}
