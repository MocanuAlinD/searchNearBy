import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/singleTags/ButtonWithIcon";
import styles from "../styles/userChangeData.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { setUid } from "../features/login/loginSlice";

const UserChangeData = ({ close }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const auth = getAuth();

  const gotologin = () => {
    push("/login");
    close("-100%");
  };

  // LOG OUT user
  const userLogOut = () => {
    close("-100%");
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

  const goToEdit = () => {
    close("-100%");
    push("/test");
  };

  return (
    <Container className={styles.userContainer + " w-100"} id="userIcon">
      {useSelector((state) => state.login.uid) && (
        <ButtonWithIcon w="min(90%,20rem)" onClick={goToEdit}>
          Modifica date serviciu
        </ButtonWithIcon>
      )}
      {useSelector((state) => state.login.uid) && (
        <ButtonWithIcon w="min(90%,20rem)">Modifica date profit</ButtonWithIcon>
      )}
      {useSelector((state) => state.login.uid) ? (
        <ButtonWithIcon w="min(90%,20rem)" onClick={userLogOut}>
          Sign Out
        </ButtonWithIcon>
      ) : (
        <ButtonWithIcon w="min(90%,20rem)" onClick={gotologin}>
          Log In
        </ButtonWithIcon>
      )}
      <ButtonWithIcon
        bg="transparent"
        border="1px solid var(--color-blue-dark)"
        w="min(90%,20rem)"
        onClick={() => close("-100%")}
      >
        Inchide
      </ButtonWithIcon>
    </Container>
  );
};

export default UserChangeData;
