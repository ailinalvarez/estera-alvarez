import { useState } from "react"

const ItemCount = () => {

const [contador, setContador] = useState(0)

const sumarContador = ()=> {
    setContador(contador +1)
}
const restarContador = ()=> {
    setContador(contador - 1)
}

    return (
        <div>
            <button onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}> + </button>
        </div>
    ) 
}

export default ItemCount