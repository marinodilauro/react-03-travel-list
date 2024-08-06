import { useState, useEffect } from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

export default function App() {
  const [items, setItems] = useState(() => {
    // Recupera gli elementi dal localStorage all'inizializzazione
    const savedItems = localStorage.getItem("packingList");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Salva gli elementi nel localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("packingList", JSON.stringify(items));
  }, [items]);

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
  }

  function handleCloseModal() {
    setIsModalOpen(false);
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
