import React, { useContext } from "react";
import ExpenseContext from "../context/expenseContext";

const ListItem = (props) => {
  const expenseContext = useContext(ExpenseContext);

  const { id, text, price } = props.item;

  return (
    <div className="list">
      <div>{text}</div>
      <div>{price}</div>
      <div>
        <button onClick={expenseContext.removeItem} itemkey={id}>
          x
        </button>
      </div>
    </div>
  );
};

export default ListItem;
