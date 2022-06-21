import React from "react";
import styles from "../styles/card.module.scss";
import { Checkbox } from "@mui/material";
import { GoLocation } from "react-icons/go";
import { BsPersonCircle, BsArrowLeftRight } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";
import { FcPhone, FcGlobe } from "react-icons/fc";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import Link from "next/link";



const Card = ({ data, setLocation }) => {
  const saveToStorage = () => {
    localStorage.setItem(
      "location",
      JSON.stringify({ id: data.id, judet: data.judet, oras: data.oras })
    );
    setLocation({ id: data.id, judet: data.judet, oras: data.oras });
  };
  return (
    <div className={styles.container}>
      <h3>{data.tipjob.charAt(0).toUpperCase() + data.tipjob.slice(1)}</h3>
      <hr />
      <div className={styles.wrapper}>
        <h4>
          <GoLocation />
          &nbsp;&nbsp;Locatie
        </h4>
        <h5>
          <span>
            Jud. {data.judet}, {data.oras}
          </span>
          <Link href={`/harta`}>
            <a onClick={() => saveToStorage()}>
              <FcGlobe className="fs-4" />
            </a>
          </Link>
        </h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <h4>
          <BsPersonCircle />
          &nbsp;&nbsp;Nume
        </h4>
        <h5>{data.fullname}</h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <h4>
          <AiOutlinePhone />
          &nbsp;&nbsp;Telefon
        </h4>
        <h5>
          <span>{data.contact.phone}</span>{" "}
          <a href={`tel:${data.contact.phone}`}>
            <FcPhone className="fs-4" />
          </a>
        </h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <h4>
          <AiOutlineMail />
          &nbsp;&nbsp;Email
        </h4>
        <h5>
          <span>{data.contact.email}</span>
          <a href={`mailto:${data.contact.email}`}>
            <AiOutlineMail
              className="fs-4"
              style={{ color: "var(--color-green1)" }}
            />
          </a>
        </h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <h4>
          <BsCashCoin />
          &nbsp;&nbsp;Tarife
        </h4>
        <h5>
          <span>
            {data.pretMin} lei <BsArrowLeftRight className="mx-2" />{" "}
            {data.pretMax} lei
          </span>
        </h5>
      </div>

      <hr className={styles.divider} />
      <div className={styles.wrapper}>
        <h4>
          <CgDetailsMore />
          &nbsp;&nbsp;Descriere
        </h4>
        <h5>{data.detalii}</h5>
      </div>
      <hr className={styles.divider} />
      <div className={styles.wrapper}>
        <h4>
          <AiOutlineCalendar />
          &nbsp;&nbsp;Program
        </h4>
        <h5>
          {data.orainceput} - {data.orasfarsit} {data.ziinceput} -{" "}
          {data.zisfarsit}
        </h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        {data.urgente ? (
          <div className={styles.checkbox}>
            <Checkbox
              size="small"
              sx={{
                "&.Mui-checked": {
                  color: "#81c784",
                  marginLeft: "-.2rem",
                  marginRight: ".5rem",
                  padding: 0,
                },
              }}
              checked={data.urgente}
            />
            <h5>Disponibil in afara zilelor/orelor de lucru.</h5>
          </div>
        ) : (
          <div className={styles.checkbox}>
            <Checkbox
              className={styles.checkbox}
              size="small"
              sx={{
                color: "#81c784",
                padding: 0,
                marginLeft: "-.2rem",
                marginRight: ".5rem",
              }}
              checked={data.urgente}
            />
            <h5>Disponibil doar in zilele/orele de lucru.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
