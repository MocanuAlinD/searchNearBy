import React, { useState } from "react";
import {
  Container,
  Wrapper,
  LabelCustom,
  InputCustom,
} from "../components/singleTags/elemetsCustom";
import BackButton from "../components/BackButton";
import styles from "../styles/login.module.scss";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const initialValues = {
    numeLogare: "",
    parolaLogare: "",
    numeInregistrare: "",
    numeUtilizator: "",
    parolaOne: "",
    parolaTwo: "",
    lungimeParola: 0,
    showHidePassword: true,
  };

  const [state, setState] = useState(initialValues);

  const changeLeft = () => {
    const el = document.getElementById("bottomContainer");
    el.style.transform = "rotateY(0deg)";
    const el1 = document.getElementById("buttonLeft");
    el1.style.backgroundColor = "var(--color-blue-darkish)";
    const el2 = document.getElementById("buttonRight");
    el2.style.backgroundColor = "var(--color-darkish";
  };

  const changeRight = () => {
    const el = document.getElementById("bottomContainer");
    el.style.transform = "rotateY(180deg)";
    const el1 = document.getElementById("buttonLeft");
    el1.style.backgroundColor = "var(--color-darkish";
    const el2 = document.getElementById("buttonRight");
    el2.style.backgroundColor = "var(--color-blue-darkish";
  };

  const submitLogare = (e) => {
    e.preventDefault();
  };

  const submitInregistrare = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <BackButton url="/" text="Pagina principală" />
      <Wrapper className="d-flex flex-column flex-grow-1 justify-content-start align-items-center m-0 p-0 mt-3">
        <Wrapper className={styles.main}>
          <Wrapper className={styles.topButtons}>
            <button
              onClick={changeLeft}
              className={styles.buttonLeft}
              id="buttonLeft"
            >
              Logare in cont
            </button>
            <button
              onClick={changeRight}
              className={styles.buttonRight}
              id="buttonRight"
            >
              Creeaza cont nou
            </button>
          </Wrapper>
          <div className={styles.torotate}>
            <Wrapper className={styles.bottomContainer} id="bottomContainer">
              <form className={styles.cardLeft} onSubmit={submitLogare}>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="utilizator">
                    Nume utilizator:
                  </LabelCustom>
                  <InputCustom
                    id="utilizator"
                    onChange={(e) =>
                      setState({ ...state, numeLogare: e.target.value })
                    }
                  />
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="password">Parola:</LabelCustom>
                  <div className="d-flex justify-content-center align-items-center">
                    <InputCustom
                      id="password"
                      type="password"
                      onChange={(e) =>
                        setState({ ...state, parolaLogare: e.target.value })
                      }
                    />
                    {state.showHidePassword ? (
                      <IoEyeOutline
                        className={styles.showHidePassword}
                        onClick={() => (
                          setState({
                            ...state,
                            showHidePassword: !state.showHidePassword,
                          }),
                          (document.getElementById("password").type = "text")
                        )}
                      />
                    ) : (
                      <IoEyeOffOutline
                        className={styles.showHidePassword}
                        onClick={() => (
                          setState({
                            ...state,
                            showHidePassword: !state.showHidePassword,
                          }),
                          (document.getElementById("password").type =
                            "password")
                        )}
                      />
                    )}
                  </div>
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <h5>Ai uitat parola?</h5>
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <button className={styles.buttonLogare}>Intra in cont</button>
                </Wrapper>
              </form>

              <form className={styles.cardRight} onSubmit={submitInregistrare}>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="nume">Nume prenume:</LabelCustom>
                  <InputCustom
                    id="nume"
                    required
                    value={state.numeInregistrare}
                    placeholder="nume prenume"
                    onChange={(e) =>
                      setState({ ...state, numeInregistrare: e.target.value })
                    }
                  />
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="numeUtilizator">
                    Nume utilizator:
                  </LabelCustom>
                  <InputCustom
                    id="numeUtilizator"
                    required
                    value={state.numeUtilizator}
                    placeholder="nume utilizator"
                    onChange={(e) =>
                      setState({ ...state, numeUtilizator: e.target.value })
                    }
                  />
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="parolaOne">Parola:</LabelCustom>
                  <InputCustom
                    id="parolaOne"
                    pattern="[0-9a-zA-Z!@#$%^&*,.]+"
                    value={state.parolaOne}
                    placeholder="6 caractere minim"
                    required
                    minLength={6}
                    autoComplete="off"
                    onChange={(e) =>
                      setState({ ...state, parolaOne: e.target.value })
                    }
                  />
                  <span>Parola invalida</span>
                </Wrapper>
                <Wrapper className={styles.wrapper}>
                  <LabelCustom htmlFor="parolaTwo">
                    Reintrodu parola:
                  </LabelCustom>
                  <InputCustom
                    id="parolaTwo"
                    placeholder="reintrodu parola"
                    required
                    pattern={state.parolaOne}
                    value={state.parolaTwo}
                    autoComplete="off"
                    onChange={(e) =>
                      setState({ ...state, parolaTwo: e.target.value })
                    }
                  />
                  <span>Parolele nu corespund</span>
                </Wrapper>

                <Wrapper className={styles.wrapper + "  " + styles.endButtons}>
                  <button
                    className={styles.buttonLogare}
                    onClick={() => setState(initialValues)}
                  >
                    Reset
                  </button>
                  <button className={styles.buttonLogare}>Creeaza cont</button>
                </Wrapper>
              </form>
            </Wrapper>
          </div>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
