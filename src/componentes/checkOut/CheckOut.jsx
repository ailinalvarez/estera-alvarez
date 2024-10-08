import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../service/config";
import {collection, addDoc, updateDoc, doc, getDoc} from "firebase/firestore"
import "./checkOut.css" 

const CheckOut = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [error, setError] =useState("")
    const [orderId, setOrderId]= useState("")

    const {cart, emptyCartOut, total } = useContext(CartContext)

    const formController =(e)=> {
        e.preventDefault()

        if(!name || !lastName || !phone || !email || !confirmEmail ) {
            setError("There is some error, please check again")
            return
        }


        if (email !== confirmEmail) {
            setError("The e-mails don't match")
            return;
        }

    const order = {
        items: cart.map (product => ({
        id: product.item.id,
        name: product.item.title,
        amount: product.amount
        })),
        total: total,
        date: new Date(),
        name,
        lastName,
        phone,
        email
    }


        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "products", productOrder.id)
                const productDoc = await getDoc(productRef)
                const actualStock = productDoc.data().stock

                await updateDoc(productRef, {
                    stock: actualStock - productOrder.amount
                })
            })
        )
            .then (()=> {
                addDoc(collection(db, "orders"), order)
                    .then(docRef => {
                        setOrderId(docRef.id)
                        emptyCartOut()
                        setName("")
                        setLastName("")
                        setPhone("")
                        setEmail("")
                        setConfirmEmail("")
                    })
                    .catch((error) => {
                        console.log("There was an error when we created the order", error)
                        setError("Error when creating the order")
                    })
                })
            .catch((error)=> {
                console.log("The stock couldn't be updated", error)
                setError("Couldn't update the stock, communicate with esteras@studio.com")
    })
    }
    return (
        <div className="checkOut">
            <h2>--- Check Out ---</h2>
            <form onSubmit={formController}>
                <div className="selectedProd">
                    {
                    cart.map(product => (
                        <div className="product" key={product.item.id}>
                            <strong>{product.item.title}</strong>
                            <p>{product.amount} x {product.item.price} kr</p>
                            <p>{product.item.price} kr</p>
                        </div>
                    ))
                }
                </div> 
                <div className="form">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={(e)=> setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" onChange={(e)=> setPhone(e.target.value)} value={phone}/>
                </div>
                <div>
                    <label htmlFor="">E-mail</label>
                    <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="">E-mail confirmation</label>
                    <input type="text" onChange={(e)=> setConfirmEmail(e.target.value)} value={confirmEmail}/>
                </div>

                {
                    error && <p style={{color: "red"}}>{error}</p>
                }
                <button type="submit">Confirm my purchase =) </button>
                {
                    orderId && <strong> Thank you for supporting my tufting, your order number is: {orderId}</strong>
                }
                </div>
            </form>
        </div>
    )
}

export default CheckOut