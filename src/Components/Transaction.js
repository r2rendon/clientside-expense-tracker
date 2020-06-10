import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li class="list-group-item">
        <span>{transaction.description}</span>
        <br />
        <span style={{ color: sign === "+" ? "#32CD32" : "red" }}>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="btn btn-outline-dark btn-xs float-right"
          onClick={() => deleteTransaction(transaction._id)}
        >
          X
        </button>
      </li>
    </>
  );
};
