import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

    const {totalAmount} = useContext(CartContext)

  return (
    <div className="cart-widget">
      
      <Link to="/Basket">
        <img  className="basket" src="/Img/barra/carrito.png" alt="basket"/>
      </Link>

      {
        totalAmount > 0 && <span>{totalAmount}</span>
      }

    </div>
  );
};

export default CartWidget;
