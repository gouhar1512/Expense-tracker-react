import React from "react";

const ListItem = (props) => {
  const {
    item: { id, text, price },
    removeItem,
  } = props;

  return (
    <div className="list">
      <div>{text}</div>
      <div>{price}</div>
      <div>
        <button onClick={removeItem} itemkey={id}>
          x
        </button>
      </div>
    </div>
  );
};

export default ListItem;
