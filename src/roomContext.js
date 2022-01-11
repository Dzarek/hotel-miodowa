import React, { Component } from "react";
import { items, itemsEN } from "./data";

let rooms = [];

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "wszystkie",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    size: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: true,
    language: "polish",
    isOpen: false,
    viewlanguage: false,
    polish: true,
    english: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen, viewlanguage: false });
  };

  handleTogglePolish = () => {
    this.setState({
      polish: true,
      english: false,
    });
    this.handleToggle();
    this.getData();
  };
  handleToggleEnglish = () => {
    this.setState({
      polish: false,
      english: true,
    });
    this.handleToggle();
    this.getDataEN();
  };
  handleToggleLanguage = () => {
    this.setState({ viewlanguage: !this.state.viewlanguage });
  };

  // getDataPL
  getData = () => {
    rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let minPrice = Math.min(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    let minSize = Math.min(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      size: minSize,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      language: "polish",
    });
  };
  getDataEN = () => {
    rooms = this.formatData(itemsEN);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let minPrice = Math.min(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    let minSize = Math.min(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      size: minSize,
      maxPrice,
      minPrice,
      maxSize,
      minSize,
      language: "english",
    });
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let { rooms, type, capacity, price, size } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    //transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by type
    if (type !== "wszystkie") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter((room) => room.size >= size);

    //change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          handleToggle: this.handleToggle,
          handleTogglePolish: this.handleTogglePolish,
          handleToggleEnglish: this.handleToggleEnglish,
          handleToggleLanguage: this.handleToggleLanguage,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
