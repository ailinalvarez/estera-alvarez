/* eslint-disable react/prop-types */
import "./Item.css"

const Item = ({title, img, price, size}) => {
  return (   
    <div className="productCard">
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        <h4>Size: {size}</h4>
        <h5>Price: {price}sek</h5>
        <button className="itemButton">Know more</button>
    </div>
)
};

export default Item;
