import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import BackButton from "../components/BackButton";
import NotSignedIn from "../components/NotSignedIn";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";

export default function Inscriere({
  listaOrase,
  setListaOrase,
  state,
  setState,
  postData,
  initialValues,
}) {
  const auth = getAuth();
  return (
    <Container
      bg={`linear-gradient(to bottom right, var(--color-blue-light), var(--color-blue-dark))`}
    >
      <BackButton url="/" text="Pagina principală" />

      {auth.currentUser ? (
        <FormRegister
          listaOrase={listaOrase}
          setListaOrase={setListaOrase}
          state={state}
          setState={setState}
          postData={postData}
          initialValues={initialValues}
        />
      ) : (
        <NotSignedIn />
      )}
    </Container>
  );
}
