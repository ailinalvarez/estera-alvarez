import { useState, createContext} from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
    carrito: [],
    total: 0,
    totalAmount: 0,
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)


    const addToCart = (item, amount) => {
        const itemFinder = cart.find((prod) => prod.item.id === item.id)

    if(!itemFinder) {
        setCart((prev) => [...prev, {item, amount}])

        setTotalAmount((prev)=> prev + amount)

        setTotal((prev) => prev + item.price * amount)
    } else {
        const updatedCart = cart.map((prod) => {
            if (prod.item.id === item.id) {
                return {...prod, amount: prod.amount + amount}
            }else {
                return prod
        }
    });
    setCart(updatedCart)
    setTotalAmount((prev) => prev + amount)
    setTotal((prev) => prev + item.price * amount)
    }
};

    const deleteItem= (id) => {
        const deletedItem = cart.find((prod) => prod.item.id === id)
        const updatedCart = cart.filter((prod) => prod.item.id !== id)

    setCart (updatedCart)
    setTotalAmount((prev) => prev - deletedItem.amount)
    setTotal((prev) => prev - deletedItem.item.price * deletedItem.amount)
    }

    const emptyCart = () => {

        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "The items has been deleted.",
            icon: "success"
            });
                setCart ([]);
                setTotalAmount(0);
                setTotal(0);
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your items are safe =)",
            });
            }
        })

    }

    const emptyCartOut = () => {
                setCart ([]);
                setTotalAmount(0);
                setTotal(0);
    }


    return (
        <div className="cartContext">
            <CartContext.Provider 
                value={{cart, total, totalAmount, addToCart, deleteItem, emptyCart, emptyCartOut}}
            >
            {children}
            </CartContext.Provider>
        </div>
    )
}