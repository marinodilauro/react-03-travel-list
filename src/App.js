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

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItem} />
      <Stats items={items} />
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
      <div className="input_container">
        <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

// List component
function PackingList({ items, onDeleteItems, onToggleItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'status') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));;

  return (
    <div className="list">

      <div className="actions">
        <span>Sort by</span>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">input order</option>
          <option value="description">description</option>
          <option value="status">status</option>
        </select>
      </div>

      <ul>
        {sortedItems.map(item => <Item item={item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />)}
      </ul>
    </div>
  );
}

// List item component
function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <label class="checkbox_container">
        <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
        <span class="checkmark"></span>
      </label>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button onClick={() => onDeleteItems(item.id)} style={{ color: "red" }}>&times;</button>
    </li >
  );
}

// Stats component
function Stats({ items }) {

  if (!items.length) return (
    <footer className="stats">
      Start adding some items to your packing list
    </footer>
  );

  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? 'You got everything! Ready to go ✈️' : `🧳You have ${numItems} items in your list, and you already packed ${numPacked} (${percentage}%).`}
    </footer>
  );
}


