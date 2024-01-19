import React from "react";
import styles from "../../styles/tags/Icon.module.scss";

export const IconSearch = ({ size, color, sw }) => {
  const clr = color ? color : "var(--color-light)";
  const strokeW = sw ? sw : 20;
  const sz = size ? size : "1.5rem";
  return (
    <svg width={sz} viewBox="0 0 1000 1000" fill="none">
      <g transform-origin="center">
        <circle cx="659" cy="330" r="207" stroke={clr} stroke-width={strokeW} />
        <line
          x1="517.678"
          y1="503.678"
          x2="230.678"
          y2="852.678"
          stroke={clr}
          stroke-width={strokeW}
          stroke-linecap="round"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          dur="2.5s"
          values="1;0.8;1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export const IconDelete = ({ size, color, sw }) => {
  const clr = color ? color : "white";
  const strokeW = sw ? sw : 3;
  const sz = size ? size : "1.5rem";
  return (
    <svg width={sz} viewBox="0 0 100 100" fill="none">
      <g>
        <path
          id="contur"
          d="M95 15 h-55 l-25 35 l25 35 h55 v-70"
          stroke-linecap="round"
          stroke-width={strokeW}
          stroke={clr}
        />
        <path
          id="line1"
          d="M45 30 l40 40"
          stroke={clr}
          stroke-linecap="round"
          stroke-width={strokeW}
        ></path>
        <path
          id="line2"
          d="M45 70 l40 -40"
          stroke={clr}
          stroke-linecap="round"
          stroke-width={strokeW}
        ></path>
      </g>
      <style>
        {`
      #line1,#line2{
        animation: line1 2s linear infinite;
        stroke-dasharray: 57;
        stroke-dashoffset: 57;
      }
      @keyframes line1 {
        from{
          stroke-dasharray: 57;
          stroke-dashoffset: 57;
          opacity: 0;
        }
        to{
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `}
      </style>
    </svg>
  );
};

export const IconPercent = ({ size, color, sw }) => {
  const clr = color ? color : "white";
  const strokeW = sw ? sw : 4;
  const sz = size ? size : "1.5rem";
  const circleLen = 62;
  const percent = 63;
  const speed = 200;
  const duration = speed / circleLen;
  return (
    <svg width={sz} viewBox="-50 -50 100 100" fill="none">
      <defs>
        <linearGradient
          x1="-30%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(45)"
          id="lg"
        >
          <stop stopColor="white" offset="0%"></stop>
          <stop stopColor="darkblue" offset="50%"></stop>
        </linearGradient>
      </defs>
      <g>
        <circle
          id="circle"
          cx="0"
          cy="0"
          r="10"
          stroke="url(#lg)"
          stroke-width={strokeW}
        />
        <text>{percent}%</text>
      </g>

      <style>
        {`
        #circle{
          stroke-dasharray: ${circleLen};
          stroke-dashoffset: ${circleLen};
          animation: circle ${duration}s ease-out infinite;
          transform: rotate(-90deg);
        }
        @keyframes circle {
          50%,100%{
            stroke-dashoffset: ${circleLen - (circleLen * percent) / 100};

          }
        }
        text{
          stroke: white;
          font-size: .4rem;
          font-weight: 800;
          stroke-width: 0;
          fill: var(--color-3-error);
          text-anchor: middle;
          dominant-baseline: middle;
          animation: text ${duration}s ease-out infinite;
          transform: translateY(20px);
          opacity: 0;
        }
        @keyframes text{
          35%{
            transform: translateY(0);
            opacity: 1;
          }
          100%{
            transform: translateY(0);
            opacity: 1;
          }
          
        }
    `}
      </style>
    </svg>
  );
};

export const IconTest = ({ size, color, sw }) => {
  const clr = color ? color : "white";
  const strokeW = sw ? sw : 4;
  const sz = size ? size : "1.5rem";
  const circleLen = 62;
  const percent = 63;
  const speed = 200;
  const duration = speed / circleLen;
  return (
    <div className={styles.test}>
      <div className={styles.div}></div>
      <svg viewBox="0 0 100 100">
        <defs>
          <clipPath id={styles.clip}>
            <path id={styles.path} d="M0 100 l100 -100 h-90 l-5 30z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
// <img id={styles.image} src="icon48.png" alt="icons" />

// <svg viewBox="0 0 100 100">
//   <clipPath id="myClip">
//     <circle cx="40" cy="35" r="35" />
//   </clipPath>

//   <path
//     id="heart"
//     d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
//   />
//   <use clip-path="url(#myClip)" href="#heart" fill="red" />
// </svg>;
