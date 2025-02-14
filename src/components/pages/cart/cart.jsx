import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
