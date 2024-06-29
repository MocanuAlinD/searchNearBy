import React from "react";

const Neuronal = () => {
  return (
    <div>
      <svg
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
        }}
      >
        <line
          x1="100"
          y1="100"
          x2="700"
          y2="500"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="700"
          y1="100"
          x2="100"
          y2="500"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="300"
          x2="700"
          y2="300"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="400"
          y1="100"
          x2="400"
          y2="500"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="200"
          y1="100"
          x2="600"
          y2="500"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="600"
          y1="100"
          x2="200"
          y2="500"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="200"
          x2="700"
          y2="400"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="700"
          y1="200"
          x2="100"
          y2="400"
          stroke="black"
          strokeWidth="2"
        />

        <circle cx="400" cy="300" r="10" fill="black" />
        <circle cx="200" cy="200" r="10" fill="black" />
        <circle cx="600" cy="400" r="10" fill="black" />
        <circle cx="600" cy="200" r="10" fill="black" />
        <circle cx="200" cy="400" r="10" fill="black" />
        <circle cx="300" cy="300" r="10" fill="black" />
        <circle cx="500" cy="300" r="10" fill="black" />
        <circle cx="400" cy="200" r="10" fill="black" />
        <circle cx="400" cy="400" r="10" fill="black" />
        <circle cx="500" cy="400" r="10" fill="black" />
        <circle cx="300" cy="400" r="10" fill="black" />
        <circle cx="500" cy="200" r="10" fill="black" />
        <circle cx="300" cy="200" r="10" fill="black" />
      </svg>
    </div>
  );
};

export default Neuronal;
