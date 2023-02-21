import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import News from "./Components/News";
import Tourism from "./Components/Tourism";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/feedback" element={<Feedback />}></Route>
          <Route exact path="/news" element={<News />}></Route>
          <Route exact path="/tourism" element={<Tourism />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>
        </Routes>
      </BrowserRouter>
      <hr color="#fff" />
      <div className="foot" style={{ color: "white" }}>
        &copy;Nagar Nigam Aligarh, 2023
      </div>
    </>
  );
}

export default App;
