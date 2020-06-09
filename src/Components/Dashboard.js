import React, { useEffect } from "react";

//Components
import Navbar from "./Navbar";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
//import { GlobalProvider } from "../Context/GlobalState";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../Context/GlobalState";

function Dashboard() {
  useEffect(() => {
    document.body.classList.remove("loginBckg");
  }, []);

  return (
    <GlobalProvider>
      <Navbar />
      <div className="container" style={{ marginTop: 40 }}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default Dashboard;
