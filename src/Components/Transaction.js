import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li>{transaction.description}</li>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button>x</button>
    </div>
  );
};
