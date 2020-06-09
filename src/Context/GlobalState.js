import React, { createContext, useReducer, useState, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import jwt from "jsonwebtoken";

let initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const user = jwt.verify(
        localStorage.getItem("currentUser"),
        process.env.REACT_APP_PRIVATE_KEY
      );

      const apiTransactions = await axios.get(
        `http://localhost:5000/transactions/${user._id}`
      );
      console.log(apiTransactions.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: apiTransactions.data,
      });
    } catch (err) {
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: err.response.data,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      console.log(id);
      await axios.delete(`http://localhost:5000/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data,
      });
    }

    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/transaction",
        transaction,
        config
      );
      console.log(response);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
