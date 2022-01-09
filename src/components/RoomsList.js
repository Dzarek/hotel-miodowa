import React from "react";
import Room from "./Room";
import styled from "styled-components";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

const RoomsListPL = ({ rooms }) => {
  const context = useContext(RoomContext);
  const { polish } = context;
  if (rooms.length === 0) {
    return (
      <Wrapper2>
        <h3>
          {polish
            ? "niestety, nie udało się znaleźć pokoju"
            : "Unfortunately No Rooms Matched Your Search Parameters"}
        </h3>
      </Wrapper2>
    );
  }
  return (
    <Wrapper>
      <div className="roomslist">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (orientation: portrait) and (max-width: 800px) {
    width: 80vw;
    margin: 10vh auto;
  }
  .roomslist {
    width: 100%;
    margin: 0 auto 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (orientation: portrait) and (max-width: 800px) {
      margin: 0 auto;
    }
  }
`;
const Wrapper2 = styled.div`
  width: 60vw;
  margin: 20vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: var(--buttonFont);
  font-size: 1.5rem;
  @media (orientation: portrait) and (max-width: 800px) {
    width: 80vw;
    margin: 10vh auto;
  }
`;

export default RoomsListPL;
