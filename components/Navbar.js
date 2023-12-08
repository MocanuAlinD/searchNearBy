import React from "react";
import Switch from "./Switch";
import Title from "./Title";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname, push } = useRouter();
  const auth = getAuth();
  const user = auth.currentUser?.email.split("@")[0];
  const uid = useSelector((state) => state.login.uid);

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
        {uid ? (
          <span style={{ fontSize: ".8rem", whiteSpace: "nowrap" }}>
            {user} &ensp;
          </span>
        ) : (
          <span style={{ whiteSpace: "nowrap", fontSize: ".8rem" }}>
            Not signed in &ensp;
          </span>
        )}
        <img
          src={uid ? "icon48.png" : "iconwho48.png"}
          onClick={() => push("/login")}
          alt="userIcon"
          height=".5rem"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
