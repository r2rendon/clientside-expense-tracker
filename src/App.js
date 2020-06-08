import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 40 }}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
