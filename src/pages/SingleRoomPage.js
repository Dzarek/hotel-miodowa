import React from "react";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import {
  GiTwoCoins,
  GiMeal,
  GiVacuumCleaner,
  GiExitDoor,
} from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiRuler2Line } from "react-icons/ri";
import { MdSingleBed } from "react-icons/md";
import { FaCouch } from "react-icons/fa";

import Room from "../components/Room";
import { withRoomConsumer } from "../roomContext";

const SingleRoomPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const location = useLocation();
  const context = useContext(RoomContext);
  const slug = location.pathname;
  const { getRoom } = context;
  const { rooms, polish } = context;
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="main-page">
        <div className="error">
          <h2>{polish ? "nie można odnaleźć pokoju..." : "room not found"}</h2>
          <Link to="/pokoje">
            <GiExitDoor className="icon" />
          </Link>
        </div>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    beds,
    sofa,
    images,
  } = room;

  const otherRooms = rooms.filter((item) => item.name !== room.name);

  return (
    <Wrapper>
      <header>
        <img src={images[0]} alt="zdjęcie" />
        <div data-aos="zoom-in-right" className="title">
          <h2>{name}</h2>
        </div>
      </header>
      <div className="singleRoomContent">
        <div className="descriptionAndPictures">
          <h2>{polish ? "Opis" : "Description"}</h2>
          <div className="roomDescription">
            {description.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <h2>{polish ? "Zdjęcia" : "Pictures"}</h2>
          <div className="roomPictures">
            <SRLWrapper>
              {images.map((item, index) => {
                return (
                  <img
                    className="roomPictureImg"
                    key={index}
                    src={item}
                    alt={index + 1}
                  />
                );
              })}
            </SRLWrapper>
          </div>
          <div className="roomEquipments">
            <h2>{polish ? "Wyposażenie" : "Equipments"}</h2>
            <div className="equipments">
              {extras.map((item, index) => {
                const { label, icon } = item;
                return (
                  <p data-aos="zoom-left" key={index}>
                    {icon} <span>{label}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" className="otherRooms">
            <h2>{polish ? "Inne pokoje" : "Other rooms"}</h2>
            <Carousel
              className="favoriteRoomsCarousel"
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
              arrowLeft={
                <IoIosArrowDropleftCircle className="arrow arrowLeft" />
              }
              arrowRight={
                <IoIosArrowDroprightCircle className="arrow arrowRight" />
              }
            >
              {otherRooms.map((item) => {
                return <Room key={item.id} room={item} />;
              })}
            </Carousel>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          className="roomDetails"
        >
          <h2>{polish ? "Szczegóły" : "Info"}</h2>
          <p>
            <GiTwoCoins className="icon" /> {price} zł
          </p>
          <p>
            <BsFillPersonFill className="icon" /> 1 - {capacity}
          </p>
          <p>
            <RiRuler2Line className="icon" /> {size} m <sup>2</sup>
          </p>
          <p>
            <GiMeal className="icon" />{" "}
            {polish ? "śniadanie w cenie" : "breakfast included"}
          </p>
          <p>
            <GiVacuumCleaner className="icon" />
            {polish ? "serwis na życzenie" : "service on request"}
          </p>
          <p>
            <MdSingleBed className="icon" /> {beds}
          </p>
          {sofa ? (
            <>
              <p>
                <FaCouch className="icon" />
                1x 160 cm
              </p>
            </>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding-top: 13vh;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
  header {
    position: relative;
    height: 40vh;
    width: 100%;
    border-bottom: 2px solid var(--secondaryColor);
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 300%;
      object-fit: cover;
      top: 0;
      left: 0;
      filter: brightness(0.6);
      animation: imgMove 10s linear infinite alternate;
      @keyframes imgMove {
        95% {
          height: 100%;
        }
        100% {
          height: 100%;
        }
      }
    }
    .title {
      font-size: 1.8rem;
      position: absolute;
      top: 70%;
      right: 25%;
      width: 100%;
      color: white;
      z-index: 1;
      text-shadow: 3px 3px 3px black;

      @media screen and (max-width: 800px) {
        font-size: 1.2rem;
        right: 0%;
        top: 60%;
      }
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
  }

  .singleRoomContent {
    width: 80vw;
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10vh auto 15vh;
    h2 {
      font-family: var(--buttonFont);
      font-size: 2rem;
      color: var(--secondaryColor2);
      margin-bottom: 3vh;
      margin-top: 8vh;
    }
    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
      width: 100vw;
      h2 {
        margin: 0 auto;
        margin-bottom: 3vh;
        margin-top: 8vh;
      }
    }
  }
  .roomDetails {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 30px 10px;
    background: var(--roomDetailBg);
    justify-content: flex-start;
    align-items: center;
    margin-top: 20vh;
    border-radius: 3px;
    h2 {
      align-self: center;
      margin-bottom: 5vh;
      margin-top: 0vh;
    }
    p {
      margin-top: 1vh;
      margin-bottom: 1vh;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      font-family: var(--buttonFont);
      border-bottom: 1px solid var(--secondaryColor2);
      width: 90%;
      padding: 5px;
    }
    .icon {
      margin-right: 10%;
      color: var(--secondaryColor);
    }
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-top: 0vh;
      p {
        font-size: 1.1rem;
      }
    }
  }
  .otherRooms {
    width: 80vw;
    max-width: 100vw;
    margin-top: 10vh;
    h2 {
      align-self: center;
      text-align: center;
    }
    .favoriteRoomsCarousel {
      width: 100%;
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
    @media screen and (max-width: 800px) {
      width: 90vw;
      .arrow {
        font-size: 1.5rem;
      }
    }
  }
  .roomEquipments {
    width: 80vw;
    max-width: 100vw;

    .equipments {
      background: var(--equipmentsBg);
      width: 100vw;
      padding: 40px 10vw;
      border-radius: 3px;
      margin-left: -10vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 3.5rem;
        font-family: var(--buttonFont);
        background: var(--appBgColor);
        padding: 20px 5px;
        border-radius: 20px;
        width: 150px;
        height: 150px;
        margin: 1.5vh;
        transition: 0.5s;

        span {
          font-size: 1.3rem;
          color: var(--secondaryColor2);
          transition: 0.5s;
        }
        :hover {
          color: var(--secondaryColor2);
        }
        :hover span {
          color: var(--primaryColor);
        }
      }
    }
    @media screen and (max-width: 800px) {
      width: 100vw;
      padding: 0;
      margin: 0 auto;
      h2 {
        text-align: center;
      }
      .equipments {
        padding: 10px;
        width: 100vw;
        p {
          font-size: 2.3rem;
          padding: 5px;
          width: 100px;
          height: 100px;
          margin: 1vh;
          span {
            font-size: 1rem;
            color: var(--secondaryColor2);
          }
        }
      }
    }
  }
  .descriptionAndPictures {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
    }
    .roomDescription {
      width: 100%;
      display: flex;
      flex-direction: column;

      p {
        font-family: var(--textFont);
        font-size: 1.2rem;
        line-height: 1.4;
        margin-bottom: 3vh;
      }
      @media screen and (max-width: 800px) {
        width: 85%;
        margin: 0 auto;
        p {
          font-size: 1.1rem;
          line-height: 1.3;
          margin-bottom: 3vh;
          text-align: center;
        }
      }
    }
    .roomPictures {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      @media screen and (max-width: 800px) {
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        > * {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      .roomPictureImg {
        width: 220px;
        margin: 1vh 2vh 1vh 0;
        border-radius: 3px;
        transition: 0.4s;
        cursor: pointer;
        :hover {
          box-shadow: 0 0 2px 2px white;
        }
        @media screen and (max-width: 800px) {
          justify-content: center;
          align-self: center;
          margin: 1vh auto 1vh auto;
          width: 80vw;
        }
      }
    }
  }
`;

export default withRoomConsumer(SingleRoomPage);
