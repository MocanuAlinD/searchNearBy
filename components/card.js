import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.scss";
import { GoLocation } from "react-icons/go";
import { BsPersonCircle, BsArrowLeftRight } from "react-icons/bs";
import { CgDetailsMore, CgWebsite } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";
import { FcPhone, FcGlobe } from "react-icons/fc";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCalendar,
} from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { ImCheckboxChecked } from "react-icons/im";
import Link from "next/link";
import RatingStars from "../components/ratingStars";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const Card = ({ data, setLocation, userReviews }) => {
  const auth = getAuth();

  const saveToStorage = () => {
    localStorage.setItem(
      "location",
      JSON.stringify({ id: data.id, judet: data.judet, oras: data.oras })
    );
    setLocation({ id: data.id, judet: data.judet, oras: data.oras });
  };
  return (
    <div className={styles.container}>
      <h3 className="text-center">
        {data.tipjob.charAt(0).toUpperCase() + data.tipjob.slice(1)}
      </h3>
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

      {data.contact.phone.map((element, index) => (
        <div className={styles.wrapper} key={index}>
          <h4>
            <AiOutlinePhone />
            &nbsp;&nbsp;Telefon - {index + 1}
          </h4>
          <h5>
            <span>{element}</span>
            <a href={`tel:${element}`}>
              <FcPhone className="fs-4" />
            </a>
          </h5>
        </div>
      ))}

      <hr />
      {data.contact.email.map((element, index) => (
        <div className={styles.wrapper} key={index}>
          <h4>
            <AiOutlineMail />
            &nbsp;&nbsp;Email - {index + 1}
          </h4>
          <h5>
            <span>{element}</span>
            <a href={`mailto:${element}`}>
              <AiOutlineMail
                className="fs-4"
                style={{ color: "var(--color-green1)" }}
              />
            </a>
          </h5>
        </div>
      ))}

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
          <CgWebsite />
          &nbsp;&nbsp;Website
        </h4>
        <h5>
          {data.website ? (
            <Link href={data.website}>
              <a
                className={styles.websiteLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {data.website}
              </a>
            </Link>
          ) : (
            "-"
          )}
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
          {data.orainceput} - {data.orasfarsit} &nbsp; &#10137; &nbsp;{" "}
          {data.ziinceput} - {data.zisfarsit}
        </h5>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          {data.urgente ? (
            <ImCheckboxChecked className="m-0 p-0 fs-6" />
          ) : (
            <CgUnavailable className="m-0 p-0 fs-6" />
          )}

          <h5 className="m-0 p-0 ms-2 d-flex justify-content-start align-items-center">
            Disponibil in afara zilelor / orelor de lucru.
          </h5>
        </div>
      </div>

      <hr />
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          {data.urgenteNoapte ? (
            <ImCheckboxChecked className="m-0 p-0 fs-6" />
          ) : (
            <CgUnavailable className="m-0 p-0 fs-6" />
          )}

          <h5 className="m-0 p-0 ms-2 d-flex justify-content-start align-items-center">
            Urgente pe timpul noptii
          </h5>
        </div>
      </div>

      {userReviews &&
        userReviews.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center gap-2 border"
          >
            <p className="m-0 p-0" style={{ fontSize: ".6rem" }}>
              Stars: {item.currentStar}
            </p>
            <p className="m-0 p-0" style={{ fontSize: ".6rem" }}>
              Sort: {item.sortRev}
            </p>
            <p className="m-0 p-0" style={{ fontSize: ".6rem" }}>
              Long: {item.longRev}
            </p>
            <p className="m-0 p-0" style={{ fontSize: ".6rem" }}>
              Data: {item.postTime}
            </p>
          </div>
        ))}
      {useSelector((state) => state.login.uid) ? (
        <RatingStars id={data.id} data={data} />
      ) : (
        <h6>Trebuie sa fii logat sa lasi un review.</h6>
      )}
    </div>
  );
};

export default Card;
