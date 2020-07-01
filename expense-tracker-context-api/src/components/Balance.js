import React, { useContext } from "react";
import ExpenseContext from "../context/expenseContext";

const Balance = () => {
  const expenseContext = useContext(ExpenseContext);

  const { balance, income, expense } = expenseContext;
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
        <span className="expense"> {Math.abs(expense)}</span>
      </div>
    </div>
  );
};

export default Balance;
