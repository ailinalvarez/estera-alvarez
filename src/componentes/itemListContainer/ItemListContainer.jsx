import { useEffect, useState } from "react"
import ItemList from "./itemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"
import Loader from "../../assets/loader/Loader"
import { db } from "../../service/config"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])

const [loading, setLoading] = useState(false)

const {idCategory} = useParams()

useEffect (() => {
    const myProducts = idCategory ? query(collection(db, "products"), where("idCat", "==", idCategory)) : (collection(db, "products"))

    getDocs(myProducts)
    .then(res => {
      setLoading(true)
        const newPoducts =res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
    })
      setProducts(newPoducts)
    })
    .catch(error => console.log(error))
    .finally(()=> {
      console.log("end") 
      setLoading(false)
})
}, [idCategory])


  return (
    <div className="itemListContainer">
        <h1 className="greeting">{greeting}</h1>
        { loading ? <Loader/> :  <ItemList products={products}/>}
    </div >
  )
}

export default ItemListContainer;
