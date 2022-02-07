import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../roomContext";
import { withRoomConsumer } from "../../roomContext";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Room from "../Room";

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
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
    .favoriteRoomsCarousel {
      margin-top: 10vh;
      width: 100%;
    }
  }
  .arrow {
    font-size: 2rem;
    cursor: pointer;
    z-index: 10000;
    color: var(--equipmentsBg);
    transition: 0.3s;
    :hover {
      color: var(--secondaryColor);
    }
  }
`;

export default withRoomConsumer(FavoriteRooms);
