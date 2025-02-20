import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } = useContext(CartContext);
  
  let total = getTotalAmount();

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img className="cart-item-img" src={item.imageUrl} alt={item.title} />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.price}</p>
            <p>Descripcion del producto: {item.description}</p>
            <button onClick={() => removeById(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h2>El total a pagar es: {total}</h2>
      <button onClick={removeCart} className="empty-cart-button">
        Vaciar carrito
      </button>
      <Link to="/checkout" className="checkout-button">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;
