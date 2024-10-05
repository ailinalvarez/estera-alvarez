import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const CartItem = ({item, amount}) => {

    const {deleteItem} =useContext(CartContext)

  return (
    <div>
        {/* <img src={img} alt={title} /> */}
        <h4>{item.title}</h4>
        <p>Amount {amount}</p>
        <p>Price {item.price}</p>
        <button onClick={()=>deleteItem(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem