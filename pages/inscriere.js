import { Container } from "../components/singleTags/elemetsCustom";
import FormRegister from "../components/FormRegister";
import NewTimer from "../components/NewTimer";
import BackButton from "../components/BackButton";


export default function Inscriere({
  listaOrase,
  setListaOrase,
  state,
  setState,
  postData,
  initialValues,
  loading,
  setLoading,
}) {
  return (
    <Container
      bg={`linear-gradient(to bottom right, var(--color-blue-light), var(--color-blue-dark))`}
      className='d-flex flex-column align-items-center'
    >
      <div className="row col-12 mt-2 ps-3">
        <BackButton url="/" text="Pagina principala" />
      </div>
      {loading && <NewTimer loading={loading} setLoading={setLoading} />}
      <FormRegister
        listaOrase={listaOrase}
        setListaOrase={setListaOrase}
        state={state}
        setState={setState}
        postData={postData}
        initialValues={initialValues}
        loading={loading}
        setLoading={setLoading}
      />
    </Container>
  );
}
