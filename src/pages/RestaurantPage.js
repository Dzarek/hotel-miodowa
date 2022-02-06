import React from "react";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { FaLongArrowAltRight } from "react-icons/fa";
import videoSpoon from "../images/restauracja/Spoon.mp4";

import { gallery } from "../data";

let restaurantImages = gallery.filter(
  (item) => item.category === "restauracja"
);
restaurantImages = restaurantImages[0].img;
const RestaurantPage = () => {
  const context = useContext(RoomContext);
  const { polish } = context;
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
          <h2>{polish ? "Restauracja" : "Restaurant"}</h2>
        </div>
      </div>
      {polish ? (
        <div className="restaurantInfo">
          <div className="meals">
            <h3>Śniadania</h3>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />W naszym hotelu śniadania
              są serwowane w formie bufetu. Jest ono wliczone w cenę każdej
              rezerwacji!
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />
              Na stole szwedzkim znajdą Państwo polskie produkty różnego rodzaju
              tak aby każdy gość mógł zjeść pyszny posiłek na rozpoczęcie
              swojego dnia.
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />
              Godzina podawania: 7:30 - 10:00.
            </p>
            <span>
              Jeśli zaistnieje taka potrzeba i gość musi opuścić hotel wcześniej
              niż jest serwowne śniadanie, możemy przygotować breakfast/lunch
              boxy na wynos. Wystarczy zgłosić to na recepcji dzień wcześniej.
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
      ) : (
        <div className="restaurantInfo">
          <div className="meals">
            <h3>Breakfast</h3>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />
              Breakfast is provided in our hotel served as a buffet. It is
              included in the price of each booking!
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />
              On the Swedish table you will find Polish products of various
              kinds so that each guest can enjoy a delicious meal to start their
              own day.
            </p>
            <p>
              {" "}
              <FaLongArrowAltRight className="icon" />
              Time of serving: 7:30 - 10:00.{" "}
            </p>
            <span>
              If there is such a need and the guest has to leave the hotel
              earlier than breakfast is served, we can prepare breakfast / lunch
              boxes Takeaway. It is enough to report it at the reception the day
              before.
            </span>
          </div>
          <div className="meals">
            <h3> Lunch and Dinner </h3>
            <p>
              {""}
              <FaLongArrowAltRight className="icon" />
              Lunch and dinner are served for organized groups only.
            </p>
            <p>
              {""}
              <FaLongArrowAltRight className="icon" />
              We agree the menu in advance with our guests and adjust it to them
              preferences.
            </p>
            <p>
              {""}
              <FaLongArrowAltRight className="icon" />
              Our gastronomy is based on typical Polish cuisine. We care so that
              foreign guests can also get to know our country by tasting it.
            </p>
          </div>
        </div>
      )}
      <div className="picturesRestaurant">
        <SRLWrapper>
          <Carousel
            className="pictures"
            infinite
            autoPlay={3000}
            animationSpeed={1000}
            slidesPerPage={3}
            breakpoints={{
              900: {
                slidesPerPage: 1,
              },
            }}
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
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
  .backgroundDark {
    background: rgba(0, 0, 0, 0.5);
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
      width: 100%;
      color: white;
      z-index: 3;
      text-shadow: 3px 3px 3px black;

      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
      @media screen and (max-width: 800px) {
        h2 {
          font-size: 1.8rem;
          transform: translateX(25%);
        }
      }
    }
  }
  .restaurantInfo {
    display: flex;
    width: 80vw;
    max-width: 1360px;
    margin: 15vh auto;
    justify-content: space-around;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      width: 90vw;
    }
    .meals {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      @media screen and (max-width: 800px) {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 10vh;
      }
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
      @media screen and (max-width: 800px) {
        width: 90vw;
        img {
          width: 90%;
        }
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
