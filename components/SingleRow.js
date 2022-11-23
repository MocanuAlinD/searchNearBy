import React from "react";
import styles from "../styles/SingleRow.module.scss";

const SingleRow = ({
  justTitle,
  id,
  state,
  func,
  list,
  text,
  type,
  name,
  icon,
  cls
}) => {
  return (
    <div className={styles.row}>
      {!justTitle && (
        <>
          <label htmlFor={id}>
            {text}
            {icon && icon}
          </label>
          <input
            type={type}
            id={id}
            name={name ? name : "defaultName"}
            checked={state}
            onChange={() => func(list && list)}
          />
        </>
      )}
      {justTitle && (
        <h4 className={cls}>{text}</h4>
      )}
    </div>
  );
};

export default SingleRow;
