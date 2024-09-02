import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
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
