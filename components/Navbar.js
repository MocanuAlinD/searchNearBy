import React from "react";
import Switch from "./Switch";
import Title from "./Title";
import BurgerButton from "./BurgerButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div
      className="m-0 p-0 px-3 pt-0 d-flex py-0 align-items-center my-2 justify-content-between"
      style={{ height: "3rem" }}
    >
      <BurgerButton />
      {pathname !== "/" ? (
        <div
          className="d-flex w-100 justify-content-center"
          style={{ height: "100%" }}
        >
          <Title spd={2000} />
        </div>
      ) : (
        ""
      )}
      {pathname === "/" ? <Switch /> : ""}
    </div>
  );
};

export default Navbar;
