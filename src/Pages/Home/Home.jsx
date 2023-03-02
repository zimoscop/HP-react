import React from "react";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/favorite">to favorite</Link>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
