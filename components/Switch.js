import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setShowTitle } from "../features/showTitle/showTitleSlice";
import styles from "../styles/comps/Switch.module.scss";

const Switch = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-100 d-flex justify-content-start gap-2 mx-2">
      <input
        type="checkbox"
        id="change"
        checked={!useSelector((state) => state.showTitle.showTitle)}
        onChange={() => dispatch(setShowTitle())}
        className={styles.checkbox + " m-0 p-0"}
      />
      {!useSelector((state) => state.showTitle.showTitle) && (
        <AiOutlineEye className={"text-white"} />
      )}
      {useSelector((state) => state.showTitle.showTitle) && (
        <AiOutlineEyeInvisible className={"text-white"} />
      )}
    </div>
  );
};

export default Switch;
