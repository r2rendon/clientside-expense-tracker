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

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: apiTransactions.data,
      });
    } catch (err) {
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: err.response.data.error,
      });
    }
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
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
