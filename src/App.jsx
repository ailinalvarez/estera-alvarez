import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider} from "./context/CartContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Conoce nuestros productos" />} />
          <Route path='/Category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
