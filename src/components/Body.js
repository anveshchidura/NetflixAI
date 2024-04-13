// Body.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MoviePage from "./MoviePage";

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};

export default Body;
