import React, { createContext, useReducer } from "react";
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
      const user = await axios.post(
        "https://expense-tracker-challenge.herokuapp.com/auth",
        {
          token: localStorage.getItem("currentUser"),
        }
      );
      const apiTransactions = await axios.get(
        `https://expense-tracker-challenge.herokuapp.com/transactions/${user.data._id}`
      );
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
      await axios.delete(
        `https://expense-tracker-challenge.herokuapp.com/transactions/${id}`
      );

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
        "https://expense-tracker-challenge.herokuapp.com/transaction",
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
