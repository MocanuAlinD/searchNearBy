import React from "react";
import styles from "../../styles/tags/Icon.module.scss";

const defaultSize = "10rem";

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

export const IconPercent = ({ w, color, sw, speed, nobg, percent }) => {
  // TODO condition to percent if > 100 to be = to 100

  const fill = color ? color : "var(--color-green)";
  const strokeW = sw ? sw : 6;
  const size = w ? w : defaultSize;
  const radius = 20;
  const circleLen = 2 * 3.14 * radius;
  const perc = percent ? (percent > 100 ? 100 : percent) : 62;
  const spd = speed ? speed : 500;
  const duration = spd / circleLen;
  return (
    <svg id="percent" viewBox="0 0 100 50" width={size} fill="none">
      <defs>
        <linearGradient
          gradientUnits="objectBoundingBox"
          gradientTransform="rotate(-90) translate(-0.5)"
          id="lg"
        >
          <stop stopColor="var(--color-green)" offset="0%"></stop>
          <stop stopColor="var(--color-yellow)" offset="0%"></stop>
        </linearGradient>
      </defs>
      <g>
        <circle
          id="circle"
          cx="-25"
          cy="50"
          r={radius}
          stroke="url(#lg)"
          strokeWidth={strokeW}
        />
        <text x="50" y="25">
          {perc}%
        </text>
      </g>

      <style>
        {`
        #percent{
          border-radius: 0.25rem;
          background: ${
            nobg
              ? "none"
              : "linear-gradient(to bottom right, var(--color-1light) 0%, var(--color-1-dark) 60%), var(--color-1-light) 100%"
          };
          border: ${nobg ? "none" : "1px solid rgba(255, 255, 255, 0.1)"};
        }
        #percent circle{
          stroke-dasharray: ${circleLen};
          stroke-dashoffset: ${circleLen};
          animation: circle ${duration}s ease-out infinite;
          transform: rotate(-90deg);
        }
        @keyframes circle {
          50%,100%{
            stroke-dashoffset: ${circleLen - (circleLen * perc) / 100};

          }
        }
        #percent text{
          font-size: 0.7rem;
          font-weight: 400;
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
  const size = w ? w : defaultSize;
  const x1 = ((min ? (min > 5000 ? 5000 : min) : min) * 100) / 5000;
  const x2 = ((max ? (max > 5000 ? 5000 : max) : max) * 100) / 5000;
  const str = "var(--color-2-dark)";
  return (
    <svg
      className={styles.minmax}
      viewBox="0 0 100 50"
      width={size}
      id="minmax"
    >
      <defs>
        <linearGradient id="pathgrad" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-green)" offset="0%"></stop>
          <stop stopColor="var(--color-yellow)" offset="50%"></stop>
          <stop stopColor="var(--color-3-error)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <line x1="50" y1="30" x2="50" y2="25" stroke={str} />
        <text x="3" y="20" dominantBaseline="middle" textAnchor="start">
          0
        </text>
        <text x="50" y="20" dominantBaseline="middle" textAnchor="middle">
          2500
        </text>
        <path d="M0 30 h100 v4 h-100z" fill={str} />

        <text x="97" y="20" dominantBaseline="middle" textAnchor="end">
          5000
        </text>
        <text
          x="50"
          y="3"
          dominantBaseline="hanging"
          textAnchor="middle"
          className={styles.title}
        >
          {text ? text : "Adauga text aici"}
        </text>
      </g>
      <g>
        <text
          x="3"
          y="40"
          dominantBaseline="hanging"
          textAnchor="start"
          className={styles.minmax}
        >
          Minim: {min}
        </text>
        <text
          x="97"
          y="40"
          dominantBaseline="hanging"
          textAnchor="end"
          className={styles.minmax}
        >
          Maxim: {max}
        </text>
      </g>
      <polygon
        points={`${x1} 30, ${x2} 30, ${x2} 34, ${x1} 34`}
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
  const size = w ? w : defaultSize;
  const fillActive = "url(#dayGradActive)";
  const fillInactive = "url(#dayGradInactive)";
  const final = dz.slice(days[zi_start], days[zi_end] + 1);
  return (
    <svg className={styles.days} viewBox="0 0 100 50" width={size} id="days">
      <defs>
        <rect
          id="rectzero"
          x="2.5"
          y="0"
          width="9.45388"
          height="38.0067"
          rx="2"
          transform="matrix(0.817044 0.576576 -0.427104 0.904202 16.3886 4.9917)"
          stroke="none"
          strokeWidth="0.2"
        />
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
        transform="translate(12)"
        fill={final.includes(1) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(24)"
        fill={final.includes(2) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(36)"
        fill={final.includes(3) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(48)"
        fill={final.includes(4) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(60)"
        fill={final.includes(5) ? fillActive : fillInactive}
      />
      <use
        href="#rectzero"
        transform="translate(72)"
        fill={final.includes(6) ? fillActive : fillInactive}
      />
      <g id="days">
        <text x="81" y="41" transform="rotate(-64 81 41)">
          Duminica
        </text>
        <text x="69" y="41" transform="rotate(-64 69 41)">
          Sambata
        </text>
        <text x="57.5" y="42" transform="rotate(-64 57.5 42)">
          Vineri
        </text>
        <text x="45.5" y="41" transform="rotate(-64 45.5 41)">
          Joi
        </text>
        <text x="33" y="41" transform="rotate(-64 33 41)">
          Miercuri
        </text>
        <text x="22" y="41" transform="rotate(-64 22 41)">
          Marti
        </text>
        <text x="10" y="41" transform="rotate(-64 10 41)">
          Luni
        </text>
      </g>
    </svg>
  );
};

export const IconOrar = ({ w, inceput, sfarsit }) => {
  const a = +inceput.split(":").join("");
  const b = +sfarsit.split(":").join("");
  const start = +((a * 212) / 2400).toFixed(2);
  const end = +((b * 212) / 2400).toFixed(2);
  const size = w ? w : "10rem";

  const c = ((a * 212) / 2400).toFixed(2);
  const d = ((b * 212) / 2400).toFixed(2);
  return (
    <svg className={styles.orar} viewBox="0 0 100 50" width={size} id="days">
      <defs>
        <linearGradient id="gradhours">
          <stop offset="0%" stopColor="red"></stop>
          <stop offset="100%" stopColor="blue"></stop>
        </linearGradient>
        <path
          id="arrow1"
          d="M21.8 44.5 c-0.054,0.097,-0.019,0.218,0.078,0.272l1.573,0.874c0.097,0.054,0.219,0.019,0.272,-0.078c0.054,-0.096,0.019,-0.218,-0.078,-0.272l-1.398,-0.777l0.777,-1.398c0.053,-0.097,0.019,-0.219,-0.078,-0.272c-0.096,-0.054,-0.218,-0.019,-0.272,0.078l-0.874,1.573z m28.12,-8.095l-28,8l0.11,0.384l28,-8l-0.11,-0.384z"
          fill="var(--color-yellow)"
          stroke="var(--color-yellow)"
          strokeWidth="0.2"
        />
      </defs>
      <g>
        <path
          d="M81,45.9532 c1.583,-4.878,1.99,-10.062,1.186,-15.128c-0.804,-5.065,-2.796,-9.868,-5.812,-14.017c-3.016,-4.148,-6.971,-7.524,-11.541,-9.851c-4.571,-2.327,-9.627,-3.539,-14.756,-3.537c-5.129,0.001,-10.184,1.217,-14.754,3.547c-4.569,2.33,-8.521,5.708,-11.535,9.858c-3.013,4.151,-5.001,8.955,-5.802,14.021c-0.801,5.066,-0.391,10.249,1.195,15.127l3.091,-1.006c-1.428,-4.389,-1.796,-9.054,-1.076,-13.614c0.721,-4.559,2.51,-8.883,5.222,-12.618c2.712,-3.736,6.27,-6.776,10.382,-8.873c4.112,-2.097,8.662,-3.191,13.278,-3.192c4.616,-0.002,9.167,1.089,13.28,3.184c4.114,2.094,7.673,5.132,10.388,8.865c2.714,3.734,4.506,8.057,5.23,12.616c0.723,4.559,0.358,9.224,-1.067,13.615l3.091,1.003z"
          fill="gray"
        />
        <circle
          className={styles.testpath}
          cx="50"
          cy="36.5"
          fill="#ff000000"
          r="31.3"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - (end - start) / 360 - 0.01}
          transform={`rotate(${162 + start} 50 36.5)`}
          stroke="var(--color-green)"
          strokeWidth="5"
        />
      </g>
      <text x="12" y="47" fill="white">
        0
      </text>
      <text x="84" y="47" fill="white">
        24
      </text>
      <text x="50" y="47" fill="white" textAnchor="middle" className={styles.entireTime}>
        {inceput}-{sfarsit}
      </text>

      <g transform="scale(0.94) translate(3 3)">
        <use href="#arrow1" transform={`rotate(${start} 50 36.5)`} />
        <use href="#arrow1" transform={`rotate(${end} 50 36.5)`} />
      </g>

      <circle cx="50" cy="37" fill="var(--color-yellow)" r="2" />
    </svg>
  );
};

// d="M21.8 44.5 c-0.054,0.097,-0.019,0.218,0.078,0.272l1.573,0.874c0.097,0.054,0.219,0.019,0.272,-0.078c0.054,-0.096,0.019,-0.218,-0.078,-0.272l-1.398,-0.777l0.777,-1.398c0.053,-0.097,0.019,-0.219,-0.078,-0.272c-0.096,-0.054,-0.218,-0.019,-0.272,0.078l-0.874,1.573z m28.12,-8.095l-28,8l0.11,0.384l28,-8l-0.11,-0.384z"

// <path
//   id="arrow1"
//   d="M52.5,24.5 c-0.405,-1.416,-1.881,-2.236,-3.297,-1.831 c-1.416,0.404,-2.236,1.88,-1.831,3.296c0.404,1.416,1.88,2.236,3.297,1.832c1.416,-0.405,2.236,-1.881,1.831,-3.297zm-31.001,8.49c-0.134,0.241,-0.047,0.546,0.194,0.68l3.934,2.185c0.241,0.134,0.546,0.047,0.68,-0.194c0.134,-0.242,0.047,-0.546,-0.195,-0.68l-3.496,-1.943l1.942,-3.496c0.134,-0.242,0.048,-0.546,-0.194,-0.68c-0.241,-0.134,-0.546,-0.047,-0.68,0.194l-2.185,3.934zm28.3,-8.238l-28,8l0.274,0.962l28,-8l-0.274,-0.962z"
//   // fill="#D20000"
//   stroke="coral"
//   strokeWidth="0.2"
// />;
