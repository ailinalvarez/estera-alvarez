import "./Navbar.css";
import CartWidget from "./cartWidget/CartWidget";
const Navbar = () => {
  return (
    <div>
      <header>
        <div>
          <img className="logo" src="/src/assets/Img/barra/logo1.jpg" alt="Estera" />
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
