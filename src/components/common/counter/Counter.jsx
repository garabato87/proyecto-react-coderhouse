import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./counter.css";
export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);
  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = {
      ...item,
      quantity: contador,
    }; /*Asi le agregamos otra propiedad al objeto item*/

    addToCart(objetoParaElCarrito);
  };

  return (
    <>
      <div className="counter-container">
        <button className="counter-button" onClick={restar}>
          Restar
        </button>
        <p>Contador: {contador}</p>
        <button className="counter-button" onClick={sumar}>
          Sumar
        </button>
        <button className="add-to-cart" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
