import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { RoomContext } from "../roomContext";

import { ImCross } from "react-icons/im";

import DatePicker from "react-datepicker";
import "../react-datepicker.css";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
registerLocale("pl", pl);

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const BookingRoom = ({ showBooking, setShowBooking }) => {
  const context = useContext(RoomContext);
  const { polish } = context;
  const [rooms, setRooms] = useState(1);
  const [people, setPeople] = useState(2);
  const [showKW, setShowKW] = useState(false);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleAdult = (e) => {
    setRooms(e.target.value);
  };
  const handleChildren = (e) => {
    setPeople(e.target.value);
  };
  const closeReservation = () => {
    setShowBooking(false);
    setShowKW(false);
    // setStartDate(today);
    // setEndDate(tomorrow);
  };

  let checkInDate = today.toISOString().slice(0, 10);
  let checkOutDate = tomorrow.toISOString().slice(0, 10);
  if (startDate && endDate) {
    checkInDate = startDate.toISOString().slice(0, 10);
    checkOutDate = endDate.toISOString().slice(0, 10);
  }

  let maxPeople = rooms * 4;
  const peoplePerRoom = Math.floor(people / rooms);
  const moduloPeople = people % rooms;
  const numberRooms = `{"count":${peoplePerRoom}},`;
  const numberRoomsRepeat = numberRooms.repeat(rooms).slice(0, -1);
  const lastChar = Number(numberRoomsRepeat[numberRoomsRepeat.length - 2]);
  let lastCharUpdate = lastChar + moduloPeople;
  lastCharUpdate = lastCharUpdate.toString();
  const numberRoomsRepeat2 = numberRoomsRepeat.slice(0, -2);
  const finalRoomsRepeat = numberRoomsRepeat2.concat(lastCharUpdate, "}");
  useEffect(() => {
    setPeople(rooms * 1);
    // eslint-disable-next-line
  }, [maxPeople]);

  const url2 = `https://be-v2.kwhotel.com/${polish ? "pl" : "en"}/${
    process.env.REACT_APP_ACCESS_TOKEN
  }/0?checkIn=${checkInDate}&checkOut=${checkOutDate}&occupancy=[${finalRoomsRepeat}]`;
  const urlHash = `#`;

  return (
    <>
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

          <form className="bookForm">
            <h4>{polish ? "Data Pobytu:" : "Dates of Stay:"}</h4>
            <div className="bookFormDates">
              <DatePicker
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                minDate={new Date()}
                selected={startDate}
                locale="pl"
                dateFormat="Pp"
              />
            </div>
            <h4>{polish ? "Liczba Gości:" : "Guests:"}</h4>
            <div className="bookFormGuest">
              <div className="adultGuests">
                <label htmlFor="adults">{polish ? "Pokoje:" : "Rooms:"}</label>
                <input
                  type="number"
                  name="adults"
                  value={rooms}
                  min={1}
                  max={37}
                  onChange={(e) => handleAdult(e)}
                />
              </div>
              <div className="childrenGuests">
                <label htmlFor="children">{polish ? "Osoby:" : "People"}</label>
                <input
                  type="number"
                  name="children"
                  value={people}
                  min={rooms}
                  max={maxPeople}
                  onChange={(e) => handleChildren(e)}
                />
              </div>
            </div>
            <a
              href={urlHash}
              onClick={() => setShowKW(true)}
              className="reserveBtnNow"
              style={{ cursor: "pointer" }}
            >
              {polish ? "Sprawdź termin" : "Book now"}
            </a>
          </form>
        </div>
        {showKW && (
          <div className="kwBooking">
            <h3>{polish ? "Rezerwacja" : "Reservation"}</h3>
            <iframe src={url2} frameborder="0" title="KWReservation"></iframe>
            <ImCross onClick={closeReservation} />
          </div>
        )}
      </Wrapper>
      <Wrapper2>
        {showBooking && (
          <div className="kwBooking">
            <h3>{polish ? "Rezerwacja" : "Reservation"}</h3>
            <iframe src={url2} frameborder="0" title="KWReservation"></iframe>
            <ImCross onClick={closeReservation} />
          </div>
        )}
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }

  .kwBooking {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999;
    background: var(--languageBg);
    h3 {
      font-size: 1.8rem;
      font-family: var(--buttonFont);
      color: var(--secondaryColor2);
      letter-spacing: 3px;
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translate(-50%);
      text-transform: uppercase;
    }
    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -45%);
      width: 80vw;
      height: 85vh;
      border: 4px solid var(--bookBtnColor);
      border-radius: 10px;
    }
    svg {
      position: absolute;
      top: 5%;
      right: 5%;
      color: var(--secondaryColor2);
      font-size: 2rem;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        color: var(--bookBtnColor);
      }
    }
  }
  .bookRoom {
    width: 30vw;
    height: 75vh;
    background: var(--languageBg);
    border-radius: 5px 0 0 5px;
    border: 2px solid var(--bookBtnColor);
    border-right: none;
    color: #111;
    transition: 0.4s;
    transform: translateX(100%);
    position: fixed;
    z-index: 991;
    top: 18%;
    right: 0;
    font-family: "Signika Negative", sans-serif;

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
      top: 4%;
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
    top: 70%;
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
    height: 85%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    margin-bottom: 0vh;
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
    border: none;
    font-family: var(--buttonFont);
    :hover {
      letter-spacing: 2px;
    }
  }
`;

const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  .kwBooking {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999;
    background: var(--servicesHomeBg);
    border: 4px solid var(--bookBtnColor);

    h3 {
      font-family: var(--buttonFont);
      color: var(--secondaryColor2);
      letter-spacing: 3px;
      position: absolute;
      transform: translate(-50%);
      text-transform: uppercase;
      font-size: 1.5rem;
      top: 4%;
      left: 35%;
    }

    iframe {
      position: absolute;
      left: 50%;
      width: 100vw;
      height: 85vh;
      top: 100%;
      transform: translate(-50%, -100%);
      border: none;
      border-left: 4px solid var(--bookBtnColor);
      border-right: 4px solid var(--bookBtnColor);
      border-radius: 0px;
    }

    svg {
      position: absolute;
      right: 5%;
      color: var(--secondaryColor2);
      cursor: pointer;
      transition: 0.3s;
      font-size: 1.5rem;
      top: 4.5%;
      :hover {
        color: var(--bookBtnColor);
      }
    }
  }
`;
export default BookingRoom;
