import { useState } from "react"

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
        <div>
            <button onClick={removeItem}> - </button>
            <strong>{counter}</strong>
            <button onClick={addItem}> + </button>

        <button onClick={()=>funcAdd(counter)}>Add to my basket</button>

        </div>
    ) 
}

export default ItemCount