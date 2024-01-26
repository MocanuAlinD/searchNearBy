import React from "react";
import styles from "../../styles/tags/Icon.module.scss";

export const IconSearch = ({ size, color, sw }) => {
  const clr = color ? color : "var(--color-light)";
  const strokeW = sw ? sw : 20;
  const sz = size ? size : "1.5rem";
  return (
    <svg width={sz} viewBox="0 0 1000 1000" fill="none">
      <g transformOrigin="center">
        <circle cx="659" cy="330" r="207" stroke={clr} strokeWidth={strokeW} />
        <line
          x1="517.678"
          y1="503.678"
          x2="230.678"
          y2="852.678"
          stroke={clr}
          strokeWidth={strokeW}
          strokeLinecap="round"
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
          strokeLinecap="round"
          strokeWidth={strokeW}
          stroke={clr}
        />
        <path
          id="line1"
          d="M45 30 l40 40"
          stroke={clr}
          strokeLinecap="round"
          strokeWidth={strokeW}
        ></path>
        <path
          id="line2"
          d="M45 70 l40 -40"
          stroke={clr}
          strokeLinecap="round"
          strokeWidth={strokeW}
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

export const IconPercent = ({ size, color, wh, speed }) => {
  const fill = color ? color : "var(--color-3-ok)";
  const strokeW = wh ? wh : 15;
  const sz = size ? size : "1.5rem";
  const radius = 39;
  const circleLen = 2 * 3.14 * radius + 1;
  const percent = 69;
  const spd = speed ? speed : 500;
  const duration = spd / circleLen;
  return (
    <svg width={sz} viewBox="-50 -50 100 100" fill="none">
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90)"
          id="lg"
        >
          <stop stopColor="orange" offset="0%"></stop>
          <stop stopColor="green" offset="0%"></stop>
        </linearGradient>
      </defs>
      <g>
        <circle
          id="circle"
          cx="0"
          cy="0"
          r={radius}
          stroke="url(#lg)"
          strokeWidth={strokeW}
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
          font-size: 1.4rem;
          font-weight: 800;
          fill: ${fill};
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

export const IconMinMax = ({ w, min, max, text }) => {
  const size = w ? w : "7rem";
  const x1 = ((min ? (min > 5000 ? 5000 : min) : min) * 100) / 5000;
  const x2 = ((max ? (max > 5000 ? 5000 : max) : max) * 100) / 5000;
  const str = "var(--color-2-light)";
  // #093028, #237A57); #B3F6D8
  // #019267, #151D3B); #568203
  return (
    <svg
      className={styles.minmax}
      viewBox="0 -20 100 50"
      width={size}
      id="minmax"
    >
      <defs>
        <linearGradient id="pathgrad" gradientUnits="userSpaceOnUse">
          <stop stopColor="green" offset="0%"></stop>
          <stop stopColor="orange" offset="50%"></stop>
          <stop stopColor="red" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <line x1="50" y1="10" x2="50" y2="8" stroke={str} />
        <text x="50" y="5" dominantBaseline="middle" textAnchor="middle">
          2500
        </text>
        <path d="M0 10 h100 v4 h-100z" fill={str} />
        <text x="0" y="5" dominantBaseline="middle" textAnchor="start">
          0
        </text>
        <text x="100" y="5" dominantBaseline="middle" textAnchor="end">
          5000
        </text>
        <text
          x="50"
          y="-20"
          dominantBaseline="hanging"
          textAnchor="middle"
          className={styles.title}
        >
          {text}
        </text>
      </g>
      <g>
        <text
          x="0"
          y="25"
          dominantBaseline="hanging"
          textAnchor="start"
          className={styles.minmax}
        >
          Minim: {min}
        </text>
        <text
          x="100"
          y="25"
          dominantBaseline="hanging"
          textAnchor="end"
          className={styles.minmax}
        >
          Maxim: {max}
        </text>
      </g>
      <polygon
        points={`${x1} 10, ${x2} 10, ${x2} 14, ${x1} 14`}
        fill="url(#pathgrad)"
        // fill="#00afb9"
      />
    </svg>
  );
};

export const IconDays = ({ w, zi_start, zi_end }) => {
  const days = {
    Luni: 0,
    Marti: 1,
    Miercuri: 2,
    Joi: 3,
    Vineri: 4,
    Sambata: 5,
    Duminica: 6,
  };
  const dz = Object.values(days);
  const size = w ? w : "7rem";
  const rotate = "35";
  const fillActive = "url(#dayGradActive)";
  const fillInactive = "url(#dayGradInactive)";
  const final = dz.slice(days[zi_start], days[zi_end] + 1);
  return (
    <svg className={styles.days} viewBox="0 0 100 46" width={size} id="days">
      <defs>
        <rect id="rectzero" x="2" y="1" width="12" height="44" rx="2" />
        <linearGradient id="dayGradInactive" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="var(--color-3-error)"></stop>
          <stop offset="100%" stopColor="var(--color-1-light)"></stop>
        </linearGradient>
        <radialGradient
          id="dayGradActive"
          gradientUnits="objectBoundingBox"
          cx="5%"
          cy="0"
          r="1"
        >
          <stop offset="0%" stopColor="var(--color-light)"></stop>
          <stop offset="40%" stopColor="var(--color-3-ok)"></stop>
        </radialGradient>
      </defs>
      <use
        href="#rectzero"
        fill={final.includes(0) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(14)"
        fill={final.includes(1) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(28)"
        fill={final.includes(2) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(42)"
        fill={final.includes(3) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(56)"
        fill={final.includes(4) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(70)"
        fill={final.includes(5) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(84)"
        fill={final.includes(6) ? fillActive : fillInactive}
      />
      <text
        x="13"
        y="44"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Luni
      </text>
      <text
        x="13"
        y="58"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Marti
      </text>
      <text
        x="13"
        y="72"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Miercuri
      </text>
      <text
        x="13"
        y="86"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Joi
      </text>
      <text
        x="13"
        y="100"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Vineri
      </text>
      <text
        x="13"
        y="114"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Sambata
      </text>
      <text
        x="13"
        y="128"
        textAnchor="start"
        transform="rotate(-90 10 46)"
        rotate={rotate}
        dominantBaseline="middle"
      >
        Duminica
      </text>
    </svg>
  );
};

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
