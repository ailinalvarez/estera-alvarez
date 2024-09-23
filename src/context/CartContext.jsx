import { useState, createContext} from "react";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    totalAmount: 0,
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    console.log(cart);


    const addToCart = (item, amount) => {
        const itemFinder = cart.find(prod => prod.item.id === item.id)

    if(!itemFinder) {
        setCart( prev => [...prev, {item, amount}])

        setTotalAmount(prev=> prev + amount)
        setTotal(prev => prev + (item.price * amount))
    } else {
        const updatedCart = cart.map (prod => {
            if (prod.item.id === item.id) {
                return {...prod, amount: prod.amount + amount}
            }else {
                return prod
        }
    })
    setCart(updatedCart)
    setTotalAmount(prev => prev + amount)
    setTotal(prev => prev + (item.price * amount))
    }
}

    const deleteItem=(id) => {
        const deletedItem = cart.find(prod => prod.item.id === id)
        const updatedCart = cart.filter (prod => prod.item.id !== id)

    setCart (updatedCart)
    setTotalAmount(prev = prev - deletedItem.amount)
    setTotal(prev => prev - (deletedItem.item.price * deletedItem.amount))
    }

    const emptyCart = () => {
        setCart ([])
        setTotalAmount(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{cart, total, totalAmount, addToCart, deleteItem, emptyCart}}>
        {children}
        </CartContext.Provider>
    )
}