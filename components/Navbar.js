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

const Navbar = () => {
  const { pathname, push } = useRouter();
  const auth = getAuth();
  const uid = useSelector((state) => state.login.uid);
  const user = auth.currentUser?.email.split("@")[0];

  const clickme = () => {
    const userIcon = document.getElementById("userIcon");
    const rot = userIcon.style;
    console.log(rot.transform);
    const t100 = "translateY(-100%)";
    const t0 = "translateY(0px)";
    if (rot.transform === t100) {
      rot.transform = t0;
    } else if (rot.transform === t0) {
      rot.transform = t100;
    }
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
            onClick={clickme}
            alt="user"
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
      <UserChangeData close={clickme} />
    </div>
  );
};

export default Navbar;

// {state && <UserChangeData close={() => setState((prev) => !state)} />}
