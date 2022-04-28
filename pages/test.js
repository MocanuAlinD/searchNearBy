import React, { useState, useEffect } from "react";

const Test = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  useEffect(() => {
    const dt = new Date().getSeconds()
    setState(dt)
    const inter = setInterval(clickme, 1000);
    return () => clearInterval(inter);
  }, []);

  // const startNumber = 9;
  const clickme = () => {
    // console.log(dt)
    const flipCard = document.querySelector(".flip-card");
    const tophalf = flipCard.querySelector(".top");
    const bottomhalf = flipCard.querySelector(".bottom");
    const topFlip = document.createElement("div");
    const bottomFlip = document.createElement("div");
    topFlip.classList.add(tophalf.classList[0]);
    topFlip.classList.add("top-flip");
    bottomFlip.classList.add(bottomhalf.classList[0]);
    bottomFlip.classList.add("bottom-flip");
    const startNumber = parseInt(tophalf.textContent)

    tophalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomhalf.textContent = startNumber;
    bottomFlip.textContent = startNumber - 1;

    topFlip.addEventListener("animationstart", (e) => {
      tophalf.textContent = startNumber - 1;
    });
    topFlip.addEventListener("animationend", (e) => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", (e) => {
      bottomhalf.textContent = startNumber - 1;
      bottomFlip.remove();
    });

    flipCard.append(topFlip, bottomFlip);
  };


  return (
    <div className="d-flex justify-content-center my-5 py-5">
      <div className="container m-0 p-0 d-flex flex-column p-2 align-items-center">
        <button onClick={clickme}>Click</button>

        <div className="segment p-3">
          <div className="flip-card" data-hours-tens>
            <div className="top">{state}</div>
            <div className="bottom">99</div>
            {/* <div className="top-flip">5</div> */}
            {/* <div className="bottom-flip">4</div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        div {
          color: whitesmoke;
        }
        .flip-card {
          display: inline-flex;
          flex-direction: column;
          font-size: 8rem;
          border-radius: 1rem;
          margin: 2rem;
          position: relative;
        }
        .flip-card::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -5%;
          width: 110%;
          height: 3rem;
          background: linear-gradient(to bottom, gray, white);
          box-shadow: -2px 2px 5px gray;
          z-index: 0;
          border: 2px solid;
          border-top: none;
          border-bottom: none;
          border-left-color: #000000;
          border-right-color: #000000;
        }
        .top,
        .bottom {
          background-color: tomato;
          height: 0.75em;
          line-height: 1;
          overflow: hidden;
          padding: 0.25em;
          z-index: 1;
          width: 25rem;
          /* border: 1px solid red; */
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .top {
          margin-bottom: 1px;
          /* display: flex; */
          /* justify-content: center; */
          /* align-items: flex-start; */
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          background: linear-gradient(to bottom, black, gray);
        }
        .bottom {
          background: linear-gradient(to top, black, gray);
          /* background: red; */
          display: flex;
          align-items: flex-end;
          /* justify-content: center; */
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
        .flip-card .top-flip {
          animation: animtop 250ms ease-in;
          background: linear-gradient(to top, gray, black);
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          display: flex;
          /* color: red; */
          height: 0.75em;
          justify-content: center;
          line-height: 1;
          overflow: hidden;
          padding: 0.25em;
          position: absolute;
          top: 0;
          transform-origin: bottom;
          width: 100%;
          z-index: 1;
        }
        .flip-card .bottom-flip {
          align-items: flex-end;
          animation: animbottom 250ms ease-out 250ms;
          background: linear-gradient(to top, black, gray);
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          bottom: 0;
          /* color: green; */
          display: flex;
          height: 0.75em;
          justify-content: center;
          line-height: 1;
          overflow: hidden;
          padding: 0.25em;
          position: absolute;
          transform-origin: top;
          transform: rotateX(90deg);
          width: 100%;
          z-index: 1;
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
