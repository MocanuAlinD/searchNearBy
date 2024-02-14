import React from "react";
import styles from "../styles/comps/inputWithLabel.module.scss";

const InputWithLabel = ({ text }) => {
  return <h4 className={styles.h4}>{text}</h4>;
};

export default InputWithLabel;
