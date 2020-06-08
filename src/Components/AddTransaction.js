import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      amount: +amount,
      description: description,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br /> (nevative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Amount"
          />
        </div>
        <button className="btn btn-outline-primary">Add Transaction</button>
      </form>
    </div>
  );
};
