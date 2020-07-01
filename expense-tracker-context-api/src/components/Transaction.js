import React, { useState, useContext } from "react";
import ExpenseContext from "../context/expenseContext";

const Transaction = (props) => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");

  const expenseContext = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "" || price === "") {
      alert("Please enter item and price both");
      return;
    }
    expenseContext.addTransaction(text, parseInt(price));

    setText("");
    setPrice("");
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "text") setText(value);
    else if (e.target.name === "price") setPrice(value);
  };

  return (
    <div className="transaction">
      <form onSubmit={onSubmit}>
        <b>Add new transaction</b>
        <div>
          <b>Item </b>
          <input
            className="item-text"
            name="text"
            value={text}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div>
          <b>Amount </b>
          <input
            className="item-amount"
            name="price"
            value={price}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div>
          <input type="submit" value="Add transaction" />
        </div>
      </form>
    </div>
  );
};

export default Transaction;
