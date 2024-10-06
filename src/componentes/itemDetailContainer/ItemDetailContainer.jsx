import ItemDetail from "./itemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const idItem = useParams().id

useEffect(()=> {
    const newDoc = doc(db, "products", idItem)

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProduct  = {id: res.id, ...data}
        setProduct(newProduct)
    })
    .catch(error => console.log (error))
  }, [idItem])



  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product}/>
    </div>
  );
};

export default ItemDetailContainer;
