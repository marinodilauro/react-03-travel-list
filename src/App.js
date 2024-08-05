import { useState } from "react";

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
]; */


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

// Logo component
function Logo() {
  return (
    <div className="logo">
      <img src="./map.png" alt="Map"></img>
      <h1>
        Travel PackMate
      </h1>
      <img src="./luggage.png" alt="Luggage"></img>
    </div>
  );
}

// Form component
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

// List component
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map(item => <Item item={item} key={item.id} />)}
      </ul>
    </div>
  );
}

// List item component
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button style={{ color: "red" }}>&times;</button>
    </li >
  );
}

// Stats component
function Stats() {
  return (
    <footer className="stats"> <em>You have X items in your list, and you already packed X (X%).</em></footer>
  );
}


