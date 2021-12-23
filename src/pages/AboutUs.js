import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import hotelImg from "../images/homeImages/hotelImgAbout.jpg";
import krakowImg from "../images/homeImages/krakow.jpg";

const AboutUs = () => {
  return (
    <Wrapper className="main-page">
      <div className="title">
        <h3>Przeczytaj więcej o nas!</h3>
      </div>
      <div className="aboutContainer">
        <NavLink to="/oNas/oHotelu" className="hotelAbout">
          <h2>o hotelu</h2>
        </NavLink>
        <NavLink to="/oNas/oKrakowie" className="cracowAbout">
          <h2>o krakowie</h2>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    text-align: center;
    margin: 10vh auto -10vh;
    font-size: 1.6rem;
  }
  .aboutContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 87vh;
    transform: scale(0);
    animation: showAbout 1s 1 forwards;
    @keyframes showAbout {
      100% {
        transform: scale(1);
      }
    }
    .hotelAbout {
      height: 60%;
      width: 40%;
      border-radius: 10% 0 0 10%;
      border: 2px solid var(--secondaryColor);
      border-right: none;

      h2 {
        transform: translateX(50vw);
      }
    }
    .cracowAbout {
      height: 60%;
      width: 40%;
      border-radius: 0% 10% 10% 0%;
      border: 2px solid var(--secondaryColor);
      border-left: none;

      h2 {
        transform: translateX(-50vw);
        text-align: right;
      }
    }
    a {
      position: relative;
      filter: brightness(0.3) blur(1px);
      transition: 0.5s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      overflow: hidden;

      h2 {
        font-size: 3rem;
        color: white;
        text-transform: uppercase;
        text-shadow: 0 2px 2px black;
        transition: 1s;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      :hover {
        filter: brightness(0.7);
      }
      :hover h2 {
        transform: translateX(0%);
      }
    }
  }
`;

export default AboutUs;
