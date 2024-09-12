/* eslint-disable react/prop-types */
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({id, title, img, price, size}) => {
  return (   
    <div className="productCard">
        <img src={img} alt={title}/>
        <h3 className="itemTitle">{title}</h3>
        <i className="itemSize">Size: {size}</i>
        <h5 className="itemPrice">Price: {price}sek</h5>
        <Link to={`/Item/${id}`} className="itemButton">Know more</Link>
    </div>
)
};

export default Item;
