
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

// List component
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(item => <Item item={item} />)}
      </ul>
    </div>
  );
}

// List item component
function Item({ item }) {
  return (
    <li>
      <span>{item.quantity} {item.description}</span>
      <button>&times;</button>
    </li>
  );
}

// Stats component
function Stats() {
  return (
    <footer className="stats"> <em>You have X items in your list, and you already packed X (X%).</em></footer>
  );
}


