import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLink from "./CustomLink";
import { Button } from "./tags/Button";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import { Wrapper } from "./singleTags/elemetsCustom";
import styles from "../styles/comps/BurgerMenu.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.sidebar}
      style={{
        clipPath: `polygon(0 0, 100% 0, ${
          useSelector((state) => state.search.showMenu)
            ? "100% 100%, 0 100%"
            : "100% 0, 0 0"
        })`,
      }}
    >
      <div className={styles.container}>
        <p>paragraph_1</p>
        <span>span</span>
      </div>
      <div className={styles.container}>
        <p>paragraph_2</p>
        <span>span</span>
      </div>
      <div className={styles.container}>
        <p>paragraph_3 mocanu alin daniel</p>
        <span>span</span>
      </div>
      <div className={styles.container}>
        <p>paragraph_4</p>
        <span>span</span>
      </div>
      <div className={styles.container}>
        <p>paragraph_5</p>
        <span>span</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
