import React from "react";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Map from "../pages/Map";
import { Route, Routes } from "react-router-dom";

const Info = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Map />} />
    </Routes>
  );
};

export default Info;
