/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Item from "./item/Item";
import "./itemList.css"

// eslint-disable-next-line react/prop-types
const ItemList = ({products}) => {

  return (
    <div className="itemList">
      {products.map(item => <Item {...item}/>)}
    </div>
  );
};

export default ItemList
