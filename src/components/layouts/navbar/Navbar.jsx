import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dz9deavga/image/upload/v1738852826/logo-233607866-1641950202-f8b2a0c1e1bc969b09ae4ad6904a6e7b1641950203_nvvuws.png"
              alt=""
            />
          </Link>

          <h1>Ecommerce</h1>
          <li>Home</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
