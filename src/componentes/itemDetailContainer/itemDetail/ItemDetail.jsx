import "./ItemDetail.css"

const ItemDetail = ({id, img, title, size, description}) => {
  return (
    <div className="detail">
      <img className="detailImg" src={img} alt={title} />
      <h2 className="detailTitle" >{title}</h2>
      <p>ID:{id}</p>
      <i className="detailSize">{size}</i>
      <p className="pDetail">{description}</p>
    </div>
  )
};

export default ItemDetail;
