import { useEffect, useState } from "react"
import { getProducts, getProdCategory } from "../../asyncmock"
import ItemList from "./itemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])

const {idCategory} = useParams()

useEffect(() => {
  const funcionProd = idCategory ? getProdCategory : getProducts;
    
    funcionProd(idCategory)
      .then(res => setProducts(res))
      .catch(error=> console.log(error))
    
},[idCategory])

  return (
    <div className="itemListContainer">
        <h1 className="greeting">{greeting}</h1>
        <ItemList products={products}/>
    </div >
  )
}

export default ItemListContainer;
