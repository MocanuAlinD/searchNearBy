import React from "react";
import styles from "../styles/comps/SingleRow.module.scss";

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
  cls,
  style,
}) => {
  return (
    <div className={styles.row}>
      {!justTitle && (
        <>
          <input
            type={type}
            id={id}
            name={name ? name : "defaultName"}
            checked={state}
            onChange={() => func(list && list)}
          />
          <label htmlFor={id}>
            {text}
            {icon && icon}
          </label>
        </>
      )}
      {justTitle && (
        <h4 className={cls} style={style}>
          {text}
        </h4>
      )}
    </div>
  );
};

export default SingleRow;
