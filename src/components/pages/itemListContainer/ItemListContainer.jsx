import { useState, useEffect } from "react";
import { ProductCard } from "../../common/productCard/productCard";
import { products } from "../../../products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(products);
      } else {
        reject({ statusCode: 400, message: "No se pudo cargar los productos" });
      }
    });

    getProduct
      .then((response) => {
        console.log(response);

        setItems(response);
      })
      .catch((err) => {
        console.log("Se ejecuta el catch");
        console.error(err);
      });
  }, []);

  return (
    <>
      <h3>Item List Container</h3>

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
    </>
  );
};

export default ItemListContainer;
