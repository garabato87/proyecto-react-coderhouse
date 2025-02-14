import { useState, useEffect } from "react";
import { ProductCard } from "../../common/productCard/productCard";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  console.log(name);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!name) {
          setItems(data); // Asignar los personajes
        } else {
          let productsFiltered = data.filter(
            (elem) => elem.category.toLowerCase() === name
          );
          setItems(productsFiltered);
          console.log(productsFiltered);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [name]);

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
            id={item.id}
            {...item}
          />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
