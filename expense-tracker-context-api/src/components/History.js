import React from "react";
import ListItem from "./ListItem";

const History = (props) => {
  const { removeItem, transHistory } = props;
  return (
    <div className="history" style={{ overflow: "auto", maxHeight: "200px" }}>
      <b>History</b>
      {transHistory.map((item) => (
        <ListItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default History;
