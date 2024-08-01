import "./style.css";

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
    <div className="list"> LIST </div>
  );
}

// Stats component
function Stats() {
  return (
    <footer className="stats"> <em>You have X items in your list, and you already packed X (X%).</em></footer>
  );
}


