import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import "./CartItem.css"

const CartItem = ({item, amount}) => {

    const {deleteItem} =useContext(CartContext)

  return (
    <div className='cartItem'>
        {/* <img src={img} alt={title} /> */}
        <h4>{item.title}</h4>
        <p>Price {item.price} x {amount}</p>
        <button onClick={()=>deleteItem(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem