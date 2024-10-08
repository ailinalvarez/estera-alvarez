import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./cartItem/CartItem"
import "./Cart.css"


const Cart = () => {

    const {cart, total, totalAmount, emptyCart } = useContext(CartContext)

  if (totalAmount === 0) {
      return (
    <div className="cart">
      <h2> There are no products in your basket</h2>
      <Link to="/"><h3>Check our products</h3></Link>
    </div>
  )
}

  return (
    <div className="cartProd">
      <div className='cartTitle'>
        <h2>My basket</h2>
      </div>
      <div className="cards">
        {
          cart.map(product => <CartItem key={product.item.id} {...product}/>)
        }
      </div>
      <div className="total">
        <h3>Amount of products: {totalAmount}</h3>
        <h3>Total price: ${total}sek</h3>
        <button onClick={()=> emptyCart()}>Empty cart</button>
        <Link to="/CheckOut"><button>That's all, go to check out</button></Link>
      </div>

    </div>
  )
}

export default Cart