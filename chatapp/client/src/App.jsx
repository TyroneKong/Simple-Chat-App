import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/components/Home/Home";
import ChatRoom from "../src/components/ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:roomId" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
