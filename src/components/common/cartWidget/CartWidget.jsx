import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <IoMdCart />
      </Link>
    </div>
  );
};
