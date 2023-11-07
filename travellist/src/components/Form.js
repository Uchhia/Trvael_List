import { useState } from "react";
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      description,
      qty,
      packed: false,
      id: Date.now(),
    };

    console.log(newData);
    if (description === "") return;
    onAddItem(newData);
    setDescription("");
    setQty(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip </h3>
      <select onChange={(e) => setQty(Number(e.target.value))} value={qty}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
