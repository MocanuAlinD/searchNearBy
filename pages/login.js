import React, { useState } from "react";
import {
  Container,
  Wrapper,
  LabelCustom,
  InputCustom,
  SmallContainer,
} from "../components/singleTags/elementsCustom";
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
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUid } from "../features/login/loginSlice";
import {
  setEmailInregistrare,
  setParolaOne,
  setParolaTwo,
  setInitialStateInregistrare,
} from "../features/signup/signupSlice";
import { setInitialStateReview } from "../features/review/reviewSlice";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { ButtonRotateCard } from "../components/tags/ButtonRotateCard";
import styles from "../styles/pages/login.module.scss";

const Login = ({ req }) => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const router = useRouter();

  // Login
  const emailLogare = useSelector((state) => state.login.emailLogare);
  const parolaLogare = useSelector((state) => state.login.parolaLogare);
  const uid = useSelector((state) => state.login.uid);

  // Sign up
  const emailInregistrare = useSelector(
    (state) => state.signup.emailInregistrare
  );
  const parolaOne = useSelector((state) => state.signup.parolaOne);
  const parolaTwo = useSelector((state) => state.signup.parolaTwo);

  const [showHidePassword, setShowHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const changeLeft = () => {
    const el = document.getElementById("bottomContainer");
    el.style.transform = "rotateY(0deg)";
    const el1 = document.getElementById("buttonLeft");
    const el2 = document.getElementById("buttonRight");
    el1.style.backgroundColor = "var(--glass)";
    el2.style.backgroundColor = "var(--glass-dark)";
  };

  const changeRight = () => {
    const el = document.getElementById("bottomContainer");
    el.style.transform = "rotateY(180deg)";
    const el1 = document.getElementById("buttonLeft");
    const el2 = document.getElementById("buttonRight");
    el1.style.backgroundColor = "var(--glass-dark)";
    el2.style.backgroundColor = "var(--glass)";
  };

  // add new user to database
  const addNewUserToAuthDB = async () => {
    createUserWithEmailAndPassword(auth, emailInregistrare, parolaTwo)
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
    signInWithEmailAndPassword(auth, emailLogare, parolaLogare)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUid(user.uid));
        dispatch(setInitialStateReview());
        toast.success(`Te-ai logat cu succes, \n${user.email}`);
        if (router.query.q === "inregistrare") {
          router.push("/inscriere");
        }
      })
      .catch((error) => {
        if (error.message.includes("invalid-login-credentials")) {
          toast.error("Ai introdus gresit emailul sau parola");
        } else if (error.code?.includes("invalid-email")) {
          toast.error("Adresa de email este invalida.");
        }
      });
  };

  // LOG OUT user XXXX Exista deja in componenta "UserMenu"
  const userLogOut = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          toast.success("Te-ai delogat cu succes.");
          dispatch(setUid(""));
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
    sendPasswordResetEmail(auth, emailLogare)
      .then(() => {
        toast.success(
          `A fost trimis un email pentru resetare parola la adresa ${emailLogare}.`,
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

  // create displayName user to redux.
  // Check if user displayName is null, and then ask for a displayName
  // if user already has a displayname, ask a new displayName
  const createDisplayName = () => {
    if (auth.currentUser.displayName === null) {
      console.log("User doesnt have a username to display. Choose one");
    } else {
      console.log(auth.currentUser.displayName);
    }
    // updateProfile(auth.currentUser, {
    //   displayName: "Mocanu Alin Username",
    // });
  };

  return (
    <>
      {loading && (
        <LoadingCheckUser changeLoadState={() => setLoading((prev) => false)} />
      )}
      <Container>
        <SmallContainer>
          <Wrapper className={styles.main}>
            <Wrapper className={styles.topButtons}>
              <ButtonRotateCard
                onClick={changeLeft}
                id="buttonLeft"
                bg="var(--glass)"
              >
                Autentificare
              </ButtonRotateCard>
              <ButtonRotateCard
                onClick={changeRight}
                id="buttonRight"
                bg="var(--glass-dark)"
              >
                Creează cont
              </ButtonRotateCard>
            </Wrapper>

            <div className={styles.torotate}>
              <Wrapper className={styles.bottomContainer} id="bottomContainer">
                <form className={styles.cardLeft} onSubmit={userLogIn}>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="emailLogare">Email:</LabelCustom>
                    <InputCustom
                      id="emailLogare"
                      value={emailLogare}
                      onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="password">Parolă:</LabelCustom>
                    <Wrapper className={styles.wrapper + " flex-row"}>
                      <InputCustom
                        id="password"
                        type="password"
                        value={parolaLogare}
                        w="100%"
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                      />
                      {showHidePassword ? (
                        <IoEyeOutline
                          className={styles.showHidePassword}
                          onClick={() => (
                            setShowHidePassword((prev) => !showHidePassword),
                            (document.getElementById("password").type = "text")
                          )}
                        />
                      ) : (
                        <IoEyeOffOutline
                          className={styles.showHidePassword}
                          onClick={() => (
                            setShowHidePassword((prev) => !showHidePassword),
                            (document.getElementById("password").type =
                              "password")
                          )}
                        />
                      )}
                    </Wrapper>
                  </Wrapper>

                  <Wrapper className={styles.wrapper}>
                    <ButtonWithIcon>Intra in cont</ButtonWithIcon>
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <h5 role="button" onClick={forgotPassword}>
                      Am uitat parola
                    </h5>
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
                      value={emailInregistrare}
                      placeholder="adresa email"
                      onChange={(e) =>
                        dispatch(setEmailInregistrare(e.target.value))
                      }
                    />
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="numeUtilizator">
                      Nume utilizator:
                    </LabelCustom>
                    <InputCustom
                      id="numeUtilizator"
                      // pattern="^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.[a-zA-Z]{2,3})+$"
                      // value={emailInregistrare}
                      placeholder="nume utilizator"
                      // onChange={(e) =>
                      //   dispatch(setEmailInregistrare(e.target.value))
                      // }
                    />
                  </Wrapper>
                  <Wrapper className={styles.wrapper}>
                    <LabelCustom htmlFor="parolaOne">Parola:</LabelCustom>
                    <InputCustom
                      id="parolaOne"
                      pattern="[0-9a-zA-Z!@#$%^&*,.]+"
                      value={parolaOne}
                      placeholder="6 caractere minim"
                      minLength={6}
                      autoComplete="off"
                      onChange={(e) => dispatch(setParolaOne(e.target.value))}
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
                      pattern={parolaOne}
                      value={parolaTwo}
                      autoComplete="off"
                      onChange={(e) => dispatch(setParolaTwo(e.target.value))}
                    />
                    <span>Parolele nu corespund</span>
                  </Wrapper>

                  <Wrapper
                    className={styles.wrapper + "  " + styles.endButtons}
                  >
                    <ButtonWithIcon
                      reset
                      onClick={() => dispatch(setInitialStateInregistrare())}
                    >
                      Reset
                    </ButtonWithIcon>

                    <ButtonWithIcon onClick={addNewUserToAuthDB}>
                      Creeaza cont
                    </ButtonWithIcon>
                  </Wrapper>
                </div>
              </Wrapper>
            </div>
          </Wrapper>
        </SmallContainer>
      </Container>
    </>
  );
};

export default Login;
