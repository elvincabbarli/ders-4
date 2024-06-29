import { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");
  const handleAddTodo = () => {

    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    } else {
      setError("Todo elave et");
    }
  };

  return (
    <div>
      <h1>TODOS</h1>
      <input
        id="input"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Todo Elave Et"
      />
      <button onClick={handleAddTodo}>Add Todo</button> <br />
      <b style={{ color: "red" }}>{error}</b>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
