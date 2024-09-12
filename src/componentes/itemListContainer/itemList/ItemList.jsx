import Item from "./item/Item";
import "./itemList.css"


const ItemList = ({ products }) => {

  return (
    <div className="itemList">
      {products.map(item => <Item key={item.id}{...item}/>)}
    </div>
  )
}

export default ItemList
