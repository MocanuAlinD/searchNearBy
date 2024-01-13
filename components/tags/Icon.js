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
