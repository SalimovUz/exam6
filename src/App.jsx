import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Header, Home, Movie, Subscription, Support } from "./page";
import Footer from "./page/Footer";

const App = () => {
  return (
    <div className="bg-[#141414]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscription" element={<Subscription/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
