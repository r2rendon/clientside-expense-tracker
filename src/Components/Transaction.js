import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className="list-group-item">
        {transaction.description}
        <br />
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="btn btn-danger btn-xs pull-right"
          onClick={() => deleteTransaction(transaction._id)}
        >
          x
        </button>
      </li>
    </>
  );
};
