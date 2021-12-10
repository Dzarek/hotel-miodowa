import React, { useState } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
// import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import plLocale from "date-fns/locale/pl";

const today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let minDate2 = tomorrow.toISOString().slice(0, 10);
let minDate = new Date().toISOString().slice(0, 10);
let maxDate = minDate.slice(0, 4) * 1 + 1;
maxDate = maxDate + "-12-31";

const BookingRoom = ({ showBooking, setShowBooking }) => {
  const [date, setDate] = useState(minDate);
  const [date2, setDate2] = useState(minDate2);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [value, setValue] = useState([null, null]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleDate2 = (e) => {
    setDate2(e.target.value);
  };
  const handleAdult = (e) => {
    setAdult(e.target.value);
  };
  const handleChildren = (e) => {
    setChildren(e.target.value);
  };
  const ageOfChildren = "req_age=12;";
  const numberOfChildren = ageOfChildren.repeat(children);
  console.log(numberOfChildren);
  const url = `https://www.booking.com/hotel/pl/aparthotel-miodowa-krakow.pl.html?aid=304142;label=gen173nr-1DCAsotgFCGWFwYXJ0aG90ZWwtbWlvZG93YS1rcmFrb3dIHlgEaLYBiAEBmAEeuAEXyAEP2AED6AEB-AECiAIBqAIDuALtqLSNBsACAdICJDFhYjY2NDM4LTI1NzItNDhlYS1hMWY4LTU1NDE5YjYwNzI3ZtgCBOACAQ;sid=8eca526340932527514ab17dccd65fef;checkin=${date};checkout=${date2}; group_adults=${adult};group_children=${children};no_rooms=1;req_adults=${adult};${numberOfChildren}req_children=${children};`;
  console.log(value);
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
            <div className="arrivalDate">
              {/* <label htmlFor="arrivalDate">Zameldowanie:</label> */}
              {/* <input
                type="date"
                name="arrivalDate"
                value={date}
                min={minDate}
                max={maxDate}
                onChange={(e) => handleDate(e)}
              /> */}
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={date}
                  onChange={(e) => handleDate(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={plLocale}
              >
                <DateRangePicker
                  startText="Check-in"
                  endText="Check-out"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </div>
            {/* <div className="departureDate">
              <label htmlFor="departureDate">Wymeldowanie:</label>
              <input
                type="date"
                name="departureDate"
                value={date2}
                min={minDate2}
                max={maxDate}
                onChange={(e) => handleDate2(e)}
              />
            </div> */}
          </div>
          <div className="bookFormGuest">
            <div className="adultGuests">
              <label htmlFor="adults">Liczba Dorosłych:</label>

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
              <label htmlFor="children">Liczba Dzieci:</label>
              <input
                type="number"
                name="children"
                value={children}
                min={1}
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
    width: 30vw;
    height: 50vh;
    background: rgba(0, 0, 0, 0.8);
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
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .showBookRoom {
    transform: translateX(0%);
    transition: 0.4s;
  }
  .bookForm {
    width: 25vw;
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
  .bookFormDates,
  .bookFormGuest {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 0 5%;
      width: 10vw;
      input {
        margin-top: 5%;
        width: 10vw;
        padding: 5px 0 5px 15px;
        border-radius: 10px;
        text-align: center;
        font-size: 1rem;
        border: solid 2px var(--bookBtnColor);
        background: #ccc;
        color: var(--bookBtnColor);
        font-weight: 600;
        cursor: pointer;
      }
      label {
        font-size: 1.2rem;
      }
    }
  }
  .bookFormGuest {
    div {
      input {
        width: 3vw;
        font-size: 1.2rem;
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
