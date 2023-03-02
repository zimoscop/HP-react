import React from "react";
import { Favorite } from "./Pages/Favorite/Favorite";
// import { Footer } from "./components/Footer/Footer";
// import { Header } from "./components/Header/Header";
// import { Main } from "./components/Main/Main";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Home />
      <Favorite />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
