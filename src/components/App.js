import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((Items) => Items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((Items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    window.confirm("Are you sure you want delete all items?") && setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onClearItems={handleClearItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
