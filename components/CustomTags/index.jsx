import React from "react";

/////// H ///////////
export const H = ({
  children,
  color,
  fs,
  fw,
  bg,
  m,
  p,
  w,
  ws,
  ta,
  border,
  cursor,
  underline,
  as,
}) => {
  const Component = as ? as : "h4";
  const checkType = (x) => {
    const c = { color: color ? color : "var(--color-1-dark)" };
    switch (x) {
      case "h1":
        const a1 = { ...c, fontSize: "1rem" };
        return a1;
        break;
      case "h2":
        const a2 = { ...c, fontSize: "var(--fs150" };
        return a2;
        break;
      case "h3":
        const a3 = { ...c, fontSize: "var(--fs117" };
        return a3;
        break;
      case "h4":
        const a4 = { ...c, fontSize: "var(--fs1)" };
        return a4;
        break;
      case "h5":
        const a5 = { ...c, fontSize: "var(--fs083)" };
        return a5;
        break;
      case "h6":
        const a6 = { ...c, fontSize: "var(--fs067)" };
        return a6;
        break;
      default:
        const def = { ...c, fontSize: "1rem" };
        return def;
        break;
    }
  };
  let stl = checkType(as);
  return (
    <Component
      style={{
        color: stl.color,
        fontSize: stl.fontSize,
        fontWeight: fw ? fw : "var(--fw400)",
        background: bg ? bg : "",
        margin: m ? m : "0",
        padding: p ? p : "0",
        width: w ? w : "fit-content",
        whiteSpace: ws ? ws : "wrap",
        textAlign: ta ? ta : "center",
        // border: border && "var(--card-border)",
        border: border && "1px solid red",
        userSelect: "none",
        cursor: cursor ? cursor : "pointer",
        textDecoration: underline && "underline",
      }}
    >
      {children ? children : "Default H4 text"}
    </Component>
  );
};

/////// CONTAINER ///////////
export const Container = ({
  children,
  m,
  p,
  jc,
  ai,
  fd,
  border,
  gap,
  bg,
  className,
}) => {
  const Component = "div";
  const style = {
    margin: m ? m : "0",
    padding: p ? p : "1rem 0",
    display: "flex",
    justifyContent: jc ? jc : "flex-start",
    alignItems: ai ? ai : "center",
    flexDirection: fd ? fd : "column",
    border: border && "1px solid red",
    flexGrow: "1",
    gap: gap ? gap : "0",
    background: bg ? bg : "transparent",
  };

  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};




/////// P ///////////
export const P = ({
  children,
  m,
  p,
  color,
  fw,
  fs,
  ff,
  w,
  ta,
  border,
}) => {
  return (
    <p
      style={{
        margin: m ? m : "0",
        padding: p ? p : "0",
        color: color ? color : "var(--color-light)",
        fontWeight: fw ? fw : "var(--fw200)",
        fontSize: fs ? fs : "clamp(0.7rem, 4vw, 0.8rem)",
        fontFamily: ff ? ff : "Poppins, Sans Serif",
        width: w ? w : "100%",
        textAlign: ta ? ta : "justify",
        letterSpacing: "1px",
        lineHeight: "var(--line-height)",
        border: border && "var(--card-border)",
      }}
    >
      {children ? children : "Default P text"}
    </p>
  );
};