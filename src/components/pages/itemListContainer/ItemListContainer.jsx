import { useState, useEffect } from "react";
import { ProductCard } from "../../common/productCard/productCard";

import "./itemListContainer.css";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data); // Asignar los personajes
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h3>Item List Container</h3>
      <div className="list-container">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            /* image={item.imageUrl}
          title={item.title}
          price={item.price}
          description={item.description} */

            {...item}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
