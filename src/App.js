import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";


const allCategories = ["🔥24th Trending", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "🔥24th Trending") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
    <h1>Live Spaces</h1>
    <p><img src="https://image.similarpng.com/very-thumbnail/2021/01/Approval-symbol-in-badge-on-transparent-background-PNG.png"/> All NFTs on cyber either belong to or were minted by their space creator.</p>
      <section className="menu section">

        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;