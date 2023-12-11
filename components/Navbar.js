import React from "react";
import Switch from "./Switch";
import Title from "./Title";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserChangeData from "../components/userChangeData";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const { pathname } = useRouter();
  const auth = getAuth();
  const uid = useSelector((state) => state.login.uid);
  const user = auth.currentUser?.email.split("@")[0];

  const toggleMenu = (percent) => {
    const userIcon = document.getElementById("userIcon");
    userIcon.style.transform = `translateY(${percent})`;
  };

  return (
    <div
      className="m-0 p-0 px-3 pt-0 d-flex py-0 align-items-center justify-content-between"
      style={{ height: "3rem", backgroundColor: "var(--color-blue-dark)" }}
    >
      <BurgerButton />
      {pathname !== "/" && (
        <div
          className="d-flex w-100 justify-content-center"
          style={{ height: "100%" }}
        >
          <Title spd={2000} />
        </div>
      )}

      {pathname === "/" ? <Switch /> : ""}

      <div className="d-flex align-items-center justify-content-center m-0 p-0">
        <span style={{ fontSize: ".8rem", whiteSpace: "nowrap" }}>
          {user ? `Bine ai venit, ${user} !` : "Log in"} &ensp;
        </span>
        <div style={{ height: "3rem", width: "3rem" }}>
          <Image
            src={uid ? "/icon48.png" : "/icon48c.png"}
            onClick={() => toggleMenu("0")}
            alt="user"
            height={"100%"}
            width={"100%"}
            className={styles.image}
          />
        </div>
      </div>
      <UserChangeData close={toggleMenu} />
    </div>
  );
};

export default Navbar;
