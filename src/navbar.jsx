import { CartWidget } from "./CartWidget";
export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contacto</li>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
};
