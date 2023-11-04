import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import BackButton from "../components/BackButton";

export default function Inscriere({
  listaOrase,
  setListaOrase,
  state,
  setState,
  postData,
  initialValues,
}) {
  return (
    <Container
      bg={`linear-gradient(to bottom right, var(--color-blue-light), var(--color-blue-dark))`}
    >
      <BackButton url="/" text="Pagina principală" />
      <FormRegister
        listaOrase={listaOrase}
        setListaOrase={setListaOrase}
        state={state}
        setState={setState}
        postData={postData}
        initialValues={initialValues}
      />
    </Container>
  );
}
