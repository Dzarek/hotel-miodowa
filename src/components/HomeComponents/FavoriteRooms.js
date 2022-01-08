import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useContext } from "react";
import { RoomContext } from "../../roomContext";
import Room from "../Room";
import { withRoomConsumer } from "../../roomContext";

const FavoriteRooms = () => {
  const context = useContext(RoomContext);
  const { rooms, polish } = context;

  const favoriteRooms = rooms.filter((item) => item.featured === true);

  return (
    <Wrapper>
      <div className="mainSection favoriteRooms">
        <div className="titleContainer">
          <h2 className="title">
            {polish
              ? "Ulubione Pokoje Naszych Gości"
              : "Our guests' favorite rooms"}
          </h2>
          <span className="titleBorder"></span>
        </div>
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
          arrowLeft={<IoIosArrowDropleftCircle className="arrow arrowLeft" />}
          arrowRight={
            <IoIosArrowDroprightCircle className="arrow arrowRight" />
          }
        >
          {favoriteRooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
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
    @media (orientation: portrait) and (max-width: 800px) {
      width: 95vw;
    }
    .favoriteRoomsCarousel {
      margin-top: 10vh;
      width: 100%;
      /* .oneFavoriteRoom {
        width: 80%;
        height: 50vh;
        border: 1px solid #ddd;
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
      } */
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

// export default FavoriteRooms;
export default withRoomConsumer(FavoriteRooms);
