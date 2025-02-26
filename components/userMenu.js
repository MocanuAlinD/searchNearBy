import React from "react";
import toast from "react-hot-toast";
import SvgButton from "./tags/svgButton";
import { SmallContainer } from "./singleTags/elementsCustom";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { setUid } from "../features/login/loginSlice";
import { setInitialStateReview } from "../features/review/reviewSlice";
import styles from "../styles/comps/userMenu.module.scss";

// in components/Navbar
const UserMenu = ({ close }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const auth = getAuth();

  const gotologin = (e) => {
    activeButton(e);
    push("/login");
  };

  // LOG OUT user
  const userLogOut = (e) => {
    activeButton(e);
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

  const goToEdit = (e, href) => {
    activeButton(e);
    push(href);
  };

  const activeButton = (e) => {
    close("-100%");
    const btn = e.target.parentElement.parentElement;
    const btns = document.getElementsByName("button");
    btns.forEach((item) => {
      item.setAttribute("active", false);
    });
    btn.setAttribute("active", true);
  };

  return (
    <SmallContainer
      w="100%"
      h="100%"
      className={styles.userContainer}
      id="userIcon"
    >
      {useSelector((state) => state.login.uid) && (
        <SvgButton onClick={(e) => goToEdit(e, "/modifica-date")} name="button">
          Modifica date serviciu
        </SvgButton>
      )}
      {auth.currentUser && (
        <SvgButton onClick={(e) => goToEdit(e, "/editare-cerere-depusa")} name="button">
          Modifică/șterge cerere depusă
        </SvgButton>
      )}
      {/* {useSelector((state) => state.login.uid) && (
        <SvgButton onClick={(e) => activeButton(e)} name="button">
          Modifica date profil
        </SvgButton>
      )} */}
      {useSelector((state) => state.login.uid) ? (
        <SvgButton onClick={(e) => userLogOut(e)} name="button">
          Sign Out
        </SvgButton>
      ) : (
        <SvgButton onClick={(e) => gotologin(e)} name="button">
          Log In
        </SvgButton>
      )}
      <SvgButton onClick={(e) => activeButton(e)} reset name="button">
        Inchide
      </SvgButton>
    </SmallContainer>
  );
};

export default UserMenu;
