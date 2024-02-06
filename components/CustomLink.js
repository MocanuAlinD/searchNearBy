import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setShowMenu } from "../features/searchJudet/searchJudetSlice";
import styles from "../styles/comps/CustomLink.module.scss";

const CustomLink = ({ link, text }) => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.search.showMenu);
  const closeMenu = () => {
    if (showMenu) dispatch(setShowMenu(false));
  };
  return (
    <Link href={link} passHref>
      <span onClick={closeMenu} className={styles.span}>
        <a className={styles.link + " m-0"}>{text}</a>
      </span>
    </Link>
  );
};

export default CustomLink;
