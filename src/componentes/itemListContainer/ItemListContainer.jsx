import { useEffect, useState } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "./itemList/ItemList"
import "./itemListContainer.css"


// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])

useEffect( () => {
  getProducts()
    .then(respuesta => setProducts(respuesta))
    .catch(error=> console.log(error))
},[])

  return (

    <div className="itemListContainer">
        <h1 className="greeting">{greeting}</h1>
        <ItemList products={products}/>
    </div >
  )
}

export default ItemListContainer;
