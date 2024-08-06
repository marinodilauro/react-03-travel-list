// List item component
export default function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <label className="checkbox_container">
        <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
        <span className="checkmark"></span>
      </label>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
      <button onClick={() => onDeleteItems(item.id)} style={{ color: "red" }}>&times;</button>
    </li >
  );
}