import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider} from "./context/CartContext";
import Cart from "./componentes/cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOut from "./componentes/checkOut/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Here you will find our products"/>} />
          <Route path='/Category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path="/Basket" element={<Cart/>}></Route>
          <Route path="/CheckOut" element={<CheckOut/>}/>
          <Route path="*" element={<h2>We are working for you, please send an email to esteras@studio.com</h2>}/>
        </Routes>
        <Footer />
        </CartProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
