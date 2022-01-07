import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SRLWrapper } from "simple-react-lightbox";

import { GiTwoCoins, GiMeal } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiRuler2Line } from "react-icons/ri";
import { MdSingleBed } from "react-icons/md";
import { FaCouch } from "react-icons/fa";

const SingleRoomPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const location = useLocation();
  const context = useContext(RoomContext);
  const slug = location.pathname;
  const { getRoom } = context;
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="errorPageStyle">
        <div className="error">
          <h3>nie można odnaleźć pokoju...</h3>
          <Link to="/pokoje/" className="btn-primary">
            wróć do listy pokoi
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
    // extras,
    // breakfast,
    beds,
    sofa,
    images,
  } = room;

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
          <h2>Opis</h2>
          <div className="roomDescription">
            {description.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <h2>Zdjęcia</h2>
          <div className="roomPictures">
            <SRLWrapper>
              {images.map((item, index) => {
                return <img key={index} src={item} alt={index + 1} />;
              })}
            </SRLWrapper>
          </div>
          <div className="roomEquipments">
            <h2>Wyposażenie</h2>
            <div className="equipments"></div>
          </div>
        </div>
        <div className="roomDetails">
          <h2>Szczegóły</h2>
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
            <GiMeal className="icon" /> śniadanie
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
  padding-top: 13vh;
  margin: 0 auto;
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
      filter: brightness(0.3);
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
      text-shadow: 0 2px 2px black;
      color: white;
      z-index: 1;
      h4 {
        text-transform: lowerCase;
        margin-top: 2vh;
      }
    }
  }

  .singleRoomContent {
    width: 80vw;
    max-width: 1360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10vh auto 15vh;
    h2 {
      font-family: var(--buttonFont);
      font-size: 2rem;
      color: var(--secondaryColor2);
      margin-bottom: 3vh;
      margin-top: 8vh;
    }
  }
  .roomDetails {
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 30px 10px;
    background: #111;
    justify-content: flex-start;
    align-items: center;
    /* margin-top: 30vh; */
    border-radius: 3px;
    h2 {
      align-self: center;
      margin-bottom: 5vh;
      margin-top: 0vh;
    }
    p {
      /* margin-left: 20%; */
      margin-top: 1vh;
      margin-bottom: 1vh;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      font-family: var(--buttonFont);
      border-bottom: 1px solid var(--secondaryColor2);
      width: 80%;
      padding: 5px;
    }
    .icon {
      margin-right: 10%;
      color: var(--secondaryColor);
    }
  }
  .roomEquipments {
    width: 80vw;
    max-width: 1360px;

    .equipments {
      background: #ddd;
      width: 100%;
      padding: 20px;
      border-radius: 5px;
    }
  }
  .descriptionAndPictures {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .roomDescription {
      width: 100%;
      display: flex;
      flex-direction: column;

      p {
        font-family: var(--textFont);
        font-size: 1.2rem;
        line-height: 1.4;
        color: white;
        margin-bottom: 3vh;
        /* text-align: justify; */
      }
    }
    .roomPictures {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 220px;
        margin: 1vh 2vh 1vh 0;
        border-radius: 3px;
        transition: 0.4s;
        cursor: pointer;
        :hover {
          box-shadow: 0 0 2px 2px white;
        }
      }
    }
  }
`;

export default SingleRoomPage;
