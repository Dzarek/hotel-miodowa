import React from "react";
import styled from "styled-components";
import Header from "../components/HomeComponents/Header";
import AboutHome from "../components/HomeComponents/AboutHome";
import ServicesHome from "../components/HomeComponents/ServicesHome";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <AboutHome />
      <ServicesHome />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
