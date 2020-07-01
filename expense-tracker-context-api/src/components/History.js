import React, { useContext } from "react";
import ExpenseContext from "../context/expenseContext";
import ListItem from "./ListItem";

const History = () => {
  const expenseContext = useContext(ExpenseContext);

  const { transHistory } = expenseContext;
  return (
    <div className="history" style={{ overflow: "auto", maxHeight: "200px" }}>
      <b>History</b>
      {transHistory.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default History;
