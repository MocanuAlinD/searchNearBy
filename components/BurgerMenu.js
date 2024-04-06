import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomIcon from "./tags/CustomIcon";
import { burgerValues } from "../lib/burgerValues";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const st = useSelector((state) => state.search.showMenu);
  const addDelay = (x) => {
    const val = x === 1 ? 0.0 : 0.025;
    const delay = (val * x).toFixed(2) + "s";
    return delay;
  };

  const delayTotal = (0.066 * burgerValues.length).toFixed(1) + "s";

  const closeBurger = () => {
    dispatch(dispatch(setShowMenu(false)));
  };

  return (
    <div
      className={styles.sidebar}
      style={{
        "--clip": st
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        "--delay": `${useSelector((state) =>
          state.search.showMenu ? "0s" : delayTotal
        )}`,
      }}
    >
      {burgerValues.map((item, index) => {
        return (
          <CustomIcon
            key={item.src}
            st={st}
            delay={addDelay(index)}
            src={item.src}
            text={item.text}
            href={item.href}
            onClick={closeBurger}
          />
        );
      })}
    </div>
  );
};

export default BurgerMenu;
