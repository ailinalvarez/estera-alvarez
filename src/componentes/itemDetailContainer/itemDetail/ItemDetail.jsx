import ItemCount from "../Counter/ItemCount";
import "./ItemDetail.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import {CartContext} from "../../../context/CartContext"
import { useContext } from "react";
import { toast } from "react-toastify";


const ItemDetail = ({stock, id, img, title, size, price, description}) => {

  const [addStock, setAddStock] = useState(0)

  const {addToCart} = useContext(CartContext)

  const stockControl = (stock) => {
    setAddStock(stock)



    const item = {id, title, price}
    addToCart (item, stock)
    toast("Product added to your basket", {autoClose: 800, theme: "dark", position: "bottom-right",})
  }

  return (
    <div className="detail">
      <img className="detailImg" src={`../../${img}`} alt={title} />
      <h2 className="detailTitle" >{title}</h2>
      <p><i className="detailSize">{size}</i>- {price}sek </p>
      <p className="pDetail">{description}</p>

      {
        addStock > 0 ? (<Link to="/Basket" className="endPurchase">Take me to my basket =)</Link>) : (<ItemCount inicial={1} stock={stock} funcAdd={stockControl}/>)
      }
    </div>
  )
};

export default ItemDetail;
