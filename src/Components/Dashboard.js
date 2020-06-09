import React from "react";

//Components
import { Navbar } from "./Navbar";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
//import { GlobalProvider } from "../Context/GlobalState";
import { AddTransaction } from "./AddTransaction";

import "../App.css";

function Dashboard() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <div className="container" style={{ marginTop: 40 }}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default Dashboard;
