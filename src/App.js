import "./style.css";

export default function App() {
  return (
    <div>
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
    <div>
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

// List component
function PackingList() {
  return (
    <div> LIST </div>
  );
}

// Stats component
function Stats() {
  return (
    <footer> <em>You have X items in your list, and you already packed X (X%).</em></footer>
  );
}


