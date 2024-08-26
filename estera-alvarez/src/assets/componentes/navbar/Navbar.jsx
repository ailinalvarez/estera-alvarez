import "./Navbar.css";
import CartWidget from "./cartWidget/CartWidget";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="brand">
          <h2>Estera Estudio</h2>
          <h3>By Vir Delfino</h3>
        </div>
        <nav>
          <ul>
            <li>Carpets</li>
            <li>Coaster</li>
            <li>Bananas</li>
            <li>Mushrooms</li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default Navbar;
