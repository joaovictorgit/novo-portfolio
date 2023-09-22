import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/home";
import About from "../screens/about/about";
import Portfolio from "../screens/portfolio/portfolio";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
    </Routes>
  );
};

export default Path;
