import React from "react";
import { useContext } from "react";
import { RoomContext } from "../roomContext";
import styled from "styled-components";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    size,
    minSize,
    maxSize,
    breakfast,
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["wszystkie", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <Wrapper className="filter-container">
      <h2 className="title">Filtruj Pokoje</h2>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">typ pokoju:</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests type */}
        <div className="form-group">
          <label htmlFor="capacity">ilość osób:</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            Cena pokoju do: <span>{price} zł</span>
          </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className=" priceLine"
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">
            Rozmiar pokoju od:{" "}
            <span>
              {size} m<sup>2</sup>
            </span>
          </label>
          <input
            type="range"
            name="size"
            min={minSize}
            max={maxSize}
            id="size"
            value={size}
            onChange={handleChange}
            className=" priceLine"
          />
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <label htmlFor="breakfast">
            śniadanie: <span>wliczone w cenę</span>
          </label>
          <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            checked={breakfast}
            className="breakfastCheckbox"
            //   onChange={handleChange}
            // disabled
          />
        </div>
        {/* end extras */}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondaryColor2);
  padding: 20px;
  border-radius: 5px;
  .title {
    font-size: 2rem;
  }
  .filter-form {
    font-family: var(--buttonFont);
    font-size: 1.2rem;
    text-transform: lowercase;
    width: 100%;
    .form-group {
      border-bottom: 1px solid var(--secondaryColor2);
      padding-bottom: 10px;
      width: 100%;
      margin: 1vh auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      :nth-last-of-type(1) {
        border-bottom: none;
      }
      span {
        color: var(--secondaryColor2);
        margin-left: 5px;
      }
      input,
      select {
        width: 100%;
        margin: 1vh auto;
        text-align: center;
        padding: 5px;
        font-size: 1.2rem;
        font-family: var(--buttonFont);
        text-transform: uppercase;
        color: var(--secondaryColor2);
        background: #eee;
        border-radius: 5px;
        font-weight: bold;
      }
    }
    .breakfastCheckbox {
      width: 20px;
      height: 20px;
    }
  }
`;

export default RoomsFilter;
