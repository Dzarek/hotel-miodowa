import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

import headerImg1 from "../images/headerImages/TWIM PREMIUM 005.jpg";
// import headerImg2 from "../images/headerImages/TWIN 02.jpg";
// import headerImg3 from "../images/headerImages/STUDIO 001.jpg";
// import headerImg4 from "../images/headerImages/DELUXE 004.jpg";
// import headerImg5 from "../images/headerImages/DELUXE 001.jpg";
// import headerImg6 from "../images/headerImages/STUDIO 006.jpg";
// import headerImg7 from "../images/headerImages/SUPERIOR 001.jpg";
// import headerImg8 from "../images/headerImages/SUPERIOR 03.jpg";
import headerImg9 from "../images/headerImages/SUPERIOR 004.jpg";
// import headerImg10 from "../images/headerImages/DeLuxe 2.JPG";
import headerImg11 from "../images/headerImages/Deluxe 8.jpg";
import headerImg12 from "../images/headerImages/Superior 11.jpg";

const Header = () => {
  return (
    <Wrapper>
      <div className="headerContainer">
        <Carousel
          className="headerImages"
          infinite
          autoPlay={7000}
          animationSpeed={1000}
          slidesPerPage={1}
          addArrowClickHandler
          //   stopAutoPlayOnHover
          arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
          arrowRight={
            <IoIosArrowDroprightCircle className="arrow arrowRight" />
          }
        >
          <img src={headerImg1} alt="" />
          <img src={headerImg9} alt="" />
          {/* <img src={headerImg11} alt="" /> */}
          <img src={headerImg12} alt="" />
        </Carousel>
        <div className="headerTitle">
          <h3>witaj w</h3>
          <h1>Hotel Miodowa</h1>
          <div className="stars">
            <MdOutlineStar className="iconStar" />
            <MdOutlineStar className="iconStar" />
            <MdOutlineStar className="iconStar" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .headerContainer {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .headerImages {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(0.5);
    }
    .arrow {
      position: absolute;
      font-size: 2rem;
      cursor: pointer;
      z-index: 10;
      color: var(--primaryColor);
      transition: 0.3s;
      :hover {
        color: #aaa;
      }
    }
    .arrowLeft {
      bottom: 5%;
      right: 8%;
    }
    .arrowRight {
      bottom: 5%;
      right: 5%;
    }
  }
  .headerTitle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    height: 35%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Cormorant Unicase", serif;
    letter-spacing: 2px;
    color: #eee;
    font-weight: 700;
    h1 {
      margin: 5vh 0 10vh;
      font-weight: 700;
    }
  }
  .stars {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconStar {
      margin: 0 20px;
      font-size: 4rem;
      opacity: 0;
      animation: showStars 2s infinite alternate;
      color: var(--secondaryColor);
      @keyframes showStars {
        40% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export default Header;
