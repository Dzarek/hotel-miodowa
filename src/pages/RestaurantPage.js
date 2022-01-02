import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { gallery } from "../data";
import { FaLongArrowAltRight } from "react-icons/fa";
import videoSpoon from "../images/restauracja/Spoon.mp4";

let restaurantImages = gallery.filter(
  (item) => item.category === "restauracja"
);
restaurantImages = restaurantImages[0].img;
const RestaurantPage = () => {
  return (
    <Wrapper>
      <div className="restaurantHeader">
        <video
          src={videoSpoon}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        ></video>
        <div className="backgroundDark"></div>
        <div data-aos="zoom-in-right" className="title">
          <h2>Restauracja</h2>
        </div>
      </div>
      <div className="restaurantInfo">
        <div className="meals">
          <h3>Śniadania</h3>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />W naszym hotelu śniadania są
            serwowane w formie bufetu. Jest ono wliczone w cenę każdej
            rezerwacji!
          </p>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />
            Na stole szwedzkim znajdą Państwo polskie produkty różnego rodzaju
            tak aby każdy gość mógł zjeść pyszny posiłek na rozpoczęcie swojego
            dnia.
          </p>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />
            Godzina podawania: 7:30 - 10:00.
          </p>
          <span>
            Jeśli zaistnieje taka potrzeba i gość musi opuścić hotel wcześniej
            niż jest serwowne śniadanie, możemy przygotować breakfast/lunch boxy
            na wynos. Wystarczy zgłosić to na recepcji dzień wcześniej.
          </span>
        </div>
        <div className="meals">
          <h3>Obiady i Kolacje</h3>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />
            Obiady i kolacje są podawane jedynie dla zoorganizowanych grup.
          </p>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />
            Menu uzgadaniamy wcześniej z naszymi gośćmi i dopasowujemy do ich
            preferencji.
          </p>
          <p>
            {" "}
            <FaLongArrowAltRight className="icon" />
            Nasza gastronomia opiera się na kuchni typowo polskiej. Zależy nam
            by zagraniczni goście poznali nasz kraj również smakując go.
          </p>
        </div>
      </div>
      <div className="picturesRestaurant">
        <SRLWrapper>
          <Carousel
            className="pictures"
            infinite
            autoPlay={3000}
            animationSpeed={1000}
            slidesPerPage={3}
            addArrowClickHandler
            stopAutoPlayOnHover
            arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
            arrowRight={
              <IoIosArrowDroprightCircle className="arrow arrowRight" />
            }
          >
            {restaurantImages.map((item, index) => {
              return (
                <img key={index} src={item} alt={`restauracja ${index + 1}`} />
              );
            })}
          </Carousel>
        </SRLWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  .backgroundDark {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .restaurantHeader {
    position: relative;
    height: 50vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);

    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 70%;
      right: 25%;
      /* transform: translate(-50%, -50%); */
      width: 100%;
      text-shadow: 0 2px 2px black;
      color: white;
      z-index: 3;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
  }
  .restaurantInfo {
    display: flex;
    /* flex-direction: column; */
    width: 80vw;
    max-width: 1360px;
    margin: 15vh auto;
    justify-content: space-around;
    align-items: flex-start;
    .meals {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      h3 {
        font-family: var(--buttonFont);
        font-size: 2rem;
        margin-bottom: 3vh;
        color: var(--secondaryColor2);
      }

      p {
        font-family: var(--textFont);
        font-size: 1.1rem;
        line-height: 1.3;
        margin: 3vh auto 3vh 0;
        .icon {
          margin-right: 10px;
          color: var(--secondaryColor2);
        }
      }
      span {
        font-family: var(--textFont);
        font-size: 1rem;
        line-height: 1.3;
        margin: 1vh auto 2vh 0;
        font-style: italic;
      }
    }
  }
  .picturesRestaurant {
    width: 100vw;
    margin: 15vh auto -20vh;
    background: #111;
    padding: 10vh 0;
    .pictures {
      max-width: 1360px;
      width: 70vw;
      margin: 0 auto;
      img {
        width: 300px;
        border-radius: 5px;
        cursor: pointer;
      }
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

export default RestaurantPage;
