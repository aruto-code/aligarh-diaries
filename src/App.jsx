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
import New from "./Components/New";
import Amu from "./Components/Tourism/Amu";
import Banks from "./Components/Tourism/Banks";
import Business from "./Components/Tourism/Business";
import Hotels from "./Components/Tourism/Hotels";
import Market from "./Components/Tourism/Market";
import TouristSpots from "./Components/Tourism/TouristSpots";
import Locker from "./Components/Dashboard/Locker";
import Bills from "./Components/Dashboard/Bills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Basic Routes */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/feedback" element={<Feedback />}></Route>
          <Route exact path="/news" element={<News />}></Route>
          <Route exact path="/tourism" element={<Tourism />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/comingsoon" element={<ComingSoon />}></Route>

          <Route exact path="/new" element={<New />}></Route>

          {/* Tourism Routes */}
          <Route exact path="/tourism/amu" element={<Amu />}></Route>
          <Route exact path="/tourism/banks" element={<Banks />}></Route>
          <Route exact path="/tourism/business" element={<Business />}></Route>
          <Route exact path="/tourism/hotels" element={<Hotels />}></Route>
          <Route exact path="/tourism/market" element={<Market />}></Route>
          <Route exact path="/tourism/spots" element={<TouristSpots />}></Route>

          {/* Dashboard Routes */}
          <Route exact path="/dashboard/locker" element={<Locker />}></Route>
          <Route exact path="/dashboard/bills" element={<Bills />}></Route>
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
