import React from "react";
import Switch from "./NavbarSwitch";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setShowUserMenu } from "../features/searchJudet/searchJudetSlice";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/comps/Navbar.module.scss";

const Navbar = () => {
  const { pathname, push } = useRouter();
  const auth = getAuth();
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.login.uid);
  const user = auth.currentUser?.email.split("@")[0];

  const toggleMenu = (percent) => {
    const userIcon = document.getElementById("userIcon");
    userIcon.style.transform = `translateY(${percent})`;
  };

  return (
    <div className={styles.navContainer}>
      <div
        className={
          styles.navbar +
          " m-0 p-0 px-3 d-flex align-items-center justify-content-end gap-0 gap-md-3"
        }
      >
        <div className="d-flex w-100 align-items-center h-100">
          {pathname === "/cauta" && <Switch />}
          <p
            onClick={() => pathname !== "/" && push("/")}
            className={styles.pageName}
          >
            logo here
          </p>
        </div>
        <div className="m-0 p-0 d-flex align-items-center justify-content-center flex-row gap-1">
          <span className={styles.userText}>
            {user ? `Hello, ${user} !` : "Log in"}
          </span>
          <div className={styles.imageContainer}>
            <Image
              src={uid ? "/icon48.png" : "/icon48c.png"}
              onClick={() => (
                toggleMenu("0"), dispatch(setShowUserMenu(false))
              )}
              alt="user"
              className={styles.image}
              layout="fill"
            />
          </div>
        </div>
        <BurgerButton />
      </div>
    </div>
  );
};

export default Navbar;
