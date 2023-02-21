import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import News from "./Components/News";
import Tourism from "./Components/Tourism";
import "./App.css";
import Navbar from "./Components/Navbar";

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
        </Routes>
      </BrowserRouter>
      <hr style={{ color: "#9c9c9c" }} />
      <div className="foot">&copy;Nagar Nigam Aligarh, 2023</div>
    </>
  );
}

export default App;
