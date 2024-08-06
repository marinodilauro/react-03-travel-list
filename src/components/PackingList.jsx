import { useState } from "react";
import Item from "./Item.jsx";

// List component
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "status")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <div className="actions">
        <span>Sort by</span>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">input order</option>
          <option value="description">description</option>
          <option value="status">status</option>
        </select>

        <button onClick={onClearList} disabled={!items.length}>
          Clear list
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
