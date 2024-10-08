import { useEffect, useState } from "react"
import ItemList from "./itemList/ItemList"
import "./itemListContainer.css"
import { useParams } from "react-router-dom"
import { db } from "../../service/config"
import {collection, getDocs, query, where} from "firebase/firestore"
import Loader from "../loader/Loader"



const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])

const [loading, setLoading] = useState(true)

const {idCategory} = useParams()



useEffect (() => {
    setLoading(true)
    const myProducts = idCategory ? query(collection(db, "products"), where("idCat", "==", idCategory)) : (collection(db, "products"))
    getDocs(myProducts)

    .then(res => {
        const newPoducts =res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
    })
    setProducts(newPoducts)
    })
    .catch(error => console.log(error))
    .finally(()=> {
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
