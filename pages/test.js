import React, { useEffect } from "react";

const Test = () => {
  // useEffect(() => {
  //   const inter = setInterval(clickme, 1000);
  //   return () => clearInterval(inter);
  // }, []);

  useEffect(() => {
    const inter = setInterval(() => {
      const dt1 = new Date("2022/07/27 24:00:00").getTime();
      const prezent = new Date().getTime();
      const gap = dt1 - prezent;
      flipAllCards(gap);
    }, 250);
    return () => clearInterval(inter);
  }, []);

  function flipAllCards(time) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    const years = Math.floor(time / year);
    const days = Math.floor((time % year) / day);
    const hours = Math.floor((time % day) / hour);
    const minutes = Math.floor((time % hour) / minute);
    const seconds = Math.floor((time % minute) / second);

    flip(
      document.querySelector("[data-years-tens]"),
      Math.floor(years / 10)
    );
    flip(document.querySelector("[data-years-ones]"), years % 10);

    flip(
      document.querySelector("[data-days-tens]"),
      Math.floor(days / 10)
    );
    flip(document.querySelector("[data-days-ones]"), days % 10);

    flip(
      document.querySelector("[data-hours-tens]"),
      Math.floor(hours / 10)
    );
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
      document.querySelector("[data-minutes-tens]"),
      Math.floor(minutes / 10)
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
      document.querySelector("[data-seconds-tens]"),
      Math.floor(seconds / 10)
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  }

  function flip(flipCard, newNumber) {
    const tophalf = flipCard.querySelector(".top");
    const startNumber = parseInt(tophalf.textContent);
    if (newNumber === startNumber) return;
    const bottomhalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    topFlip.classList.add(tophalf.classList[0]);
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add(bottomhalf.classList[0]);
    bottomFlip.classList.add("bottom-flip");

    tophalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomhalf.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", (e) => {
      tophalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomhalf.textContent = newNumber;
      bottomFlip.remove();
    });

    flipCard.append(topFlip, bottomFlip);
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
       <div className="segment">
         <h4 className='text-center text-white'>ani</h4>
        <div className="flip-card" data-years-tens>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
        <div className="flip-card" data-years-ones>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
      </div>
      <div className="segment">
        <h4 className='text-center text-white'>zile</h4>
        <div className="flip-card" data-days-tens>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
        <div className="flip-card" data-days-ones>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
      </div>
      <div className="segment">
        <h4 className='text-center text-white'>ore</h4>
        <div className="flip-card" data-hours-tens>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
        <div className="flip-card" data-hours-ones>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
      </div>

      <div className="segment">
        <h4 className='text-center text-white'>min</h4>
        <div className="flip-card" data-minutes-tens>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
        <div className="flip-card" data-minutes-ones>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
      </div>

      <div className="segment">
        <h4 className='text-center text-white'>sec</h4>
        <div className="flip-card" data-seconds-tens>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
        <div className="flip-card" data-seconds-ones>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
        </div>
      </div>

      <style jsx>{`
      h4{
        font-size: 1rem;
        font-weight: 200;
      }
      .segment{
        margin:0 .5rem;
        height: fit-content;
      }
        .flip-card {
          color: floralwhite;
          display: inline-flex;
          flex-direction: column;
          font-size: 1.5rem;
          margin: 0 .2rem;
          position: relative;
        }
        .middle {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -10%;
          width: 120%;
          height: 25%;
          background: linear-gradient(to bottom, slategray, #555, slategray);
          z-index: 0;
          border: 1px solid;
          border-top: none;
          border-bottom: none;
          border-left-color: #000000;
          border-right-color: #000000;
          /* border-left-color: #ffffff88; */
          /* border-right-color: #ffffff88; */
        }
        .top,
        .bottom,
        .top-flip,
        .bottom-flip {
          line-height: 1;
          overflow: hidden;
          height: 1rem;
          padding: .75rem 0;
          width: 1.5rem;
          display: flex;
          justify-content: center;
          z-index: 1;
        }
        .top {
          background: linear-gradient(to bottom, #222, gray);
          border-top-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
          margin-bottom: 1px;
        }
        .bottom {
          align-items: flex-end;
          background: linear-gradient(to top, #222, gray);
          border-bottom-left-radius: 0.4rem;
          border-bottom-right-radius: 0.4rem;
        }
        .flip-card .top-flip {
          animation: animtop 250ms ease-in;
          background: linear-gradient(to top, gray, #222);
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          position: absolute;
          top: 0;
          transform-origin: bottom;
          width: 100%;
        }
        .flip-card .bottom-flip {
          align-items: flex-end;
          animation: animbottom 250ms ease-out 250ms;
          background: linear-gradient(to top, #222, gray);
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          bottom: 0;
          position: absolute;
          transform-origin: top;
          transform: rotateX(90deg);
          width: 100%;
        }
        @keyframes animtop {
          from {
            transform: rotateX(0deg);
          }
          to {
            transform: rotateX(90deg);
          }
        }
        @keyframes animbottom {
          from {
            transform: rotateX(90deg);
          }
          to {
            transform: rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Test;
