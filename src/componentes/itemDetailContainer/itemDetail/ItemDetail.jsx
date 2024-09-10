const ItemDetail = ({id, img, title, descrip}) => {
  return (
    <div key={id}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{descrip}</p>
    </div>
  );
};

export default ItemDetail;
