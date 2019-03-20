import React, { Component } from "react";
import Card from "../Card";
import range from "lodash/range";

class Reservation extends Component {
  state = {
    largestRoom: 0,
    rooms: [
      { adults: 1, children: 0 },
      { adults: 1, children: 0 },
      { adults: 1, children: 0 },
      { adults: 1, children: 0 }
    ]
  };
  componentDidMount() {
    const results = JSON.parse(window.localStorage.getItem("results"));

    if (results !== null) {
      const remainingRooms = this.state.rooms.slice(
        Number(results.largestRoom),
        3
      );
      this.setState({
        largestRoom: results.largestRoom,
        rooms: [...results.rooms, ...remainingRooms]
      });
    }
  }

  handleChange = (e, name, index, checked) => {
    if (name === "largestRoom" && !checked) {
      const reamaining = this.state.rooms.slice(Number(index), 4);
      reamaining.forEach(object => {
        object.adults = 1;
        object.children = 0;
      });
      console.log("!!!", reamaining);
      console.log("lenght:", this.state.rooms.length, "index: ", index - 1);
      this.setState({
        [name]: e.target.value - 1,
        rooms: [...this.state.rooms.slice(0, index), ...reamaining]
      });
    }

    if (name === "largestRoom" && checked) {
      this.setState({ [name]: Number(e.target.value) });
    }
    if (name === "children" || name === "adults") {
      this.setState({
        rooms: [
          ...this.state.rooms.slice(0, index),
          { ...this.state.rooms[index], [name]: Number(e.target.value) },
          ...this.state.rooms.slice(index + 1)
        ]
      });
    }
  };

  handleSubmit = () => {
    alert(
      `you have just booked ${this.state.largestRoom +
        1} rooms, refresh the page to see saved changes`
    );
    window.localStorage.clear();
    const results = {};
    results.rooms = this.state.rooms.slice(
      0,
      Number(this.state.largestRoom) + 1
    );
    results.largestRoom = this.state.largestRoom;
    window.localStorage.setItem("results", JSON.stringify(results));
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          {range(4).map(roomId => (
            <Card
              key={roomId}
              values={this.state.rooms[roomId]}
              largestRoom={this.state.largestRoom}
              index={roomId}
              handleChange={this.handleChange}
            />
          ))}
        </div>
        <button style={buttonStyle} onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

const buttonStyle = {
  backgroundColor: "blue",
  height: "50px",
  width: "150px",
  margin: "10px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: "5px"
};
export default Reservation;
