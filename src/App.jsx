import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Tourism from "./Components/Tourism";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Home}></Route>
          <Route exact path="/tourism" element={Tourism}></Route>
          <Route exact path="/about" element={About}></Route>
          {/* <Route exact path="/login" element={Login}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
