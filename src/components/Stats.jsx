// Stats component
export default function Stats({ items }) {

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