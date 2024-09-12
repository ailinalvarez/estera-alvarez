import "./ItemDetail.css"

const ItemDetail = ({id, img, title, size, price, description}) => {
  return (
    <div className="detail">
      <img className="detailImg" src={img} alt={title} />
      <h2 className="detailTitle" >{title}</h2>
      <p><i className="detailSize">{size}</i>- {price}sek </p>
      <p className="pDetail">{description}</p>
    </div>
  )
};

export default ItemDetail;
