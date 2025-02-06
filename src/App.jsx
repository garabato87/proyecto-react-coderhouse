import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Counter } from "./components/common/counter/Counter";
function App() {
  return (
    <>
      <Navbar />
      <Counter />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
