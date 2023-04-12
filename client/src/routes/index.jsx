import React from "react";
import HomePage from "../pages/home";
import NotFound from "../pages/not-found";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
