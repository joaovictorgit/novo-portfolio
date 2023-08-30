import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/home";
import About from "../screens/about/about";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Path;
