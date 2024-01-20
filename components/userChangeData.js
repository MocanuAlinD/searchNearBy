import React from "react";
import {
  Container,
  Wrapper,
  SmallContainer,
} from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/tags/ButtonWithIcon";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { setUid } from "../features/login/loginSlice";
import { setInitialStateReview } from "../features/review/reviewSlice";
import SvgButton from "./tags/svgButton";
import styles from "../styles/userChangeData.module.scss";

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
          dispatch(setInitialStateReview());
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
    push("/modifica-date");
  };

  return (
    <SmallContainer
      className={styles.userContainer + " w-100 gap-3"}
      id="userIcon"
    >
      {useSelector((state) => state.login.uid) && (
        <SvgButton onClick={goToEdit}>Modifica date serviciu</SvgButton>
      )}
      {auth.currentUser && <SvgButton>Modifica date</SvgButton>}
      {useSelector((state) => state.login.uid) && (
        <SvgButton>Modifica date profil</SvgButton>
      )}
      {useSelector((state) => state.login.uid) ? (
        <SvgButton onClick={userLogOut}>Sign Out</SvgButton>
      ) : (
        <SvgButton onClick={gotologin}>Log In</SvgButton>
      )}
      <SvgButton
        reset
        onClick={() => close("-100%")}
      >
        Inchide
      </SvgButton>
    </SmallContainer>
  );
};

export default UserChangeData;
