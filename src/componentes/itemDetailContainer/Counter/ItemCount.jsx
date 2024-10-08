import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcAdd}) => {

const [counter, setCounter] = useState(inicial)

const addItem = ()=> {
    if (counter < stock) {
    setCounter(counter +1)
    }
}

const removeItem = ()=> {
    if (counter > inicial) {
            setCounter(counter - 1)
    }
}

    return (
        <div className="contador">
            <button  onClick={removeItem}><strong> - </strong></button>
            <strong>{counter}</strong>
            <button  onClick={addItem}><strong> + </strong></button>

        <button className="add" onClick={()=>funcAdd(counter)}><strong>Add to my basket</strong></button>

        </div>
    ) 
}

export default ItemCount