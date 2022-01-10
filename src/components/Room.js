import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { GiExitDoor } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiRuler2Line } from "react-icons/ri";
import { MdSingleBed, MdKitchen } from "react-icons/md";
import { FaCouch, FaBath } from "react-icons/fa";

import { useContext } from "react";
import { RoomContext } from "../roomContext";

const Room = ({ room }) => {
  const {
    name,
    slug,
    images,
    price,
    capacity,
    size,
    bathroom,
    kitchen,
    beds,
    sofa,
  } = room;
  const context = useContext(RoomContext);
  const { polish } = context;
  return (
    <Wrapper>
      <img src={images[0]} alt="pokój" />
      <div className="price-top">
        <h6>{price} zł</h6>
        <p>{polish ? "/noc" : "/night"}</p>
      </div>
      <h4>{name}</h4>
      <Link to={`${slug}`} className="iconContainer">
        <GiExitDoor className="icon" />
      </Link>
      <section>
        <span>
          <BsFillPersonFill />
          <h5>1 - {capacity}</h5>
        </span>
        <span>
          <RiRuler2Line />
          <h5>
            {size} m <sup>2</sup>{" "}
          </h5>
        </span>
        <span>
          <FaBath />
          <h5>{bathroom}</h5>
        </span>
        <span>
          <MdKitchen />
          <h5>{kitchen}</h5>
        </span>
        <span>
          <MdSingleBed />
          <h5>{beds}</h5>
        </span>
        <span>
          {sofa ? (
            <>
              <FaCouch />
              <h5>1x 160 cm</h5>
            </>
          ) : null}
        </span>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 22vw;
  height: 55vh;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background: #111;
  transition: 0.5s;
  margin: 2vw 1vw;
  @media screen and (max-width: 800px) {
    width: 90vw;
    margin: 5vw 1vw;
  }
  @media (orientation: landscape) and (max-width: 800px) {
    width: 50vw;
    height: 75vh;
  }
  img {
    position: absolute;
    height: 35vh;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  h4 {
    position: absolute;
    width: 100%;
    height: 5vh;
    top: 30vh;
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
    @media (orientation: landscape) and (max-width: 800px) {
      height: 10vh;
    }
  }
  .iconContainer {
    position: absolute;
    width: 100%;
    height: 30vh;
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
    @media (orientation: landscape) and (max-width: 800px) {
      height: 40vh;
    }
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
    top: 36vh;
    left: 55%;
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
      width: 45%;
      margin: 0 1%;
      color: white;
      h5 {
        margin-left: 10px;
      }
    }
    @media (orientation: landscape) and (max-width: 800px) {
      height: 30vh;
      top: 42vh;
    }
  }
  .price-top {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.8rem;
    text-align: center;
    transition: 0.4s;
    font-family: var(--buttonFont);
  }

  .price-top h6 {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
