import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import axios from "axios";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const submit = async (e) => {
    e.preventDefault();
    const user = await axios.post("http://localhost:5000/auth", {
      token: localStorage.getItem("currentUser"),
    });
    const newTransaction = {
      amount: expense === false ? +amount : -Math.abs(amount),
      description: description,
      userId: user.data._id,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setDescription("");
  };

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setExpense(isChecked);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control col-md-8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control col-md-8"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Amount"
          />
          <div class="form-check" style={{ marginTop: 10 }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              checked={expense}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Expense
            </label>
          </div>
        </div>
        <button className="btn btn-outline-primary">Add Transaction</button>
      </form>
    </div>
  );
};
