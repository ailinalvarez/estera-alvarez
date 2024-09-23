import ItemCount from "../Counter/ItemCount";
import "./ItemDetail.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import {CartContext} from "../../../context/CartContext"
import { useContext } from "react";

const ItemDetail = ({stock, id, img, title, size, price, description}) => {

  const [addStock, setAddStock] = useState(0)

  const {addToCart} = useContext(CartContext)

  const stockControl = () => {
    setAddStock({stock})
    console.log({stock})


    const item = {id, title, price}
    addToCart (item, stock)
  }

  return (
    <div className="detail">
      <img className="detailImg" src={img} alt={title} />
      <h2 className="detailTitle" >{title}</h2>
      <p><i className="detailSize">{size}</i>- {price}sek </p>
      <p className="pDetail">{description}</p>

      {
        addStock > 0 ? (<Link to= "/cart">Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcAdd={stockControl}></ItemCount>)
      }
    </div>
  )
};

export default ItemDetail;
