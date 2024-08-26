import Footer from "./assets/componentes/footer/Footer";
import ItemDetailContainer from "./assets/componentes/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./assets/componentes/itemListContainer/ItemListContainer";
import Navbar from "./assets/componentes/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Conoce nuestros productos" />
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
