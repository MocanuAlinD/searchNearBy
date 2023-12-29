import React from "react";
import {
  Container,
  TextAreaCustom,
} from "../components/singleTags/elemetsCustom";
import styles from "../styles/RatingStars.module.scss";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  setReview,
  setCurrentStar,
  setInitialStateReview,
  setSortReview,
  setLongReview,
  setNumeReview,
} from "../features/review/reviewSlice";
import { getAuth } from "firebase/auth";

const RatingStars = ({ id }) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const eachStar = useSelector((state) => state.review.stars);
  const currentStar = useSelector((state) => state.review.currentStar);
  const sortRev = useSelector((state) => state.review.sortReview);
  const longRev = useSelector((state) => state.review.longReview);
  const numeReview = useSelector((state) => state.review.numeReview);
  const userId = auth.currentUser?.uid;

  const changeSlider = (e) => {
    dispatch(setCurrentStar(e));
    dispatch(setReview(e));
  };

  const getPercent = (x) => {
    const total = Object.values(eachStar).reduce((total, num) => {
      return total + num;
    });
    const added = (eachStar[x] * 100) / total;
    return added > 0 ? added : 0;
  };

  const postData = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const postTime = `${day > 10 ? day : "0" + day}.${
      month > 10 ? month : "0" + month
    }.${year} - ${hour > 10 ? hour : "0" + hour}.${
      minutes > 10 ? minutes : "0" + minutes
    }`;
    const alldata = {
      currentStar,
      postTime,
      sortRev,
      longRev,
      userId,
      id,
      numeReview,
    };
    const sendData = await fetch("/api/postReview", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ data: alldata }),
    });
    const { msg } = await sendData.json();
    console.log("res: ", msg);
  };

  return (
    <Container className={styles.container}>
      <div className="d-flex justify-content-center gap-3 w-100">
        {[...Array(5)].map((_, i) => {
          const newI = i + 1;
          return (
            <div key={newI} className="d-flex flex-column gap-1">
              <h4
                className="text-center m-0 p-0 fs-6"
                style={{
                  color: `${
                    newI <= currentStar
                      ? "var(--color-yellow)"
                      : "var(--color-light)"
                  }`,
                }}
              >
                {newI}
              </h4>
              <input
                type="radio"
                checked={newI <= currentStar}
                value={newI}
                className={styles.input}
                readOnly
              />

              <FaStar
                onClick={() => changeSlider(newI)}
                color={
                  newI <= currentStar
                    ? "var(--color-yellow)"
                    : "var(--color-light)"
                }
                size="20"
                className={styles.star}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.ratingScore}>
        {[...Array(5)]
          .map((_, index) => {
            return (
              <div key={index}>
                <h4>{index + 1}</h4>
                <FaStar
                  style={{
                    color: "var(--color-yellow)",
                    marginRight: ".5rem",
                  }}
                  size="25"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  id="slider"
                  value={getPercent(index + 1)}
                  readOnly
                  style={{
                    background: `linear-gradient(to right, var(--color-blue-dark) ${getPercent(
                      index + 1
                    )}%, var(--color-light) ${getPercent(index + 1)}%)`,
                  }}
                />
                <h4>{eachStar[index + 1]} recenzii</h4>
              </div>
            );
          })
          .reverse()}
      </div>
      <div className="d-flex flex-column w-100 gap-3">
        <TextAreaCustom
          placeholder="Nume prenume"
          rows="1"
          value={useSelector((state) => state.review.numeReview)}
          onChange={(e) => dispatch(setNumeReview(e.target.value))}
        ></TextAreaCustom>
        <TextAreaCustom
          placeholder="sort review"
          rows="1"
          value={useSelector((state) => state.review.sortReview)}
          onChange={(e) => dispatch(setSortReview(e.target.value))}
        ></TextAreaCustom>
        <TextAreaCustom
          placeholder="long review"
          rows="10"
          value={useSelector((state) => state.review.longReview)}
          onChange={(e) => dispatch(setLongReview(e.target.value))}
        ></TextAreaCustom>
      </div>
      <div className="d-flex gap-2 m-0 p-0 w-100 justify-content-center align-items-center">
        <button onClick={() => dispatch(setInitialStateReview())}>reset</button>
        <button onClick={postData}>Posteaza</button>
      </div>
      <p>{useSelector((state) => state.review.sortReview)}</p>
      <p>{useSelector((state) => state.review.longReview)}</p>
      <p>{useSelector((state) => state.review.numeReview)}</p>
    </Container>
  );
};

export default RatingStars;
