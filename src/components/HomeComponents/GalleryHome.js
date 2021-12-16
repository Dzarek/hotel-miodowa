import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import img1 from "../../images/homeImages/BAR 002.jpg";
import img2 from "../../images/homeImages/BAR 003.jpg";
import img3 from "../../images/homeImages/DELUXE 008.jpg";
import img4 from "../../images/homeImages/DELUXE 010.jpg";
import img5 from "../../images/homeImages/DELUXE 014.jpg";
import img6 from "../../images/homeImages/RECEPCJA 002.jpg";
import img7 from "../../images/homeImages/RECEPCJA 004.jpg";
import img8 from "../../images/homeImages/RESTAURACJA 001.jpg";
import img9 from "../../images/homeImages/RESTAURACJA 0014.jpg";
import img10 from "../../images/homeImages/RESTAURACJA 006.jpg";
import img11 from "../../images/homeImages/RESTAURACJA 010.jpg";
import img12 from "../../images/homeImages/STUDIO 003.jpg";
import img13 from "../../images/homeImages/STUDIO 008.jpg";
import img14 from "../../images/homeImages/STUDIO 012.jpg";
import img15 from "../../images/homeImages/TWIN 1.jpg";

const pictures = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const GalleryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="mainSection GalleryHome">
        <div className="titleContainer">
          <h2 className="title">Galeria</h2>
          <span className="titleBorder"></span>
        </div>
        <div className="picturesAll">
          <SRLWrapper>
            <Carousel
              className="pictures"
              infinite
              autoPlay={3000}
              animationSpeed={1000}
              slidesPerPage={1}
              addArrowClickHandler
              stopAutoPlayOnHover
              arrowLeft={
                <IoIosArrowDropleftCircle className="arrow arrowLeft" />
              }
              arrowRight={
                <IoIosArrowDroprightCircle className="arrow arrowRight" />
              }
            >
              {pictures.map((item, index) => {
                return <img key={index} src={item} alt="" />;
              })}
            </Carousel>
          </SRLWrapper>
          <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="picturesFlex"
          >
            {pictures.map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
          </div>
        </div>
        <a href="#">Zobacz całą galerie</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .GalleryHome {
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* margin-top: -10vh; */
    padding-bottom: 10vh;
    /* position: relative; */

    .titleContainer {
      /* margin-bottom: 15vh; */
      z-index: 1;
    }
  }
  .picturesAll {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    /* margin: 10vh auto; */
  }
  .pictures {
    width: 45%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    img {
      width: 90%;
      height: 50vh;
      border: 3px solid var(--secondaryColor);
      border-radius: 5px;
    }
  }
  .picturesFlex {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    filter: opacity(0.3);
    img {
      width: 13vw;
      height: 10vw;
      margin: 2vw;
      filter: saturate(0);
    }
  }
  a {
    /* margin-top: -10vh; */
    z-index: 1;
    padding: 10px;
    background: transparent;
    color: var(--primaryColor);
    border: none;
    border-bottom: 2px solid var(--secondaryColor);
    border-radius: 5px;
    font-size: 1.2rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-family: "Signika Negative", sans-serif;
    transition: 0.5s;
    :hover {
      letter-spacing: 2px;
    }
  }
  .arrow {
    font-size: 2rem;
    cursor: pointer;
    z-index: 10000;
    color: var(--primaryColor);
    transition: 0.3s;
    :hover {
      color: var(--secondaryColor);
    }
  }
`;

export default GalleryHome;
