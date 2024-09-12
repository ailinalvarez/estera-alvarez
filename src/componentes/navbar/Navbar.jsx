import "./Navbar.css";
import CartWidget from "./cartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img className="logo" src="/src/assets/Img/barra/logo1.jpg" alt="Estera" />
        </Link>
        <nav>
          <ul>


            <li>
              <NavLink className="cat" to="/Category/Carpets">Carpets</NavLink>
            </li>
            <li>
              <NavLink className="cat" to="/Category/Coasters">Coaster</NavLink>
            </li>
            <li>
              <NavLink className="cat" to="/Category/Bananas">Bananas</NavLink>
            </li>
            <li><NavLink className="cat" to="/Category/Mushrooms">Mushrooms</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default Navbar;
