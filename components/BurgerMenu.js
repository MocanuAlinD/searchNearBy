import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "./tags/CustomIcon";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const addDelay = (x) => {
    const val = x === 1 ? 0.0 : 0.03;
    const delay = (val * x).toFixed(2) + "s";
    return delay;
  };

  return (
    <div
      className={styles.sidebar}
      style={{
        "--clip": useSelector((state) => state.search.showMenu)
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        "--delay": `${useSelector((state) =>
          state.search.showMenu ? "0s" : "0.9s"
        )}`,
      }}
    >
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(1)}
        src="home"
        text="Home"
        onClick={() => console.log("test")}
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(2)}
        src="statisticsRedBlue"
        text="Toate judetele"
        href="servicii"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(3)}
        src="info"
        text="Info / FAQ"
        href="infofaq"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(4)}
        src="complaint"
        text="Reclamatii"
        href="reclamatii"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(5)}
        src="contact"
        text="Contact"
        href="contact"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(6)}
        src="login"
        text="Log-in / Sign-up"
        href="login"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(7)}
        src="registerBlue"
        text="Inregistrare"
        href="inscriere"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(8)}
        src="ask"
        text="Depune oferta"
        href="depuneOferta"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(9)}
        src="timer"
        text="Cereri active"
        href="cereriCurente"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(10)}
        src="donate"
        text="Doneaza"
        href="donatii"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(11)}
        src="landing"
        text="Landing page"
        href="landingPage"
      />
      <CustomIcon
        st={useSelector((state) => state.search.showMenu)}
        delay={addDelay(12)}
        src="test"
        text="Test"
        href="test"
      />
    </div>
  );
};

export default BurgerMenu;
