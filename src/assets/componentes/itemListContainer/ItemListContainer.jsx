import ItemContainer from "./itemContainer/ItemContainer";
import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      <ItemContainer />
    </div>
  );
};

export default ItemListContainer;
