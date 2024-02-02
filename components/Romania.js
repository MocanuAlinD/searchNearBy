import React from "react";

const Romania = () => {
  return (
    <svg id="romania" width="100%" height="100%" viewBox="0 0 954 674">
      <path
        id="exterior"
        pathLength="1"
        className="path"
        d="M858,813s-41.649-4.673-44-9-11.985-3.614-14-13c-4.41-8.134-3.629-7.394-6-14-4.727,1.791-10.462,4.18-12,4-1.578.479-7.533,1.71-9,1s-9-9-9-9l-6,2-21,1-14-15a20.861,20.861,0,0,1-4,1c-1.284.055-8.457-4.987-18-4-5.45-.11-9.8-0.415-21,4-7.876,7.308-27.961,10.473-44,12-4.851-.306-14,2-14,2l-14,6a81.988,81.988,0,0,0-15,16c-1.845,2.234-6,4-6,4l-6,7-7,6-1,4-7,7h-8l-15,7-9,1-8,2-13-10s-16.18,1.723-27-5c-11.852.96-30,2-30,2s-8.691-7.458-14-9.207c-19.635.612-2.76,9.758-46,10.207l-15-7-15-4s-9.195-7.026-13-7-8.81,2.179-14,1c-3.741-.971-8.033-6.3-15-8-4.694-1.538-13.375-.5-18,0s-16.531,6.324-22,6c-6-.763-14.775-0.683-22-8-0.864-1.678-1.567-11.858,0-15,1.007-2.484.87-3.218,3-5s12.589-.758,16-11c-2.224-5.937-15.828-9.985-33-25-1.592-3,.89-5.646-3-9a20.474,20.474,0,0,1-6-3,25.235,25.235,0,0,1-8-9c-4.317-11.211-4-17-4-17h8s9.887-13.379,10-17c-17.615-9.191-11.872-13.906-18-15-5.993.221-11.613,4.925-14,6-4.93,4.158-10.723,15.216-14,18a13.069,13.069,0,0,0-4,7h-4l-8-9v-5l-4-1-11-10-23-1-6-4-3-9-5-4-11-2-7-5v-7l21-4-5-6-7-4-5-6-1-3,6-1,4-7,4-8-3-8-21-9-9-10-4,2-12-8L59,549l5-5-4-10,3-24-9,3-4-13L38,487,23,475l-5-11-6-9,3-3,11,1h8l3-4,9,6h7l9-9,1-4,9-4,8,3,2-3,11,4,9-5h3l5-16,7-1,2-5-3-7,4-8,3-9,3-2,6,1,7-8h4v-5l-2-5,9-12,3-4-1-6,8-9,2-7-2-4,12-13,9-19,5-9,9-8,1-15,12-10,9-5,1-8,11-11,7,1,6-6,15,2,10-8h5v-6l18-14,1-5h11l5-4v-5l7-5,14,12,14,7,7-2,17,1,6,2,4,7,11-2,9,1,8,4,32-4,6-1,14,7,2,6,14,9,6,11,12,3,13-11,12-16,12-3,23-2,13-2,33-5,12-10,7-13,3-10,23-3,6-5,16-1,12,10,10,9,1,5,6,10,7,5,2,10,11,30,9,13,9,14,7,6,4,6v6l5,10,8,5,11,13,14,19,13,8,5,21,7,16,7,11v14l-1,10,4,12-5,8v9l-9,8,2,17-2,2,1,3-2,12,4,13,1,18,3,8,1,19-7,3,9,10,3,9,7,2,3,10,7,8,27,10h18l-3-5,6-10,11,8,34-25h14l24,12,2,14-3,7,6,6-2,4-1,26-3,7v13l-3-3-41,8-14,14-5-4,7-6,5-2,4-5-3-5-5,2-3-2V637l6-5-5-5-11,1-8,9v8l7,7,1,9-14,8-1,9h5l9-9,3,4-12,10-6,1-1,20,5-8,12-12-3,9-14,22-12,10v13l4,4,2,34-4,11-3,10,1,13Z"
        transform="translate(-12 -162)"
      >
        <animate
          id="anim1"
          attributeName="stroke-dashoffset"
          values="1;0"
          dur="2"
          fill="freeze"
        />
        <animate
          id="anim2"
          attributeName="fill"
          values="transparent;gray"
          dur="1"
          begin="anim1.end"
          fill="freeze"
        />
      </path>

      <style>
        {`
    #romania{
    }
    .path {
        visibility: visible;
        fill: transparent;
        stroke: green;
        stroke-width: 2;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        transition: all .35s linear;
    }
      `}
      </style>
    </svg>
  );
};

export default Romania;
