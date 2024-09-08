import { useEffect, useState } from "react";
import ItemList from "./itemList/ItemList";
import { getProducts } from "../../asyncmock";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {

const [products, setProducts] = useState([])

useEffect(()=>{
  getProducts()
    .then(respuesta => setProducts(respuesta))
    .catch(error=> console.log(error))


}, [])

  return (
    <div className="itemListContainer">
        <h1 style={{textAlign: "center"}}>{greeting}</h1>
        
        <div className="container"> 
          <ItemList products={products}/>
        </div>

    </div>
  );
};

export default ItemListContainer;
