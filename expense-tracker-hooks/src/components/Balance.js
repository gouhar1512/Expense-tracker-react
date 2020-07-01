import React from "react";

const Balance = ({ balance, income, expense }) => {
  return (
    <div className="balance">
      <div>
        <b>Your Balance</b>
        <span className="net-balance"> {balance}</span>
      </div>
      <div>
        <b>Income</b>
        <span className="income"> {income}</span>
      </div>
      <div>
        <b>Expense</b>
        <span className="expense"> {expense}</span>
      </div>
    </div>
  );
};

export default Balance;
