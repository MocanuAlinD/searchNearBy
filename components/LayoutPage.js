import React from "react";
import { Container } from "./singleTags/elemetsCustom";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import Title from "./Title";
import { useRouter } from "next/router";

const LayoutPage = ({ children }) => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Container bg="var(--color-blue)">
      <div
        className="m-0 p-0 px-3 pt-0 d-flex py-0 align-items-center my-2"
        style={{ height: "3rem" }}
      >
        <BurgerButton />
        <div
          className="d-flex w-100 justify-content-center"
          style={{ height: "100%" }}
        >
          <Title spd={2000} />
        </div>
      </div>
      {children}
      <BurgerMenu />
    </Container>
  );
};

export default LayoutPage;
