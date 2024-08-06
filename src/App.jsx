import { useState } from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
    setIsModalOpen(false);
  }

  function handleShowModal() {
    setIsModalOpen(true);
    // console.log(isModalOpen);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    // console.log(isModalOpen);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
        onShowModal={handleShowModal}
        onCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
      <Stats items={items} />
    </div>
  );
}
