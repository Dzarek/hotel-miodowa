import React from "react";
import Room from "./Room";
import styled from "styled-components";

const RoomsListPL = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <Wrapper2 className="empty-search">
        <h3>niestety, nie udało się znaleźć pokoju</h3>
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
  .roomslist {
    width: 100%;
    margin: 0 auto 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const Wrapper2 = styled.div``;

export default RoomsListPL;
