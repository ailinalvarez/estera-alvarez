import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./cartItem/CartItem"



const Cart = () => {

    const {cart, total, totalAmount, emptyCart } = useContext(CartContext)

  if (totalAmount === 0) {
      return (
    <>
      <h2> There are no products in your basket</h2>
      <Link to="/">Check our products</Link>
    </>
  )
}

  return (
    <div>
      {
        cart.map(product => <CartItem key={product.item.id} {...product}/>)
      }
      <h3>Amount of products: {totalAmount}</h3>
      <h3>Total price: ${total}</h3>
      <button onClick={()=> emptyCart()}>Empty cart</button>
      <Link to="/CheckOut">That's all, go to check out</Link>
    </div>
  )
}

export default Cart