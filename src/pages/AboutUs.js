import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
const AboutUs = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper className="main-page">
      <div className="title">
        <h3>{polish ? "Przeczytaj więcej o nas!" : "Read more about us!"}</h3>
      </div>
      <div className="aboutContainer">
        <NavLink to="/oNas/oHotelu" className="hotelAbout">
          <h2>{polish ? "o hotelu" : "about hotel"}</h2>
        </NavLink>
        <NavLink to="/oNas/oKrakowie" className="cracowAbout">
          <h2>{polish ? "o krakowie" : "about cracow"}</h2>
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
    @media (orientation: portrait) and (max-width: 800px) {
      flex-direction: column;
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
      @media (orientation: portrait) and (max-width: 800px) {
        height: 30%;
        width: 90%;
        border-radius: 10%;
        margin-bottom: 5vh;
        h2 {
          transform: translateX(0);
          font-size: 2.3rem;
        }
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
      @media (orientation: portrait) and (max-width: 800px) {
        height: 30%;
        width: 90%;
        border-radius: 10%;
        h2 {
          transform: translateX(0);
          font-size: 2.3rem;
        }
      }
    }
    a {
      position: relative;
      filter: brightness(0.5) blur(1px);
      transition: 0.5s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      overflow: hidden;
      @media (orientation: portrait) and (max-width: 800px) {
        filter: none;
      }
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
