import { IoMdCart } from "react-icons/io";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartWidget.css";
export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <div>
      <Link to="/cart">
        <IoMdCart />
        <span className="cart-count">{total}</span>
      </Link>
    </div>
  );
};
