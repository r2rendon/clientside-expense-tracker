import React from "react";

export const IncomeExpenses = () => {
  const income = 120;
  const expense = 12;
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
