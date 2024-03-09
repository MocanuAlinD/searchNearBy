import React from "react";

const IconSvg = ({ icon, size }) => {
  return (
    <span
      style={{
        background: `url('icons/${icon ? icon : "contact"}.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundColor: "var(--color-blue-dark)",
        borderTopRightRadius: "var(--border-radius)",
        borderBottomRightRadius: "var(--border-radius)",
        width: `${size ? size : "2"}rem`,
        height: `${size ? size : "2"}rem`,
        // flexBasis: 50,
      }}
    ></span>
  );
};

export default IconSvg;
