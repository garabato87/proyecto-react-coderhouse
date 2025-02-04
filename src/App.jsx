import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
