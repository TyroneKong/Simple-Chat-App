import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <div className="home__title">
        <h1>Welcome to simple Chat !</h1>
        <p>Please enter a room number to join!</p>
      </div>
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
