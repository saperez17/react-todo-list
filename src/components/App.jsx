import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./TodoAddSection";
function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItemClick = (item) => {
    setItemList((prevState) => {
      return [...prevState, item];
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleAddItemClick} />

      <div>
        <ul>
          {itemList.length === 0 ? (
            <li>Empty list</li>
          ) : (
            itemList.map((item, idx) => <TodoItem key={idx} name={item} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
