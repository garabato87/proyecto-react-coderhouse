import { ProductCard } from "../../common/productCard/productCard";
import { products } from "../../../products";
import { useState } from "react";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const getProduct = new Promise((resolve, reject) => {
    const isLogged = true;
    if (isLogged) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error("No se pudo traer los productos"));
    }
  });
  getProduct
    .then((res) => {
      setItems(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <h3>Item List Container</h3>
      <ProductCard
        title={items[0].title}
        price={100}
        description="Descripcion del producto 1"
      />
    </>
  );
};

export default ItemListContainer;
