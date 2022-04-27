import React, { useState, useEffect } from "react";
import styles from "../styles/timer.module.scss";

const Timer = ({ loading, setLoading }) => {
  const [clock, setClock] = useState({
    years: "",
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const timer = () => {
    const dt1 = new Date("2022/07/27 24:00:00").getTime();
    const prezent = new Date().getTime();
    const gap = dt1 - prezent;

    if (gap <= 0) {
      setLoading(false);
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const years = Math.floor(gap / year);
    const days = Math.floor((gap % year) / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    setClock({
      years,
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    if (loading) {
      const inter = setInterval(timer, 1000);
    }
    return () => clearInterval(inter);
  }, [loading]);

  return (
    <>
      {loading && (
        <div className={styles.timer + " d-flex justify-content-between mt-2"}>
          <div>
            {clock.years ? (
              <h4>
                {clock.years < 10 && clock.years >= 0
                  ? "" + clock.years
                  : clock.years}
              </h4>
            ) : (
              <h4>0</h4>
            )}
            <h6>{clock.years == 1 ? "an" : "ani"}</h6>
          </div>

          <div>
            {clock.days ? (
              <h4>
                {clock.days < 10 && clock.days > 0
                  ? "0" + clock.days
                  : clock.days}
              </h4>
            ) : (
              <h4>0</h4>
            )}
            <h6>{clock.days == 1 ? "zi" : "zile"}</h6>
          </div>

          <div>
            {clock.hours ? (
              <h4>
                {clock.hours < 10 && clock.hours > 0
                  ? "0" + clock.hours
                  : clock.hours}
              </h4>
            ) : (
              <h4>0</h4>
            )}
            <h6>{clock.hours == 1 ? "ora" : "ore"}</h6>
          </div>

          <div>
            {clock.minutes ? (
              <h4>
                {clock.minutes < 10 && clock.minutes > 0
                  ? "0" + clock.minutes
                  : clock.minutes}
              </h4>
            ) : (
              <h4>0</h4>
            )}
            <h6>min</h6>
          </div>

          <div>
            {clock.seconds ? (
              <h4 className={styles.secondsh4}>
                {clock.seconds < 10 && clock.seconds > 0
                  ? "" + clock.seconds
                  : clock.seconds}
              </h4>
            ) : (
              <h4 className={styles.secondsh4}>0</h4>
            )}
            <h6>sec</h6>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
