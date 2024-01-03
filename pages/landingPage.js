import React from "react";
import { Container } from "../components/singleTags/elemetsCustom";
import BackButton from "../components/BackButton";

const LandingPage = () => {
  return (
    <Container>
      <BackButton text="Home page" url="/" />
      Landing Page
    </Container>
  );
};

export default LandingPage;
