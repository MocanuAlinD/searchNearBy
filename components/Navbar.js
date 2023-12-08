import React from "react";
import Switch from "./Switch";
import Title from "./Title";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname } = useRouter();
  const auth = getAuth();
  const user = auth.currentUser?.email.split("@")[0];
  console.log("auth", auth.currentUser);

  return (
    <div
      className="m-0 p-0 px-3 pt-0 d-flex py-0 align-items-center justify-content-between"
      style={{ height: "3rem", backgroundColor: "var(--color-blue-dark)" }}
    >
      <BurgerButton />
      {pathname !== "/" ? (
        <div
          className="d-flex w-100 justify-content-center"
          style={{ height: "100%" }}
        >
          <Title spd={2000} />
        </div>
      ) : (
        ""
      )}

      {pathname === "/" ? <Switch /> : ""}

      <div className="d-flex align-items-center justify-content-center m-0 p-0">
        {useSelector((state) => state.login.uid) ? (
          <span style={{ fontSize: ".8rem" }}>{user}</span>
        ) : (
          <span style={{ whiteSpace: "nowrap", fontSize: ".8rem" }}>
            Not signed in
          </span>
        )}
        <img
          src={
            useSelector((state) => state.login.uid)
              ? "icon48.png"
              : "iconwho48.png"
          }
          alt="userIcon"
          height=".5rem"
        />
      </div>
    </div>
  );
};

export default Navbar;
