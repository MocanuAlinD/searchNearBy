import React, { useState } from "react";

const LeftMenu = () => {
  const [state, setState] = useState(false);
  const changeme = () => {
    setState((prev) => !prev);
    console.log(state);
  };
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        // width="100"
        className={`svg ${state ? " active" : ""}`}
        onClick={changeme}
      >
        <path
          d="M10,20 h80 a2,1,60,0,1,50,90 a1,.3,8,0,1,-130,-30 l80,-60"
          strokeDashoffset="380"
          strokeDasharray="460"
          fill="none"
          stroke="whitesmoke"
          strokeWidth="8"
          strokeLinecap="round"
          className="path1"
        ></path>
        <path
          d="M30,50 h40"
          stroke="whitesmoke"
          strokeWidth="6"
          strokeLinecap="round"
          className="path2"
        ></path>
        <path
          d="M10,80 h80 a3,1,0 0 0 100 -50 q-50 0 -40 80 q0 50 -60 -30 l-80 -60"
          fill="none"
          strokeDashoffset="500"
          strokeDasharray="580"
          stroke="whitesmoke"
          strokeWidth="4"
          strokeLinecap="round"
          className="path3"
        ></path>
      </svg>
      <style jsx>
        {`
          .svg {
            width: 2rem;
            cursor: pointer;
            overflow: visible;
          }
          .path1,
          .path2,
          .path3 {
            transition: all 0.35s ease-out;
          }
          .path2 {
            transition-delay: 0.7s;
          }
          .path3 {
            transition-delay: 0.35s;
          }

          .svg:hover .path1 {
            stroke-dasharray: 460;
            stroke-dashoffset: -360;
            animation: anim1 0.35s ease-out forwards;
          }
          .svg:hover .path2 {
            // transform: rotateZ(90deg);
            // transform-origin: center;
            // d: path("M10,50 h80");
            animation: anim2 0.35s ease-out forwards 0.3s;
          }
          .svg:hover .path3 {
            stroke-dasharray: 580;
            stroke-dashoffset: -480;
            animation: anim3 0.35s ease-out forwards 0.3s;
          }
          .svg.active .path1 {
            stroke-dasharray: 460;
            stroke-dashoffset: -360;
            animation: none;
            stroke: tomato;
            stroke-width: 8;
          }
          .svg.active .path2 {
            opacity: 0;
            animation: none;
          }
          .svg.active .path3 {
            stroke-dasharray: 580;
            stroke-dashoffset: -480;
            animation: none;
            stroke: tomato;
            // opacity: 1;
            stroke-width: 8;
          }
          @keyframes anim1 {
            0% {
              stroke: white;
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            80% {
              stroke-width: 2;
            }
            100% {
              stroke: tomato;
              opacity: 1;
              stroke-width: 8;
            }
          }
          @keyframes anim2 {
            0% {
              d: path("M30,50 h40");
            }
            50% {
              d: path("M30,50 h30");
            }
            80% {
              d: path("M30,50 h20");
            }
            100% {
              d: path("M30,50 h0");
              opacity: 0;
            }
          }
          @keyframes anim3 {
            0% {
              stroke: white;
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            80% {
              stroke-width: 2;
            }
            100% {
              stroke: tomato;
              opacity: 1;
              stroke-width: 8;
            }
          }
        `}
      </style>
    </>
  );
};

export default LeftMenu;
