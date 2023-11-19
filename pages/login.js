import React from "react";
import {
  Container,
  Wrapper,
  LabelCustom,
  InputCustom,
} from "../components/singleTags/elemetsCustom";
import BackButton from "../components/BackButton";
import styles from "../styles/login.module.scss";

const Login = () => {
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

  return (
    <Container>
      <BackButton url="/" text="Pagina principală" />
      <Wrapper className="d-flex flex-column flex-grow-1 justify-content-start align-items-center m-0 p-0 mt-3">
        <Wrapper className={styles.main}>
          <Wrapper className={styles.topButtons + ""}>
            <button
              onClick={changeLeft}
              className={styles.buttonLeft + " " + styles.active}
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
              <div className={styles.cardLeft}>
                <Wrapper>
                  <LabelCustom htmlFor="nume">Nume si prenume:</LabelCustom>
                  <InputCustom id="nume" />
                </Wrapper>
              </div>
              <div className={styles.cardRight}>Create cont nou</div>
            </Wrapper>
          </div>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
