import React from "react";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "./Pages/Favorite/Favorite";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;
