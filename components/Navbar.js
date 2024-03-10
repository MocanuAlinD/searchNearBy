import React from "react";
import Switch from "./NavbarSwitch";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setShowUserMenu } from "../features/searchJudet/searchJudetSlice";
import Image from "next/image";
import UserMenu from "../components/userMenu";
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
    <div
      className={
        styles.navbar +
        " m-0 p-0 px-3 d-flex py-0 align-items-center justify-content-between my-3 gap-0 gap-md-3"
      }
    >
      {pathname !== "/" && (
        <div
          className={styles.logoContainer}
          style={{ height: "100%" }}
          onClick={() => push("/")}
        >
          <p className={styles.pageName}>logo here</p>
        </div>
      )}

      {pathname === "/" && <Switch />}

      <div className="m-0 p-0 d-flex align-items-center justify-content-center flex-row gap-1">
        <span className={styles.userText}>
          {user ? `Hello, ${user} !` : "Log in"}
        </span>
        <div className={styles.imageContainer}>
          <Image
            src={uid ? "/icon48.png" : "/icon48c.png"}
            onClick={() => (toggleMenu("0"), dispatch(setShowUserMenu(false)))}
            alt="user"
            className={styles.image}
            layout="fill"
          />
        </div>
      </div>
      {/* user menu here */}
      <BurgerButton />
      </div>
      );
    };
    
    export default Navbar;
    // <UserMenu close={toggleMenu} />
