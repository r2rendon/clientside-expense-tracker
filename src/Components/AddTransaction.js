import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import axios from "axios";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submit = async (e) => {
    e.preventDefault();
    const user = await axios.post("http://localhost:5000/auth", {
      token: localStorage.getItem("currentUser"),
    });
    const newTransaction = {
      amount: +amount,
      description: description,
      userId: user.data._id,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control col-md-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">
            Amount <br /> (nevative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            className="form-control col-md-4"
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
