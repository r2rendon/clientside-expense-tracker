import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const totalAmount = transactions.map((transaction) => transaction.amount);
  const income = totalAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    totalAmount
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div
      className="card mb-3 shadow p-3 mb-5 bg-white rounded"
      style={{ width: 25 + "rem" }}
    >
      <div className="card-body">
        <div
          style={{
            float: "left",
            marginLeft: 15,
            paddingRight: 55,
            borderRight: `${1}px solid #dedede`,
          }}
        >
          <h4>INCOME</h4>
          <p style={{ color: "#32CD32", textAlign: "center" }}>${income}</p>
        </div>
        <div style={{ float: "right", marginRight: 15 }}>
          <h4 style={{ textAlign: "center" }}>EXPENSE</h4>
          <p style={{ color: "red", textAlign: "center" }}>-${expense}</p>
        </div>
      </div>
    </div>
  );
};
