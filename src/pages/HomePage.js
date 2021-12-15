import React from "react";
import styled from "styled-components";
import Header from "../components/HomeComponents/Header";
import AboutHome from "../components/HomeComponents/AboutHome";
import ServicesHome from "../components/HomeComponents/ServicesHome";
import FavoriteRooms from "../components/HomeComponents/FavoriteRooms";
import GalleryHome from "../components/HomeComponents/GalleryHome";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <AboutHome />
      <ServicesHome />
      <FavoriteRooms />
      <GalleryHome />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomePage;
