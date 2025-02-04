import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-container">
          <h1>Ecommerce</h1>
          <li>Home</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
