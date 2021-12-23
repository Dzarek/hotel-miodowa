import React, { useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

import headerImg1 from "../../images/headerImages/TWIM PREMIUM 005.jpg";
import headerImg9 from "../../images/headerImages/SUPERIOR 004.jpg";
import headerImg12 from "../../images/headerImages/Superior 11.jpg";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
          <img src={headerImg12} alt="" />
        </Carousel>
        {/* <div className="headerBGOneImage"></div> */}
        <div
          data-aos="zoom-in-down"
          // data-aos-delay="600"
          data-aos-duration="2000"
          className="headerTitle"
        >
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
    overflow: hidden;
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
      z-index: 10000;
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
    top: 60%;
    left: 10%;
    margin: 0 auto;
    /* transform: translate(-50%, 0%); */
    height: 35%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-family: "Merriweather", serif;
    letter-spacing: 2px;
    color: #eee;
    font-weight: 700;
    /* user-select: none; */
    h1 {
      margin: 3vh 0 5vh;
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
      color: var(--secondaryColor2);
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
