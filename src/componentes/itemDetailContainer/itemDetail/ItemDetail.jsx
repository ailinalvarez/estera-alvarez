import "./ItemDetail.css"

const ItemDetail = ({id, img, title, size, description}) => {
  return (
    <div className="detail" key={id}>
      <img className="detailImg" src={img} alt={title} />
      <h2 className="detailTitle" >{title}</h2>
      <i className="detailSize">{size}</i>
      <p className="pDetail">{description}</p>
    </div>
  );
};

export default ItemDetail;
