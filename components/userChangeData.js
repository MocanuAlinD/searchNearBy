import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import { ButtonWithIcon } from "../components/singleTags/ButtonWithIcon";
import styles from "../styles/userChangeData.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signOutState } from "../features/login/loginSlice";

const UserChangeData = ({ close }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const gotologin = () => {
    push("/login");
    close();
  };

  const signOut = () => {
    dispatch(signOutState());
    close();
  };
  return (
    <Container
      className={styles.userContainer + " w-100"}
      id="userIcon"
      style={{ transform: "translateY(-100%)" }}
    >
      <div className="d-flex flex-column my-2 align-items-center">
        {useSelector((state) => state.login.uid) && (
          <ButtonWithIcon w="10rem">Modifica date serviciu</ButtonWithIcon>
        )}
        {useSelector((state) => state.login.uid) && (
          <ButtonWithIcon w="10rem">Modifica date profit</ButtonWithIcon>
        )}
        {useSelector((state) => state.login.uid) ? (
          <ButtonWithIcon w="10rem" onClick={signOut}>
            Sign Out
          </ButtonWithIcon>
        ) : (
          <ButtonWithIcon w="10rem" onClick={gotologin}>
            Sign In
          </ButtonWithIcon>
        )}
        <ButtonWithIcon
          bg="transparent"
          border="1px solid var(--color-blue-dark)"
          w="10rem"
          onClick={close}
        >
          Inchide
        </ButtonWithIcon>
      </div>
    </Container>
  );
};

export default UserChangeData;
