import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];
function App() {
  const [items, setItem] = useState([]);
  const handleAnswer = item;
  const handleItem = (item) => {
    return setItem((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    return setItem((items) => items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    return setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteAllitem = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all List."
    );
    if (confirmed) setItem([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={handleToggle}
        onDeleteAll={deleteAllitem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
