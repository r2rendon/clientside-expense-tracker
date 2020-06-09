import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li>{transaction.description}</li>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction._id)}>x</button>
    </div>
  );
};
