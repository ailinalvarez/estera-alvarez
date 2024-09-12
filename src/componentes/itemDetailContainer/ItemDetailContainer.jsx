import ItemDetail from "./itemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { getAProduct } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const id = useParams().id


  useEffect (()=> {
    getAProduct(Number(id))
      .then(res => setProduct(res))
      .catch(error => console.log(error))
  }, [id])


  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;
