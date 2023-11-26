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
import toast from "react-hot-toast";
import LoadingCheckUser from "../components/LoadingCheckUser";
import { firebase } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  browserSessionPersistence,
  setPersistence,
  inMemoryPersistence,
  sendEmailVerification,
} from "firebase/auth";

const Login = () => {
  const initialValues = {
    emailLogare: "alin_ngt@yahoo.com",
    parolaLogare: "mocanu",
    emailInregistrare: "alin_ngt@yahoo.com",
    parolaOne: "mocanu",
    parolaTwo: "mocanu",
    showHidePassword: true,
  };

  const [state, setState] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState("");

  const auth = getAuth();

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

  // add new user to database
  const addNewUserToAuthDB = async () => {
    createUserWithEmailAndPassword(
      auth,
      state.emailInregistrare,
      state.parolaTwo
    )
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`User creat cu adresa de email: ${user.email}`);
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use")) {
          toast.error("Adresa de email deja exista.");
        } else if (error.message.includes("invalid-email"))
          toast.error("Ai introdus o adresa de email invalida.");
      });
  };

  // check if user is signed in
  const checkUserSignedIn = () => {
    if (auth.currentUser) {
      toast.success("Userul este logat");
    } else if (!auth.currentUser) {
      toast.error("Userul NU este logat.");
    }
  };

  // LOG IN user
  const userLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, state.emailLogare, state.parolaLogare)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsUserAuthenticated(user.uid);
        toast.success("User logged in successfuly");
      })
      .catch((error) => {
        if (error.message.includes("invalid-login-credentials")) {
          toast.error("Ai introdus gresit emailul sau parola");
        } else if (error.code.includes("invalid-email")) {
          toast.error("Adresa de email este invalida.");
        }
      });
  };

  // LOG OUT user
  const userLogOut = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          toast.success("Te-ai delogat cu succes.");
          setIsUserAuthenticated("");
        })
        .catch((error) => {
          toast.error("O eroare a aparul la delogare.");
        });
    } else {
      toast.error("Esti deja delogat.");
    }
  };

  // forgot password (create popup to enter email to send link)
  const forgotPassword = () => {
    console.log(state.emailLogare);
    sendPasswordResetEmail(auth, state.emailLogare)
      .then(() => {
        toast.success(
          `A fost trimis un email pentru resetare parola la adresa ${state.emailLogare}.`,
          {
            duration: 5000,
          }
        );
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error(
          "A aparut o eroare la trimiterea emailului de resetare parola."
        );
        // ..
      });
  };

  return (
    <>
      {loading && (
        <LoadingCheckUser changeLoadState={() => setLoading((prev) => false)} />
      )}
      <Container>
        <BackButton url="/" text="Pagina principală" />
        {isUserAuthenticated ? (
          <h4>User signed in</h4>
        ) : (
          <h4>User NOT signed in</h4>
        )}
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
                <form className={styles.cardLeft} onSubmit={userLogIn}>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="emailLogare">Email:</LabelCustom>
                    <InputCustom
                      id="emailLogare"
                      value={state.emailLogare}
                      onChange={(e) =>
                        setState({ ...state, emailLogare: e.target.value })
                      }
                    />
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="password">Parola:</LabelCustom>
                    <div className="d-flex justify-content-center align-items-center">
                      <InputCustom
                        id="password"
                        type="password"
                        value={state.parolaLogare}
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
                  <Wrapper
                    className={
                      styles.wrapper + " m-0 p-0 d-flex  align-items-end"
                    }
                  >
                    <h5
                      role="button"
                      className="m-0 p-0 py-2"
                      onClick={forgotPassword}
                    >
                      Ai uitat parola?
                    </h5>
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <button className={styles.buttonLogare}>
                      Intra in cont
                    </button>
                  </Wrapper>
                </form>

                <div className={styles.cardRight}>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="emailInregistrare">
                      Email:
                    </LabelCustom>
                    <InputCustom
                      id="emailInregistrare"
                      pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.[a-zA-Z]{2,3})+$"
                      required
                      value={state.emailInregistrare}
                      placeholder="adresa email"
                      onChange={(e) =>
                        setState({
                          ...state,
                          emailInregistrare: e.target.value,
                        })
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

                  <Wrapper
                    className={styles.wrapper + "  " + styles.endButtons}
                  >
                    <button
                      className={styles.buttonLogare}
                      onClick={() => setState(initialValues)}
                    >
                      Reset
                    </button>

                    <button
                      className={styles.buttonLogare}
                      onClick={addNewUserToAuthDB}
                    >
                      Creeaza cont
                    </button>
                  </Wrapper>
                </div>
              </Wrapper>
            </div>
          </Wrapper>
        </Wrapper>
        <div className="d-flex align-items-center justify-content-center gap-5 p-2">
          <button onClick={checkUserSignedIn}>
            Verifica daca userul este autentificat
          </button>
          <button onClick={userLogOut}>Sign out</button>
        </div>
      </Container>
    </>
  );
};

export default Login;
