import React from "react";

const LeftMenu = ({showMenu,setShowMenu}) => {
  return (
    <div className='m-0 p-0 mx-3'>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg ${showMenu ? " active" : ""}`}
        onClick={() => setShowMenu(prev =>!prev)}
      >
        <path
          d="M90,20 h-80 q-40 -10 0 -40 q40 -30 90 0 q20 20 -10 40 l-80 60"
          strokeDashoffset="306"
          strokeDasharray="386"
          fill="none"
          stroke="whitesmoke"
          strokeWidth="2"
          strokeLinecap="round"
          className="path1"
        ></path>
       
        <path
          d="M90,80 h-80 q-40 10 0 40 q40 30 90 0 q20 -20 -10 -40 l-80 -60"
          strokeDashoffset="306"
          strokeDasharray="386"
          fill="none"
          stroke="whitesmoke"
          strokeWidth="2"
          strokeLinecap="round"
          className="path3"
        ></path>
         <path
          d="M30,50 h40"
          stroke="whitesmoke"
          strokeWidth="6"
          strokeLinecap="round"
          className="path2"
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
            transition: stroke-dasharray .35s ease-out .35s,stroke-dashoffset .35s ease-out .35s, stroke .35s ease-out .35s, transform .35s ease-out, stroke-width .35s ease-in .5s;
          }
          .path1, .path3{
            transition-delay: .35s;
          }
          .path2{
            transform: translateX(0%);
            opacity: 1;
            transition: all .35s ease-out;
            transition-delay: .6s;
          }
          
          .svg.active .path1,
          .svg.active .path3 {
            stroke-dasharray: 386;
            stroke-dashoffset: -286;
            stroke: var(--color-light);
            stroke-width: 8;
          }
          .svg.active .path2 {
            transform: translateX(-100%);
            opacity: 0;
            transition-delay: 0s;
          }
          @media screen and (min-width: 768px){
            .svg:hover .path1,
            .svg:hover .path3 {
              stroke-dasharray: 386;
              stroke-dashoffset: -286;
              stroke-width: 8;
            }
            .svg:hover .path2 {
              transform: translateX(-100%);
              stroke: transparent;
              transition-delay: 0s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LeftMenu;
