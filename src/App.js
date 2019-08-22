import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Focus from "./components/Focus";

function App() {
  return (
    <div className="App">
      <Header title="Focuser" />
      <div className="wrapper">
        <div className="container">
          <Focus />
        </div>
      </div>
      <Footer author="Olivier Chemla" />
    </div>
  );
}

export default App;
