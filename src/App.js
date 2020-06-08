import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";
import { GlobalProvider } from "./Context/GlobalState";
import { AddTransaction } from "./Components/AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: 40 }}>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
