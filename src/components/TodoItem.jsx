import React, { useState } from "react";

const TodoItem = (props) => {
  const [itemState, setItemState] = useState(true);

  const clickItemHandler = () => {
    setItemState((preVal) => !preVal);
  };

  return (
    <li
      onClick={clickItemHandler}
      style={{ textDecoration: itemState ? null : "line-through" }}
    >
      {props.name}
    </li>
  );
};

export default TodoItem;
