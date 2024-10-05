import { useEffect, useState } from "react"
import { getProducts, getProdCategory } from "../../asyncmock"
import ItemList from "./itemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"
import Loader from "../../assets/loader/Loader"

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])

const [loading, setLoading] = useState(false)

const {idCategory} = useParams()

useEffect(() => {
  setLoading(true)
  const funcionProd = idCategory ? getProdCategory : getProducts;
    
    funcionProd(idCategory)
      .then(res => setProducts(res))
      .catch(error=> console.log(error))
      .finally(()=>{ 
        console.log("end")
        setLoading(false)}
    )
},[idCategory])

  return (
    <div className="itemListContainer">
        <h1 className="greeting">{greeting}</h1>
        { loading ? <Loader/> :  <ItemList products={products}/>}
       
    </div >
  )
}

export default ItemListContainer;
