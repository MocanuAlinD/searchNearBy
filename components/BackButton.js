import React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import styles from "../styles/backbutton.module.scss";

const BackButton = ({ url, text }) => {
  return (
    <Link href={`${url}`}>
      <a
        className={
          styles.backButton + " m-0 p-0 px-2 py-1 w-auto shadow d-flex"
        }
      >
        <IconButton
          aria-label="delete"
          style={{ fontSize: ".8rem" }}
          className="m-0 p-0 me-2"
        >
          <AiOutlineDoubleLeft className={styles.icon} />
        </IconButton>
        <p className={styles.text + " d-flex align-items-center m-0 p-0"}>
          {text}
        </p>
        
      </a>
    </Link>
  );
};

export default BackButton;
