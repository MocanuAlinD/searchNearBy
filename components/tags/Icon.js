import React from "react";

export const IconSearch = ({ size, color, stroke }) => {
  return (
    <div
      style={{
        padding: "0",
        margin: "0 .5rem",
        width: size ? size : "1.35rem",
        height: size ? size : "1.35rem",
        display: "flex",
      }}
    >
      <svg viewBox="0 0 1000 1000" fill="none">
        <g transform-origin="center">
          <circle
            cx="659"
            cy="330"
            r="207"
            stroke={color ? color : "var(--color-light)"}
            stroke-width={stroke ? stroke : "30"}
          />
          <line
            x1="517.678"
            y1="503.678"
            x2="230.678"
            y2="852.678"
            stroke={color ? color : "var(--color-light)"}
            stroke-width={stroke ? stroke : "30"}
            stroke-linecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            dur="1.5s"
            values="1;0.8;1"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
};

export const IconDelete = ({ size, color, stroke }) => {
  return (
    <div
      style={{
        padding: "0",
        margin: "0 .5rem",
        width: size ? size : "1.35rem",
        height: size ? size : "1.35rem",
        display: "flex",
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
        <g>
          <path
            id="contur"
            d="M95 15 h-55 l-25 35 l25 35 h55 v-70"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            id="line1"
            d="M45 30 l40 40"
            stroke="white"
            stroke-linecap="round"
            stroke-width="2"
          ></path>
          <path
            id="line2"
            d="M45 70 l40 -40"
            stroke="white"
            stroke-linecap="round"
            stroke-width="2"
          ></path>
        </g>
        <style>
          {`
      #contur{
        stroke: white;
        stroke-width: 2;
      }
      #line1{
        animation: line1 1s linear infinite;
        stroke-dasharray: 57;
        stroke-dashoffset: 57;
      }
      #line2{
        animation: line2 1s linear infinite;
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
      @keyframes line2 {
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
    </div>
  );
};
