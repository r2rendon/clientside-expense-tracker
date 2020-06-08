import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Balance } from "./Components/Balance";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 40 }}>
        <Balance />
      </div>
    </div>
  );
}

export default App;
