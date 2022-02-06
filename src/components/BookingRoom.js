import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "react-rainbow-components";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { ImCross } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const containerStyles = {
  maxWidth: 400,
};

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const BookingRoom = ({ showBooking, setShowBooking }) => {
  const context = useContext(RoomContext);
  const { polish } = context;
  const [dates, setDates] = useState([today, tomorrow]);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  const handleAdult = (e) => {
    setAdult(e.target.value);
  };
  const handleChildren = (e) => {
    setChildren(e.target.value);
  };
  const ageOfChildren = "req_age=12;";
  const numberOfChildren = ageOfChildren.repeat(children);

  let checkInDate = today.toISOString().slice(0, 10);
  let checkOutDate = tomorrow.toISOString().slice(0, 10);
  if (dates.length > 1) {
    checkInDate = new Date();
    checkInDate.setDate(dates[0].getDate() + 0);
    checkInDate = checkInDate.toISOString().slice(0, 10);
    checkOutDate = dates[1].toISOString().slice(0, 10);
  }

  const url = `https://www.booking.com/hotel/pl/aparthotel-miodowa-krakow.pl.html?aid=304142;label=gen173nr-1DCAsotgFCGWFwYXJ0aG90ZWwtbWlvZG93YS1rcmFrb3dIHlgEaLYBiAEBmAEeuAEXyAEP2AED6AEB-AECiAIBqAIDuALtqLSNBsACAdICJDFhYjY2NDM4LTI1NzItNDhlYS1hMWY4LTU1NDE5YjYwNzI3ZtgCBOACAQ;sid=8eca526340932527514ab17dccd65fef;checkin=${checkInDate};checkout=${checkOutDate}; group_adults=${adult};group_children=${children};no_rooms=1;req_adults=${adult};${numberOfChildren}req_children=${children};`;

  return (
    <Wrapper>
      <div className={showBooking ? "bookRoom showBookRoom" : "bookRoom"}>
        <h3>{polish ? "Rezerwacja" : "Reservation"}</h3>
        <button
          className="closeBookRoom"
          onClick={() => {
            setShowBooking(false);
          }}
        >
          <ImCross />
        </button>
        <div className="bookByPhone">
          <h4>
            <FaPhoneAlt className="iconReact" /> +48 124467130
          </h4>
          <h4>
            <MdMail className="iconReact" /> rezerwacja@hotelmiodowa.pl
          </h4>
          <p>{polish ? "lub przez booking.com" : "or by booking.com"}</p>
        </div>
        <form className="bookForm">
          <div className="bookFormDates">
            <div
              className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
              style={containerStyles}
            >
              <DatePicker
                minDate={new Date()}
                label={polish ? "Termin pobytu:" : "Dates:"}
                selectionType="range"
                variant="single"
                value={dates}
                onChange={(dates) => setDates(dates)}
              />
            </div>
          </div>
          <h4>{polish ? "Liczba Gości:" : "Guests:"}</h4>
          <div className="bookFormGuest">
            <div className="adultGuests">
              <label htmlFor="adults">{polish ? "Dorośli:" : "Adults:"}</label>
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
              <label htmlFor="children">
                {polish ? "Dzieci:" : "Children"}
              </label>
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
            {polish ? "Sprawdź termin" : "Book now"}
          </a>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .bookRoom {
    width: 28vw;
    height: 75vh;
    background: var(--languageBg);
    border-radius: 5px 0 0 5px;
    color: #111;
    transition: 0.4s;
    transform: translateX(100%);
    position: fixed;
    z-index: 991;
    top: 18%;
    right: 0;
    font-family: "Signika Negative", sans-serif;
    @media screen and (max-width: 800px) {
      width: 100vw;
      height: 100vh;
      background: var(--bookingBg);
      top: 0;
      right: 0;
      transform: translateX(100%);
      border-radius: 5px;
      border: 2px solid var(--secondaryColor2);
    }
    .closeBookRoom {
      position: absolute;
      top: 5%;
      left: 5%;
      background: transparent;
      cursor: pointer;
      border: none;
      color: var(--primaryColor);
      transition: 0.4s;
      font-size: 1rem;
      padding: 5px;
      :hover {
        color: var(--bookBtnColor);
      }
    }
    h3 {
      position: absolute;
      top: 6%;
      left: 50%;
      transform: translateX(-50%);
      color: var(--secondaryColor2);
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 3px;
      @media screen and (max-width: 800px) {
        top: 10%;
      }
    }
  }
  .showBookRoom {
    transform: translateX(0%);
    transition: 0.4s;
  }
  .bookByPhone {
    position: absolute;
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      top: 22%;
    }
    @media (orientation: landscape) and (max-width: 800px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    h4 {
      margin: 1vh auto;
      display: flex;
      align-items: center;
      .iconReact {
        color: var(--secondaryColor2);
        margin-right: 10px;
        font-size: 1.5rem;
      }
    }
    p {
      margin-top: 5vh;
      color: var(--secondaryColor2);
      font-size: 1.1rem;
      @media screen and (max-width: 800px) {
        margin-top: 8vh;
      }
      @media (orientation: landscape) and (max-width: 800px) {
        width: 100%;
        text-align: center;
        margin-top: 1vh;
      }
    }
  }
  .bookForm {
    width: 28vw;
    height: 55%;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: var(--primaryColor);
    @media screen and (max-width: 800px) {
      width: 90vw;
      height: 50%;
      top: 68%;
    }
    @media (orientation: landscape) and (max-width: 800px) {
      height: 60%;
      top: 60%;
    }
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
        @media screen and (max-width: 800px) {
          width: 15vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          font-size: 1.4rem;
        }
        @media (orientation: landscape) and (max-width: 800px) {
          width: 10vw;
          padding: 2px;
          font-size: 1.1rem;
        }
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
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 800px) {
        width: 98%;
      }
      input {
        width: 100%;
        font-size: 1.2rem;
        border-radius: 5px;
        border: solid 3px var(--bookBtnColor);
        @media screen and (max-width: 800px) {
          font-size: 1.4rem;
        }
      }
    }
    label {
      font-size: 1.2rem;
      margin-bottom: 10px;
      color: var(--primaryColor);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      @media screen and (max-width: 800px) {
        width: 95%;
      }
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
