import React from "react";

const Divider = ({ w, h, m, p, color, size, bg }) => {
  return (
    <hr
      style={{
        width: w ? w : "100%",
        border: `${size ? size : "1px"} solid ${color ? color : "#fff4"}`,
        height: h ? h : "1px",
        backgroundColor: bg ? bg : "transparent",
        borderRadius: ".5rem",
        marginBlock: m ? m : "0",
        padding: p ? p : "0",
      }}
    />
  );
};

export default Divider;
