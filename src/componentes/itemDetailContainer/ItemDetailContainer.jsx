import ItemDetail from "./itemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../asyncmock";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)

  useEffect (()=>{
    getOneProduct(1)
      .then(respuesta => setProducto(respuesta))
  }, [])

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...producto}/>
    </div>
  );
};

export default ItemDetailContainer;
