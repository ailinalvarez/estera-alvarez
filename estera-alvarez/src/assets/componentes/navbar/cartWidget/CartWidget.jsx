import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        className="carrito"
        src="/public/Img/barra/carrito.png"
        alt="carrito"
      />
      <strong>2</strong>
    </div>
  );
};

export default CartWidget;
