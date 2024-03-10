import React from "react";

const IconSvg = ({ icon, size, bgsize }) => {
  return (
    <span
      style={{
        background: `url('icons/${icon ? icon : "contact.svg"}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: bgsize ? bgsize : "100%",
        backgroundColor: "var(--glass)",
        border: "var(--card-border)",
        borderTopRightRadius: "var(--border-radius)",
        borderBottomRightRadius: "var(--border-radius)",
        width: `${size ? size : "3"}rem`,
        height: `${size ? size : "3"}rem`,
      }}
    ></span>
  );
};

export default IconSvg;
