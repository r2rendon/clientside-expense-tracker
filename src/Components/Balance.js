import React, { useContext } from "react";

export const Balance = () => {
  const totalBal = 100;
  return (
    <>
      <h3>Your Balance</h3>
      <h4>${totalBal}</h4>
    </>
  );
};
