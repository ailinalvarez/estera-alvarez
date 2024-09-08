import { useEffect, useState } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "./itemList/ItemList"


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
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div >
  )
}

export default ItemListContainer;
