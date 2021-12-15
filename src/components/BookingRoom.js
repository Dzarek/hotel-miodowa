import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";

import { DatePicker } from "react-rainbow-components";

const containerStyles = {
  maxWidth: 400,
};

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let minDate2 = tomorrow.toISOString().slice(0, 10);
let minDate = new Date().toISOString().slice(0, 10);
let maxDate = minDate.slice(0, 4) * 1 + 1;
maxDate = maxDate + "-12-31";
// console.log(minDate);
// let datesNow =
//   today.getDate() +
//   "-" +
//   parseInt(today.getMonth() + 1) +
//   "-" +
//   today.getFullYear() +
//   " - " +
//   tomorrow.getDate() +
//   "-" +
//   parseInt(tomorrow.getMonth() + 1) +
//   "-" +
//   tomorrow.getFullYear();

const BookingRoom = ({ showBooking, setShowBooking }) => {
  const [dates, setDates] = useState([today, tomorrow]);
  // const [date2, setDate2] = useState(minDate2);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };
  // const handleDate2 = (e) => {
  //   setDate2(e.target.value);
  // };
  const handleAdult = (e) => {
    setAdult(e.target.value);
  };
  const handleChildren = (e) => {
    setChildren(e.target.value);
  };
  const ageOfChildren = "req_age=12;";
  const numberOfChildren = ageOfChildren.repeat(children);

  // const checkDates = () => {
  let checkInDate = today.toISOString().slice(0, 10);
  let checkOutDate = tomorrow.toISOString().slice(0, 10);
  if (dates.length > 1) {
    // console.log(dates[0]);
    checkInDate = new Date();
    checkInDate.setDate(dates[0].getDate() + 0);
    checkInDate = checkInDate.toISOString().slice(0, 10);
    // checkInDate = dates[0].toISOString().slice(0, 10);
    console.log(checkInDate);
    checkOutDate = dates[1].toISOString().slice(0, 10);
  }
  // console.log(checkInDate, checkOutDate);
  // };

  // useEffect(() => {
  //   checkDates();
  // }, []);

  const url = `https://www.booking.com/hotel/pl/aparthotel-miodowa-krakow.pl.html?aid=304142;label=gen173nr-1DCAsotgFCGWFwYXJ0aG90ZWwtbWlvZG93YS1rcmFrb3dIHlgEaLYBiAEBmAEeuAEXyAEP2AED6AEB-AECiAIBqAIDuALtqLSNBsACAdICJDFhYjY2NDM4LTI1NzItNDhlYS1hMWY4LTU1NDE5YjYwNzI3ZtgCBOACAQ;sid=8eca526340932527514ab17dccd65fef;checkin=${checkInDate};checkout=${checkOutDate}; group_adults=${adult};group_children=${children};no_rooms=1;req_adults=${adult};${numberOfChildren}req_children=${children};`;
  // console.log(date);
  return (
    <Wrapper>
      <div className={showBooking ? "bookRoom showBookRoom" : "bookRoom"}>
        <h3>Rezerwacja</h3>
        <button
          className="closeBookRoom"
          onClick={() => {
            setShowBooking(false);
          }}
        >
          <ImCross />
        </button>
        <form className="bookForm">
          <div className="bookFormDates">
            <div
              className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
              style={containerStyles}
              // className="rainbow-p-vertical_xx-large rainbow-align-content_center"
              // theme={theme}
            >
              <DatePicker
                minDate={new Date()}
                label="Termin pobytu:"
                // placeholder={datesNow}
                selectionType="range"
                variant="single"
                value={dates}
                onChange={(dates) => setDates(dates)}
              />
            </div>
          </div>
          <h4>Liczba Gości:</h4>
          <div className="bookFormGuest">
            <div className="adultGuests">
              <label htmlFor="adults">Dorośli:</label>
              <input
                type="number"
                name="adults"
                value={adult}
                min={1}
                max={10}
                onChange={(e) => handleAdult(e)}
              />
            </div>
            <div className="childrenGuests">
              <label htmlFor="children">Dzieci:</label>
              <input
                type="number"
                name="children"
                value={children}
                min={0}
                max={10}
                onChange={(e) => handleChildren(e)}
              />
            </div>
          </div>
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="reserveBtnNow"
          >
            Sprawdź termin
          </a>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .bookRoom {
    width: 28vw;
    height: 60vh;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 5px 0 0 5px;
    color: #111;
    transition: 0.4s;
    transform: translateX(100%);
    position: fixed;
    top: 25%;
    right: 0;
    font-family: "Signika Negative", sans-serif;

    .closeBookRoom {
      position: absolute;
      top: 5%;
      left: 5%;
      background: transparent;
      cursor: pointer;
      border: none;
      color: #ddd;
      transition: 0.4s;
      font-size: 1rem;
      padding: 5px;
      :hover {
        color: var(--bookBtnColor);
      }
    }
    h3 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      color: var(--secondaryColor2);
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
  .showBookRoom {
    transform: translateX(0%);
    transition: 0.4s;
  }
  .bookForm {
    width: 28vw;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
  h4 {
    font-size: 1.2rem;
    color: var(--primaryColor);
    margin-bottom: -4vh;
  }
  .bookFormGuest {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 3%;
      input {
        /* margin-top: 5%; */
        width: 3vw;
        padding: 5px 0 5px 5px;
        border-radius: 5px;
        text-align: center;
        font-size: 1.2rem;
        border: solid 3px var(--bookBtnColor);
        background: #fff;
        color: #444;
        font-weight: 600;
        cursor: pointer;
      }
      label {
        font-size: 1.2rem;
        margin-right: 10px;
      }
    }
  }
  .bookFormDates {
    width: 100%;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    div {
      /* width: 100%; */
      width: 90%;
      display: flex;
      /* flex-direction: row; */
      justify-content: center;
      align-items: center;

      input {
        width: 100%;
        font-size: 1.2rem;
        border-radius: 5px;
        border: solid 3px var(--bookBtnColor);
      }
    }
    label {
      font-size: 1.2rem;
      margin-bottom: 10px;
      /* margin-right: 10px; */
      color: var(--primaryColor);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }
  }
  .reserveBtnNow {
    background: var(--bookBtnColor);
    padding: 10px 20px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.5s;
    :hover {
      box-shadow: 0 0 2px 2px white;
    }
  }
`;

export default BookingRoom;
