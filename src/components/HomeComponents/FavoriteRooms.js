import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiRuler2Line } from "react-icons/ri";
import { MdSingleBed, MdKitchen } from "react-icons/md";
import { FaCouch, FaBath } from "react-icons/fa";

import room1 from "../../images/headerImages/Deluxe 8.jpg";
import room2 from "../../images/headerImages/STUDIO 002.jpg";
import room3 from "../../images/headerImages/Superior 11.jpg";
import room4 from "../../images/headerImages/TWIM PREMIUM 005.jpg";

const FavoriteRooms = () => {
  return (
    <Wrapper>
      <div className="mainSection favoriteRooms">
        <div className="titleContainer">
          <h2 className="title">Ulubione Pokoje Naszych Gości</h2>
          <span className="titleBorder"></span>
        </div>
        <Carousel
          className="favoriteRoomsCarousel"
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
          <div className="oneFavoriteRoom">
            <img src={room1} alt="" />
            <h4>Apartament Deluxe</h4>
            <div className="iconContainer">
              <GiExitDoor className="icon" />
            </div>
            <section>
              <span>
                <BsFillPersonFill />
                <h5>2 - 4</h5>
              </span>
              <span>
                <RiRuler2Line />
                <h5>
                  40 m <sup>2</sup>{" "}
                </h5>
              </span>
              <span>
                <FaBath />
                <h5>łazienka</h5>
              </span>
              <span>
                <MdKitchen />
                <h5>kuchnia</h5>
              </span>
              <span>
                <MdSingleBed />
                <h5>2x 90 cm</h5>
              </span>
              <span>
                <FaCouch />
                <h5>1x 160 cm</h5>
              </span>
            </section>
          </div>
          <div className="oneFavoriteRoom">
            <img src={room4} alt="" />
            <h4>Apartament Twin Premium</h4>
            <div className="iconContainer">
              <GiExitDoor className="icon" />
            </div>
            <section>
              <span>
                <BsFillPersonFill />
                <h5>2 - 4</h5>
              </span>
              <span>
                <RiRuler2Line />
                <h5>
                  22 m <sup>2</sup>{" "}
                </h5>
              </span>
              <span>
                <FaBath />
                <h5>łazienka</h5>
              </span>
              <span>
                <MdKitchen />
                <h5>kuchnia</h5>
              </span>
              <span>
                <MdSingleBed />
                <h5>2x 90 cm</h5>
              </span>
              <span>
                <FaCouch />
                <h5>1x 160 cm</h5>
              </span>
            </section>
          </div>
          <div className="oneFavoriteRoom">
            <img src={room2} alt="" />
            <h4>Apartament Studio</h4>
            <div className="iconContainer">
              <GiExitDoor className="icon" />
            </div>
            <section>
              <span>
                <BsFillPersonFill />
                <h5>2 - 4</h5>
              </span>
              <span>
                <RiRuler2Line />
                <h5>
                  32 m <sup>2</sup>{" "}
                </h5>
              </span>
              <span>
                <FaBath />
                <h5>łazienka</h5>
              </span>
              <span>
                <MdKitchen />
                <h5>kuchnia</h5>
              </span>
              <span>
                <MdSingleBed />
                <h5>2x 90 cm</h5>
              </span>
              <span>
                <FaCouch />
                <h5>1x 180 cm</h5>
              </span>
            </section>
          </div>
          <div className="oneFavoriteRoom">
            <img src={room3} alt="" />
            <h4>Apartament Superior</h4>
            <div className="iconContainer">
              <GiExitDoor className="icon" />
            </div>
            <section>
              <span>
                <BsFillPersonFill />
                <h5>2 - 4</h5>
              </span>
              <span>
                <RiRuler2Line />
                <h5>
                  38 m <sup>2</sup>{" "}
                </h5>
              </span>
              <span>
                <FaBath />
                <h5>łazienka</h5>
              </span>
              <span>
                <MdKitchen />
                <h5>kuchnia</h5>
              </span>
              <span>
                <MdSingleBed />
                <h5>2x 90 cm</h5>
              </span>
              <span>
                <FaCouch />
                <h5>1x 160 cm</h5>
              </span>
            </section>
          </div>
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .favoriteRooms {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-top: 20vh;

    /* justify-content: space-around;
    align-items: center; */
    .favoriteRoomsCarousel {
      margin-top: 10vh;
      width: 100%;
      .oneFavoriteRoom {
        width: 80%;
        height: 50vh;
        border: 2px solid #ddd;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        background: #111;
        transition: 0.5s;
        img {
          position: absolute;
          height: 30vh;
          width: 100%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        h4 {
          position: absolute;
          width: 100%;
          height: 5vh;
          top: 25vh;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          background: var(--bookBtnColor);
          font-size: 1.3rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--buttonFont);
        }
        .iconContainer {
          position: absolute;
          width: 100%;
          height: 25vh;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          font-size: 4rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          cursor: pointer;
          color: white;
        }
        :hover .iconContainer {
          display: flex;
          animation: imgShow 0.2s linear forwards;
        }
        @keyframes imgShow {
          100% {
            opacity: 1;
          }
        }
        section {
          position: absolute;
          width: 95%;
          height: 18vh;
          top: 31vh;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: space-around;
          font-size: 1.3rem;
          span {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: var(--buttonFont);
            width: 40%;
            margin: 0 5%;
            color: white;
            h5 {
              margin-left: 10px;
            }
          }
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

export default FavoriteRooms;
