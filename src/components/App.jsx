import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItemInputChange = (event) => {
    setItem(event.target.value);
  };
  const handleAddItemClick = () => {
    setItemList((prevState) => {
      return [...prevState, item];
    });
    setItem("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={handleItemInputChange}
          value={item}
        />
        <button onClick={handleAddItemClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.length === 0 ? (
            <li>Empty list</li>
          ) : (
            itemList.map((item) => <li>{item}</li>)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
