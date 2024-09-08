import "./Item.css"

// eslint-disable-next-line react/prop-types
const Item = ({id, title, img, children, price, size}) => {
  return <div>
    <article key={id} className="productCard">
    <img src={img} alt={title}/>
    <h3>{title}</h3>
      {children}
    <p>{size}</p>
    <strong>{price}</strong>
    <button className="itemButton">Know more</button>
  </article>
</div>;
};

export default Item;
