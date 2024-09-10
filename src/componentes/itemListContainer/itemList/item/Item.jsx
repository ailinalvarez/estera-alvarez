/* eslint-disable react/prop-types */
import "./Item.css"

const Item = ({title, img, price, size}) => {
  return (   
    <div className="productCard">
        <img src={img} alt={title}/>
        <h3 className="itemTitle">{title}</h3>
        <i className="itemSize">Size: {size}</i>
        <h5 className="itemPrice">Price: {price}sek</h5>
        <button className="itemButton">Know more</button>
    </div>
)
};

export default Item;
