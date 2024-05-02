import React from "react";
import Nav from "./comp/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Rout/>
    </BrowserRouter>
  );
};

export default App;
